# Lumina Search Engine

Hello, Lumina is a search engine interface I built using just HTML, CSS, and JavaScript. No fancy frameworks or anything, just the way the web gods intended.

## What is this?

I grew tired of search engines that feel slow and cluttered, so I built what puts privacy first and lets you customize everything. It has weather, notes, bookmarks, and a bunch of other features all in one place without feeling bloated and overwhelming. Inspired by Material Design from my eyes instead.

## Features it has:

### Search & Discovery
- **Multiple Search Engines**: Works with many engines, and even your own custom url. DuckDuckGo is the default because privacy really matters!
- **Voice Search**: Just click the microphone and talk. works great in Chromium-based browsers.
- **Smart Suggestions**: Shows you completions based on your search history (stored locally, obviously)
- **Search History**: Keeps track of your recent searches and has friendly deletion options

### Personalization
- **12 Color Themes**: Beautiful color palettes from amethyst to pearl.. pick your favorite!
- **Custom Backgrounds**: Upload your own images with adjustable opacity settings!
- **Draggable Widgets**: Move weather, clock, and other widgets wherever you want them
- **Lots of Customization**: Tweak nearly everything to match your style and workflow.

### Productivity Tools
- **Notes System**: Full-featured note-taking with Markdown support and live preview
- **Tasks**: Under the Notes System, are tasks. Create small reminders and checklists with categories, it's really user-friendly!
- **Bookmarks Panel**: Import and organize bookmarks with categories and icons, plus, you can import some from your browser! I love this feature, its so well-implemented!
- **Weather Integration**: Get real-time weather using privacy-focused APIs and your approximate IP location. This is not stored anywhere besides locally on your browser!
- **Calendar Widget**: An interactive monthly calendar which also neatly-integrated events. - i love my design language!

### Privacy & Security
- **Zero Tracking-Policy**: Your searches STAY private. They will never stored or sent anywhere. I hate tracking and data collection as much as you do!
- **Local Storage**: Self explanatory; Stays with you, Goes to no-one else. Ever.
- **No Analytics**: Zero tracking scripts or external cookies
- **Safe & Private APIs**: Uses only safe, free, and private APIs. For your safety and peace-of-mind!

## Use Lumina!

### Route 1: Just open it in your browser
1. Go to [https://search.virex.lol](https://search.virex.lol) in your browser
2. Boom! You're done. No installation needed!

### Route 2: Run it locally (if you want to go that route.)
For a good experience, especially if you want to modify the code:

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
- Find and fix bugs on both Mobile & Desktop mode.
- Add text scaling options (not added yet)

- **Mobile**
- remove keyboard shortcuts for mobile, same for disabling shortcuts guide for mobile users.
- add PWA capabilities with service worker for offline stuff
- add "Add to Home Screen" prompts for a slightly better mobile adoption
- better touch interactions and gesture support (EG, back button goes back a menu instead of going back a page, if possible.)
- mobile-specific UI patterns (bottom sheets, swipe actions)

- **Performance Goals**
- lazy loading for widgets and heavy features, faster loading, low resource usage.
- asset bundling and compression
- proper state management system
- comprehensive error boundaries

# More Goals
- **Advanced Search Capabilities**
- search result previews and snippets
- custom search results page itself instead of needing custom search engines - still optional to use them.
- advanced filtering options (date, type, domain)
- "search within search results" function
- keyboard shortcut customization

- **Data Management**
- bookmark folders and nested organization
- note versioning and backup system for quick save and load
- de-clutter notes section
- add optional data export options (JSON, CSV, PDF)

- **Developer Experience**
- automated testing framework (unit, integration, e2e)
- proper error logging and monitoring (Maybe even a custom fallback system)
- development tools and debugging features
- documentation system maybe accessible in developer settings which opens another panel for them.
- plugin/extension system

# Long term goals
- **Platform Expansion**
- multi-language support (i18n)
- dark/light theme variants for different cultural preferences!
- platform-specific optimizations (Windows, macOS, Linux)

- **Advanced**
- voice command system beyond search - eg. Hey lumina..
- data visualization dashboards in Dev settings
- add some TypeScript for better type safety
- JSDoc documentation
- reusable component library
- consistent patterns

- **Security And Privacy**
- Content Security Policy (CSP)
- data encryption for local storage
- privacy dashboard for users in settings
- GDPR compliance features
- security headers and protections


## Changelog

### Recent Updates
- LARGE UPDATE!
- **Fixed bugs**: Fixed more bugs and refined mobile layout
- **Removed Test Toggle**: Removed accidentally-kept preview-primary-container test toggle in mobile options.
- **Added optimization**: Made the whole thing feel faster and smoother!
- **Fixed voice search**: There was an issue with voice detection, this has been fixed.
- **High Contrast Mode Is Here!**: Added an optional high contrast mode in settings for visually impaired users.
- **Optional Donation**: Added a donation section in settings, for keeping the domain alive.
- **Allowing Custom CSS Injection**: - Users can now inject custom CSS. Yay.

### Previous Updates
- **Fixed Mobile mode detection**: Implemented comprehensive mobile device detection, responsive UI/UX, and moved the mobile section.
- **Mode detection Info**: Now shows detailed device and browser info for better Mobile Mode Detection!
- **Fixed search bar**: Fixed the search bar for device scaling.
- **Cleaned up code and deprecated features**: Removed un-necessary functions and comments.
- **Revamped Info and Documentation**: Also self-explanatory; rewrote and updated Luminfo and README.
- **New titles around the engine**: Title bar, about, and some button texts changed.
- **Moved site to Virex.lol subdomain**: Added Lumina to my personal site!
- **Removed Quick Actions Widget**: Eliminated the problematic quick actions widget after several bugs and performance issues. The feature was causing interface freezes and has been completely removed for a smoother user experience.
- **Added Full Mobile Mode Support**: Implemented comprehensive mobile device detection, responsive UI/UX, and mobile-optimized features including touch-friendly interfaces, widget management, and developer controls for testing mobile/desktop modes across different devices.
- **Fixed Settings Panel Visual Issues**: Resolved viewport clipping and pseudo-element rendering problems that were causing the settings panel to be cut off, ensuring full visibility and proper layout on all screen sizes.
- **Enhanced Mobile Accessibility**: Improved touch interactions, mobile-specific spacing, and responsive design patterns for better usability on mobile devices and accessibility compliance.
---

*Built with love for the modern web. Simple, private, and actually pretty fun to use!*
