# 🚀 READY TO DEPLOY - Your Exa AI Search Frontend

## ✅ Pre-Configured For You!

Your API URL is already set to:
```
https://exa-fastapi-backend.onrender.com
```

## 🎯 Deploy to Netlify in 3 Steps

### **Step 1: Extract the ZIP**
```bash
unzip exa-frontend-configured.zip
cd exa-frontend
```

### **Step 2: Test Locally (Optional)**
Just **double-click `index.html`** - it will open in your browser and work!

Or use a local server:
```bash
# Python
python -m http.server 8080

# Node
npx serve

# Then open: http://localhost:8080
```

### **Step 3: Deploy to Netlify**

#### **Option A: Drag & Drop (2 Minutes)**
1. Go to https://app.netlify.com/drop
2. Drag the entire **`exa-frontend`** folder
3. Done! You get a URL like: `https://random-name.netlify.app`

#### **Option B: From GitHub (Recommended)**
```bash
# Initialize git
git init
git add .
git commit -m "Exa AI Search Frontend"

# Create new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/exa-frontend.git
git branch -M main
git push -u origin main

# On Netlify:
# 1. Go to https://netlify.com
# 2. Click "Add new site" → "Import an existing project"
# 3. Connect GitHub
# 4. Select your repo
# 5. Click "Deploy site"
```

---

## ⚙️ IMPORTANT: Update Backend CORS

After deploying to Netlify, you'll get a URL like:
```
https://your-site-name.netlify.app
```

**You MUST add this to your backend CORS settings:**

1. Go to https://dashboard.render.com
2. Click on **"exa-fastapi-backend"**
3. Go to **"Environment"** tab
4. Find or add `CORS_ORIGINS` variable
5. Set it to:
   ```
   CORS_ORIGINS=https://your-site-name.netlify.app,http://localhost:8080
   ```
6. Click **"Save Changes"**
7. Wait 2 minutes for backend to redeploy

**Without this step, your frontend will show CORS errors!**

---

## 🧪 Test Your Deployment

### 1. Check Status Indicator
Top-right corner should show: **🟢 API Online**

If it shows **🔴 API Offline**:
- Check backend is running on Render
- Verify CORS is configured correctly

### 2. Try a Search
Enter: `"FastAPI tutorials"`
Click Search - you should see results!

### 3. Test Example Chips
Click any example button - should work instantly

---

## 🎨 Quick Customization

### Change Site Name on Netlify
1. Site settings → General → Site details
2. Click "Change site name"
3. Enter: `exa-ai-search` or any name you want
4. New URL: `https://exa-ai-search.netlify.app`

### Change Colors
Edit `styles.css` line 7-12:
```css
:root {
    --primary: #6366F1;      /* Main color */
    --primary-dark: #4F46E5;  /* Hover color */
}
```

### Change Background Gradient
Edit `styles.css` line 21:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## 🐛 Troubleshooting

### Problem: CORS Error in Browser Console

**Error looks like:**
```
Access to fetch at 'https://exa-fastapi-backend.onrender.com' 
from origin 'https://your-site.netlify.app' has been blocked by CORS policy
```

**Solution:**
1. Go to Render dashboard
2. Add your Netlify URL to `CORS_ORIGINS`
3. Format: `https://your-site.netlify.app` (no trailing slash)
4. Save and wait for redeploy (2 minutes)
5. Hard refresh your site (Ctrl+Shift+R)

### Problem: "API Offline" Status

**Solutions:**
1. Check backend is running: https://exa-fastapi-backend.onrender.com/health
2. Open browser console (F12) to see error
3. Verify script.js has correct API URL

### Problem: Search Returns No Results

**Solutions:**
1. Check backend logs in Render dashboard
2. Test backend directly:
   ```bash
   curl -X POST https://exa-fastapi-backend.onrender.com/api/v1/search \
     -H "Content-Type: application/json" \
     -d '{"query":"test","num_results":3}'
   ```
3. Verify Exa API key is set in backend

---

## 📱 Features Included

✅ **Real-time health check** - Shows if API is online
✅ **Advanced options** - Domain filtering, search types
✅ **Example searches** - One-click quick searches
✅ **Responsive design** - Works on all devices
✅ **Keyboard shortcuts** - Press `/` to search
✅ **Beautiful animations** - Smooth hover effects
✅ **Clean results** - Cards with metadata and scores

---

## 🎉 Next Steps

After deployment:

1. **Test everything works** ✅
2. **Share your URL** with friends 🎉
3. **Customize the design** 🎨
4. **Add to your portfolio** 💼
5. **(Optional) Add custom domain** 🌐

---

## 📚 Full Documentation

See included files:
- **`README.md`** - Complete feature documentation
- **`DEPLOYMENT.md`** - Detailed deployment guide
- **`index.html`** - Main page
- **`script.js`** - API logic (already configured!)
- **`styles.css`** - Styling

---

## 🆘 Need Help?

Common issues and fixes are in `DEPLOYMENT.md`

**Still stuck?** Check:
1. Browser console (F12) for errors
2. Render backend logs
3. CORS configuration
4. API health: https://exa-fastapi-backend.onrender.com/health

---

## 🎯 Quick Reference

**Your URLs:**
- Backend API: `https://exa-fastapi-backend.onrender.com`
- Frontend: `https://YOUR-SITE-NAME.netlify.app` (after deploy)
- API Docs: `https://exa-fastapi-backend.onrender.com/docs`
- Health Check: `https://exa-fastapi-backend.onrender.com/health`

---

Built with ❤️ • Ready to deploy! 🚀
