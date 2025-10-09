// Enhanced theme configuration system
const themeConfig = {
    // Predefined color themes
    colorThemes: {
        amethyst: {
            primary: '#9b59b6',
            primaryContainer: '#d7bde2',
            onPrimaryContainer: '#5b2c6f',
            secondary: '#8e44ad',
            secondaryContainer: '#c39bd3',
            tertiary: '#a569bd',
            tertiaryContainer: '#d2b4de'
        },
        ruby: {
            primary: '#e91e63',
            primaryContainer: '#f48fb1',
            onPrimaryContainer: '#880e4f',
            secondary: '#ec407a',
            secondaryContainer: '#f8bbd0',
            tertiary: '#ad1457',
            tertiaryContainer: '#fce4ec'
        },
        jade: {
            primary: '#2ecc71',
            primaryContainer: '#a9dfbf',
            onPrimaryContainer: '#196f3d',
            secondary: '#58d68d',
            secondaryContainer: '#abebc6',
            tertiary: '#28b463',
            tertiaryContainer: '#d4efdf'
        },
        sapphire: {
            primary: '#3498db',
            primaryContainer: '#aed6f1',
            onPrimaryContainer: '#1a5276',
            secondary: '#5dade2',
            secondaryContainer: '#a9cce3',
            tertiary: '#2e86c1',
            tertiaryContainer: '#d6eaf8'
        },
        topaz: {
            primary: '#f1c40f',
            primaryContainer: '#f9e79f',
            onPrimaryContainer: '#7d6608',
            secondary: '#f4d03f',
            secondaryContainer: '#fcf3cf',
            tertiary: '#d4ac0d',
            tertiaryContainer: '#fef9e7'
        },
        rosequartz: {
            primary: '#f5b7b1',
            primaryContainer: '#fadbd8',
            onPrimaryContainer: '#8e44ad',
            secondary: '#f1948a',
            secondaryContainer: '#f5cba7',
            tertiary: '#ec7063',
            tertiaryContainer: '#fdebd0'
        },
        gold: {
            primary: '#f1c40f',
            primaryContainer: '#fdebd0',
            onPrimaryContainer: '#b7950b',
            secondary: '#f39c12',
            secondaryContainer: '#fdebd0',
            tertiary: '#d68910',
            tertiaryContainer: '#fef5e7'
        },
        moonstone: {
            primary: '#95a5a6',
            primaryContainer: '#e5e8e8',
            onPrimaryContainer: '#566573',
            secondary: '#bdc3c7',
            secondaryContainer: '#eaeded',
            tertiary: '#7f8c8d',
            tertiaryContainer: '#f2f3f4'
        },
        sunstone: {
            primary: '#e67e22',
            primaryContainer: '#f5cba7',
            onPrimaryContainer: '#7e57c2',
            secondary: '#f39c12',
            secondaryContainer: '#fdebd0',
            tertiary: '#d35400',
            tertiaryContainer: '#fae5d3'
        },
        peridot: {
            primary: '#82e0aa',
            primaryContainer: '#d5f5e3',
            onPrimaryContainer: '#1d8348',
            secondary: '#a3e4d7',
            secondaryContainer: '#d1f2eb',
            tertiary: '#73c6b6',
            tertiaryContainer: '#e8f6f3'
        },
        obsidian: {
            primary: '#34495e',
            primaryContainer: '#aab7b8',
            onPrimaryContainer: '#17202a',
            secondary: '#5d6d7e',
            secondaryContainer: '#d6dbdf',
            tertiary: '#2c3e50',
            tertiaryContainer: '#eaeded'
        },
        pearl: {
            primary: '#fdfefe',
            primaryContainer: '#f4f6f7',
            onPrimaryContainer: '#5d6d7e',
            secondary: '#f8f9f9',
            secondaryContainer: '#f2f3f4',
            tertiary: '#f0f3f4',
            tertiaryContainer: '#e5e8e8'
        }
    },

    // Available fonts for themes
    availableFonts: [
        { name: 'Google Sans', family: "'Google Sans', sans-serif" },
        { name: 'Inter', family: 'Inter, sans-serif' },
        { name: 'Roboto', family: 'Roboto, sans-serif' },
        { name: 'Open Sans', family: "'Open Sans', sans-serif" },
        { name: 'Lato', family: 'Lato, sans-serif' },
        { name: 'Montserrat', family: 'Montserrat, sans-serif' },
        { name: 'Poppins', family: 'Poppins, sans-serif' },
        { name: 'Source Sans Pro', family: "'Source Sans Pro', sans-serif" },
        { name: 'Nunito', family: 'Nunito, sans-serif' },
        { name: 'Raleway', family: 'Raleway, sans-serif' },
        { name: 'Ubuntu', family: 'Ubuntu, sans-serif' },
        { name: 'Playfair Display', family: "'Playfair Display', serif" },
        { name: 'Merriweather', family: 'Merriweather, serif' },
        { name: 'Georgia', family: 'Georgia, serif' },
        { name: 'Times New Roman', family: "'Times New Roman', serif" }
    ],

    // Custom themes storage
    customThemes: {},

    // Theme management functions
    saveCustomTheme: function(name, themeData) {
        this.customThemes[name] = {
            ...themeData,
            name: name,
            type: 'custom',
            created: new Date().toISOString(),
            colors: themeData.colors,
            fonts: themeData.fonts,
            metadata: themeData.metadata || {}
        };
        this.saveCustomThemes();
    },

    deleteCustomTheme: function(name) {
        delete this.customThemes[name];
        this.saveCustomThemes();
    },

    loadCustomThemes: function() {
        const saved = localStorage.getItem('luminaCustomThemes');
        if (saved) {
            try {
                this.customThemes = JSON.parse(saved);
            } catch (e) {
                console.error('Error loading custom themes:', e);
                this.customThemes = {};
            }
        }
    },

    saveCustomThemes: function() {
        localStorage.setItem('luminaCustomThemes', JSON.stringify(this.customThemes));
    },

    exportTheme: function(themeName) {
        const theme = this.getTheme(themeName);
        if (!theme) return null;

        return {
            name: themeName,
            type: theme.type || 'predefined',
            colors: theme.colors || theme,
            fonts: theme.fonts || { primary: "'Google Sans', sans-serif" },
            metadata: theme.metadata || {},
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
    },

    importTheme: function(themeData) {
        if (!themeData.name || !themeData.colors) {
            throw new Error('Invalid theme format');
        }

        const themeName = themeData.name;
        this.customThemes[themeName] = {
            name: themeName,
            type: 'custom',
            colors: themeData.colors,
            fonts: themeData.fonts || { primary: "'Google Sans', sans-serif" },
            metadata: themeData.metadata || {},
            imported: new Date().toISOString()
        };

        this.saveCustomThemes();
        return themeName;
    },

    getTheme: function(themeName) {
        // Check custom themes first
        if (this.customThemes[themeName]) {
            return this.customThemes[themeName];
        }

        // Check predefined themes
        if (this.colorThemes[themeName]) {
            return {
                name: themeName,
                type: 'predefined',
                colors: this.colorThemes[themeName],
                fonts: { primary: "'Google Sans', sans-serif" },
                metadata: { builtIn: true }
            };
        }

        return null;
    },

    getAllThemes: function() {
        const themes = {};

        // Add predefined themes
        Object.keys(this.colorThemes).forEach(name => {
            themes[name] = {
                name: name,
                type: 'predefined',
                colors: this.colorThemes[name],
                fonts: { primary: "'Google Sans', sans-serif" },
                metadata: { builtIn: true }
            };
        });

        // Add custom themes
        Object.keys(this.customThemes).forEach(name => {
            themes[name] = this.customThemes[name];
        });

        return themes;
    },

    getThemeNames: function() {
        return {
            predefined: Object.keys(this.colorThemes),
            custom: Object.keys(this.customThemes)
        };
    }
};

// Legacy compatibility - keep the old colorThemes object for backward compatibility
const colorThemes = themeConfig.colorThemes;

const state = {
    darkMode: false,
    autoDarkMode: false,
    colorTheme: 'amethyst',
    customTheme: null, // For storing current custom theme data
    fontFamily: "'Google Sans', sans-serif",
    showWeather: true,
    showShortcuts: true,
    showAnimations: false,
    searchSuggestions: true,
    openInSameTab: true,
    shiftEnter: true,
    manualCity: '',
    showClock: false,
    showGreeting: true,
    showCalendar: false,
    showTodo: false,
    // Mobile mode settings
    isMobile: false,
    forceMobileMode: false,
    forceDesktopMode: false,
    hideWidgetsOnMobile: true,
    hideKeyboardShortcutsOnMobile: true,
    mobileOptimizedSearch: true,
    notes: [
        { id: Date.now(), title: "Hey There!", content: "Hello! Welcome to Lumina; This is your first note! You can edit the title by changing the text above me. then, edit the content by typing in it, and delete freely with the 'x' button! You can also use markdown to format your text. Click the eye icon to toggle between edit and preview modes, and the help button to learn more about markdown. Last of all, have fun!" }
    ],
    currentNoteId: null,
    todos: [
        { text: "Welcome to Lumina todos!", completed: false, category: "General" },
        { text: "Try creating a new todo with categories", completed: false, category: "General" },
        { text: "Use the filter dropdown to sort by category", completed: false, category: "General" }
    ],
    todoCategories: ['General', 'Work', 'Personal', 'Shopping', 'Health'],
    searchHistory: [],
    showSearchHistory: true,
    bookmarks: [
        {id: Date.now(), name: 'Google', url: 'https://google.com', icon: 'search', category: 'Search'},
        {id: Date.now() + 1, name: 'GitHub', url: 'https://github.com', icon: 'code', category: 'Development'},
        {id: Date.now() + 2, name: 'YouTube', url: 'https://youtube.com', icon: 'play_circle', category: 'Entertainment'}
    ],
    searchEngine: 'duckduckgo',
    customSearchEngine: '',
    backgroundImage: '',
    backgroundOpacity: 0.3,
    showBackgroundShapes: false,
    weatherPosition: null,
    clockPosition: null,
    calendarPosition: null,
    todoPosition: null,
    calendarEvents: [
        // Sample events for demonstration
        {
            id: Date.now(),
            title: 'Team Meeting',
            description: 'Weekly team standup meeting',
            date: '2024-12-20',
            startTime: '10:00',
            endTime: '11:00',
            category: 'Work',
            color: '#3498db'
        },
        {
            id: Date.now() + 1,
            title: 'Lunch with Sarah',
            description: 'Catch up over lunch',
            date: '2024-12-22',
            startTime: '12:30',
            endTime: '14:00',
            category: 'Personal',
            color: '#2ecc71'
        }
    ],
    shortcuts: [
        {label: 'YouTube', url: 'https://youtube.com', icon: 'play_circle'},
        {label: 'GitHub', url: 'https://github.com', icon: 'code'},
        {label: 'Discord', url: 'https://discord.com/app', icon: 'chat'},
        {label: 'Talk to ChatGPT', url: 'https://chat.openai.com/', icon: 'assistant'},
        {label: 'Stack Overflow', url: 'https://stackoverflow.com', icon: 'help_outline'},
        {label: 'Reddit', url: 'https://reddit.com', icon: 'forum'},
        // {label: 'Maps', url: 'https://maps.google.com', icon: 'map'},
        // {label: 'Photos', url: 'https://photos.google.com', icon: 'photo_library'}
        // {label: 'Drive', url: 'https://drive.google.com', icon: 'cloud'}
        // {label: 'Gmail', url: 'https://gmail.com', icon: 'mail'}
        // {label: 'Calendar', url: 'https://calendar.google.com', icon: 'event'}
        // {label: 'Keep', url: 'https://keep.google.com', icon: 'sticky_note_2'}
        // {label: 'Docs', url: 'https://docs.google.com', icon: 'article'}
        // {label: 'Sheets', url: 'https://sheets.google.com', icon: 'grid_view'}
        // {label: 'Slides', url: 'https://slides.google.com', icon: 'present_to_all'}
        // {label: 'Hangouts', url: 'https://hangouts.google.com', icon: 'chat_bubble'}
        // {label: 'Wallet', url: 'https://wallet.google.com', icon: 'account_balance_wallet'}
        // {label: 'News', url: 'https://news.google.com', icon: 'newspaper'}
        // {label: 'Books', url: 'https://books.google.com', icon: 'book'}
        // {label: 'Flights', url: 'https://flights.google.com', icon: 'flight_takeoff'}
        // {label: 'Translate', url: 'https://translate.google.com', icon: 'translate'}
        // {label: 'Wallet', url: 'https://wallet.google.com', icon: 'account_balance_wallet'}
        {label: 'YouTube Music', url: 'https://music.youtube.com', icon: 'music_video'},
        // {label: 'Tiktok', url: 'https://tiktok.com', icon: 'task_outlined'}
        // {label: 'Spotify', url: 'https://spotify.com', icon: 'music_video'}
        // {label: 'LinkedIn', url: 'https://linkedin.com', icon: 'task_outlined'}
        // {label: 'Twitter', url: 'https://twitter.com', icon: 'task_outlined'}
        // {label: 'Instagram', url: 'https://instagram.com', icon: 'task_outlined'}
        // {label: 'Snapchat', url: 'https://snapchat.com', icon: 'task_outlined'}
        // {label: 'Pinterest', url: 'https://pinterest.com', icon: 'task_outlined'}
        // {label: 'WhatsApp', url: 'https://web.whatsapp.com', icon: 'task_outlined'}
        // {label: 'Vimeo', url: 'https://vimeo.com', icon: 'task_outlined'}
        // {label: 'Twitch', url: 'https://twitch.com', icon: 'task_outlined'}
        // {label: 'Figma', url: 'https://figma.com', icon: 'task_outlined'}
        // {label: 'Slack', url: 'https://slack.com', icon: 'task_outlined'}
        // {label: 'Medium', url: 'https://medium.com', icon: 'task_outlined'}
        // {label: 'Wikipedia', url: 'https://wikipedia.com', icon: 'docs_library'}
        // {label: 'Tumblr', url: 'https://tumblr.com', icon: 'task_outlined'}
        // {label: 'Quora', url: 'https://quora.com', icon: 'task_outlined'}
        // {label: 'Goodreads', url: 'https://goodreads.com', icon: 'task_outlined'}
        // {label: 'IMDb', url: 'https://imdb.com', icon: 'task_outlined'}
        // {label: 'Coursera', url: 'https://coursera.com', icon: 'task_outlined'}
        // {label: 'Khan Academy', url: 'https://khanacademy.com', icon: 'task_outlined'}
        // {label: 'TED', url: 'https://ted.com', icon: 'task_outlined'}
    ]
};
//                     <div class="auto-suggestion-item" data-suggestion="GitHub">
//                         <span class="material-icons-round">code</span>
//                         <span>Search GitHub</span>
//                     </div>
//                     <div class="auto-suggestion-item" data-suggestion="Stack Overflow">
//                         <span class="material-icons-round">help_outline</span>
//                         <span>Search Stack Overflow</span>
//                     </div>
//                     <div class="auto-suggestion-item" data-suggestion="Reddit">
//                         <span class="material-icons-round">forum</span>
//                         <span>Search Reddit</span>
const defaultState = JSON.parse(JSON.stringify(state));

// Set default auto dark mode based on system preference
if (typeof window !== 'undefined' && window.matchMedia) {
    defaultState.autoDarkMode = detectSystemDarkMode();
}

// Enhanced mobile device detection with browser info
function detectMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;

    // Enhanced detection for better mobile identification
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const isChrome = /chrome|crios/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome|crios/.test(userAgent);
    const isFirefox = /firefox|fxios/.test(userAgent);
    const isEdge = /edg/.test(userAgent);

    // Get device pixel ratio for high-DPI displays
    const devicePixelRatio = window.devicePixelRatio || 1;

    // Check for mobile viewport meta tag support
    const hasMobileViewport = document.querySelector('meta[name="viewport"]');

    // Enhanced screen size detection
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const isVerySmallScreen = screenWidth <= 480;
    const isMediumScreen = screenWidth <= 1024;

    // Detect device orientation
    const isPortrait = window.innerHeight > window.innerWidth;

    // Store browser info for debugging and optimization
    const browserInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        isIOS,
        isAndroid,
        isChrome,
        isSafari,
        isFirefox,
        isEdge,
        devicePixelRatio,
        screenWidth,
        screenHeight,
        isPortrait,
        isVerySmallScreen,
        isSmallScreen,
        isMediumScreen,
        hasTouch: isTouchDevice,
        hasMobileViewport
    };

    // Store browser info globally for debugging
    window.luminaBrowserInfo = browserInfo;

    // Enhanced mobile detection logic
    const isMobile = isMobileUA || (isTouchDevice && (isSmallScreen || isVerySmallScreen));

    // Log browser info for debugging (only in development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Lumina Browser Detection:', browserInfo);
        console.log('Mobile Detected:', isMobile);
    }

    return isMobile;
}

