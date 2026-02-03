# TaskMarket - Paid Task Marketplace Platform

A modern, glassmorphism-styled platform for creating and performing paid tasks with location-based sorting and digital wallet integration.

## Features

### 🔐 User Authentication
- **Login/Register System**: Secure user authentication with email and password
- **Persistent Sessions**: User data saved in localStorage
- **User Profiles**: Complete profile management with avatar and contact information

### 💼 Task Management
- **Create Tasks**: Post tasks with detailed descriptions, location, time, and payment amount
- **Browse Tasks**: View all available tasks sorted by proximity to your location
- **Task Requests**: Users can request to perform tasks
- **Approval System**: Task creators can review and approve requests
- **Task Status Tracking**: Monitor tasks through open, in-progress, and completed statuses

### 📍 Location Services
- **GPS Integration**: Automatic location detection using browser geolocation API
- **Proximity Sorting**: Tasks automatically sorted by distance from user
- **Location Display**: See how far each task is from your current location

### 💰 Digital Wallet System
- **Wallet Balance**: Track your available funds
- **Transaction History**: View all earnings and payments
- **Payment Processing**: Automatic payment handling for task completion
- **Earnings Tracking**: Monitor total earnings over time

### 📊 Dashboard & Analytics
- **Overview Stats**:
  - Tasks Posted
  - Tasks Completed
  - Active Requests
  - Total Earned
- **User Rating**: Star rating system based on user performance
- **Quick Actions**: Fast access to create tasks, browse, and manage tasks

### 🎨 Modern UI/UX Design
- **Glassmorphism**: Beautiful frosted glass effect throughout the interface
- **Bento Box Layout**: Japanese lunch box-inspired grid system with varied card sizes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging transitions and hover effects
- **Gesture Support**: Touch-friendly interactions for mobile users

### 👤 User Profile
- **Profile Information**: Name, email, phone number display
- **Statistics Dashboard**:
  - Wallet balance
  - Tasks posted/completed
  - Average rating
  - Review count
- **Transaction History**: Complete list of all financial transactions
- **Status Badges**: Visual indicators for user status

## How to Use

### Getting Started

1. **Open the Platform**
   - Open `taskmarket.html` in any modern web browser
   - Chrome, Firefox, Safari, and Edge are all supported

2. **Create an Account**
   - Click "Register" tab
   - Fill in your details:
     - Full Name
     - Email Address
     - Password
     - Phone Number
   - Click "Create Account"

3. **Or Login**
   - If you already have an account, use the "Login" tab
   - Enter your email and password
   - Click "Login"

### Creating a Task

1. **From Dashboard**
   - Click "Create Task" in the Quick Actions section
   - Or use the ➕ button

2. **Fill Task Details**
   - **Task Title**: Brief, descriptive name
   - **Description**: Detailed explanation of what needs to be done
   - **Location**: Street address or area
   - **Date & Time**: When the task should be performed
   - **Payment Amount**: How much you'll pay (minimum $5)

3. **Submit**
   - Click "Create Task" to post your task
   - Your task will appear in the marketplace

### Finding and Requesting Tasks

1. **Browse Tasks**
   - View nearby tasks on the dashboard
   - Click "Browse Tasks" to see all available tasks
   - Tasks are sorted by distance from your location

2. **Filter Tasks**
   - **All**: View all available tasks
   - **Nearby**: Sorted by closest distance
   - **High Pay**: Sorted by highest payment

3. **Request a Task**
   - Click on any task card to view details
   - Click "Request Task" to apply
   - The task creator will be notified

### Managing Task Requests

1. **View Requests**
   - On tasks you've created, click "View Requests"
   - See all users who want to perform the task

2. **Approve a Request**
   - Review the list of requesters
   - Approve a request to assign the task
   - Task status changes to "in-progress"

### Completing Tasks

1. **Task Performance**
   - Once assigned, perform the task as described
   - Follow the location and time specified

2. **Confirmation**
   - Task creator confirms completion
   - Payment automatically transferred to your wallet
   - Your earnings and stats update automatically

### Managing Your Profile

1. **Access Profile**
   - Click your name in the header
   - Or use "Profile" in Quick Actions

2. **View Information**
   - See your wallet balance
   - Check your statistics
   - Review transaction history

3. **Monitor Performance**
   - Track your rating
   - See completed tasks
   - View earnings history

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Glassmorphism effects, grid layouts, animations
- **JavaScript (ES6+)**: Interactive functionality
- **LocalStorage**: Data persistence
- **Geolocation API**: Location services

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Data Storage
All data is stored locally in the browser using localStorage:
- User profiles
- Tasks
- Requests
- Transactions

**Note**: Data persists across browser sessions but is device-specific.

### Location Services
The platform requests location access to:
- Sort tasks by proximity
- Calculate distances
- Provide location-based recommendations

You can deny location access, and the platform will use a default location (NYC).

## UI Components

### Glassmorphism Design
- Frosted glass background with blur effects
- Semi-transparent overlays
- Layered depth with shadows
- Light border highlights

### Bento Box Layout
- Grid-based card system
- Various card sizes (span 4, 8, 12 columns)
- Rounded corners (24px border-radius)
- Responsive breakpoints

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Accent**: Pink (#f093fb)
- **Success**: Green (#4ade80)
- **Warning**: Yellow (#fbbf24)
- **Danger**: Red (#f87171)

### Interactive Elements
- Hover effects with scale transforms
- Smooth color transitions
- Button press feedback
- Modal animations

## Features Breakdown

### Dashboard View
```
┌─────────────────────────────────────────┐
│  Quick Actions (Full Width)            │
├───────────────────────┬─────────────────┤
│  Overview Stats       │  Rating Card    │
│  (8 columns)          │  (4 columns)    │
├───────────────────────┴─────────────────┤
│  Nearby Tasks (Full Width)             │
│  - Task cards in grid                   │
│  - Filters: All, Nearby, High Pay       │
└─────────────────────────────────────────┘
```

### Task Card Information
- Task title and status badge
- Payment amount (highlighted)
- Description
- Location with distance
- Date/time
- Creator name
- Action buttons (Request/View Requests)

### Profile View
- Large avatar circle with initials
- User information section
- 4 statistics cards:
  - Wallet Balance
  - Tasks Posted
  - Tasks Completed
  - Average Rating
- Transaction history list

## Security Considerations

**Note**: This is a demonstration platform. For production use, implement:
- Backend server for data storage
- Secure authentication (OAuth, JWT)
- Payment gateway integration (Stripe, PayPal)
- Data encryption
- Input validation and sanitization
- HTTPS/SSL
- Rate limiting
- CSRF protection

## Future Enhancements

Potential features to add:
- Real-time notifications
- In-app messaging between users
- Image upload for tasks
- Multiple payment methods
- Task categories and tags
- Advanced search filters
- User reviews and ratings
- Dispute resolution system
- Mobile app (React Native/Flutter)
- Social sharing
- Referral program
- Task templates

## Support

For questions or issues:
1. Check this README documentation
2. Review the code comments in `taskmarket.html`
3. Test in a modern browser with JavaScript enabled
4. Ensure location permissions if using location features

## License

This is a demonstration project for educational purposes.

---

**Built with ❤️ using modern web technologies**

*Glassmorphism design • Bento box layout • Location services • Digital wallet*
