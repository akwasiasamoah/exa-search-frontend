# 🎨 Exa Search Frontend

Beautiful, responsive web interface for AI-powered search and summarization.

---

## 📋 **Overview**

Modern single-page application (SPA) that provides an intuitive interface for semantic search and AI-generated summaries. Built with vanilla JavaScript for simplicity and performance.

---

## ✨ **Features**

- 🔍 **Semantic Search** - AI-powered search with filters
- ✅ **Multi-Select Results** - Choose 1-5 results to summarize
- 🤖 **AI Summaries** - Get comprehensive summaries with key points
- ⚠️ **Smart Warnings** - Alerts for LinkedIn and blocked sources
- 📋 **Export Options** - Copy to clipboard or download as JSON
- 🎨 **Modern UI** - Clean, responsive design
- ⚡ **Fast** - Optimized performance
- 📱 **Mobile Ready** - Works on all devices

---

## 🛠️ **Tech Stack**

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **Vanilla JavaScript** - No frameworks needed
- **Fetch API** - Backend communication

---

## 📦 **Installation**

### **Option 1: Direct Use (Simplest)**

1. **Download files:**
```bash
# Just need these 3 files:
- index.html
- script.js
- styles.css
```

2. **Update API URL in script.js (line 2):**
```javascript
const API_BASE_URL = 'http://localhost:8000';  // Change to your backend URL
```

3. **Open in browser:**
```bash
open index.html
# Or just double-click index.html
```

That's it! No build step needed.

---

### **Option 2: Local Server (Better)**

```bash
# Navigate to frontend directory
cd exa-simple-frontend

# Python 3
python -m http.server 3000

# Or Python 2
python -m SimpleHTTPServer 3000

# Or Node.js
npx http-server -p 3000

# Or PHP
php -S localhost:3000
```

Open browser: **http://localhost:3000**

---

### **Option 3: Deploy to Netlify**

**Method A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Drag the entire folder
3. Done! Get instant URL

**Method B: GitHub (Recommended)**
1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/exa-frontend.git
git push -u origin main
```

2. Connect to Netlify:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub → Select repo
   - Deploy!

3. Update `script.js` with backend URL:
```javascript
const API_BASE_URL = 'https://your-backend.onrender.com';
```

4. Push changes:
```bash
git add script.js
git commit -m "Update API URL"
git push
```

Netlify auto-deploys in 30 seconds!

---

## 🎯 **Usage**

### **1. Search**

1. Enter search query
2. (Optional) Configure filters:
   - Domains to include/exclude
   - Date range
   - Search type (auto/neural/keyword)
3. Click "Search" or press Enter
4. View results

### **2. Select Results**

1. Check boxes for 1-5 results you want to summarize
2. Selection counter updates
3. "Generate AI Summary" button enables when 1-5 selected

### **3. Generate Summary**

1. Click "Generate AI Summary"
2. Wait for AI processing (2-15 seconds)
3. View comprehensive summary with:
   - Main summary text
   - Key points (bullet list)
   - Source links
   - Generation method

### **4. Export**

- **Copy to Clipboard** - Click copy button
- **Download JSON** - Click download button
- **Share Link** - Copy source URLs

---

## 🎨 **UI Components**

### **Search Section**
```
┌─────────────────────────────────────┐
│  🔍 Search                          │
│  ┌───────────────────────────────┐ │
│  │ Enter search query...         │ │
│  └───────────────────────────────┘ │
│  [Advanced Options]                 │
│  [Search]                           │
└─────────────────────────────────────┘
```

### **Results Section**
```
┌─────────────────────────────────────┐
│  Search Results (10 found)          │
│  0 results selected [Generate]      │
│                                     │
│  □ Article Title              95%  │
│    https://example.com/...         │
│    👤 Author  📅 2024-12-01       │
│                                     │
│  □ LinkedIn Profile           90%  │
│    https://linkedin.com/...        │
│    ⚠️ LinkedIn - May not work      │
│    👤 Name  📅 2024-12-01         │
└─────────────────────────────────────┘
```

### **Summary Section**
```
┌─────────────────────────────────────┐
│  AI Summary                         │
│  ⚡ Generated with Exa API          │
│                                     │
│  Comprehensive summary text...      │
│                                     │
│  Key Points:                        │
│  • Point 1                          │
│  • Point 2                          │
│                                     │
│  Sources:                           │
│  [1] Article Title (✅ Success)    │
│                                     │
│  [Copy] [Download JSON] [New Search]│
└─────────────────────────────────────┘
```

---

## 🎨 **Customization**

### **1. Change Colors**

Edit `styles.css`:
```css
:root {
    /* Primary colors */
    --primary: #3b82f6;      /* Blue */
    --primary-dark: #2563eb; /* Darker blue */
    
    /* Change to your brand colors */
    --primary: #10b981;      /* Green */
    --primary-dark: #059669; /* Darker green */
}
```

### **2. Change Logo/Title**

Edit `index.html` (line ~20):
```html
<h1>🔍 Exa Search</h1>
<!-- Change to: -->
<h1>🚀 Your App Name</h1>
```

### **3. Add Google Analytics**

Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **4. Custom Warning Messages**

Edit `script.js` (line ~193):
```javascript
${isLinkedIn ? '<div class="warning-badge">⚠️ Custom message</div>' : ''}
```

### **5. Change Results Limit**

Edit `script.js` (line ~210):
```javascript
generateSummaryBtn.disabled = count === 0 || count > 5;
// Change to allow up to 10:
generateSummaryBtn.disabled = count === 0 || count > 10;
```

---

## 📁 **Project Structure**

```
exa-simple-frontend/
├── index.html          # Main HTML file
├── script.js           # JavaScript logic
├── styles.css          # Styling
├── netlify.toml        # Netlify config (optional)
└── README.md           # This file
```

---

## 🔧 **Configuration**

### **Backend API URL**

**File:** `script.js` (line 2)

```javascript
// Development
const API_BASE_URL = 'http://localhost:8000';

