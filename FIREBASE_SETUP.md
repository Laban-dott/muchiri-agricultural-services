# Firebase Setup Guide for Muchiri Services

## Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name your project: "muchiri-services"
4. Continue through setup (disable Analytics if not needed)

## Step 2: Enable Realtime Database
1. In your Firebase project, go to "Build" > "Realtime Database"
2. Click "Create Database"
3. Choose "Start in test mode" for now
4. Select your preferred location

## Step 3: Get Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" > Web app icon
4. Register app with name "muchiri-booking"
5. Copy the configuration object

## Step 4: Update Your Code
Replace the firebaseConfig in both `index.html` and `dashboard.html`:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com/",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

## Step 5: Security Rules (Optional)
For production, update database rules in Firebase Console:
```json
{
  "rules": {
    "bookings": {
      ".read": true,
      ".write": true
    }
  }
}
```

## Step 6: Test
1. Make a booking through your website
2. Check Firebase Console > Realtime Database to see data
3. Login to dashboard to view bookings

## Current Status
- ✅ Code is ready for Firebase integration
- ✅ LocalStorage fallback implemented
- ⏳ Need to replace demo config with real Firebase config
- ⏳ Need to deploy to GitHub Pages

## Next Steps
1. Set up Firebase project
2. Update configuration
3. Deploy to GitHub Pages
4. Test live website