// Detect system dark mode preference
function detectSystemDarkMode() {
    if (typeof window === 'undefined' || !window.matchMedia) {
        return false; // Default to light mode if matchMedia is not available
    }

    try {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
        console.warn('Error detecting system dark mode preference:', e);
        return false; // Default to light mode on error
    }
}

// Adjust greeting position based on zoom level and screen size
function adjustGreetingPosition() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    try {
        const greeting = document.getElementById('greeting');
        if (!greeting || !state.showGreeting) return;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Calculate approximate zoom level (this is an estimation)
        const zoomLevel = Math.round((screenWidth / window.screen.availWidth) * 100);

        // If zoom level is high (> 110%) or screen is small, make greeting static
        if (zoomLevel > 110 || screenWidth <= 900) {
            greeting.style.position = 'static';
            greeting.style.transform = 'none';
            greeting.style.margin = '8px auto 16px auto';
            greeting.style.maxWidth = 'calc(100% - 16px)';
            greeting.style.width = 'fit-content';
            greeting.style.order = '-1';
        } else {
            // Reset to fixed positioning for larger screens with normal zoom
            greeting.style.position = 'fixed';
            greeting.style.top = '24px';
            greeting.style.left = '50%';
            greeting.style.transform = 'translateX(-50%)';
            greeting.style.margin = '';
            greeting.style.maxWidth = 'calc(100vw - 48px)';
            greeting.style.width = 'fit-content';
            greeting.style.order = '';
        }
    } catch (e) {
        console.warn('Error adjusting greeting position:', e);
    }
}

// Get effective mobile state (considers forced modes)
function getEffectiveMobileState() {
    if (state.forceMobileMode) return true;
    if (state.forceDesktopMode) return false;
    return state.isMobile;
}

// Check if currently in mobile mode
function isInMobileMode() {
    return getEffectiveMobileState();
}

const searchTypes = [
    {label: 'Images', icon: 'image', suffix: 'images'},
    {label: 'News', icon: 'newspaper', suffix: 'news'},
    {label: 'Videos', icon: 'video_library', suffix: 'videos'},
    {label: 'Recipes', icon: 'restaurant', suffix: 'recipes'},
    {label: 'Shopping', icon: 'shopping_bag', suffix: 'shopping'}
];

function loadSettings() {
    const saved = localStorage.getItem('searchSettings');
    if (saved) {
        try {
            Object.assign(state, JSON.parse(saved));
        } catch (e) {
            console.error('Error loading settings:', e);
        }
    }

    // Load custom themes
    themeConfig.loadCustomThemes();

    // Detect mobile device on load
    state.isMobile = detectMobileDevice();

    // Ensure auto dark mode is properly initialized if not set
    if (typeof state.autoDarkMode !== 'boolean') {
        try {
            state.autoDarkMode = detectSystemDarkMode();
        } catch (e) {
            console.warn('Error initializing auto dark mode:', e);
            state.autoDarkMode = false;
        }
    }

    applySettings();

    // Adjust greeting position after settings are applied
    setTimeout(() => {
        adjustGreetingPosition();
    }, 100);
}

function saveSettings() {
    localStorage.setItem('searchSettings', JSON.stringify(state));
}

function applyColorTheme(themeName) {
    const theme = themeConfig.getTheme(themeName);
    if (!theme) return;

    const root = document.documentElement;

    // Apply color variables
    if (theme.colors) {
        root.style.setProperty('--md-sys-color-primary', theme.colors.primary);
        root.style.setProperty('--md-sys-color-primary-container', theme.colors.primaryContainer);
        root.style.setProperty('--md-sys-color-on-primary-container', theme.colors.onPrimaryContainer);
        root.style.setProperty('--md-sys-color-secondary', theme.colors.secondary);
        root.style.setProperty('--md-sys-color-secondary-container', theme.colors.secondaryContainer);
        root.style.setProperty('--md-sys-color-tertiary', theme.colors.tertiary);
        root.style.setProperty('--md-sys-color-tertiary-container', theme.colors.tertiaryContainer);
    }

    // Apply font family
    if (theme.fonts && theme.fonts.primary) {
        root.style.setProperty('--font-family-primary', theme.fonts.primary);
        state.fontFamily = theme.fonts.primary;
    }

    // Update font family display in settings if available
    const fontDisplay = document.getElementById('currentFontDisplay');
    if (fontDisplay) {
        const fontName = themeConfig.availableFonts.find(f => f.family === theme.fonts?.primary)?.name || 'Google Sans';
        fontDisplay.textContent = fontName;
    }
}

function applySettings() {
    // Handle auto dark mode with better error handling
    let effectiveDarkMode = state.darkMode;
    if (state.autoDarkMode) {
        try {
            effectiveDarkMode = detectSystemDarkMode();
        } catch (e) {
            console.warn('Error detecting system dark mode in applySettings:', e);
            effectiveDarkMode = false; // Default to light mode on error
        }
    }

    // Apply theme attribute with error handling
    try {
        document.documentElement.setAttribute('data-theme', effectiveDarkMode ? 'dark' : 'light');
    } catch (e) {
        console.warn('Error setting theme attribute:', e);
    }

    // Handle greeting positioning based on zoom and screen size
    adjustGreetingPosition();

    // Update header button icon based on current mode
    const darkModeIcon = document.getElementById('darkModeBtn').querySelector('.material-icons-round');
    if (state.autoDarkMode) {
        darkModeIcon.textContent = 'auto_fix_high';
    } else if (effectiveDarkMode) {
        darkModeIcon.textContent = 'dark_mode';
    } else {
        darkModeIcon.textContent = 'light_mode';
    }


    applyColorTheme(state.colorTheme);

    // Apply font family
    if (state.fontFamily) {
        document.body.style.fontFamily = state.fontFamily;
        document.documentElement.style.setProperty('--font-family-primary', state.fontFamily);
    }

    // Apply mobile mode styles
    document.body.classList.toggle('mobile-mode', isInMobileMode());

    // Handle widget visibility in mobile mode
    const effectiveMobile = isInMobileMode();
    const hideWidgetsOnMobile = effectiveMobile && state.hideWidgetsOnMobile;
    const hideKeyboardShortcutsOnMobile = effectiveMobile && state.hideKeyboardShortcutsOnMobile;

    document.getElementById('weather').style.display = (state.showWeather && !hideWidgetsOnMobile) ? 'block' : 'none';
    document.getElementById('shortcuts').style.display = (state.showShortcuts && !hideKeyboardShortcutsOnMobile) ? 'grid' : 'none';
    document.querySelector('.background-overlay').style.display = state.showAnimations ? 'block' : 'none';
    document.getElementById('clock').style.display = (state.showClock && !hideWidgetsOnMobile) ? 'block' : 'none';
    document.getElementById('greeting').style.display = state.showGreeting ? 'block' : 'none';
    document.getElementById('calendar').style.display = (state.showCalendar && !hideWidgetsOnMobile) ? 'block' : 'none';

    const backgroundImage = document.getElementById('backgroundImage');
    if (state.backgroundImage) {
        backgroundImage.style.backgroundImage = `url(${state.backgroundImage})`;
        backgroundImage.style.opacity = state.backgroundOpacity;
    } else {
        backgroundImage.style.backgroundImage = '';
        backgroundImage.style.opacity = '0';
    }

    const backgroundShapes = document.getElementById('backgroundShapes');
    if (backgroundShapes) {
        backgroundShapes.style.opacity = state.showBackgroundShapes ? '1' : '0';
    }

    if (state.weatherPosition) {
        const weather = document.getElementById('weather');
        weather.style.left = state.weatherPosition.left + 'px';
        weather.style.top = state.weatherPosition.top + 'px';
        weather.style.right = 'auto';
    }

    if (state.clockPosition) {
        const clock = document.getElementById('clock');
        clock.style.left = state.clockPosition.left + 'px';
        clock.style.top = state.clockPosition.top + 'px';
    }

    if (state.calendarPosition) {
        const calendar = document.getElementById('calendar');
        calendar.style.left = state.calendarPosition.left + 'px';
        calendar.style.top = state.calendarPosition.top + 'px';
        calendar.style.right = 'auto';
    }



    document.getElementById('searchSuggestions').style.display = state.searchSuggestions ? 'flex' : 'none';

    if (state.manualCity) {
        document.getElementById('manualCity').value = state.manualCity;
    }

    if (state.searchEngine) {
        document.getElementById('searchEngine').value = state.searchEngine;
    }

    if (state.customSearchEngine) {
        document.getElementById('customSearchEngine').value = state.customSearchEngine;
    }

    const customInput = document.getElementById('customSearchEngine');
    if (customInput) {
        customInput.style.display = state.searchEngine === 'custom' ? 'block' : 'none';
    }

    // Simple toggle state application
    const toggleMap = {
        'weatherToggle': 'showWeather',
        'clockToggle': 'showClock',
        'calendarToggle': 'showCalendar',
        'todoToggle': 'showTodo',
        'shortcutsToggle': 'showShortcuts',
        'greetingToggle': 'showGreeting',
        'backgroundShapesToggle': 'showBackgroundShapes'
    };

    Object.entries(toggleMap).forEach(([id, key]) => {
        const toggle = document.getElementById(id);
        if (toggle) {
            const sw = toggle.querySelector('.switch');
            if (sw) {
                sw.classList.toggle('active', state[key]);
            }
        }
    });


    const devToggles = [
        {id: 'searchSuggestionsToggle', key: 'searchSuggestions'},
        {id: 'openInSameTabToggle', key: 'openInSameTab'},
        {id: 'shiftEnterToggle', key: 'shiftEnter'}
    ];

    devToggles.forEach(({id, key}) => {
        const toggle = document.getElementById(id);
        if (toggle) {
            const sw = toggle.querySelector('.switch');
            sw.classList.toggle('active', state[key]);
        }
    });

    // Mobile mode toggles
    const mobileModeToggles = [
        {id: 'forceMobileModeToggle', key: 'forceMobileMode'},
        {id: 'forceDesktopModeToggle', key: 'forceDesktopMode'},
        {id: 'hideWidgetsOnMobileToggle', key: 'hideWidgetsOnMobile'},
        {id: 'hideKeyboardShortcutsOnMobileToggle', key: 'hideKeyboardShortcutsOnMobile'},
        {id: 'mobileOptimizedSearchToggle', key: 'mobileOptimizedSearch'}
    ];

    mobileModeToggles.forEach(({id, key}) => {
        const toggle = document.getElementById(id);
        if (toggle) {
            const sw = toggle.querySelector('.switch');
            sw.classList.toggle('active', state[key]);
        }
    });

    // Update mode display
    const currentModeDisplay = document.getElementById('currentModeDisplay');
    const deviceTypeDisplay = document.getElementById('deviceTypeDisplay');
    if (currentModeDisplay && deviceTypeDisplay) {
        currentModeDisplay.textContent = isInMobileMode() ? 'Mobile' : 'Desktop';
        deviceTypeDisplay.textContent = state.isMobile ? 'Mobile Device' : 'Desktop Device';

        // Update browser info display if element exists
        const browserInfoDisplay = document.getElementById('browserInfoDisplay');
        if (browserInfoDisplay && window.luminaBrowserInfo) {
            const info = window.luminaBrowserInfo;
            browserInfoDisplay.innerHTML = `
                <div style="font-size: 11px; color: var(--md-sys-color-on-surface-variant); margin-top: 8px; line-height: 1.4;">
                    <strong>Browser:</strong> ${info.isChrome ? 'Chrome' : info.isSafari ? 'Safari' : info.isFirefox ? 'Firefox' : info.isEdge ? 'Edge' : 'Unknown'}<br>
                    <strong>Platform:</strong> ${info.isIOS ? 'iOS' : info.isAndroid ? 'Android' : info.platform}<br>
                    <strong>Screen:</strong> ${info.screenWidth}×${info.screenHeight}px<br>
                    <strong>DPI:</strong> ${info.devicePixelRatio}×<br>
                    <strong>Touch:</strong> ${info.hasTouch ? 'Yes' : 'No'}
                </div>
            `;
        }
    }

    renderColorGrid();
    renderShortcuts();
    renderSearchSuggestions();

    // Apply dynamic search bar optimizations
    setTimeout(() => {
        optimizeSearchBarForScreenSize();
        optimizeColorGridForMobile();
    }, 100);
}

function renderSearchSuggestions() {
    if (!state.searchSuggestions) return;
    const container = document.getElementById('searchSuggestions');
    container.innerHTML = searchTypes.map(type => `
        <div class="suggestion-chip" data-suffix="${type.suffix}">
            <span class="material-icons-round">${type.icon}</span>
            ${type.label}
        </div>
    `).join('');

    document.querySelectorAll('.suggestion-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const input = document.getElementById('searchInput');
            const suffix = chip.dataset.suffix;
            const query = input.value.trim();
            if (query) {
                performSearch(`${query} ${suffix}`);
            }
        });
    });
}

function renderColorGrid() {
    const grid = document.getElementById('colorGrid');
    grid.innerHTML = Object.keys(colorThemes).map(name => `
        <div class="color-option ${state.colorTheme === name ? 'active' : ''}"
             data-theme="${name}"
             style="background: linear-gradient(135deg, ${colorThemes[name].primary}, ${colorThemes[name].tertiary})">
        </div>
    `).join('');

    grid.querySelectorAll('.color-option').forEach(opt => {
        opt.addEventListener('click', () => {
            state.colorTheme = opt.dataset.theme;
            applySettings();
            saveSettings();
        });
    });
}

function renderShortcuts() {
    const container = document.getElementById('shortcuts');
    const shortcutsHtml = state.shortcuts.map((s, idx) => `
        <a href="${s.url}" class="shortcut" target="_blank" data-shortcut-link data-index="${idx}">
            <button class="shortcut-drag-handle" data-idx="${idx}" onclick="event.preventDefault(); event.stopPropagation();">
                <span class="material-icons-round">drag_indicator</span>
            </button>
            <button class="shortcut-remove" data-idx="${idx}" onclick="event.preventDefault(); event.stopPropagation();">
                <span class="material-icons-round">close</span>
            </button>
            <span class="material-icons-round shortcut-icon">${s.icon}</span>
            <div class="shortcut-label">${s.label}</div>
        </a>
    `).join('');

    const addButton = `
        <div class="add-shortcut" id="addShortcutBtn">
            <span class="material-icons-round">add</span>
            <div class="shortcut-label">Add</div>
        </div>
    `;

    container.innerHTML = shortcutsHtml + addButton;

    setTimeout(() => {
        setupDragAndDrop();
    }, 100);

    document.querySelectorAll('.shortcut-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const idx = parseInt(btn.dataset.idx);
            state.shortcuts.splice(idx, 1);
            renderShortcuts();
            saveSettings();
        });
    });

    const addBtn = document.getElementById('addShortcutBtn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            document.getElementById('shortcutModal').classList.add('visible');
            document.getElementById('overlay').classList.add('visible');
        });
    }

    const addBookmarkBtn = document.getElementById('addBookmarkBtn');
    if (addBookmarkBtn) {
        addBookmarkBtn.addEventListener('click', () => {
            document.getElementById('bookmarkModal').classList.add('visible');
            document.getElementById('overlay').classList.add('visible');
        });
    }

    const importBookmarksBtn = document.getElementById('importBookmarksBtn');
    if (importBookmarksBtn) {
        importBookmarksBtn.addEventListener('click', () => {
            alert('Browser Bookmark Import\n\nTo import your browser bookmarks:\n1. Export your bookmarks as HTML from your browser\n2. Use the Import Settings feature in Developer Options\n3. Your bookmarks will be available in the Bookmarks sidebar\n\nNote: Direct browser bookmark access requires a browser extension for security reasons.');
        });
    }
}

