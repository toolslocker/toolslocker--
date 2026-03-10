# 🤖 הגדרת Claude AI Chatbot

## סקירה כללית

הפרויקט כולל בוט צ'אט חכם שיכול לעבוד בשני מצבים:
1. **מצב DEMO (MOCK)** - תשובות חכמות מוכנות מראש (ללא API)
2. **מצב AI אמיתי** - משתמש ב-Claude API דרך Vercel Serverless Function

הבוט **אוטומטית** מנסה להשתמש ב-API אמיתי, ואם זה לא זמין - חוזר למצב DEMO.

---

## 🚀 הגדרת API אמיתי (אופציונלי)

### שלב 1: קבלת API Key מ-Anthropic

1. היכנס ל-[console.anthropic.com](https://console.anthropic.com)
2. הירשם / התחבר (עם Google/Email)
3. לחץ על **"Get API Keys"**
4. צור API Key חדש
5. העתק את המפתח (מתחיל ב-`sk-ant-`)

💡 **חשוב:** אתה מקבל $5 של קרדיט חינם!

---

### שלב 2: הגדרת API Key ב-Vercel

1. היכנס ל-[vercel.com](https://vercel.com) והתחבר
2. בחר את הפרויקט **toolslocker-web**
3. לך ל-**Settings** → **Environment Variables**
4. הוסף משתנה חדש:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** המפתח שקיבלת (sk-ant-...)
   - **Environments:** בחר את כל הסביבות (Production, Preview, Development)
5. לחץ **Save**

---

### שלב 3: Deploy מחדש

אחרי הוספת ה-API Key, צריך לעשות deploy מחדש:

#### אופציה A: דרך Vercel Dashboard
1. לך ל-**Deployments**
2. לחץ על **Redeploy** בפריסה האחרונה

#### אופציה B: דרך Git
```bash
# פשוט תעשה commit ו-push
git add .
git commit -m "Enable Claude AI chatbot"
git push
```

Vercel יעשה deploy אוטומטי!

---

## 🧪 בדיקה

### איך לדעת שה-API עובד?

פתח את הצ'אט באתר. בתחתית כל תשובה תראה:

- **🤖 Powered by Claude AI** = API אמיתי עובד! ✅
- **📝 Demo Mode (מצב הדגמה)** = עדיין במצב MOCK ⚠️

### בדיקה מקומית

אם אתה רוצה לבדוק מקומית:

```bash
# התקן Vercel CLI
npm i -g vercel

# הגדר API Key מקומי
vercel env add ANTHROPIC_API_KEY

# הרץ שרת מקומי
vercel dev
```

---

## 💰 עלויות

Claude API מתומחר לפי שימוש:

- **Claude 3.5 Haiku** (המודל שאנחנו משתמשים בו):
  - Input: $0.80 לכל מיליון tokens
  - Output: $4.00 לכל מיליון tokens

**דוגמה:**
- שיחה ממוצעת: ~500 tokens (input + output)
- עלות לשיחה: ~$0.002 (חצי סנט!)
- הקרדיט החינמי של $5 = **~2,500 שיחות!** 🎉

---

## 🔒 אבטחה

✅ **בטוח לחלוטין:**
- API Key מאוחסן רק ב-Vercel (environment variables)
- לעולם לא נחשף בקוד הלקוח (browser)
- רק ה-serverless function גישה למפתח

❌ **אף פעם לא:**
- לא לשתף את ה-API Key
- לא לעשות commit למפתח ב-git
- לא לשלוח למישהו

---

## 🐛 פתרון בעיות

### הבוט תמיד במצב DEMO?

**1. בדוק שה-API Key מוגדר:**
```bash
vercel env ls
```

אמור להראות: `ANTHROPIC_API_KEY`

**2. בדוק שה-deploy הצליח:**
- לך ל-Vercel Dashboard
- בדוק ש-deployment האחרון ירוק ✅

**3. בדוק errors בקונסול:**
```bash
# ב-Vercel Dashboard
Settings → Functions → Logs
```

### הבוט לא עונה בכלל?

1. פתח Developer Console בדפדפן (F12)
2. לך ל-**Console**
3. חפש שגיאות אדומות
4. העתק ושלח לתמיכה

---

## 📊 מעקב שימוש

לעקוב אחרי השימוש ב-API:

1. [console.anthropic.com](https://console.anthropic.com)
2. **Dashboard** → **Usage**
3. תראה גרף של הקרדיט שנשאר

---

## ✨ שדרוגים עתידיים

רעיונות לשיפור:

- [ ] הוספת conversation history (זיכרון שיחות)
- [ ] תמיכה בהעלאת תמונות
- [ ] אינטגרציה עם מלאי המוצרים בזמן אמת
- [ ] ניתוח sentiment למשוב לקוחות
- [ ] Multi-language support

---

## 🆘 תמיכה

יש בעיה? צריך עזרה?

1. בדוק את ה-[Troubleshooting](#-פתרון-בעיות)
2. פתח issue ב-GitHub
3. שלח מייל לתמיכה

---

**Made with ❤️ by ToolsLocker Team**

Powered by **Claude AI** from Anthropic 🤖
