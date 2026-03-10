/**
 * Vercel Serverless Function - Claude AI Chatbot
 *
 * This function handles chatbot requests and forwards them to Claude API
 * The API key is stored securely in Vercel environment variables
 */

export default async function handler(req, res) {
    // Enable CORS for browser requests
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle OPTIONS request (CORS preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get message from request body
        const { message, conversationHistory = [] } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get API key from environment variable (set in Vercel dashboard)
        const apiKey = process.env.ANTHROPIC_API_KEY;

        if (!apiKey) {
            console.error('ANTHROPIC_API_KEY not found in environment variables');
            return res.status(500).json({
                error: 'Server configuration error. Please contact support.',
                details: 'API key not configured'
            });
        }

        // System prompt for ToolsLocker chatbot
        const systemPrompt = `אתה העוזר החכם והידידותי של ToolsLocker - חנות אוטומטית להשכרת כלי עבודה וציוד.

מידע על החנות:
• מיקום: דיזנגוף סנטר, תל אביב, קומה 2
• שעות: פתוח 24/7 (חנות אוטומטית)
• קישור להזמנות: https://online.keynius.app/home/a4a89521-1efb-45cb-a931-80cc5d3bd236

המוצרים העיקריים שלנו:
🔨 כלי עבודה: מקדחות (₪60-120/יום), מסורים (₪70-165/יום), משחזות, צביעה
⛺ ציוד קמפינג: אוהלים, שקי שינה, מנגלים, ערכות שטח (₪120-220/יום)
🏡 כלי גינה: מכסחות דשא, גוזמי חיה, מסורי שרשרת
👨‍🍳 ציוד מטבח מקצועי: בלנדרים, מיקסרים, כלי בישול

הנחיות חשובות:
1. ✅ תמיד ענה בעברית בצורה ידידותית, חמה ומקצועית
2. ✅ השתמש באימוג'י בצורה מתונה (1-3 לכל תשובה)
3. ✅ תשובות קצרות וממוקדות (3-5 שורות)
4. ✅ כשמשתמש שואל על כלי ספציפי - תן פרטים: שם, מחיר, מפרט קצר
5. ✅ תמיד כלול קישור להזמנה בסוף התשובה
6. ✅ אם לא בטוח - הצע כמה אופציות
7. ✅ שאל שאלות הבהרה כדי להבין טוב יותר את הצורך
8. ❌ אל תמציא מוצרים שלא קיימים - תתבסס רק על הרשימה למעלה
9. ❌ אל תיתן מחירים מדויקים אם לא רשום - תגיד "צריך לבדוק"

דוגמה לתשובה טובה:
שאלה: "אני צריך משהו לחתוך עץ"
תשובה: "מצאתי עבורך מסור מושלם! 🪚

**מסור עגול MAKITA 1400W** (₪75/יום)
• חיתוך עד 65 מ"מ עומק
• דיסק 190 מ"מ איכותי
• כולל מדריך זווית

מושלם ללוחות עץ, פרקט ועבודות נגרות! 🌲

[להזמנה לחץ כאן](https://online.keynius.app/home/a4a89521-1efb-45cb-a931-80cc5d3bd236)"

זכור: אתה לא רק בוט - אתה יועץ אישי שעוזר ללקוחות למצוא את הכלי המושלם!`;

        // Prepare messages for Claude API
        const messages = [
            ...conversationHistory,
            {
                role: 'user',
                content: message
            }
        ];

        // Call Claude API
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-haiku-20241022', // Fast and cost-effective
                max_tokens: 1024,
                system: systemPrompt,
                messages: messages
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Claude API Error:', errorData);

            return res.status(response.status).json({
                error: 'Failed to get response from AI',
                details: errorData.error?.message || 'Unknown error'
            });
        }

        const data = await response.json();
        const botResponse = data.content[0].text;

        // Return successful response
        return res.status(200).json({
            response: botResponse,
            usage: data.usage // Token usage for monitoring
        });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
}