function setupDragAndDrop() {
    const shortcuts = document.querySelectorAll('.shortcut[data-index]');
    const addBtn = document.getElementById('addShortcutBtn');

    let touchStartX = 0;
    let touchStartY = 0;
    let isDragging = false;
    let draggedElement = null;

    if (addBtn) {
        addBtn.addEventListener('dragenter', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'none';
        });

        addBtn.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'none';
            addBtn.style.background = 'var(--md-sys-color-error-container)';
            addBtn.style.borderColor = 'var(--md-sys-color-error)';
            addBtn.style.transform = 'scale(1.05) rotate(2deg)';
            addBtn.style.animation = 'shake 0.5s ease-in-out';
        });

        addBtn.addEventListener('dragleave', (e) => {
            e.preventDefault();
            // Reset visual state
            addBtn.style.background = '';
            addBtn.style.borderColor = '';
            addBtn.style.transform = '';
            addBtn.style.animation = '';
        });

        addBtn.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Reset visual state immediately
            addBtn.style.background = '';
            addBtn.style.borderColor = '';
            addBtn.style.transform = '';
            addBtn.style.animation = '';

            const draggedIndex = e.dataTransfer.getData('text/plain');
            const draggedHtml = e.dataTransfer.getData('text/html');
            const shortcutIndex = e.dataTransfer.getData('application/shortcut-index');

            if ((draggedIndex && !isNaN(parseInt(draggedIndex))) ||
                (shortcutIndex && !isNaN(parseInt(shortcutIndex))) ||
                (draggedHtml && draggedHtml.includes('data-shortcut-link')) ||
                (draggedHtml && draggedHtml.includes('shortcut-icon'))) {
                showFunnyModal();
            }
        });
    }

    shortcuts.forEach(shortcut => {
        shortcut.draggable = true;

        shortcut.addEventListener('dragstart', (e) => {
            // Add dragging class immediately for smooth animation
            shortcut.classList.add('dragging');

            // Set drag data with multiple formats for better compatibility
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', shortcut.outerHTML);
            e.dataTransfer.setData('text/plain', shortcut.dataset.index);
            e.dataTransfer.setData('application/shortcut-index', shortcut.dataset.index);

            const dragImage = shortcut.cloneNode(true);
            dragImage.style.transform = 'rotate(2deg) scale(1.1)';
            dragImage.style.opacity = '0.95';
            dragImage.style.position = 'absolute';
            dragImage.style.top = '-1000px';
            dragImage.style.pointerEvents = 'none';
            dragImage.style.zIndex = '9999';

            document.body.appendChild(dragImage);
            e.dataTransfer.setDragImage(dragImage, e.offsetX, e.offsetY);

            setTimeout(() => {
                if (document.body.contains(dragImage)) {
                    document.body.removeChild(dragImage);
                }
            }, 100);

            setTimeout(() => {
                shortcut.style.pointerEvents = 'none';
            }, 50);
        });

        shortcut.addEventListener('dragend', (e) => {
            // Remove dragging class with slight delay for smooth animation
            setTimeout(() => {
                shortcut.classList.remove('dragging');
                shortcut.style.pointerEvents = '';
            }, 100);
        });

        shortcut.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        shortcut.addEventListener('dragenter', (e) => {
            e.preventDefault();
            shortcut.classList.add('drag-over');
        });

        shortcut.addEventListener('dragleave', (e) => {
            const rect = shortcut.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;

            if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
                shortcut.classList.remove('drag-over');
            }
        });

        shortcut.addEventListener('drop', (e) => {
            e.preventDefault();
            shortcut.classList.remove('drag-over');

            const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
            const targetIndex = parseInt(shortcut.dataset.index);

            if (draggedIndex !== targetIndex && draggedIndex !== -1) {
                const draggedItem = state.shortcuts[draggedIndex];
                state.shortcuts.splice(draggedIndex, 1);
                state.shortcuts.splice(targetIndex, 0, draggedItem);

                renderShortcuts();
                saveSettings();
            }
        });
    });
}

async function loadWeather() {
    if (!state.showWeather) return;

    try {
        let lat, lon, city, region;

        if (state.manualCity) {
            const geocodeRes = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(state.manualCity)}&count=1`
            );
            const geocode = await geocodeRes.json();
            if (geocode.results && geocode.results[0]) {
                lat = geocode.results[0].latitude;
                lon = geocode.results[0].longitude;
                city = geocode.results[0].name;
                region = geocode.results[0].admin1 || '';
            } else {
                throw new Error('City not found');
            }
        } else {
            const geoRes = await fetch('https://ipapi.co/json/');
            const geo = await geoRes.json();
            lat = geo.latitude;
            lon = geo.longitude;
            city = geo.city;
            region = geo.region_code;
        }

        const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=auto`
        );
        const weather = await weatherRes.json();

        const codes = {
            0: 'Clear', 1: 'Mostly Clear', 2: 'Partly Cloudy', 3: 'Overcast',
            45: 'Foggy', 48: 'Foggy', 51: 'Light Drizzle', 53: 'Drizzle', 55: 'Heavy Drizzle',
            61: 'Light Rain', 63: 'Rain', 65: 'Heavy Rain', 71: 'Light Snow', 73: 'Snow', 75: 'Heavy Snow',
            77: 'Snow Grains', 80: 'Showers', 81: 'Showers', 82: 'Heavy Showers',
            85: 'Snow Showers', 86: 'Snow Showers', 95: 'Thunderstorm',
            96: 'Thunderstorm', 99: 'Heavy Thunderstorm'
        };

        document.getElementById('weatherTemp').textContent =
            Math.round(weather.current.temperature_2m) + '°';
        document.getElementById('weatherDesc').textContent =
            codes[weather.current.weather_code] || 'Unknown';
        document.getElementById('weatherLocation').querySelector('span:last-child').textContent =
            region ? `${city}, ${region}` : city;
    } catch (err) {
        console.error('Weather error:', err);
        document.getElementById('weatherDesc').textContent = 'Unable to load';
    }
}

function performSearch(query) {
    if (query.trim() && !state.searchHistory.includes(query.trim())) {
        state.searchHistory.unshift(query.trim());
        if (state.searchHistory.length > 20) {
            state.searchHistory.pop();
        }
        saveSettings();
    }

    if (query.includes('.') && !query.includes(' ') && !query.startsWith('http')) {
        const url = query.startsWith('www.') ? `https://${query}` :
                    query.includes('://') ? query : `https://${query}`;
        window.location.href = url;
        return;
    }

    const target = state.openInSameTab ? '_self' : '_blank';

    let searchUrl = '';
    switch(state.searchEngine) {
        case 'google':
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'bing':
            searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'brave':
            searchUrl = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'custom':
            const customDomain = state.customSearchEngine.trim();
            if (customDomain) {
                const domain = customDomain.replace(/^https?:\/\//, '');
                searchUrl = `https://${domain}/search?q=${encodeURIComponent(query)}`;
            } else {
                searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
            }
            break;
        case 'duckduckgo':
            searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
            break;
    }

    window.open(searchUrl, target);
}

function renderSearchHistoryModal() {
    const modalList = document.getElementById('searchHistoryModalList');
    if (!modalList) return;

    if (state.searchHistory.length === 0) {
        modalList.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--md-sys-color-on-surface-variant);">No search history yet</div>';
        return;
    }

    modalList.innerHTML = state.searchHistory.map((query, index) => `
        <div class="search-history-modal-item" data-query="${query}">
            <div class="search-history-modal-content">
                <div class="search-history-icon">
                    <span class="material-icons-round">search</span>
                </div>
                <div class="search-history-text">${query}</div>
                <div class="search-history-time">${index === 0 ? 'Latest' : 'Recent'}</div>
            </div>
            <button class="search-history-delete-btn" data-query="${query}" title="Delete this search">
                <span class="material-icons-round">close</span>
            </button>
        </div>
    `).join('');

    // Add click listeners to history items
    document.querySelectorAll('.search-history-modal-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.closest('.search-history-delete-btn')) return;

            const query = item.dataset.query;
            document.getElementById('searchInput').value = query;
            document.getElementById('searchHistoryModal').classList.remove('visible');
            document.getElementById('overlay').classList.remove('visible');
            performSearch(query);
        });
    });

    // Add click listeners to delete buttons
    document.querySelectorAll('.search-history-delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const query = btn.dataset.query;
            if (confirm(`Delete "${query}" from search history?`)) {
                state.searchHistory = state.searchHistory.filter(item => item !== query);
                saveSettings();
                renderSearchHistoryModal();
            }
        });
    });
}

function renderBookmarks() {
    const bookmarksList = document.getElementById('bookmarksList');
    if (!bookmarksList) return;

    if (state.bookmarks.length === 0) {
        bookmarksList.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--md-sys-color-on-surface-variant);">No bookmarks yet</div>';
        return;
    }

    // Group bookmarks by category
    const bookmarksByCategory = {};
    state.bookmarks.forEach(bookmark => {
        const category = bookmark.category || 'General';
        if (!bookmarksByCategory[category]) {
            bookmarksByCategory[category] = [];
        }
        bookmarksByCategory[category].push(bookmark);
    });

    let html = '';
    Object.keys(bookmarksByCategory).forEach(category => {
        html += `<div class="bookmark-category">`;
        html += `<div class="bookmark-category-header">${category}</div>`;
        html += bookmarksByCategory[category].map(bookmark => `
            <a href="${bookmark.url}" class="bookmark-item" target="_blank" data-id="${bookmark.id}">
                <div class="bookmark-icon">
                    <span class="material-icons-round">${bookmark.icon}</span>
                </div>
                <div class="bookmark-info">
                    <div class="bookmark-name">${bookmark.name}</div>
                    <div class="bookmark-url">${bookmark.url}</div>
                    ${bookmark.category ? `<div class="bookmark-category">${bookmark.category}</div>` : ''}
                </div>
                <button class="bookmark-delete" data-id="${bookmark.id}">
                    <span class="material-icons-round">close</span>
                </button>
            </a>
        `).join('');
        html += `</div>`;
    });

    bookmarksList.innerHTML = html;

    // Add click listeners to delete buttons
    document.querySelectorAll('.bookmark-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            const bookmark = state.bookmarks.find(b => b.id === id);
            const name = bookmark ? bookmark.name : 'this bookmark';

            showConfirmModal(`Delete "${name}"?`, () => {
                state.bookmarks = state.bookmarks.filter(b => b.id !== id);
                saveSettings();
                renderBookmarks();
            });
        });
    });
}

function setupBookmarks() {
    const bookmarksSidebar = document.getElementById('bookmarksSidebar');
    const bookmarksToggle = document.getElementById('bookmarksToggle');
    const bookmarksClose = document.getElementById('bookmarksClose');

    console.log('Bookmarks elements:', {
        bookmarksSidebar,
        bookmarksToggle,
        bookmarksClose
    });

    if (!bookmarksToggle || !bookmarksClose || !bookmarksSidebar) return;

    bookmarksToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        bookmarksSidebar.classList.toggle('open');
        renderBookmarks();
    });

    bookmarksClose.addEventListener('click', (e) => {
        e.stopPropagation();
        bookmarksSidebar.classList.remove('open');
    });

    // Prevent clicks inside bookmarks sidebar from closing it
    bookmarksSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

function openSearchHistoryModal() {
    renderSearchHistoryModal();
    document.getElementById('searchHistoryModal').classList.add('visible');
    document.getElementById('overlay').classList.add('visible');
}

function showFunnyModal() {
    const funnyModal = document.getElementById('funnyModal');
    const overlay = document.getElementById('overlay');

    funnyModal.classList.add('visible');
    overlay.classList.add('visible');
}

// Dark mode button cycles through: manual light -> manual dark -> auto
document.getElementById('darkModeBtn').addEventListener('click', () => {
    if (state.autoDarkMode) {
        // Currently auto, switch to manual dark
        state.autoDarkMode = false;
        state.darkMode = true;
    } else if (state.darkMode) {
        // Currently manual dark, switch to manual light
        state.darkMode = false;
    } else {
        // Currently manual light, switch to auto
        state.darkMode = false;
        state.autoDarkMode = true;
    }
    applySettings();
    saveSettings();
});


// Listen for system dark mode preference changes
if (typeof window !== 'undefined' && window.matchMedia) {
    try {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (state.autoDarkMode) {
                applySettings();
            }
        });
    } catch (e) {
        console.warn('Error setting up system dark mode listener:', e);
    }
}

document.getElementById('themeBtn').addEventListener('click', () => {
    const themes = Object.keys(colorThemes);
    const currentIdx = themes.indexOf(state.colorTheme);
    state.colorTheme = themes[(currentIdx + 1) % themes.length];
    applySettings();
    saveSettings();
});

// Custom Theme Creator functionality
let customThemeData = {
    colors: {
        primary: '#6750A4',
        primaryContainer: '#E9DDFF',
        onPrimaryContainer: '#22005D',
        secondary: '#625B71',
        secondaryContainer: '#E8DEF8',
        tertiary: '#7E5260',
        tertiaryContainer: '#FFD9E3'
    },
    fonts: {
        primary: "'Google Sans', sans-serif"
    }
};

let currentColorPicker = null;
let colorPickerModal = null;
let colorPickerCanvas = null;
let hueCanvas = null;
let isDraggingCanvas = false;
let isDraggingHue = false;

function initializeCustomThemeCreator() {
    // Initialize color pickers with current theme values
    updateColorPickersFromCurrentTheme();

    // Setup color picker event listeners
    setupColorPickerListeners();

    // Setup font selection listener
    setupFontSelectionListener();

    // Setup theme action listeners
    setupThemeActionListeners();

    // Setup theme management listeners
    setupThemeManagementListeners();

    // Setup custom color picker modal
    setupCustomColorPicker();

    // Initial preview update
    updateThemePreview();
}

function updateColorPickersFromCurrentTheme() {
    const currentTheme = themeConfig.getTheme(state.colorTheme);
    if (currentTheme && currentTheme.colors) {
        customThemeData.colors = { ...currentTheme.colors };
        customThemeData.fonts = { ...currentTheme.fonts };
        updateColorPickerInputs();
        updateFontSelectionDisplay();
    }
}

function updateFontSelectionDisplay() {
    const fontSelect = document.getElementById('fontFamilySelect');
    const fontDisplay = document.getElementById('currentFontDisplay');

    if (fontSelect) {
        fontSelect.value = customThemeData.fonts.primary;
    }

    if (fontDisplay) {
        const fontName = themeConfig.availableFonts.find(f => f.family === customThemeData.fonts.primary)?.name || 'Google Sans';
        fontDisplay.textContent = `Current: ${fontName}`;
    }
}

function updateColorPickerInputs() {
    // Update color picker inputs
    document.getElementById('primaryColorPicker').value = customThemeData.colors.primary;
    document.getElementById('primaryColorText').value = customThemeData.colors.primary;
    document.getElementById('primaryContainerColorPicker').value = customThemeData.colors.primaryContainer;
    document.getElementById('primaryContainerColorText').value = customThemeData.colors.primaryContainer;
    document.getElementById('onPrimaryContainerColorPicker').value = customThemeData.colors.onPrimaryContainer;
    document.getElementById('onPrimaryContainerColorText').value = customThemeData.colors.onPrimaryContainer;
    document.getElementById('secondaryColorPicker').value = customThemeData.colors.secondary;
    document.getElementById('secondaryColorText').value = customThemeData.colors.secondary;
    document.getElementById('secondaryContainerColorPicker').value = customThemeData.colors.secondaryContainer;
    document.getElementById('secondaryContainerColorText').value = customThemeData.colors.secondaryContainer;
    document.getElementById('tertiaryColorPicker').value = customThemeData.colors.tertiary;
    document.getElementById('tertiaryColorText').value = customThemeData.colors.tertiary;
    document.getElementById('tertiaryContainerColorPicker').value = customThemeData.colors.tertiaryContainer;
    document.getElementById('tertiaryContainerColorText').value = customThemeData.colors.tertiaryContainer;

    // Update font selection
    document.getElementById('fontFamilySelect').value = customThemeData.fonts.primary;
}

function setupColorPickerListeners() {
    // Custom color picker click listeners
    const colorPickerIds = [
        'primary', 'primaryContainer', 'onPrimaryContainer',
        'secondary', 'secondaryContainer', 'tertiary', 'tertiaryContainer'
    ];

    colorPickerIds.forEach(id => {
        const colorPicker = document.getElementById(`${id}ColorPicker`);
        const textInput = document.getElementById(`${id}ColorText`);

        if (colorPicker) {
            colorPicker.addEventListener('click', (e) => {
                e.preventDefault();
                currentColorPicker = {
                    element: colorPicker,
                    colorKey: id,
                    currentColor: customThemeData.colors[id]
                };
                showColorPickerModal();
            });
        }

        if (textInput) {
            textInput.addEventListener('input', (e) => {
                const value = e.target.value.trim();
                if (/^#[0-9A-F]{6}$/i.test(value)) {
                    customThemeData.colors[id] = value;
                    updateColorPickerDisplay(id, value);
                    updateThemePreview();
                }
            });

            textInput.addEventListener('blur', (e) => {
                const value = e.target.value.trim();
                if (!/^#[0-9A-F]{6}$/i.test(value)) {
                    e.target.value = customThemeData.colors[id];
                }
            });
        }
    });
}

