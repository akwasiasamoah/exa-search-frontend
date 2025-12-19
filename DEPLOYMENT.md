# 🚀 Deploy Frontend to Netlify

Complete guide to deploy your Exa AI Search frontend to Netlify.

## ⚡ Quick Deploy (5 Minutes)

### **Step 1: Update API URL**

**IMPORTANT:** Before deploying, you MUST update the API URL!

Open `script.js` and change line 2:

```javascript
const API_BASE_URL = 'https://your-app-name.onrender.com';
```

Replace `your-app-name.onrender.com` with your actual Render backend URL!

---

### **Step 2: Push to GitHub**

```bash
# Navigate to frontend folder
cd exa-frontend

# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit - Exa AI Search Frontend"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/exa-frontend.git
git branch -M main
git push -u origin main
```

---

### **Step 3: Deploy on Netlify**

#### **Option A: Deploy from GitHub (Recommended)**

1. Go to https://netlify.com
2. Click **"Sign up"** (use GitHub to sign up)
3. Click **"Add new site"** → **"Import an existing project"**
4. Click **"Deploy with GitHub"**
5. Authorize Netlify to access your repositories
6. Select **"exa-frontend"** repository
7. Configure:
   - **Branch**: `main`
   - **Build command**: (leave empty)
   - **Publish directory**: `.` (just a dot)
8. Click **"Deploy site"**

#### **Option B: Drag & Drop (Quick Test)**

1. Go to https://netlify.com
2. Sign up/login
3. Drag the entire `exa-frontend` folder to the Netlify dashboard
4. Wait 30 seconds - Done!

---

### **Step 4: Configure Custom Domain (Optional)**

1. In Netlify dashboard, click on your site
2. Go to **"Domain settings"**
3. Click **"Add custom domain"**
4. Enter your domain (e.g., `exasearch.yourdomain.com`)
5. Follow DNS configuration instructions
6. SSL certificate is automatically provisioned

---

## 🔧 Update Backend CORS Settings

**CRITICAL:** Your backend needs to allow requests from your Netlify domain!

### **Step 1: Get Your Netlify URL**

After deployment, Netlify gives you a URL like:
```
https://YOUR-SITE-NAME.netlify.app
```

### **Step 2: Update Backend Environment Variables**

1. Go to your **Render** backend dashboard
2. Click on your service
3. Go to **"Environment"** tab
4. Find `CORS_ORIGINS` variable
5. Update to include your Netlify URL:

```
CORS_ORIGINS=https://YOUR-SITE-NAME.netlify.app,http://localhost:3000
```

6. Save changes
7. Backend will automatically redeploy

---

## ✅ Test Your Deployment

### 1. Check Site Loads
Visit: `https://YOUR-SITE-NAME.netlify.app`

You should see the search interface!

### 2. Check API Connection
Look at the top-right status indicator:
- 🟢 **Green "API Online"** = Good!
- 🔴 **Red "API Offline"** = Problem (see troubleshooting)

### 3. Try a Search
- Enter: "FastAPI tutorials"
- Click Search
- You should see results!

### 4. Test Example Searches
Click any example chip - should work instantly

---

## 🐛 Troubleshooting

### **Issue 1: "API Offline" Status**

**Causes:**
- Wrong API URL in script.js
- Backend not running
- CORS not configured

**Solutions:**

1. **Check API URL**:
   ```javascript
   // In script.js
   const API_BASE_URL = 'https://your-correct-url.onrender.com';
   ```

2. **Test backend directly**:
   ```bash
   curl https://your-backend.onrender.com/health
   ```
   Should return: `{"status":"healthy",...}`

3. **Check backend logs** in Render dashboard

4. **Verify CORS** includes your Netlify URL

---

### **Issue 2: CORS Error in Browser Console**

**Error message:**
```
Access to fetch at 'https://...' from origin 'https://...' has been blocked by CORS policy
```

**Solution:**

1. Go to Render backend dashboard
2. Environment variables → Update `CORS_ORIGINS`:
   ```
   CORS_ORIGINS=https://YOUR-SITE.netlify.app
   ```
3. Save (backend auto-redeploys)
4. Wait 2 minutes
5. Hard refresh your Netlify site (Ctrl+Shift+R)

---

### **Issue 3: Search Returns No Results**

**Causes:**
- Backend working but Exa API key invalid
- Backend crashed
- Network issue

**Solutions:**

1. **Check backend logs** in Render
2. **Test backend directly**:
   ```bash
   curl -X POST https://your-backend.onrender.com/api/v1/search \
     -H "Content-Type: application/json" \
     -d '{"query":"test","num_results":3}'
   ```
3. **Verify Exa API key** in backend environment variables