// Production
const API_BASE_URL = 'https://your-backend.onrender.com';
```

⚠️ **Important:** Update this before deploying!

---

## 🚀 **Deployment Options**

### **Option 1: Netlify** (Recommended)

**Pros:**
- ✅ Free hosting
- ✅ Auto SSL
- ✅ Auto deploys from GitHub
- ✅ Custom domains
- ✅ CDN included

**Setup:**
1. Connect GitHub repo
2. Configure:
   - **Build command:** (leave empty)
   - **Publish directory:** `.`
3. Deploy!

---

### **Option 2: Vercel**

**Pros:**
- ✅ Free hosting
- ✅ Auto SSL
- ✅ Fast CDN
- ✅ Easy setup

**Setup:**
```bash
npm install -g vercel
cd exa-simple-frontend
vercel
```

---

### **Option 3: GitHub Pages**

**Pros:**
- ✅ Free hosting
- ✅ GitHub integration

**Setup:**
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch to deploy
4. Done!

---

### **Option 4: Custom Server**

**Apache:**
```apache
<VirtualHost *:80>
    DocumentRoot /var/www/exa-frontend
    <Directory /var/www/exa-frontend>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

**Nginx:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/exa-frontend;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🎯 **Features Explained**

### **LinkedIn Warning Badge**

Automatically shows warning on LinkedIn results:
```
⚠️ LinkedIn - May not work (bot protection)
```

**How it works:**
- Detects "linkedin.com" in URL
- Shows yellow badge
- Warns user before selection

**Customize in script.js:**
```javascript
const isLinkedIn = result.url.toLowerCase().includes('linkedin.com');
```

---

### **Advanced Search Options**

Click "Show Advanced Options" to reveal:
- **Include domains:** Only search specific sites
- **Exclude domains:** Skip certain sites
- **Start date:** Results after this date
- **Search type:** Auto, Neural, or Keyword

---

### **Export Functionality**

**Copy to Clipboard:**
- Copies full summary + key points + sources
- Formatted as plain text

**Download JSON:**
- Complete response object
- Includes metadata
- Easy to process programmatically

---

## 🧪 **Testing**

### **Test Locally**

1. **Start backend:**
```bash
cd ../exa-simple-backend
python main.py
```

2. **Start frontend:**
```bash
cd exa-simple-frontend
python -m http.server 3000
```

3. **Test:**
   - Open http://localhost:3000
   - Try search
   - Select results
   - Generate summary

### **Test Production**

1. Update `API_BASE_URL` to production
2. Deploy frontend
3. Test all features:
   - ✅ Search works
   - ✅ Results display
   - ✅ Selection works
   - ✅ Summary generates
   - ✅ Export works
   - ✅ Mobile responsive

---

## 📱 **Mobile Responsive**

Automatically adapts to screen sizes:

**Desktop (>1024px):**
- Two-column layout
- Full features visible

**Tablet (768-1024px):**
- Single column
- Slightly condensed

**Mobile (<768px):**
- Stacked layout
- Touch-optimized
- Simplified navigation

---

## ⌨️ **Keyboard Shortcuts**

- **`/`** - Focus search input
- **`Escape`** - Reset to search screen
- **`Enter`** - Submit search (when focused)