function setupFontSelectionListener() {
    const fontSelect = document.getElementById('fontFamilySelect');
    const fontDisplay = document.getElementById('currentFontDisplay');

    if (fontSelect) {
        fontSelect.addEventListener('change', (e) => {
            customThemeData.fonts.primary = e.target.value;
            updateFontSelectionDisplay();
            updateThemePreview();
        });
    }

    // Ensure font selection is visible
    if (fontSelect) {
        fontSelect.style.display = 'block';
        fontSelect.style.visibility = 'visible';
    }

    if (fontDisplay) {
        fontDisplay.style.display = 'block';
        fontDisplay.style.visibility = 'visible';
    }
}

function updateThemePreview() {
    const root = document.documentElement;

    // Apply preview colors as CSS custom properties
    root.style.setProperty('--preview-primary', customThemeData.colors.primary);
    root.style.setProperty('--preview-primary-container', customThemeData.colors.primaryContainer);
    root.style.setProperty('--preview-on-primary-container', customThemeData.colors.onPrimaryContainer);
    root.style.setProperty('--preview-secondary', customThemeData.colors.secondary);
    root.style.setProperty('--preview-secondary-container', customThemeData.colors.secondaryContainer);
    root.style.setProperty('--preview-tertiary', customThemeData.colors.tertiary);
    root.style.setProperty('--preview-tertiary-container', customThemeData.colors.tertiaryContainer);
    root.style.setProperty('--preview-font-family', customThemeData.fonts.primary);

    // Update preview elements
    const previewPrimary = document.getElementById('previewPrimary');
    const previewSecondary = document.getElementById('previewSecondary');
    const previewSurface = document.getElementById('previewSurface');

    if (previewPrimary) {
        previewPrimary.style.background = 'var(--preview-primary)';
        previewPrimary.style.color = customThemeData.colors.onPrimaryContainer;
        previewPrimary.style.fontFamily = customThemeData.fonts.primary;
    }

    if (previewSecondary) {
        previewSecondary.style.background = 'var(--preview-secondary-container)';
        previewSecondary.style.color = customThemeData.colors.onPrimaryContainer;
        previewSecondary.style.fontFamily = customThemeData.fonts.primary;
    }

    if (previewSurface) {
        previewSurface.style.background = 'var(--md-sys-color-surface-container)';
        previewSurface.style.color = 'var(--md-sys-color-on-surface)';
        previewSurface.style.fontFamily = customThemeData.fonts.primary;
    }
}

function setupThemeActionListeners() {
    // Reset to current theme
    document.getElementById('resetCustomTheme')?.addEventListener('click', () => {
        updateColorPickersFromCurrentTheme();
        updateThemePreview();
    });

    // Apply custom theme
    document.getElementById('applyCustomTheme')?.addEventListener('click', () => {
        applyCustomThemeToApp();
    });
}

function applyCustomThemeToApp() {
    const root = document.documentElement;

    // Apply the custom theme colors
    Object.entries(customThemeData.colors).forEach(([key, value]) => {
        root.style.setProperty(`--md-sys-color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
    });

    // Apply the custom font
    root.style.setProperty('--font-family-primary', customThemeData.fonts.primary);
    document.body.style.fontFamily = customThemeData.fonts.primary;

    // Update state
    state.fontFamily = customThemeData.fonts.primary;

    // Show success feedback
    showThemeAppliedFeedback();
}

function showThemeAppliedFeedback() {
    const applyBtn = document.getElementById('applyCustomTheme');
    const originalText = applyBtn.innerHTML;

    applyBtn.innerHTML = '<span class="material-icons-round">check</span> Applied!';
    applyBtn.style.background = 'var(--md-sys-color-primary)';
    applyBtn.style.color = 'var(--md-sys-color-on-primary)';

    setTimeout(() => {
        applyBtn.innerHTML = originalText;
        applyBtn.style.background = '';
        applyBtn.style.color = '';
    }, 2000);
}

function setupThemeManagementListeners() {
    // Save custom theme
    document.getElementById('saveCustomTheme')?.addEventListener('click', () => {
        const themeName = document.getElementById('themeNameInput').value.trim();
        if (themeName) {
            saveCustomTheme(themeName);
        } else {
            alert('Please enter a name for your theme.');
        }
    });

    // Export theme
    document.getElementById('exportTheme')?.addEventListener('click', () => {
        exportCurrentCustomTheme();
    });

    // Import theme
    document.getElementById('importTheme')?.addEventListener('click', () => {
        document.getElementById('importThemeFile').click();
    });

    // Import theme file change
    document.getElementById('importThemeFile')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            importThemeFromFile(file);
        }
    });
}

function setupCustomColorPicker() {
    colorPickerModal = document.getElementById('colorPickerModal');
    colorPickerCanvas = document.getElementById('colorPickerCanvas');
    hueCanvas = document.getElementById('hueCanvas');

    if (!colorPickerModal || !colorPickerCanvas || !hueCanvas) return;

    // Setup modal event listeners
    document.getElementById('cancelColorPicker')?.addEventListener('click', hideColorPickerModal);
    document.getElementById('applyColorPicker')?.addEventListener('click', applyColorPicker);

    // Setup canvas event listeners
    colorPickerCanvas.addEventListener('mousedown', startCanvasDrag);
    document.addEventListener('mousemove', handleCanvasDrag);
    document.addEventListener('mouseup', stopCanvasDrag);

    colorPickerCanvas.addEventListener('touchstart', handleCanvasTouch);
    colorPickerCanvas.addEventListener('touchmove', handleCanvasTouch);

    hueCanvas.addEventListener('mousedown', startHueDrag);
    document.addEventListener('mousemove', handleHueDrag);
    document.addEventListener('mouseup', stopHueDrag);

    hueCanvas.addEventListener('touchstart', handleHueTouch);
    hueCanvas.addEventListener('touchmove', handleHueTouch);

    // Setup input listeners
    document.getElementById('colorPickerHexInput')?.addEventListener('input', handleHexInput);
    document.getElementById('colorPickerAlpha')?.addEventListener('input', handleAlphaInput);

    // Setup preset colors
    document.querySelectorAll('.preset-color').forEach(preset => {
        preset.addEventListener('click', () => {
            const color = preset.dataset.color;
            setColorPickerColor(color);
        });
    });

    // Initialize canvases
    initializeColorPickerCanvases();
}

function showColorPickerModal() {
    if (!colorPickerModal || !currentColorPicker) return;

    colorPickerModal.classList.add('visible');
    document.getElementById('overlay').classList.add('visible');

    // Initialize color picker with current color
    setColorPickerColor(currentColorPicker.currentColor);
    drawColorPickerCanvases();
}

function hideColorPickerModal() {
    if (colorPickerModal) {
        colorPickerModal.classList.remove('visible');
        document.getElementById('overlay').classList.remove('visible');
    }
    currentColorPicker = null;
}

function applyColorPicker() {
    if (!currentColorPicker) return;

    const hexInput = document.getElementById('colorPickerHexInput');
    const alpha = document.getElementById('colorPickerAlpha').value;

    if (hexInput) {
        const color = hexInput.value + Math.round(alpha * 255).toString(16).padStart(2, '0');
        updateColorFromPicker(color);
    }

    hideColorPickerModal();
}

function updateColorFromPicker(color) {
    if (!currentColorPicker) return;

    customThemeData.colors[currentColorPicker.colorKey] = color;
    updateColorPickerDisplay(currentColorPicker.colorKey, color);
    updateThemePreview();
}

function updateColorPickerDisplay(colorKey, color) {
    const colorPicker = document.getElementById(`${colorKey}ColorPicker`);
    const textInput = document.getElementById(`${colorKey}ColorText`);

    if (colorPicker) {
        const swatch = colorPicker.querySelector('.color-swatch');
        const value = colorPicker.querySelector('.color-value');

        if (swatch) swatch.style.backgroundColor = color;
        if (value) value.textContent = color;
        colorPicker.dataset.color = color;
    }

    if (textInput) {
        textInput.value = color;
    }
}

function setColorPickerColor(color) {
    const hexInput = document.getElementById('colorPickerHexInput');
    const previewColor = document.getElementById('previewColor');
    const alphaSlider = document.getElementById('colorPickerAlpha');
    const alphaValue = document.getElementById('alphaValue');

    if (hexInput) hexInput.value = color.length > 7 ? color.substring(0, 7) : color;
    if (previewColor) previewColor.style.backgroundColor = color;
    if (alphaSlider) {
        const alpha = color.length > 7 ? parseInt(color.substring(7), 16) / 255 : 1;
        alphaSlider.value = alpha;
    }
    if (alphaValue) alphaValue.textContent = Math.round((color.length > 7 ? parseInt(color.substring(7), 16) / 255 : 1) * 100) + '%';

    // Parse color for canvas positioning
    const rgb = hexToRgb(color.length > 7 ? color.substring(0, 7) : color);
    if (rgb) {
        const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
        updateCanvasPositions(hsv.h, hsv.s, hsv.v);
    }
}

function initializeColorPickerCanvases() {
    drawHueCanvas();
    drawColorPickerCanvases();
}

function drawHueCanvas() {
    if (!hueCanvas) return;

    const ctx = hueCanvas.getContext('2d');
    const width = hueCanvas.width;
    const height = hueCanvas.height;

    for (let i = 0; i < width; i++) {
        const hue = (i / width) * 360;
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.fillRect(i, 0, 1, height);
    }
}

function drawColorPickerCanvases() {
    if (!colorPickerCanvas) return;

    const ctx = colorPickerCanvas.getContext('2d');
    const width = colorPickerCanvas.width;
    const height = colorPickerCanvas.height;

    const hexInput = document.getElementById('colorPickerHexInput');
    const hue = hexInput ? parseInt(hexInput.value.replace('#', '').substring(0, 2), 16) / 255 * 360 : 0;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const saturation = (x / width) * 100;
            const value = ((height - y) / height) * 100;
            ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${value}%)`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

function updateCanvasPositions(hue, saturation, value) {
    if (!colorPickerCanvas || !hueCanvas) return;

    // Update color picker cursor
    const canvasRect = colorPickerCanvas.getBoundingClientRect();
    const x = (saturation / 100) * canvasRect.width;
    const y = ((100 - value) / 100) * canvasRect.height;

    const cursor = document.getElementById('colorPickerCursor');
    if (cursor) {
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        cursor.style.display = 'block';
    }

    // Update hue cursor
    const hueRect = hueCanvas.getBoundingClientRect();
    const hueX = (hue / 360) * hueRect.width;

    const hueCursor = document.getElementById('huePickerCursor');
    if (hueCursor) {
        hueCursor.style.left = hueX + 'px';
        hueCursor.style.display = 'block';
    }
}

function startCanvasDrag(e) {
    isDraggingCanvas = true;
    handleCanvasDrag(e);
}

function handleCanvasDrag(e) {
    if (!isDraggingCanvas || !colorPickerCanvas) return;

    const rect = colorPickerCanvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

    const saturation = (x / rect.width) * 100;
    const value = ((rect.height - y) / rect.height) * 100;

    updateColorFromCanvas(saturation, value);
}

function startHueDrag(e) {
    isDraggingHue = true;
    handleHueDrag(e);
}

function handleHueDrag(e) {
    if (!isDraggingHue || !hueCanvas) return;

    const rect = hueCanvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const hue = (x / rect.width) * 360;

    updateHue(hue);
}

function stopCanvasDrag() {
    isDraggingCanvas = false;
}

function stopHueDrag() {
    isDraggingHue = false;
}

function handleCanvasTouch(e) {
    e.preventDefault();
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = colorPickerCanvas.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, touch.clientX - rect.left));
        const y = Math.max(0, Math.min(rect.height, touch.clientY - rect.top));

        const saturation = (x / rect.width) * 100;
        const value = ((rect.height - y) / rect.height) * 100;

        updateColorFromCanvas(saturation, value);
    }
}

function handleHueTouch(e) {
    e.preventDefault();
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = hueCanvas.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, touch.clientX - rect.left));
        const hue = (x / rect.width) * 360;

        updateHue(hue);
    }
}

function updateColorFromCanvas(saturation, value) {
    const hexInput = document.getElementById('colorPickerHexInput');
    const hue = hexInput ? parseInt(hexInput.value.replace('#', '').substring(0, 2), 16) / 255 * 360 : 0;

    const rgb = hsvToRgb(hue, saturation, value);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);

    if (hexInput) hexInput.value = hex;
    const previewColor = document.getElementById('previewColor');
    if (previewColor) previewColor.style.backgroundColor = hex;

    updateCanvasPositions(hue, saturation, value);
}

function updateHue(hue) {
    const hexInput = document.getElementById('colorPickerHexInput');
    if (hexInput) {
        const currentColor = hexInput.value;
        const rgb = hexToRgb(currentColor);
        if (rgb) {
            const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
            const newRgb = hsvToRgb(hue, hsv.s, hsv.v);
            const newHex = rgbToHex(newRgb.r, newRgb.g, newRgb.b);

            hexInput.value = newHex;
            const previewColor = document.getElementById('previewColor');
            if (previewColor) previewColor.style.backgroundColor = newHex;

            drawColorPickerCanvases();
            updateCanvasPositions(hue, hsv.s, hsv.v);
        }
    }
}

function handleHexInput(e) {
    const value = e.target.value.trim();
    if (/^#[0-9A-F]{6}$/i.test(value)) {
        setColorPickerColor(value);
        drawColorPickerCanvases();
    }
}

function handleAlphaInput(e) {
    const alpha = e.target.value;
    const alphaValue = document.getElementById('alphaValue');
    if (alphaValue) alphaValue.textContent = Math.round(alpha * 100) + '%';

    // Update preview with alpha if needed
    const hexInput = document.getElementById('colorPickerHexInput');
    if (hexInput) {
        const baseColor = hexInput.value;
        const previewColor = document.getElementById('previewColor');
        if (previewColor) {
            previewColor.style.backgroundColor = baseColor;
            previewColor.style.opacity = alpha;
        }
    }
}

// Utility functions for color conversion
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgbToHsv(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, v = max;

    const d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
        h = 0;
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: h * 360, s: s * 100, v: v * 100 };
}

