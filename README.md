# Lumina Search Engine

Hey there! Lumina is a search engine interface I built using just plain HTML, CSS, and JavaScript. No fancy frameworks or anything - just the good old web stuff working together to make something pretty cool.

## What is this thing anyway?

So I got tired of search engines that feel super slow and cluttered, so I made Lumina as a privacy-focused alternative. It's lightweight, customizable, and actually kinda fun to use. Every feature has a purpose and doesn't slow things down.

## Cool stuff it can do

### Search & Discovery
- **Multiple Search Engines**: Works with DuckDuckGo, Google, Bing, Brave Search, and even your own custom search engine. DuckDuckGo is the default because privacy matters!
- **Voice Search**: Just click the microphone and talk - works great in Chrome and Edge
- **Smart Suggestions**: Shows you completions based on your search history (stored locally, of course)
- **Search History**: Keeps track of your recent searches with easy delete options

### Personalization
- **12 Color Themes**: Beautiful color palettes from amethyst to pearl - pick your favorite!
- **Custom Backgrounds**: Upload your own images with adjustable transparency
- **Draggable Widgets**: Move weather, clock, and other widgets wherever you want them
- **Lots of Customization**: Tweak everything to match your style and workflow

### Productivity Tools
- **Notes System**: Full-featured note-taking with Markdown support and live preview
- **Bookmark Management**: Organize bookmarks with categories and icons, plus import from browsers
- **Weather Integration**: Real-time weather using privacy-focused APIs and approximate IP location
- **Calendar Widget**: Interactive monthly calendar that highlights today

### Privacy & Security
- **No Tracking**: Your searches stay private - never stored or sent anywhere
- **Local Storage**: Everything saves to your browser, with export/import options
- **Approximate Location**: Weather location from IP (never asks for GPS permission)
- **No Analytics**: Zero tracking scripts or external cookies

## Installation

### Option 1: Just open it in your browser
1. Go to [https://hnpf.github.io/lumina-search](https://hnpf.github.io/lumina-search) in your browser
2. Boom! You're done. No installation needed!

### Option 2: Run it locally (if you want to tinker)
For the best experience, especially if you want to modify the code:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## How to use it

### Basic searching (super simple)
- Type your query in the search box and press Enter
- Click the microphone for voice search (Chrome/Edge only)
- Check search history via the history button in the top bar

### Making it your own
1. **Settings Panel**: Click the gear icon and go wild with customization
2. **Color Themes**: Pick from 12 themes or cycle through them with the palette button
3. **Widgets**: Toggle weather, clock, calendar, notes, and other widgets on/off, then drag them around
4. **Background**: Upload your own images and adjust the transparency

### Keyboard shortcuts (for the speedy folks)
- `Ctrl + X` - Jump to search input
- `Ctrl + N` - Open new tab
- `Ctrl + B` - Toggle bookmarks sidebar
- `Ctrl + /` - Show keyboard shortcuts help

### Advanced stuff
- **Developer Options**: Extra settings in the collapsed section (search suggestions, animations, etc.)
- **Import/Export**: Save your settings and bookmarks as JSON files for backup
- **Drag & Drop**: Reorganize shortcuts by dragging them (but don't drag onto the "Add" button - trust me!)

## What's in the box

```
lumina-search/
├── index.html          # Main HTML file with all the UI
├── script.js           # JavaScript that makes everything work
├── style.css           # Styling and those 12 beautiful color themes
├── LICENSE             # Open source license
└── README.md          # This file you're reading!
```

## How it works under the hood

### Tech Stack (the simple version)
- **HTML5**: Clean, semantic markup with accessibility features
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties for theming
- **ES6+ JavaScript**: Modern JavaScript with no external dependencies needed

### What it connects to
- **Open-Meteo API**: Privacy-focused weather data (no account needed!)
- **IP Geolocation**: Just approximate location for weather (never asks for GPS)
- **Material Design Icons**: Beautiful, consistent icons throughout

### Works in these browsers
- All modern browsers that support HTML5, CSS3, and ES6+ JavaScript
- Chrome, Firefox, Safari, Edge (recent versions)
- Mobile browsers on iOS and Android

## Why I built it this way

I wanted to show that you can build something really polished using just core web technologies. No frameworks, no build tools, no dependencies - just good old HTML, CSS, and JavaScript working together beautifully.

### What matters to me
1. **Performance First**: Every feature gets tested for speed impact
2. **Privacy by Design**: No tracking, no data collection, period
3. **Accessibility**: Keyboard navigation and screen reader friendly
4. **Maintainability**: Clean code that's easy to understand and modify

## Want to contribute?

I'd love your help making Lumina even better! Whether you're fixing bugs, adding features, or just have ideas, contributions are super welcome.

### How to contribute
- **Fork the repo** and make your changes
- **Test thoroughly** across different browsers
- **Keep it simple** - no unnecessary complexity
- **Respect privacy** - don't add tracking or data collection

### Types of contributions I love
- **Bug fixes** for browser compatibility or functionality
- **New features** like widgets, search engines, or customization options
- **Performance improvements** to make it faster on all devices
- **Accessibility enhancements** for better keyboard navigation and screen readers

## Have ideas for new features?

If you have a feature request, I consider:
- Does it make users more productive?
- Does it maintain privacy standards?
- Does it impact performance (and if so, is it worth it)?
- Is it accessible to everyone?

Features that align with the project's philosophy get priority!

## Need help or found issues?

### Getting support
- **Check this README** and the in-app about section first
- **Report bugs** on GitHub with browser details and steps to reproduce
- **Suggest features** or start discussions about the project's direction

### When reporting problems
Please include:
- Your browser and version
- What you were trying to do
- What actually happened vs what you expected
- Screenshots help too!

## Open source stuff

This project is open source - see the LICENSE file for details.

## Thanks to

- **Material Design** for the beautiful design system and icons
- **Open-Meteo** for free, privacy-focused weather data
- **DuckDuckGo** for inspiring the privacy-first approach

## What's next

I'm planning to:
- Make it even faster and more optimized
- Improve accessibility features
- Add more search engine options
- Make the mobile experience smoother

## Changelog

### Recent Updates
- **Added Full Mobile Mode Support**: Implemented comprehensive mobile device detection, responsive UI/UX, and mobile-optimized features including touch-friendly interfaces, widget management, and developer controls for testing mobile/desktop modes across different devices.
- **Fixed Settings Panel Visual Issues**: Resolved viewport clipping and pseudo-element rendering problems that were causing the settings panel to be cut off, ensuring full visibility and proper layout on all screen sizes.
- **Enhanced Mobile Accessibility**: Improved touch interactions, mobile-specific spacing, and responsive design patterns for better usability on mobile devices and accessibility compliance.

### Previous Updates
- **Removed Quick Actions Widget**: Eliminated the problematic quick actions widget after several bugs and performance issues. The feature was causing interface freezes and has been completely removed for a smoother user experience.

---

*Built with love for the modern web. Simple, private, and actually pretty fun to use!*
