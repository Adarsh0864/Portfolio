# 🔐 Security Setup Guide

## Configuration Files

### ⚠️ Important Security Note
All sensitive API keys and configuration are now stored in separate files that are **NOT** committed to GitHub for security reasons.

## Setup Instructions

### 1. Create Configuration File
1. Copy `config.example.js` to `config.js`
2. Fill in your actual API keys and configuration
3. **Never commit `config.js` to GitHub** - it's already in `.gitignore`

```bash
cp config.example.js config.js
```

### 2. Update config.js with your credentials:

```javascript
// Firebase configuration
export const firebaseConfig = {
    apiKey: "your_actual_firebase_api_key",
    authDomain: "your_project.firebaseapp.com",
    projectId: "your_project_id",
    storageBucket: "your_project.firebasestorage.app",
    messagingSenderId: "your_messaging_sender_id",
    appId: "your_app_id",
    measurementId: "your_measurement_id"
};

// EmailJS configuration
export const emailJSConfig = {
    serviceID: "your_emailjs_service_id",
    templateID: "your_emailjs_template_id", 
    userID: "your_emailjs_user_id"
};

// Your contact email
export const contactEmail = "your_email@gmail.com";
```

## Files Structure

```
portfolii/
├── config.js                 # ❌ NOT in Git (your actual keys)
├── config.example.js         # ✅ In Git (template)
├── .gitignore               # ✅ Excludes config.js
├── index.html               # ✅ No hardcoded keys
└── SECURITY_SETUP.md        # ✅ This guide
```

## What's Protected

- ✅ Firebase API keys
- ✅ EmailJS service credentials  
- ✅ Contact email address
- ✅ All sensitive configuration

## For Deployment (Vercel)

When deploying, make sure your `config.js` file is present in your local directory but **NOT** pushed to GitHub. The deployment will work from your local files.

## Security Benefits

1. **No keys in public repository**
2. **Easy credential rotation**
3. **Team-friendly setup**
4. **Professional security practices**

## Troubleshooting

If you get import errors:
1. Make sure `config.js` exists (copy from `config.example.js`)
2. Verify all API keys are correctly filled in
3. Check that the file is in the same directory as `index.html`

## Note on Firebase Keys

While Firebase web API keys are designed to be publicly exposed (unlike server keys), this setup provides:
- Better organization
- Protection against accidental key exposure
- Professional development practices
- Easy environment management 