function hsvToRgb(h, s, v) {
    h /= 360;
    s /= 100;
    v /= 100;

    let r, g, b;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function saveCustomTheme(themeName) {
    themeConfig.saveCustomTheme(themeName, {
        colors: customThemeData.colors,
        fonts: customThemeData.fonts,
        metadata: {
            description: `Custom theme created by user`,
            version: '1.0'
        }
    });

    // Update the custom themes list
    renderCustomThemesList();

    // Clear the input
    document.getElementById('themeNameInput').value = '';

    // Show success message
    alert(`Theme "${themeName}" saved successfully!`);
}

function exportCurrentCustomTheme() {
    const themeData = {
        name: 'My Custom Theme',
        colors: customThemeData.colors,
        fonts: customThemeData.fonts,
        metadata: {
            description: 'Exported custom theme',
            exported: new Date().toISOString()
        },
        exportDate: new Date().toISOString(),
        version: '1.0'
    };

    const blob = new Blob([JSON.stringify(themeData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lumina-custom-theme-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importThemeFromFile(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const themeData = JSON.parse(event.target.result);

            // Validate theme data
            if (!themeData.colors || !themeData.name) {
                throw new Error('Invalid theme file format');
            }

            // Import the theme
            const themeName = themeConfig.importTheme(themeData);

            // Update the custom theme data
            customThemeData.colors = { ...themeData.colors };
            customThemeData.fonts = themeData.fonts || { primary: "'Google Sans', sans-serif" };

            // Update the UI
            updateColorPickerInputs();
            updateThemePreview();

            // Update the custom themes list
            renderCustomThemesList();

            alert(`Theme "${themeName}" imported successfully!`);
        } catch (error) {
            alert('Error importing theme: ' + error.message);
        }
    };
    reader.readAsText(file);
}

function renderCustomThemesList() {
    const container = document.getElementById('customThemesList');
    const noThemesMsg = document.getElementById('noCustomThemes');

    const customThemes = themeConfig.getAllThemes();
    const customThemeNames = Object.keys(themeConfig.customThemes);

    if (customThemeNames.length === 0) {
        container.innerHTML = `
            <div class="no-custom-themes" id="noCustomThemes">
                <span class="material-icons-round">palette</span>
                <p>No custom themes yet. Create one above!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = customThemeNames.map(name => {
        const theme = customThemes[name];
        return `
            <div class="custom-theme-item" data-theme="${name}">
                <div class="custom-theme-colors">
                    <div class="custom-theme-color-swatch" style="background: ${theme.colors.primary}"></div>
                    <div class="custom-theme-color-swatch" style="background: ${theme.colors.secondary}"></div>
                    <div class="custom-theme-color-swatch" style="background: ${theme.colors.tertiary}"></div>
                </div>
                <div class="custom-theme-info">
                    <div class="custom-theme-name">${name}</div>
                    <div class="custom-theme-meta">Custom • ${theme.fonts?.primary ? 'Custom font' : 'Default font'}</div>
                </div>
                <div class="custom-theme-actions">
                    <button class="custom-theme-btn apply" data-theme="${name}" title="Apply Theme">
                        <span class="material-icons-round">preview</span>
                    </button>
                    <button class="custom-theme-btn delete" data-theme="${name}" title="Delete Theme">
                        <span class="material-icons-round">delete</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners for custom theme actions
    container.querySelectorAll('.custom-theme-btn.apply').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const themeName = btn.dataset.theme;
            applyCustomThemeFromList(themeName);
        });
    });

    container.querySelectorAll('.custom-theme-btn.delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const themeName = btn.dataset.theme;
            if (confirm(`Delete custom theme "${themeName}"?`)) {
                deleteCustomTheme(themeName);
            }
        });
    });

    // Add click listener to theme items
    container.querySelectorAll('.custom-theme-item').forEach(item => {
        item.addEventListener('click', () => {
            const themeName = item.dataset.theme;
            loadCustomThemeForEditing(themeName);
        });
    });
}

function applyCustomThemeFromList(themeName) {
    const theme = themeConfig.getTheme(themeName);
    if (theme) {
        const root = document.documentElement;

        // Apply colors
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--md-sys-color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
        });

        // Apply font
        if (theme.fonts?.primary) {
            root.style.setProperty('--font-family-primary', theme.fonts.primary);
            document.body.style.fontFamily = theme.fonts.primary;
            state.fontFamily = theme.fonts.primary;
        }

        // Update state
        state.colorTheme = themeName;
        state.fontFamily = theme.fonts?.primary || "'Google Sans', sans-serif";

        saveSettings();
        showThemeAppliedFeedback();
    }
}

function deleteCustomTheme(themeName) {
    themeConfig.deleteCustomTheme(themeName);
    renderCustomThemesList();

    // If this theme was currently applied, reset to default
    if (state.colorTheme === themeName) {
        state.colorTheme = 'amethyst';
        applySettings();
        saveSettings();
    }
}

function loadCustomThemeForEditing(themeName) {
    const theme = themeConfig.getTheme(themeName);
    if (theme) {
        customThemeData.colors = { ...theme.colors };
        customThemeData.fonts = { ...theme.fonts };

        updateColorPickerInputs();
        updateThemePreview();

        // Switch to the custom theme tab
        const customThemeHeader = document.getElementById('customThemeHeader');
        if (customThemeHeader) {
            customThemeHeader.click();
        }
    }
}

// Dynamic color grid optimization for mobile devices
function optimizeColorGridForMobile() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Only apply optimizations when in mobile mode
    if (!isInMobileMode()) return;

    const colorGrid = document.querySelector('.color-grid');
    const settingsPanel = document.querySelector('.settings-panel');

    if (!colorGrid || !settingsPanel) return;

    const screenWidth = window.innerWidth;
    const browserInfo = window.luminaBrowserInfo;

    // Apply mobile-specific color grid optimizations
    if (browserInfo && browserInfo.isVerySmallScreen) {
        // Very small screens: 6 columns, minimal spacing
        colorGrid.style.gridTemplateColumns = 'repeat(6, 1fr)';
        colorGrid.style.gap = '4px';
        colorGrid.style.overflowX = 'auto';
        colorGrid.style.scrollSnapType = 'x mandatory';

        // Make color options smaller
        const colorOptions = colorGrid.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.style.minWidth = '40px';
            option.style.minHeight = '40px';
            option.style.borderRadius = '12px';
            option.style.borderWidth = '1px';
        });

    } else if (screenWidth <= 768) {
        // Standard mobile: 4 columns
        colorGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
        colorGrid.style.gap = '8px';

        const colorOptions = colorGrid.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.style.borderRadius = '16px';
            option.style.borderWidth = '2px';
        });
    }

    // Touch optimizations for color selection
    if (browserInfo && browserInfo.hasTouch) {
        const colorOptions = colorGrid.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.style.touchAction = 'manipulation';
            option.style.cursor = 'pointer';
        });
    }
}

// Initialize custom theme creator when settings panel opens
document.getElementById('settingsBtn').addEventListener('click', () => {
    setTimeout(() => {
        initializeCustomThemeCreator();
        renderCustomThemesList();
        optimizeColorGridForMobile();

        // RADICAL NEW APPROACH: Calculate exact content height and ensure visibility
        const settingsPanel = document.querySelector('.mobile-mode .settings-panel');
        const settingsContent = document.querySelector('.mobile-mode .settings-content');

        if (settingsPanel && settingsContent) {
            // Use requestAnimationFrame for accurate measurements
            requestAnimationFrame(() => {
                // Calculate total content height
                const contentHeight = settingsContent.scrollHeight;
                const viewportHeight = window.innerHeight;
                const headerHeight = 80; // Approximate header height

                // If content is taller than viewport, ensure enough space
                if (contentHeight > viewportHeight - headerHeight) {
                    // Add dynamic padding based on content height
                    const neededPadding = Math.max(150, contentHeight - viewportHeight + headerHeight + 100);
                    settingsContent.style.paddingBottom = neededPadding + 'px';

                    // Force layout recalculation
                    settingsContent.offsetHeight;

                    // Ensure test toggle is visible
                    setTimeout(() => {
                        const testToggle = document.getElementById('testToggle');
                        if (testToggle) {
                            // Calculate position of test toggle
                            const togglePosition = testToggle.offsetTop;
                            const panelHeight = settingsPanel.offsetHeight;

                            // If toggle is near bottom, add extra spacing
                            if (togglePosition > panelHeight - 200) {
                                testToggle.style.marginBottom = '200px';
                                testToggle.style.paddingBottom = '100px';
                            }
                        }

                        // Final scroll adjustment
                        settingsContent.scrollTop = Math.max(0, contentHeight - viewportHeight + headerHeight);
                    }, 50);
                }
            });
        }
    }, 100);
});

document.getElementById('infoBtn').addEventListener('click', () => {
    document.getElementById('infoModal').classList.add('visible');
    document.getElementById('overlay').classList.add('visible');
});

document.getElementById('closeInfo').addEventListener('click', () => {
    document.getElementById('infoModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
});

// Markdown help modal
const notesHelpBtn = document.getElementById('notesHelpBtn');
if (notesHelpBtn) {
    notesHelpBtn.addEventListener('click', () => {
        document.getElementById('markdownHelpModal').classList.add('visible');
        document.getElementById('overlay').classList.add('visible');
    });
}

document.getElementById('closeMarkdownHelp').addEventListener('click', () => {
    document.getElementById('markdownHelpModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
});

document.getElementById('closeKeyboardShortcuts').addEventListener('click', () => {
    document.getElementById('keyboardShortcutsModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
    localStorage.setItem('lumina-keyboard-shortcuts-seen', 'true');
});

let confirmCallback = null;

function showConfirmModal(message, callback) {
    const modal = document.getElementById('confirmModal');
    const overlay = document.getElementById('overlay');

    // Update the message if provided
    if (message) {
        const messageEl = modal.querySelector('.modal-title');
        messageEl.textContent = message;
    }

    confirmCallback = callback;
    modal.classList.add('visible');
    overlay.classList.add('visible');
}

document.getElementById('confirmDelete').addEventListener('click', () => {
    if (confirmCallback) {
        confirmCallback();
        confirmCallback = null;
    }
    document.getElementById('confirmModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
});

document.getElementById('cancelConfirm').addEventListener('click', () => {
    confirmCallback = null;
    document.getElementById('confirmModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
});

let recognition;
let isListening = false;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        isListening = true;
        const voiceSearchBtn = document.getElementById('voiceSearchBtn');

        if (voiceSearchBtn) {
            voiceSearchBtn.style.background = 'var(--md-sys-color-error-container)';
            voiceSearchBtn.querySelector('.material-icons-round').textContent = 'mic_off';
        }
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('searchInput').value = transcript;
        performSearch(transcript);
    };

    recognition.onend = () => {
        isListening = false;
        const voiceSearchBtn = document.getElementById('voiceSearchBtn');
        if (voiceSearchBtn) {
            voiceSearchBtn.style.background = '';
            voiceSearchBtn.querySelector('.material-icons-round').textContent = 'mic';
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        isListening = false;
        const voiceSearchBtn = document.getElementById('voiceSearchBtn');

        if (voiceSearchBtn) {
            voiceSearchBtn.style.background = '';
            voiceSearchBtn.querySelector('.material-icons-round').textContent = 'mic';
        }
    };
}

document.getElementById('voiceSearchBtn').addEventListener('click', () => {
    if (!recognition) {
        alert('Voice search is not supported in this browser. Please use Chrome or Edge.');
        return;
    }

    if (isListening) {
        recognition.stop();
    } else {
        recognition.start();
    }
});

document.getElementById('searchHistoryBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    openSearchHistoryModal();
});

// Clear all history button in modal
document.getElementById('clearAllHistoryBtn').addEventListener('click', () => {
    if (confirm('Clear all search history?')) {
        state.searchHistory = [];
        saveSettings();
        renderSearchHistoryModal();
    }
});

document.getElementById('closeSearchHistoryModal').addEventListener('click', () => {
    document.getElementById('searchHistoryModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
});

document.getElementById('settingsBtn').addEventListener('click', () => {
    document.getElementById('settingsPanel').classList.add('open');
    document.getElementById('overlay').classList.add('visible');
});

document.getElementById('closeSettings').addEventListener('click', () => {
    document.getElementById('settingsPanel').classList.remove('open');
    document.getElementById('overlay').classList.remove('visible');
});

document.getElementById('devOptionsHeader').addEventListener('click', () => {
    const group = document.getElementById('devOptionsGroup');
    group.classList.toggle('collapsed');
});

document.getElementById('mobileModeHeader').addEventListener('click', () => {
    const group = document.getElementById('mobileModeGroup');
    group.classList.toggle('collapsed');
});

document.getElementById('customThemeHeader').addEventListener('click', () => {
    const group = document.getElementById('customThemeGroup');
    group.classList.toggle('collapsed');
});

document.getElementById('themeManagementHeader').addEventListener('click', () => {
    const group = document.getElementById('themeManagementGroup');
    group.classList.toggle('collapsed');
});

document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('settingsPanel').classList.remove('open');
    document.getElementById('shortcutModal').classList.remove('visible');
    document.getElementById('infoModal').classList.remove('visible');
    document.getElementById('confirmModal').classList.remove('visible');
    document.getElementById('markdownHelpModal').classList.remove('visible');
    document.getElementById('bookmarkModal').classList.remove('visible');
    document.getElementById('keyboardShortcutsModal').classList.remove('visible');
    document.getElementById('searchHistoryModal').classList.remove('visible');
    document.getElementById('funnyModal').classList.remove('visible');
    document.getElementById('calendarEventModal').classList.remove('visible');

    document.getElementById('notesSidebar').classList.remove('open');
    document.getElementById('bookmarksSidebar').classList.remove('open');

    document.getElementById('overlay').classList.remove('visible');
    confirmCallback = null; // Reset callback when clicking overlay

    // Remove any event selection modals
    const eventSelectionModal = document.querySelector('.modal .event-list');
    if (eventSelectionModal) {
        const modal = eventSelectionModal.closest('.modal');
        if (modal) modal.remove();
    }
});

// Simple event listener attachment
document.getElementById('weatherToggle')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.showWeather = !state.showWeather;
    applySettings();
    saveSettings();
    if (state.showWeather) loadWeather();
});

document.getElementById('clockToggle')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.showClock = !state.showClock;
    applySettings();
    saveSettings();
    if (state.showClock) updateClock();
});

document.getElementById('calendarToggle')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.showCalendar = !state.showCalendar;
    applySettings();
    saveSettings();
    if (state.showCalendar) updateCalendar();
});


document.getElementById('shortcutsToggle')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.showShortcuts = !state.showShortcuts;
    applySettings();
    saveSettings();
});

document.getElementById('greetingToggle')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.showGreeting = !state.showGreeting;
    applySettings();
    saveSettings();
    if (state.showGreeting) updateGreeting();
});


document.getElementById('searchSuggestionsToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.searchSuggestions = !state.searchSuggestions;
    applySettings();
    saveSettings();
});


document.getElementById('openInSameTabToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.openInSameTab = !state.openInSameTab;
    applySettings();
    saveSettings();
});

document.getElementById('shiftEnterToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.shiftEnter = !state.shiftEnter;
    applySettings();
    saveSettings();
});

// Mobile mode toggle event listeners
document.getElementById('forceMobileModeToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.forceMobileMode = !state.forceMobileMode;
    // Disable desktop mode if enabling mobile mode
    if (state.forceMobileMode) {
        state.forceDesktopMode = false;
    }
    applySettings();
    saveSettings();
});

document.getElementById('forceDesktopModeToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.forceDesktopMode = !state.forceDesktopMode;
    // Disable mobile mode if enabling desktop mode
    if (state.forceDesktopMode) {
        state.forceMobileMode = false;
    }
    applySettings();
    saveSettings();
});

document.getElementById('hideWidgetsOnMobileToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.hideWidgetsOnMobile = !state.hideWidgetsOnMobile;
    applySettings();
    saveSettings();
});

document.getElementById('hideKeyboardShortcutsOnMobileToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.hideKeyboardShortcutsOnMobile = !state.hideKeyboardShortcutsOnMobile;
    applySettings();
    saveSettings();
});

document.getElementById('mobileOptimizedSearchToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.mobileOptimizedSearch = !state.mobileOptimizedSearch;
    applySettings();
    saveSettings();
});

document.getElementById('manualCity').addEventListener('input', (e) => {
    state.manualCity = e.target.value;
    saveSettings();
    if (state.manualCity && state.showWeather) {
        loadWeather();
    }
});

document.getElementById('searchEngine').addEventListener('change', (e) => {
    state.searchEngine = e.target.value;
    const customInput = document.getElementById('customSearchEngine');

    if (e.target.value === 'custom') {
        customInput.style.display = 'block';
        customInput.focus();
    } else {
        customInput.style.display = 'none';
    }

    saveSettings();
});

document.getElementById('customSearchEngine').addEventListener('input', (e) => {
    state.customSearchEngine = e.target.value;
    saveSettings();
});

document.getElementById('exportBtn').addEventListener('click', () => {
    const data = {
        settings: state,
        version: '1.0',
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lumina-settings-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFile').click();
});

document.getElementById('importBookmarksBtn').addEventListener('click', () => {
    document.getElementById('importBookmarksFile').click();
});

document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                if (data.settings) {
                    Object.assign(state, data.settings);
                    applySettings();
                    saveSettings();
                    loadWeather();
                    alert('Settings imported successfully!');
                } else {
                    alert('Invalid settings file format.');
                }
            } catch (error) {
                alert('Error reading settings file: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
});

document.getElementById('importBookmarksFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const htmlContent = event.target.result;
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlContent, 'text/html');

                // Parse HTML bookmark file
                const bookmarks = [];
                const links = doc.querySelectorAll('a');

                links.forEach(link => {
                    const url = link.getAttribute('href');
                    const title = link.textContent.trim();
                    if (url && title && url.startsWith('http')) {
                        bookmarks.push({
                            id: Date.now() + Math.random(),
                            name: title.length > 50 ? title.substring(0, 50) + '...' : title,
                            url: url,
                            icon: 'link',
                            category: 'Imported'
                        });
                    }
                });

                if (bookmarks.length > 0) {
                    state.bookmarks = [...state.bookmarks, ...bookmarks];
                    saveSettings();
                    renderBookmarks();
                    alert(`Successfully imported ${bookmarks.length} bookmarks!`);
                } else {
                    alert('No valid bookmarks found in the HTML file.');
                }
            } catch (error) {
                alert('Error reading bookmarks file: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
});