---

### **Issue 4: Site Loads but Shows Old Version**

**Solution:** Clear Netlify cache

```bash
# Commit and push any changes
git add .
git commit -m "Update"
git push

# Or trigger redeploy in Netlify:
# Deploys → Click "Trigger deploy" → "Clear cache and deploy site"
```

---

### **Issue 5: CSS Not Loading**

**Solutions:**

1. **Check file paths** in index.html:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
   (Should be `styles.css` not `/styles.css`)

2. **Hard refresh** browser (Ctrl+Shift+R)

3. **Check browser console** for 404 errors

---

## 🔄 Updating Your Site

### **Update Content/Code:**

```bash
# Make changes to files
# Then:
git add .
git commit -m "Updated search UI"
git push origin main

# Netlify auto-deploys in ~30 seconds!
```

### **Update API URL:**

If your backend URL changes:

1. Edit `script.js` line 2
2. Commit and push
3. Netlify auto-deploys

---

## 📊 Netlify Features

### **Auto-Deploy from Git**
- Every git push triggers deployment
- See deploy logs in Netlify dashboard
- Rollback to previous versions anytime

### **Forms (Optional)**
Add contact forms easily:
```html
<form netlify>
  <input type="email" name="email" />
  <button>Submit</button>
</form>
```

### **Functions (Optional)**
Serverless functions on Netlify:
```
netlify/functions/
  ├── hello.js
```

### **Analytics (Optional)**
Enable in Netlify dashboard:
- Page views
- Unique visitors
- Top pages

---

## 💰 Netlify Pricing

### **Free Tier (Perfect for This Project)**
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Auto HTTPS/SSL
- ✅ Deploy previews
- ✅ Form submissions (100/month)

### **Pro Tier ($19/month)**
- More bandwidth
- Analytics
- A/B testing
- Password protection

---

## 🎨 Customization After Deploy

### **Change Site Name**

1. Netlify dashboard → Site settings
2. General → Site details → **"Change site name"**
3. Enter new name (e.g., `exa-ai-search`)
4. New URL: `https://exa-ai-search.netlify.app`

### **Add Custom Domain**

1. Domain settings → Add domain
2. Configure DNS (Netlify provides instructions)
3. SSL auto-provisioned

### **Environment Variables (If Needed)**

1. Site settings → Environment variables
2. Add variables
3. Access in Netlify Functions (if used)

---

## 📱 Mobile Testing

Your site is automatically responsive!

Test on:
- iOS Safari
- Android Chrome
- Different screen sizes

Use Chrome DevTools:
- Press F12
- Click device toggle icon
- Select device

---

## 🔒 Security Features

Netlify automatically provides:
- ✅ **HTTPS/SSL** - Free certificate
- ✅ **DDoS protection** - Built-in
- ✅ **Edge network** - Global CDN
- ✅ **Secure headers** - Auto-configured

---

## 📈 Monitor Your Site

### **Netlify Dashboard Shows:**
- Deploy status
- Build logs
- Bandwidth usage
- Deploy history

### **Add External Monitoring:**

**Google Analytics:**
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

**Plausible Analytics:** (Privacy-friendly)
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## ✨ Pro Tips

1. **Use Deploy Previews**: Every pull request gets a preview URL
2. **Branch Deploys**: Deploy different branches (staging, production)
3. **Split Testing**: A/B test different versions
4. **Form Notifications**: Get email when forms submitted
5. **Build Hooks**: Trigger deploys via webhook

---

## 🎯 Complete Deployment Checklist

- [ ] Updated API_BASE_URL in script.js
- [ ] Pushed code to GitHub
- [ ] Deployed to Netlify
- [ ] Updated backend CORS_ORIGINS
- [ ] Tested API connection (green status)
- [ ] Tested search functionality
- [ ] Tested on mobile
- [ ] (Optional) Added custom domain
- [ ] (Optional) Enabled analytics

---

## 🆘 Still Having Issues?

1. **Check Netlify deploy logs** for build errors
2. **Check browser console** (F12) for JavaScript errors
3. **Test backend separately** with curl
4. **Verify CORS** configuration
5. **Clear browser cache** (Ctrl+Shift+R)

**Common Issue:**
```
Blocked by CORS policy
```
→ Update CORS_ORIGINS in backend!

---

## 🎉 You're Done!

Your Exa AI Search is now live on the internet!

**Share your creation:**
- Frontend: `https://YOUR-SITE.netlify.app`
- Backend API: `https://YOUR-BACKEND.onrender.com`

**Next Steps:**
- Share with friends
- Add to your portfolio
- Customize the design
- Add more features!

---

Built with ❤️ • Happy searching! 🚀
