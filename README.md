# 🎨 Exa AI Search - Frontend UI

A beautiful, modern web interface for your Exa FastAPI backend.

## ✨ Features

- 🔍 **Clean Search Interface** - Simple and intuitive search experience
- ⚡ **Real-time Search** - Fast neural and keyword search
- 🎨 **Modern Design** - Beautiful gradient UI with smooth animations
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🔧 **Advanced Options** - Filter by domains, search type, and more
- 💡 **Example Searches** - Quick-start with pre-populated queries
- 🟢 **Health Status** - Real-time API connection indicator
- ⌨️ **Keyboard Shortcuts** - Press `/` to focus search, `Esc` to clear

## 🚀 Quick Start

### Step 1: Update API URL

Open `script.js` and update line 2:

```javascript
const API_BASE_URL = 'https://your-app-name.onrender.com';
```

Replace with your actual Render API URL!

### Step 2: Test Locally

Just open `index.html` in your browser. That's it!

Or use a simple HTTP server:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve

# PHP
php -S localhost:8080
```

Then visit: http://localhost:8080

### Step 3: Deploy to Netlify

See DEPLOYMENT.md for detailed instructions!

## 📁 Project Structure

```
exa-frontend/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js          # JavaScript logic & API calls
├── netlify.toml       # Netlify configuration
├── README.md          # This file
└── DEPLOYMENT.md      # Deployment guide
```

## 🎯 Usage

### Basic Search
1. Enter your query in the search box
2. Click "Search" or press Enter
3. View results with titles, URLs, and metadata

### Advanced Options
1. Click "Advanced Options"
2. Set:
   - Number of results (1-100)
   - Search type (Auto/Neural/Keyword)
   - Include/exclude specific domains

### Example Searches
Click any example chip to instantly search:
- FastAPI Tutorials
- ML Research Papers
- Ghana Fintech
- PostgreSQL Optimization
- API Best Practices

### Keyboard Shortcuts
- `/` - Focus search input
- `Esc` - Clear search
- `Enter` - Submit search

## 🛠️ Customization

### Change Colors

Edit `styles.css` root variables:

```css
:root {
    --primary: #6366F1;      /* Main color */
    --primary-dark: #4F46E5;  /* Hover color */
    --success: #10B981;       /* Success color */
    --error: #EF4444;         /* Error color */
}
```

### Change Background Gradient

Edit in `styles.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Add More Example Searches

Edit `index.html` in the examples section:

```html
<button class="example-chip" data-query="Your query here">Label</button>
```

## 🔧 Configuration

### API Endpoints Used

The frontend calls these backend endpoints:

1. **Health Check**: `GET /health`
   - Checks API status every minute
   - Updates status indicator

2. **Search**: `POST /api/v1/search`
   - Main search functionality
   - Supports all search parameters

### CORS Setup

Your backend needs to allow requests from your Netlify domain:

In backend `.env`:
```env
CORS_ORIGINS=https://your-site.netlify.app,http://localhost:8080
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: < 768px

## 🐛 Troubleshooting

### "API Offline" Status
- Check if backend is running
- Verify API_BASE_URL in script.js
- Check browser console for errors

### CORS Errors
- Add your Netlify URL to backend CORS_ORIGINS
- Redeploy backend after updating

### No Results Showing
- Check browser console for errors
- Verify API is returning data
- Test API directly: `curl https://your-api.com/health`

### Styling Issues
- Clear browser cache (Ctrl+F5)
- Check if styles.css is loading
- Open DevTools to debug CSS

## 🎨 Design Credits

- **Font**: Inter from Google Fonts
- **Colors**: Indigo/Purple gradient
- **Icons**: Custom SVG icons
- **Layout**: Modern card-based design

## 📝 License

Open source and free to use!

## 🤝 Contributing

Feel free to customize and improve!

## 📧 Support

If you encounter issues:
1. Check browser console (F12)
2. Verify API is running
3. Test with example searches
4. Check CORS configuration

---

Built with ❤️ for the Exa AI community