document.getElementById('backgroundImageBtn').addEventListener('click', () => {
    document.getElementById('backgroundImageFile').click();
});

document.getElementById('backgroundImageFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            state.backgroundImage = event.target.result;
            applySettings();
            saveSettings();
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('removeBackgroundBtn').addEventListener('click', () => {
    state.backgroundImage = '';
    applySettings();
    saveSettings();
});

document.getElementById('backgroundOpacity').addEventListener('input', (e) => {
    state.backgroundOpacity = parseFloat(e.target.value);
    const backgroundImage = document.getElementById('backgroundImage');
    backgroundImage.style.opacity = state.backgroundOpacity;
    saveSettings();
});

document.getElementById('backgroundShapesToggle')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.showBackgroundShapes = !state.showBackgroundShapes;
    applySettings();
    saveSettings();
});

document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all settings to default?')) {
        Object.assign(state, JSON.parse(JSON.stringify(defaultState)));
        // Update default auto dark mode based on current system preference
        state.autoDarkMode = detectSystemDarkMode();
        applySettings();
        saveSettings();
        loadWeather();
    }
});

document.getElementById('addShortcut').addEventListener('click', () => {
    const label = document.getElementById('shortcutLabel').value.trim();
    const url = document.getElementById('shortcutUrl').value.trim();
    const icon = document.getElementById('shortcutIcon').value.trim();

    if (label && url && icon) {
        state.shortcuts.push({label, url, icon});
        document.getElementById('shortcutLabel').value = '';
        document.getElementById('shortcutUrl').value = '';
        document.getElementById('shortcutIcon').value = '';
        document.getElementById('shortcutModal').classList.remove('visible');
        document.getElementById('overlay').classList.remove('visible');
        renderShortcuts();
        saveSettings();
    }
});

document.getElementById('cancelShortcut').addEventListener('click', () => {
    document.getElementById('shortcutLabel').value = '';
    document.getElementById('shortcutUrl').value = '';
    document.getElementById('shortcutIcon').value = '';
    document.getElementById('shortcutModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
});

document.getElementById('addBookmark').addEventListener('click', () => {
    const name = document.getElementById('bookmarkLabel').value.trim();
    const url = document.getElementById('bookmarkUrl').value.trim();
    const icon = document.getElementById('bookmarkIcon').value.trim() || 'link';
    const category = document.getElementById('bookmarkCategory').value.trim() || 'General';

    if (name && url) {
        state.bookmarks.push({
            id: Date.now(),
            name,
            url,
            icon,
            category
        });
        document.getElementById('bookmarkLabel').value = '';
        document.getElementById('bookmarkUrl').value = '';
        document.getElementById('bookmarkIcon').value = '';
        document.getElementById('bookmarkCategory').value = '';
        document.getElementById('bookmarkModal').classList.remove('visible');
        document.getElementById('overlay').classList.remove('visible');
        renderBookmarks();
        saveSettings();
    }
});

document.getElementById('cancelBookmark').addEventListener('click', () => {
    document.getElementById('bookmarkLabel').value = '';
    document.getElementById('bookmarkUrl').value = '';
    document.getElementById('bookmarkIcon').value = '';
    document.getElementById('bookmarkCategory').value = '';
    document.getElementById('bookmarkModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
});

// Calendar Event Modal Event Listeners
document.getElementById('saveEvent').addEventListener('click', saveEvent);

document.getElementById('cancelEvent').addEventListener('click', () => {
    document.getElementById('calendarEventModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
});

// Color selection for events
document.querySelectorAll('.modal .color-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.modal .color-option').forEach(opt => {
            opt.classList.remove('active');
        });
        option.classList.add('active');
    });
});

document.getElementById('funnyOkayBtn').addEventListener('click', () => {
    document.getElementById('funnyModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
});

document.getElementById('funnyDieBtn').addEventListener('click', () => {
    try {
        // Try to close the current tab (works in most browsers)
        window.close();
    } catch (e) {
        console.log('💀 SELF-DESTRUCT SEQUENCE INITIATED 💀');
        // Create a funny "crash" effect
        document.body.innerHTML = `
            <div style="
                position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                background: black; color: red; font-family: monospace;
                display: flex; align-items: center; justify-content: center;
                font-size: 48px; z-index: 999999;
                animation: blink 0.1s infinite;
            ">
                💀 SYSTEM CRASH 💀<br>
                <span style="font-size: 24px; margin-top: 20px;">
                    You chose... poorly
                </span>
            </div>
            <style>
                @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
            </style>
        `;

        setTimeout(() => {
            window.close();
        }, 3000);
    }
});

document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('settingsPanel').classList.remove('open');
    document.getElementById('shortcutModal').classList.remove('visible');

    document.getElementById('notesSidebar').classList.remove('open');
    document.getElementById('bookmarksSidebar').classList.remove('open');

    document.getElementById('overlay').classList.remove('visible');
});

document.addEventListener('keydown', (e) => {
    const isTyping = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';
    if (isTyping && !['Control', 'n', '/', 'x', 'b'].includes(e.key.toLowerCase())) {
        return;
    }

    if (e.ctrlKey || e.metaKey) {
        switch(e.key.toLowerCase()) {
            case 'n':
                e.preventDefault();
                window.open('', '_blank');
                break;
            case '/':
                e.preventDefault();
                // Show keyboard shortcuts modal
                document.getElementById('keyboardShortcutsModal').classList.add('visible');
                document.getElementById('overlay').classList.add('visible');
                break;
            case 'x':
                e.preventDefault();
                document.getElementById('searchInput').focus();
                break;
            case 'b':
                e.preventDefault();
                document.getElementById('bookmarksToggle').click();
                break;
        }
    }
});

function showKeyboardShortcutsTutorial() {
    const hasSeenTutorial = localStorage.getItem('lumina-keyboard-shortcuts-seen');
    if (!hasSeenTutorial) {
        setTimeout(() => {
            document.getElementById('keyboardShortcutsModal').classList.add('visible');
            document.getElementById('overlay').classList.add('visible');
        }, 2000); // Show after 2 seconds
    }
}

document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        performSearch(query);
    }
});

// Search button functionality (desktop mode only)
document.getElementById('searchBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        performSearch(query);
    }
});

document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (state.shiftEnter) {
        if (e.key === 'Enter' && e.shiftKey) {
            e.preventDefault();
            document.getElementById('searchForm').dispatchEvent(new Event('submit'));
        }
    } else {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            document.getElementById('searchForm').dispatchEvent(new Event('submit'));
        }
    }
});

let suggestionsTimeout;

document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const autoSuggestions = document.getElementById('searchAutoSuggestions');

    clearTimeout(suggestionsTimeout);

    suggestionsTimeout = setTimeout(() => {
        const container = document.getElementById('searchDropdownsContainer');

        const matchingHistory = state.searchHistory.filter(historyItem =>
            historyItem.toLowerCase().includes(query) && query.length > 0
        ).slice(0, 4);

        if (matchingHistory.length > 0) {
            autoSuggestions.innerHTML = matchingHistory.map(historyItem => `
                <div class="auto-suggestion-item" data-suggestion="${historyItem}">
                    <span class="material-icons-round">history</span>
                    <span>${historyItem}</span>
                </div>
            `).join('');

            autoSuggestions.querySelectorAll('.auto-suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    const suggestion = item.dataset.suggestion;
                    document.getElementById('searchInput').value = suggestion;
                    const container = document.getElementById('searchDropdownsContainer');
                    autoSuggestions.classList.remove('show');
                    setTimeout(() => {
                        autoSuggestions.style.display = 'none';
                        container.style.minHeight = '0';
                    }, 300);
                    performSearch(suggestion);
                });
            });

            autoSuggestions.style.display = 'block';
            const dynamicHeight = Math.min(matchingHistory.length * 48 + 16, 160);
            container.style.minHeight = dynamicHeight + 'px';
            setTimeout(() => {
                autoSuggestions.classList.add('show');
            }, 10);
        } else {
            autoSuggestions.classList.remove('show');
            setTimeout(() => {
                autoSuggestions.style.display = 'none';
                if (document.getElementById('searchHistoryDropdown').style.display === 'none') {
                    container.style.minHeight = '0';
                }
            }, 300);
        }

        const historyDropdown = document.getElementById('searchHistoryDropdown');
        if (historyDropdown) {
            historyDropdown.style.display = 'none';
        }
    }, 150);
});

document.querySelectorAll('.auto-suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
        const suggestion = item.dataset.suggestion;
        const searchInput = document.getElementById('searchInput');

        // Create search query based on suggestion
        let searchQuery = '';
        switch(suggestion) {
            case 'Google':
                searchQuery = `site:google.com ${searchInput.value}`;
                break;
            case 'YouTube':
                searchQuery = `site:youtube.com ${searchInput.value}`;
                break;
            case 'GitHub':
                searchQuery = `site:github.com ${searchInput.value}`;
                break;
            case 'Stack Overflow':
                searchQuery = `site:stackoverflow.com ${searchInput.value}`;
                break;
            case 'Reddit':
                searchQuery = `site:reddit.com ${searchInput.value}`;
                break;
            default:
                searchQuery = searchInput.value;
        }

        // Perform search and hide suggestions
        const container = document.getElementById('searchDropdownsContainer');
        const autoSuggestions = document.getElementById('searchAutoSuggestions');
        autoSuggestions.classList.remove('show');
        setTimeout(() => {
            autoSuggestions.style.display = 'none';
            container.style.minHeight = '0';
        }, 300);
        performSearch(searchQuery);
    });
});

document.addEventListener('click', (e) => {
    const autoSuggestions = document.getElementById('searchAutoSuggestions');
    const searchHistory = document.getElementById('searchHistoryDropdown');
    const searchInput = document.getElementById('searchInput');
    const historyBtn = document.getElementById('searchHistoryBtn');
    const container = document.getElementById('searchDropdownsContainer');

    if (!autoSuggestions?.contains(e.target) && !searchHistory?.contains(e.target) &&
        !searchInput?.contains(e.target) && !historyBtn?.contains(e.target)) {
        if (autoSuggestions) {
            autoSuggestions.classList.remove('show');
            setTimeout(() => {
                autoSuggestions.style.display = 'none';
            }, 300);
        }
        if (searchHistory) searchHistory.style.display = 'none';
        if (container) container.style.minHeight = '0';
    }
});

function updateClock() {
    if (!state.showClock) return;

    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('clockTime').textContent = time;
    document.getElementById('clockDate').textContent = date;
}

function updateGreeting() {
    if (!state.showGreeting) return;

    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Good morning!';
    } else if (hour < 17) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    document.getElementById('greetingText').textContent = greeting;
}