---

## 🎨 **Design System**

### **Colors**

```css
--primary: #3b82f6       /* Primary blue */
--primary-dark: #2563eb  /* Darker blue */
--success: #10b981       /* Green */
--warning: #f59e0b       /* Orange */
--error: #ef4444         /* Red */
--text: #1f2937          /* Dark gray */
--text-secondary: #6b7280 /* Medium gray */
--background: #f9fafb    /* Light gray */
--border: #e5e7eb        /* Border gray */
```

### **Typography**

- **Font:** Inter (fallback: system fonts)
- **Sizes:** 12px - 32px
- **Weights:** 400, 500, 600

### **Spacing**

- **Base unit:** 4px
- **Scale:** 4, 8, 12, 16, 24, 32, 48px

### **Border Radius**

- **Small:** 6px
- **Medium:** 8px
- **Large:** 12px

---

## 🐛 **Troubleshooting**

### **Issue: "Failed to fetch"**

**Cause:** Backend not running or wrong URL

**Solution:**
1. Check backend is running
2. Verify `API_BASE_URL` in `script.js`
3. Check browser console for CORS errors

---

### **Issue: CORS Error**

**Cause:** Backend doesn't allow frontend origin

**Solution:**
Update backend `.env`:
```env
CORS_ORIGINS=http://localhost:3000,https://yourfrontend.netlify.app
```

---

### **Issue: Results Not Showing**

**Cause:** Backend returning errors

**Solution:**
1. Open browser dev tools (F12)
2. Check Console tab for errors
3. Check Network tab for API responses

---

### **Issue: Summary Button Disabled**

**Cause:** 0 or more than 5 results selected

**Solution:**
- Select 1-5 results
- Button enables automatically

---

## 🔒 **Security**

### **Production Checklist**

- ✅ Use HTTPS (Netlify/Vercel provide free SSL)
- ✅ Update `API_BASE_URL` to production backend
- ✅ Enable backend CORS for frontend domain only
- ✅ Remove debug console.logs
- ✅ Minify code (optional)

### **Content Security Policy**

Add to `index.html` `<head>`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               connect-src 'self' https://your-backend.com; 
               style-src 'self' 'unsafe-inline';">
```

---

## 📊 **Performance**

### **Load Times**

- **First load:** ~100-200ms (cached)
- **Search:** 500-1500ms (backend dependent)
- **Summary:** 2-15s (backend dependent)

### **Bundle Size**

- **HTML:** ~8KB
- **CSS:** ~12KB
- **JS:** ~18KB
- **Total:** ~38KB (tiny!)

### **Optimization**

Already optimized:
- ✅ Vanilla JS (no frameworks)
- ✅ Minimal dependencies
- ✅ Efficient DOM updates
- ✅ CSS variables
- ✅ Modern APIs

---

## 🎓 **Code Walkthrough**

### **Main Flow**

```javascript
// 1. User enters search
handleSearch() 
  → fetch('/api/v1/search')
  → displayResults()

// 2. User selects results
checkbox.onChange()
  → selectedResults.add(index)
  → updateSelectionUI()

// 3. User clicks generate
handleGenerateSummary()
  → fetch('/api/v1/generate-summary')
  → displaySummary()

// 4. User exports
copyToClipboard() / downloadJSON()
```

### **Key Functions**

| Function | Purpose |
|----------|---------|
| `handleSearch()` | Execute search API call |
| `displayResults()` | Render search results |
| `createResultCard()` | Create individual result card |
| `handleGenerateSummary()` | Generate AI summary |
| `displaySummary()` | Show summary screen |
| `copyToClipboard()` | Copy summary text |
| `downloadJSON()` | Download summary JSON |

---

## 🤝 **Contributing**

Want to improve the frontend?

1. Fork the repo
2. Make changes
3. Test locally
4. Submit pull request

**Ideas for contributions:**
- Dark mode toggle
- More export formats (PDF, Word)
- Search history
- Saved summaries
- User accounts
- Advanced filters UI

---

## 📝 **License**

MIT License - use freely in your projects!

---

## 🆘 **Support**

- **Issues:** GitHub Issues
- **Documentation:** This README
- **Backend Docs:** See backend README

---

## 🎯 **Quick Start Recap**

1. **Update API URL** in `script.js`
2. **Open `index.html`** in browser
3. **Search** for something
4. **Select** 1-5 results
5. **Generate** AI summary
6. **Export** or start new search

**That's it!** No build tools, no dependencies, just works. ✨

---

**Built with ❤️ for beautiful AI-powered search**