function setupNotes() {
    const notesSidebar = document.getElementById('notesSidebar');
    const notesToggle = document.getElementById('notesToggle');
    const notesClose = document.getElementById('notesClose');
    const notesTextarea = document.getElementById('notesTextarea');
    const notesTitleInput = document.getElementById('notesTitleInput');
    const notesTabsContainer = document.getElementById('notesTabs');
    const notesPreview = document.getElementById('notesPreview');
    const notesHelpBtn = document.getElementById('notesHelpBtn');

    console.log('Notes elements:', {
        notesSidebar,
        notesToggle,
        notesClose,
        notesTextarea,
        notesTitleInput,
        notesTabsContainer,
        notesPreview,
        notesHelpBtn
    });

    if (!notesSidebar || !notesToggle || !notesClose) {
        console.error('Critical notes elements are missing');
        return;
    }

    notesToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        notesSidebar.classList.toggle('open');
    });
    notesClose.addEventListener('click', (e) => {
        e.stopPropagation();
        notesSidebar.classList.remove('open');
    });

    // Prevent clicks inside notes sidebar from closing it
    notesSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    const renderNotes = () => {
        notesTabsContainer.innerHTML = '';

        state.notes.forEach(note => {
            const tab = document.createElement('button');
            tab.className = `notes-tab ${note.id === state.currentNoteId ? 'active' : ''}`;
            tab.dataset.id = note.id;
            tab.draggable = true;
            tab.innerHTML = `
                <span class="material-icons-round">note</span>
                <span class="note-title" contenteditable="false">${note.title}</span>
                <button class="notes-tab-delete" data-id="${note.id}"><span class="material-icons-round">close</span></button>
            `;
            notesTabsContainer.appendChild(tab);
        });

        const addBtn = document.createElement('button');
        addBtn.className = 'notes-add';
        addBtn.id = 'addNoteTab';
        addBtn.innerHTML = `<span class="material-icons-round">add</span>`;
        notesTabsContainer.appendChild(addBtn);

        attachNoteEventListeners();
    };

    const attachNoteEventListeners = () => {
        document.querySelectorAll('.notes-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                if (e.target.closest('.notes-tab-delete')) return;

                const currentNote = state.notes.find(n => n.id === state.currentNoteId);
                if (currentNote) {
                    currentNote.content = notesTextarea.value;
                }

                state.currentNoteId = Number(tab.dataset.id);
                const newNote = state.notes.find(n => n.id === state.currentNoteId);
                notesTitleInput.value = newNote ? newNote.title : '';
                notesTextarea.value = newNote ? newNote.content : '';

                if (notesPreview.style.display !== 'none') {
                    updatePreview();
                }

                saveSettings();
                renderNotes();
            });

            tab.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', tab.dataset.id);
                e.dataTransfer.effectAllowed = 'move';
            });

            tab.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                tab.classList.add('drag-over');
            });

            tab.addEventListener('dragleave', () => {
                tab.classList.remove('drag-over');
            });

            tab.addEventListener('drop', (e) => {
                e.preventDefault();
                tab.classList.remove('drag-over');
                const draggedId = Number(e.dataTransfer.getData('text/plain'));
                const targetId = Number(tab.dataset.id);

                const draggedIndex = state.notes.findIndex(n => n.id === draggedId);
                const targetIndex = state.notes.findIndex(n => n.id === targetId);

                if (draggedIndex > -1 && targetIndex > -1) {
                    const [draggedItem] = state.notes.splice(draggedIndex, 1);
                    state.notes.splice(targetIndex, 0, draggedItem);
                    saveSettings();
                    renderNotes();

                    // Initialize notes todo display
                    updateNotesTodo();
                }
            });
        });

        document.querySelectorAll('.note-title').forEach(titleEl => {
            titleEl.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                titleEl.contentEditable = true;
                titleEl.focus();

                // Select all text for easy editing
                const range = document.createRange();
                range.selectNodeContents(titleEl);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            });

            titleEl.addEventListener('blur', () => {
                titleEl.contentEditable = false;
                const noteId = Number(titleEl.closest('.notes-tab').dataset.id);
                const note = state.notes.find(n => n.id === noteId);
                if (note) {
                    note.title = titleEl.textContent.trim() || 'Untitled Note';
                    saveSettings();
                }
            });

            titleEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    titleEl.blur();
                }
                if (e.key === 'Escape') {
                    titleEl.textContent = state.notes.find(n => n.id === Number(titleEl.closest('.notes-tab').dataset.id))?.title || 'Untitled Note';
                    titleEl.contentEditable = false;
                    titleEl.blur();
                }
            });

            // Prevent click events when editing
            titleEl.addEventListener('click', (e) => {
                if (titleEl.contentEditable === 'true') {
                    e.stopPropagation();
                }
            });
        });

        document.querySelectorAll('.notes-tab-delete').forEach(deleteBtn => {
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const noteId = Number(deleteBtn.dataset.id);
                const noteTitle = state.notes.find(n => n.id === noteId)?.title || 'this note';

                // Show custom confirmation modal
                showConfirmModal(`Delete "${noteTitle}"?`, () => {
                    // Confirmed deletion
                    state.notes = state.notes.filter(n => n.id !== noteId);
                    if (state.currentNoteId === noteId) {
                        state.currentNoteId = state.notes.length > 0 ? state.notes[0].id : null;
                        if (state.currentNoteId) {
                            const newNote = state.notes.find(n => n.id === state.currentNoteId);
                            notesTitleInput.value = newNote.title;
                            notesTextarea.value = newNote.content;
                        } else {
                            notesTitleInput.value = '';
                            notesTextarea.value = '';
                        }
                    }
                    saveSettings();
                    renderNotes();
                });
            });
        });

        const addNoteTab = document.getElementById('addNoteTab');
        if(addNoteTab) {
            addNoteTab.addEventListener('click', () => {
                const newNote = {
                    id: Date.now(),
                    title: 'New Note',
                    content: ''
                };
                state.notes.push(newNote);
                state.currentNoteId = newNote.id;
                notesTitleInput.value = newNote.title;
                notesTextarea.value = '';

                if (notesPreview.style.display !== 'none') {
                    updatePreview();
                }

                saveSettings();
                renderNotes();
            });
        }
    };

    function parseMarkdown(text) {
        if (!text) return '';

        return text
            // Headers
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')

            // Bold and italic
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')

            // Strikethrough
            .replace(/~~(.*?)~~/g, '<del>$1</del>')

            // Code blocks
            .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')

            // Inline code
            .replace(/`([^`]+)`/g, '<code>$1</code>')

            // Links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')

            // Blockquotes
            .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')

            // Lists
            .replace(/^\* (.*$)/gim, '<li>$1</li>')
            .replace(/^- (.*$)/gim, '<li>$1</li>')
            .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')

            // Wrap consecutive list items in ul/ol
            .replace(/(<li>.*<\/li>)/g, function(match) {
                const items = match.split('</li>').filter(item => item.trim());
                if (items.length > 1) {
                    return '<ul>' + items.map(item => item + '</li>').join('') + '</ul>';
                }
                return match;
            })

            // Paragraphs
            .replace(/\n\n/g, '</p><p>')
            .replace(/^/, '<p>')
            .replace(/$/, '</p>');
    }

    function updatePreview() {
        const markdownText = notesTextarea.value;
        const htmlContent = parseMarkdown(markdownText);
        notesPreview.innerHTML = htmlContent;
    }

    function togglePreviewMode() {
        const isPreview = notesPreview.style.display !== 'none';
        if (isPreview) {
            notesPreview.style.display = 'none';
            notesTextarea.style.display = 'block';
            notesTextarea.focus();
        } else {
            updatePreview();
            notesPreview.style.display = 'block';
            notesTextarea.style.display = 'none';
        }
    }

    notesTitleInput.addEventListener('input', () => {
        const currentNote = state.notes.find(n => n.id === state.currentNoteId);
        if (currentNote) {
            currentNote.title = notesTitleInput.value.trim() || 'Untitled Note';
            saveSettings();
            renderNotes(); // Update the tab title as well
        }
    });

    notesTextarea.addEventListener('input', () => {
        const currentNote = state.notes.find(n => n.id === state.currentNoteId);
        if (currentNote) {
            currentNote.content = notesTextarea.value;
            saveSettings();
            if (notesPreview.style.display !== 'none') {
                updatePreview();
            }
        }
    });

    const previewToggle = document.createElement('button');
    previewToggle.className = 'notes-preview-toggle';
    previewToggle.innerHTML = '<span class="material-icons-round">visibility</span>';
    previewToggle.title = 'Toggle Preview';
    previewToggle.onclick = togglePreviewMode;

    const notesContainer = document.querySelector('.notes-container');
    if (notesContainer) {
        notesContainer.appendChild(previewToggle);
    }

    if (state.notes.length > 0) {
        if (!state.currentNoteId || !state.notes.some(n => n.id === state.currentNoteId)) {
            state.currentNoteId = state.notes[0].id;
        }
        const currentNote = state.notes.find(n => n.id === state.currentNoteId);
        notesTitleInput.value = currentNote ? currentNote.title : '';
        notesTextarea.value = currentNote ? currentNote.content : '';
        notesTextarea.placeholder = 'Start writing your note...';

        if (notesPreview && notesPreview.style.display !== 'none') {
            updatePreview();
        }
    } else {
        notesTitleInput.value = '';
        notesTextarea.value = '';
        notesTextarea.placeholder = 'Create your first note by clicking the + button above.';
        state.currentNoteId = null;
    }

    renderNotes();

    // Setup notes todo functionality after render
    setTimeout(() => {
        try {
            console.log('Setting up notes todo functionality...');
            setupNotesTodo();
        } catch (e) {
            console.error('Error setting up notes todo:', e);
        }
    }, 500); // Increased delay to ensure DOM is ready
}

function refreshCategoryFilter() {
    const categoryFilter = document.getElementById('todoCategoryFilter');
    const categoryInput = document.getElementById('notesTodoCategoryInput');

    if (categoryFilter && state.todos) {
        const uniqueCategories = [...new Set(state.todos.map(todo => todo.category || 'General'))];
        console.log('Refreshing category filter with categories:', uniqueCategories);
        categoryFilter.innerHTML = '<option value="">All Categories</option>' +
            uniqueCategories.map(cat => `<option value="${cat}">${cat}</option>`).join('');

        // Also update the input dropdown
        if (categoryInput) {
            uniqueCategories.forEach(cat => {
                if (!categoryInput.querySelector(`option[value="${cat}"]`)) {
                    const option = document.createElement('option');
                    option.value = cat;
                    option.textContent = cat;
                    categoryInput.appendChild(option);
                }
            });
        }
    }
}

function setupNotesTodo() {
    try {
        const notesTodoAddBtn = document.getElementById('notesTodoAddBtn');
        const notesTodoSaveBtn = document.getElementById('notesTodoSaveBtn');
        const notesTodoCancelBtn = document.getElementById('notesTodoCancelBtn');
        const notesTodoInput = document.getElementById('notesTodoInput');
        const todoCategoryFilter = document.getElementById('todoCategoryFilter');

        console.log('Notes todo elements:', {
            notesTodoAddBtn,
            notesTodoSaveBtn,
            notesTodoCancelBtn,
            notesTodoInput,
            todoCategoryFilter
        });

        // Setup event listeners regardless of sidebar state - they'll work when sidebar opens
        const notesSidebar = document.getElementById('notesSidebar');
        if (!notesSidebar) {
            console.log('Notes sidebar not found, skipping todo setup');
            return;
        }

        // Setup event listeners only if elements exist
        if (notesTodoAddBtn) {
            notesTodoAddBtn.addEventListener('click', showNotesTodoInput);
        }

        if (notesTodoSaveBtn) {
            notesTodoSaveBtn.addEventListener('click', saveNotesTodoItem);
        }

        if (notesTodoCancelBtn) {
            notesTodoCancelBtn.addEventListener('click', hideNotesTodoInput);
        }

        if (notesTodoInput) {
            notesTodoInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    saveNotesTodoItem();
                }
            });
        }

        if (todoCategoryFilter) {
            todoCategoryFilter.addEventListener('change', (e) => {
                console.log('Category filter changed to:', e.target.value);
                updateNotesTodo();
            });
        }

        // Initialize todo display and category filter
        console.log('Initializing todo display with existing todos:', state.todos ? state.todos.length : 0);
        refreshCategoryFilter();
        if (state.todos && state.todos.length > 0) {
            updateNotesTodo();
        }
    } catch (e) {
        console.error('Error in setupNotesTodo:', e);
    }
}

function setupWidgetDragging() {
    try {
        const widgets = ['weather', 'clock', 'calendar'];

        console.log('Widget elements:', widgets.map(id => ({
            id,
            element: document.getElementById(id)
        })));

        widgets.forEach(widgetId => {
            const widget = document.getElementById(widgetId);
            if (!widget) return;

            let isDragging = false;
            let startX, startY, startLeft, startTop;

            widget.addEventListener('mousedown', (e) => {
                // Check if clicking on interactive elements within widgets
                const interactiveSelectors = [
                    '.weather-temp', '.weather-desc', '.weather-location',
                    '.clock-time', '.clock-date',
                    '.calendar-header', '.calendar-grid',
                    '.todo-header', '.todo-list', '.todo-add',
                ];

                if (e.target.closest(interactiveSelectors.join(', '))) {
                    return;
                }

                isDragging = true;
                widget.classList.add('dragging');

                startX = e.clientX;
                startY = e.clientY;
                const rect = widget.getBoundingClientRect();
                startLeft = rect.left;
                startTop = rect.top;

                e.preventDefault();
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging || !widget) return;

                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;

                const widgetRect = widget.getBoundingClientRect();
                const widgetWidth = widgetRect.width;
                const widgetHeight = widgetRect.height;

                // Calculate new position with boundary constraints
                let newLeft = startLeft + deltaX;
                let newTop = startTop + deltaY;

                // Boundary constraints - keep widget fully visible
                const minLeft = 0;
                const minTop = 0;
                const maxLeft = window.innerWidth - widgetWidth;
                const maxTop = window.innerHeight - widgetHeight;

                newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
                newTop = Math.max(minTop, Math.min(newTop, maxTop));

                // Direct position update - no transitions or transforms
                widget.style.left = newLeft + 'px';
                widget.style.top = newTop + 'px';
                widget.style.right = 'auto';
                widget.style.bottom = 'auto';
            });

            document.addEventListener('mouseup', () => {
                if (isDragging && widget) {
                    isDragging = false;
                    widget.classList.remove('dragging');

                    const rect = widget.getBoundingClientRect();
                    const position = { left: rect.left, top: rect.top };

                    if(widgetId === 'weather') state.weatherPosition = position;
                    if(widgetId === 'clock') state.clockPosition = position;
                    if(widgetId === 'calendar') state.calendarPosition = position;

                    saveSettings();
                }
            });
        });
    } catch (e) {
        console.error('Error setting up widget dragging:', e);
    }
}

let currentCalendarDate = new Date();

function updateCalendar() {
    if (!state.showCalendar) return;

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById('calendarMonth').textContent =
        `${monthNames[currentCalendarDate.getMonth()]} ${currentCalendarDate.getFullYear()}`;

    const grid = document.getElementById('calendarGrid');
    const firstDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), 1);
    const lastDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let html = dayNames.map(day => `<div class="calendar-day-header">${day}</div>`).join('');

    for (let i = 0; i < startingDay; i++) {
        html += '<div class="calendar-day"></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = new Date().toDateString() === new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), day).toDateString();
        const dateString = `${currentCalendarDate.getFullYear()}-${(currentCalendarDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const dayEvents = getEventsForDate(dateString);

        let eventsHtml = '';
        if (dayEvents.length > 0) {
            eventsHtml = dayEvents.slice(0, 2).map((event, index) => `
                <div class="calendar-event-dot" style="background-color: ${event.color || '#3498db'};" title="${event.title}" data-event-id="${event.id}" data-event-index="${index}"></div>
            `).join('');

            if (dayEvents.length > 2) {
                eventsHtml += `<div class="calendar-event-more" title="${dayEvents.length - 2} more events">+${dayEvents.length - 2}</div>`;
            }
        }

        html += `<div class="calendar-day ${isToday ? 'today' : ''}" data-date="${dateString}">
            <div class="calendar-day-number">${day}</div>
            <div class="calendar-events">${eventsHtml}</div>
        </div>`;
    }

    grid.innerHTML = html;

    // Add click listeners to calendar days for adding/managing events
    document.querySelectorAll('.calendar-day[data-date]').forEach(dayEl => {
        dayEl.addEventListener('click', (e) => {
            // Don't trigger if clicking on an event dot (handled separately)
            if (e.target.closest('.calendar-event-dot')) return;

            const date = dayEl.dataset.date;
            const dayEvents = getEventsForDate(date);

            if (dayEvents.length > 0) {
                // Show event selection modal for dates with existing events
                showEventSelectionModal(date, dayEvents);
            } else {
                // Show add event modal for empty dates
                showEventModal(date);
            }
        });
    });

    // Add click listeners to event dots for editing
    document.querySelectorAll('.calendar-event-dot[data-event-id]').forEach(dotEl => {
        dotEl.addEventListener('click', (e) => {
            e.stopPropagation();
            const eventId = dotEl.dataset.eventId;
            const event = state.calendarEvents.find(ev => ev.id == eventId);
            if (event) {
                showEventModal(event.date, event);
            }
        });

        // Add hover effects and tooltips
        dotEl.addEventListener('mouseenter', (e) => {
            dotEl.style.transform = 'scale(1.2)';
            dotEl.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
            dotEl.style.zIndex = '10';

            // Show tooltip with event title
            const tooltip = document.createElement('div');
            tooltip.className = 'event-tooltip';
            tooltip.textContent = dotEl.title;
            tooltip.style.position = 'absolute';
            tooltip.style.bottom = '20px';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.background = 'var(--md-sys-color-surface-container-highest)';
            tooltip.style.color = 'var(--md-sys-color-on-surface)';
            tooltip.style.padding = '4px 8px';
            tooltip.style.borderRadius = '6px';
            tooltip.style.fontSize = '11px';
            tooltip.style.whiteSpace = 'nowrap';
            tooltip.style.boxShadow = 'var(--shadow-2)';
            tooltip.style.zIndex = '1003';
            tooltip.style.pointerEvents = 'none';

            dotEl.appendChild(tooltip);
        });

        dotEl.addEventListener('mouseleave', () => {
            dotEl.style.transform = 'scale(1)';
            dotEl.style.boxShadow = 'none';
            dotEl.style.zIndex = '';

            // Remove tooltip
            const tooltip = dotEl.querySelector('.event-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

function getEventsForDate(dateString) {
    return state.calendarEvents.filter(event => event.date === dateString);
}

function showEventModal(date = null, eventToEdit = null) {
    const modal = document.getElementById('calendarEventModal');
    const overlay = document.getElementById('overlay');

    // Reset form
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDescription').value = '';
    document.getElementById('eventDate').value = date || new Date().toISOString().split('T')[0];
    document.getElementById('eventStartTime').value = '';
    document.getElementById('eventEndTime').value = '';
    document.getElementById('eventCategory').value = '';

    // Reset color selection
    document.querySelectorAll('.modal .color-option').forEach(opt => {
        opt.classList.remove('active');
    });
    document.querySelector('.modal .color-option').classList.add('active');

    if (eventToEdit) {
        // Edit mode
        document.getElementById('eventTitle').value = eventToEdit.title;
        document.getElementById('eventDescription').value = eventToEdit.description || '';
        document.getElementById('eventDate').value = eventToEdit.date;
        document.getElementById('eventStartTime').value = eventToEdit.startTime || '';
        document.getElementById('eventEndTime').value = eventToEdit.endTime || '';
        document.getElementById('eventCategory').value = eventToEdit.category || '';

        // Set active color
        document.querySelectorAll('.modal .color-option').forEach(opt => {
            if (opt.dataset.color === eventToEdit.color) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        // Update modal title and button text
        modal.querySelector('.modal-title').textContent = 'Edit Calendar Event';
        document.getElementById('saveEvent').textContent = 'Update Event';

        // Store event ID for update
        document.getElementById('saveEvent').dataset.editId = eventToEdit.id;
    } else {
        // Add mode
        modal.querySelector('.modal-title').textContent = 'Add Calendar Event';
        document.getElementById('saveEvent').textContent = 'Save Event';
        delete document.getElementById('saveEvent').dataset.editId;
    }

    modal.classList.add('visible');
    overlay.classList.add('visible');
}

function saveEvent() {
    const title = document.getElementById('eventTitle').value.trim();
    const description = document.getElementById('eventDescription').value.trim();
    const date = document.getElementById('eventDate').value;
    const startTime = document.getElementById('eventStartTime').value;
    const endTime = document.getElementById('eventEndTime').value;
    const category = document.getElementById('eventCategory').value.trim();

    const activeColorOption = document.querySelector('.modal .color-option.active');
    const color = activeColorOption ? activeColorOption.dataset.color : '#3498db';

    if (!title || !date) {
        alert('Please fill in at least the title and date.');
        return;
    }

    const editId = document.getElementById('saveEvent').dataset.editId;

    if (editId) {
        // Update existing event
        const eventIndex = state.calendarEvents.findIndex(e => e.id == editId);
        if (eventIndex !== -1) {
            state.calendarEvents[eventIndex] = {
                ...state.calendarEvents[eventIndex],
                title,
                description,
                date,
                startTime,
                endTime,
                category,
                color
            };
        }
    } else {
        // Create new event
        const newEvent = {
            id: Date.now() + Math.random(),
            title,
            description,
            date,
            startTime,
            endTime,
            category,
            color
        };
        state.calendarEvents.push(newEvent);
    }

    saveSettings();
    updateCalendar();

    // Close modal
    document.getElementById('calendarEventModal').classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible');
}

function deleteEvent(eventId) {
    const event = state.calendarEvents.find(e => e.id == eventId);
    const eventTitle = event ? event.title : 'this event';

    showConfirmModal(`Delete "${eventTitle}"?`, () => {
        state.calendarEvents = state.calendarEvents.filter(e => e.id != eventId);
        saveSettings();
        updateCalendar();
    });
}

function updateTodo() {
    if (!state.showTodo) return;

    const todoList = document.getElementById('todoList');
    if (!state.todos) state.todos = [];

    todoList.innerHTML = state.todos.map((todo, index) => `
        <div class="todo-item">
            <button class="todo-checkbox ${todo.completed ? 'checked' : ''}" data-index="${index}">
                ${todo.completed ? '✓' : ''}
            </button>
            <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <span class="todo-category ${todo.category || 'General'}">${todo.category || 'General'}</span>
            <button class="todo-delete" data-index="${index}">
                <span class="material-icons-round">close</span>
            </button>
        </div>
    `).join('');

    document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            const index = parseInt(checkbox.dataset.index);
            state.todos[index].completed = !state.todos[index].completed;
            saveSettings();
        });
    });

    document.querySelectorAll('.todo-delete').forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            const index = parseInt(deleteBtn.dataset.index);
            state.todos.splice(index, 1);
            updateTodo();
            saveSettings();
        });
    });
}

// New notes-integrated todo functions
function updateNotesTodo() {
    const todoList = document.getElementById('notesTodoList');
    const categoryFilter = document.getElementById('todoCategoryFilter');
    if (!todoList) return;

    if (!state.todos) state.todos = [];

    // Update category filter options
    if (categoryFilter) {
        refreshCategoryFilter();
    }

    // Filter todos based on selected category
    const selectedCategory = categoryFilter ? categoryFilter.value : '';
    const filteredTodos = selectedCategory ?
        state.todos.filter(todo => (todo.category || 'General') === selectedCategory) :
        state.todos;

    todoList.innerHTML = filteredTodos.map((todo, index) => `
        <div class="notes-todo-item" data-index="${index}">
            <button class="notes-todo-checkbox ${todo.completed ? 'checked' : ''}">
                ${todo.completed ? '✓' : ''}
            </button>
            <span class="notes-todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <span class="notes-todo-category">${todo.category || 'General'}</span>
            <button class="notes-todo-edit" data-index="${index}">
                <span class="material-icons-round">edit</span>
            </button>
            <button class="notes-todo-delete" data-index="${index}">
                <span class="material-icons-round">close</span>
            </button>
        </div>
    `).join('');

    // Add event listeners
    document.querySelectorAll('.notes-todo-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(e.target.closest('.notes-todo-item').dataset.index);
            const actualIndex = selectedCategory ?
                state.todos.findIndex(todo => (todo.category || 'General') === selectedCategory && state.todos.indexOf(todo) === index) :
                index;
            if (actualIndex !== -1) {
                state.todos[actualIndex].completed = !state.todos[actualIndex].completed;
                updateNotesTodo();
                saveSettings();
            }
        });
    });

    document.querySelectorAll('.notes-todo-delete').forEach(deleteBtn => {
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(e.target.closest('.notes-todo-item').dataset.index);
            const actualIndex = selectedCategory ?
                state.todos.findIndex(todo => (todo.category || 'General') === selectedCategory && state.todos.indexOf(todo) === index) :
                index;
            if (actualIndex !== -1) {
                state.todos.splice(actualIndex, 1);
                saveSettings();
                refreshCategoryFilter(); // Refresh categories after deletion
                updateNotesTodo();
            }
        });
    });

    document.querySelectorAll('.notes-todo-edit').forEach(editBtn => {
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = e.target.closest('.notes-todo-item');
            const index = parseInt(item.dataset.index);
            const actualIndex = selectedCategory ?
                state.todos.findIndex(todo => (todo.category || 'General') === selectedCategory && state.todos.indexOf(todo) === index) :
                index;
            if (actualIndex !== -1) {
                editNotesTodoItem(actualIndex);
            }
        });
    });
}

function showNotesTodoInput() {
    const inputArea = document.getElementById('notesTodoInputArea');
    const input = document.getElementById('notesTodoInput');
    const categoryInput = document.getElementById('notesTodoCategoryInput');

    if (inputArea && input && categoryInput) {
        inputArea.style.display = 'flex';
        input.focus();
        input.value = '';
        categoryInput.value = 'General';
        console.log('Todo input area shown');
    } else {
        console.error('Todo input elements not found:', {
            inputArea,
            input,
            categoryInput
        });
    }
}

function hideNotesTodoInput() {
    const inputArea = document.getElementById('notesTodoInputArea');
    inputArea.style.display = 'none';
}

function saveNotesTodoItem() {
    const input = document.getElementById('notesTodoInput');
    const categoryInput = document.getElementById('notesTodoCategoryInput');
    const text = input.value.trim();
    const category = categoryInput.value;

    if (text) {
        if (!state.todos) state.todos = [];
        state.todos.push({
            text,
            completed: false,
            category: category || 'General'
        });
        saveSettings();
        refreshCategoryFilter(); // Refresh the category filter with new categories
        updateNotesTodo();
        hideNotesTodoInput();
        console.log('Todo saved with category:', category);
    } else {
        console.log('No text entered for todo');
    }
}

function editNotesTodoItem(index) {
    const todo = state.todos[index];
    if (!todo) return;

    const inputArea = document.getElementById('notesTodoInputArea');
    const input = document.getElementById('notesTodoInput');
    const categoryInput = document.getElementById('notesTodoCategoryInput');

    inputArea.style.display = 'flex';
    input.focus();
    input.value = todo.text;
    categoryInput.value = todo.category || 'General';

    // Replace save functionality temporarily
    const saveBtn = document.getElementById('notesTodoSaveBtn');
    const originalClick = saveBtn.onclick;
    saveBtn.onclick = () => {
        const newText = input.value.trim();
        const newCategory = categoryInput.value;
        if (newText) {
            state.todos[index] = {
                text: newText,
                completed: todo.completed,
                category: newCategory || 'General'
            };
            saveSettings();
            refreshCategoryFilter(); // Refresh the category filter
            updateNotesTodo();
            hideNotesTodoInput();
            saveBtn.onclick = originalClick;
            console.log('Todo edited with category:', newCategory);
        }
    };

    // Add escape key to cancel edit
    const cancelBtn = document.getElementById('notesTodoCancelBtn');
    const originalCancelClick = cancelBtn.onclick;
    cancelBtn.onclick = () => {
        hideNotesTodoInput();
        saveBtn.onclick = originalClick;
        cancelBtn.onclick = originalCancelClick;
    };
}


document.getElementById('calendarPrev').addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    updateCalendar();
});

document.getElementById('calendarNext').addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    updateCalendar();
});

// Add Event button
document.getElementById('addEventBtn').addEventListener('click', () => {
    showEventModal();
});

// Show event selection modal for dates with existing events
function showEventSelectionModal(date, events) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.maxWidth = '500px';

    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    modal.innerHTML = `
        <div class="modal-title">
            Events for ${formattedDate}
        </div>
        <div class="event-list" style="max-height: 300px; overflow-y: auto; margin: 20px 0;">
            ${events.map(event => `
                <div class="event-item" data-event-id="${event.id}" style="
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px;
                    margin-bottom: 8px;
                    background: var(--md-sys-color-surface-container-high);
                    border-radius: 12px;
                    border-left: 4px solid ${event.color || '#3498db'};
                    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                    cursor: pointer;
                ">
                    <div class="event-color-dot" style="
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        background-color: ${event.color || '#3498db'};
                        flex-shrink: 0;
                    "></div>
                    <div class="event-info" style="flex: 1;">
                        <div class="event-title" style="
                            font-weight: 600;
                            color: var(--md-sys-color-on-surface);
                            margin-bottom: 4px;
                        ">${event.title}</div>
                        ${event.description ? `<div class="event-description" style="
                            font-size: 13px;
                            color: var(--md-sys-color-on-surface-variant);
                            margin-bottom: 4px;
                        ">${event.description}</div>` : ''}
                        <div class="event-time" style="
                            font-size: 12px;
                            color: var(--md-sys-color-on-surface-variant);
                        ">
                            ${event.startTime ? `${event.startTime}${event.endTime ? ' - ' + event.endTime : ''}` : 'All day'}
                            ${event.category ? ` • ${event.category}` : ''}
                        </div>
                    </div>
                    <div class="event-actions" style="display: flex; gap: 4px;">
                        <button class="event-btn edit" data-event-id="${event.id}" style="
                            width: 32px;
                            height: 32px;
                            border-radius: 16px;
                            border: none;
                            background: var(--md-sys-color-primary-container);
                            color: var(--md-sys-color-on-primary-container);
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.3s;
                        ">
                            <span class="material-icons-round" style="font-size: 16px;">edit</span>
                        </button>
                        <button class="event-btn delete" data-event-id="${event.id}" style="
                            width: 32px;
                            height: 32px;
                            border-radius: 16px;
                            border: none;
                            background: var(--md-sys-color-error-container);
                            color: var(--md-sys-color-on-error-container);
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.3s;
                        ">
                            <span class="material-icons-round" style="font-size: 16px;">delete</span>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="modal-actions">
            <button class="modal-btn secondary" id="closeEventSelection">Close</button>
            <button class="modal-btn primary" id="addNewEvent">
                <span class="material-icons-round">add</span>
                Add New Event
            </button>
        </div>
    `;

    modal.classList.add('visible');
    document.getElementById('overlay').classList.add('visible');
    document.body.appendChild(modal);

    // Handle edit buttons
    modal.querySelectorAll('.event-btn.edit').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const eventId = btn.dataset.eventId;
            const event = events.find(ev => ev.id == eventId);
            if (event) {
                modal.remove();
                document.getElementById('overlay').classList.remove('visible');
                showEventModal(event.date, event);
            }
        });

        // Hover effects for edit buttons
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.background = 'var(--md-sys-color-primary)';
            btn.style.color = 'var(--md-sys-color-on-primary)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.background = 'var(--md-sys-color-primary-container)';
            btn.style.color = 'var(--md-sys-color-on-primary-container)';
        });
    });

    // Handle delete buttons
    modal.querySelectorAll('.event-btn.delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const eventId = btn.dataset.eventId;

            deleteEvent(eventId);
            modal.remove();
            document.getElementById('overlay').classList.remove('visible');

        });

        // Hover effects for delete buttons
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.background = '#ff5252';
            btn.style.color = 'white';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.background = 'var(--md-sys-color-error-container)';
            btn.style.color = 'var(--md-sys-color-on-error-container)';
        });
    });

    // Handle close button
    document.getElementById('closeEventSelection').addEventListener('click', () => {
        modal.remove();
        document.getElementById('overlay').classList.remove('visible');
    });

    // Handle add new event button
    document.getElementById('addNewEvent').addEventListener('click', () => {
        modal.remove();
        document.getElementById('overlay').classList.remove('visible');
        showEventModal(date);
    });

    // Click on event item to view details
    modal.querySelectorAll('.event-item').forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't trigger if clicking on action buttons
            if (e.target.closest('.event-actions')) return;

            const eventId = item.dataset.eventId;
            const event = events.find(ev => ev.id == eventId);
            if (event) {
                showEventDetails(event);
            }
        });
    });
}

function showEventDetails(event) {
    // Create a simple details modal
    const detailsModal = document.createElement('div');
    detailsModal.className = 'modal';
    detailsModal.innerHTML = `
        <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background-color: ${event.color || '#3498db'};"></div>
            ${event.title}
        </div>
        <div style="line-height: 1.6; color: var(--md-sys-color-on-surface); margin: 20px 0;">
            ${event.description ? `<p><strong>Description:</strong> ${event.description}</p>` : ''}
            <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
            ${event.startTime ? `<p><strong>Start:</strong> ${event.startTime}</p>` : ''}
            ${event.endTime ? `<p><strong>End:</strong> ${event.endTime}</p>` : ''}
            ${event.category ? `<p><strong>Category:</strong> ${event.category}</p>` : ''}
        </div>
        <div class="modal-actions">
            <button class="modal-btn primary" id="closeEventDetails">Close</button>
            <button class="modal-btn secondary" id="editFromDetails">Edit Event</button>
        </div>
    `;

    detailsModal.style.maxWidth = '400px';
    detailsModal.classList.add('visible');
    document.getElementById('overlay').classList.add('visible');
    document.body.appendChild(detailsModal);

    // Handle buttons
    document.getElementById('closeEventDetails').addEventListener('click', () => {
        detailsModal.remove();
        document.getElementById('overlay').classList.remove('visible');
    });

    document.getElementById('editFromDetails').addEventListener('click', () => {
        detailsModal.remove();
        document.getElementById('overlay').classList.remove('visible');
        showEventModal(event.date, event);
    });
}

// Only setup standalone todo widget if elements exist (for backward compatibility)
const todoAddBtn = document.getElementById('todoAddBtn');
const todoInput = document.getElementById('todoInput');

if (todoAddBtn && todoInput) {
    todoAddBtn.addEventListener('click', () => {
        const text = todoInput.value.trim();
        if (text) {
            if (!state.todos) state.todos = [];
            state.todos.push({ text, completed: false });
            todoInput.value = '';
            updateTodo();
            saveSettings();
        }
    });

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            todoAddBtn.click();
        }
    });
}

setInterval(updateClock, 1000);

// Handle window resize for mobile detection and greeting positioning
window.addEventListener('resize', () => {
    const wasMobile = state.isMobile;
    state.isMobile = detectMobileDevice();

    // Only reapply settings if mobile state changed
    if (wasMobile !== state.isMobile) {
        applySettings();
    } else {
        // Still adjust greeting position even if mobile state didn't change
        // This handles zoom level changes
        adjustGreetingPosition();
    }

    // Dynamic search bar optimization for very small screens
    optimizeSearchBarForScreenSize();
});

// Dynamic search bar optimization based on screen size and device capabilities
function optimizeSearchBarForScreenSize() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Only apply optimizations when in mobile mode
    if (!isInMobileMode()) return;

    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    const voiceSearchBtn = document.querySelector('.voice-search-btn');

    if (!searchContainer || !searchInput || !voiceSearchBtn) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const browserInfo = window.luminaBrowserInfo;

    // Apply specific optimizations based on device characteristics - only for mobile
    if (browserInfo && browserInfo.isVerySmallScreen) {
        // Very small screens (≤480px)
        searchInput.style.fontSize = '16px'; // Prevent zoom on iOS
        searchContainer.style.padding = '4px 8px';
        voiceSearchBtn.style.width = '28px';
        voiceSearchBtn.style.height = '28px';

        const icon = voiceSearchBtn.querySelector('.material-icons-round');
        if (icon) icon.style.fontSize = '16px';

    } else if (screenWidth <= 768) {
        // Standard mobile screens
        searchInput.style.fontSize = '16px';
        searchContainer.style.padding = '6px 12px';
        voiceSearchBtn.style.width = '32px';
        voiceSearchBtn.style.height = '32px';

        const icon = voiceSearchBtn.querySelector('.material-icons-round');
        if (icon) icon.style.fontSize = '18px';

    } else if (screenWidth <= 1024) {
        // Tablets
        searchInput.style.fontSize = '16px';
        searchContainer.style.padding = '8px 16px';
        voiceSearchBtn.style.width = '36px';
        voiceSearchBtn.style.height = '36px';

        const icon = voiceSearchBtn.querySelector('.material-icons-round');
        if (icon) icon.style.fontSize = '20px';
    }

    // High DPI display optimizations
    if (browserInfo && browserInfo.devicePixelRatio > 1) {
        searchInput.style.webkitTextSizeAdjust = '100%';
        searchInput.style.textSizeAdjust = '100%';

        const searchIcon = document.querySelector('.search-icon');
        if (searchIcon) {
            searchIcon.style.webkitFontSmoothing = 'antialiased';
            searchIcon.style.MozOsxFontSmoothing = 'grayscale';
        }
    }

    // Touch device optimizations
    if (browserInfo && browserInfo.hasTouch) {
        searchContainer.style.touchAction = 'manipulation';
        searchInput.style.webkitTapHighlightColor = 'rgba(0, 0, 0, 0.1)';

        // Increase touch targets for better usability
        if (screenWidth <= 768) {
            searchContainer.style.minHeight = '44px'; // iOS recommended minimum
        }
    }
}

loadSettings();
loadWeather();
updateClock();
updateGreeting();
updateCalendar();

// Setup functions with error handling
try {
    setupNotes();
} catch (e) {
    console.error('Error setting up notes:', e);
}

try {
    setupBookmarks();
} catch (e) {
    console.error('Error setting up bookmarks:', e);
}

try {
    setupWidgetDragging();
} catch (e) {
    console.error('Error setting up widget dragging:', e);
}

showKeyboardShortcutsTutorial();

