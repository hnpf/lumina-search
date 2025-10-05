const colorThemes = {
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
};

const state = {
    darkMode: false,
    colorTheme: 'amethyst',
    showWeather: true,
    showShortcuts: true,
    showAnimations: false,
    searchSuggestions: true,
    animatedBlobs: false,
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
    todos: [],
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
    weatherPosition: null,
    clockPosition: null,
    calendarPosition: null,
    todoPosition: null,
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

// Mobile device detection function
function detectMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;

    return isMobileUA || (isTouchDevice && isSmallScreen);
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
        Object.assign(state, JSON.parse(saved));
    }

    // Detect mobile device on load
    state.isMobile = detectMobileDevice();

    applySettings();
}

function saveSettings() {
    localStorage.setItem('searchSettings', JSON.stringify(state));
}

function applyColorTheme(themeName) {
    const theme = colorThemes[themeName];
    const root = document.documentElement;
    root.style.setProperty('--md-sys-color-primary', theme.primary);
    root.style.setProperty('--md-sys-color-primary-container', theme.primaryContainer);
    root.style.setProperty('--md-sys-color-on-primary-container', theme.onPrimaryContainer);
    root.style.setProperty('--md-sys-color-secondary', theme.secondary);
    root.style.setProperty('--md-sys-color-secondary-container', theme.secondaryContainer);
    root.style.setProperty('--md-sys-color-tertiary', theme.tertiary);
    root.style.setProperty('--md-sys-color-tertiary-container', theme.tertiaryContainer);
}

function applySettings() {
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    document.getElementById('darkModeBtn').querySelector('.material-icons-round').textContent =
        state.darkMode ? 'light_mode' : 'dark_mode';

    const darkModeSwitch = document.querySelector('#darkModeToggle .switch');
    if (darkModeSwitch) darkModeSwitch.classList.toggle('active', state.darkMode);

    applyColorTheme(state.colorTheme);

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
    document.getElementById('todoWidget').style.display = (state.showTodo && !hideWidgetsOnMobile) ? 'block' : 'none';

    const backgroundImage = document.getElementById('backgroundImage');
    if (state.backgroundImage) {
        backgroundImage.style.backgroundImage = `url(${state.backgroundImage})`;
        backgroundImage.style.opacity = state.backgroundOpacity;
    } else {
        backgroundImage.style.backgroundImage = '';
        backgroundImage.style.opacity = '0';
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

    if (state.todoPosition) {
        const todo = document.getElementById('todoWidget');
        todo.style.left = state.todoPosition.left + 'px';
        todo.style.top = state.todoPosition.top + 'px';
        todo.style.right = 'auto';
    }


    document.getElementById('searchSuggestions').style.display = state.searchSuggestions ? 'flex' : 'none';
    document.body.classList.toggle('animated-blobs', state.animatedBlobs);

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

    const mainToggles = ['showWeather', 'showClock', 'showCalendar', 'showTodo', 'showShortcuts', 'showGreeting', 'showAnimations'];
    document.querySelectorAll('.toggle-option').forEach((opt, idx) => {
        const sw = opt.querySelector('.switch');
        if (mainToggles[idx]) {
            sw.classList.toggle('active', state[mainToggles[idx]]);
        }
    });


    const devToggles = [
        {id: 'searchSuggestionsToggle', key: 'searchSuggestions'},
        {id: 'animatedBlobsToggle', key: 'animatedBlobs'},
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
    }

    renderColorGrid();
    renderShortcuts();
    renderSearchSuggestions();
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

document.getElementById('darkModeBtn').addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    applySettings();
    saveSettings();
});

document.getElementById('themeBtn').addEventListener('click', () => {
    const themes = Object.keys(colorThemes);
    const currentIdx = themes.indexOf(state.colorTheme);
    state.colorTheme = themes[(currentIdx + 1) % themes.length];
    applySettings();
    saveSettings();
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

    document.getElementById('notesSidebar').classList.remove('open');
    document.getElementById('bookmarksSidebar').classList.remove('open');

    document.getElementById('overlay').classList.remove('visible');
    confirmCallback = null; // Reset callback when clicking overlay
});

document.querySelectorAll('.toggle-option').forEach((opt, idx) => {
    opt.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const keys = ['showWeather', 'showClock', 'showCalendar', 'showTodo', 'showShortcuts', 'showGreeting', 'showAnimations'];
        if (keys[idx]) {
            state[keys[idx]] = !state[keys[idx]];
            applySettings();
            saveSettings();
            if (keys[idx] === 'showWeather' && state.showWeather) loadWeather();
            if (keys[idx] === 'showClock' && state.showClock) updateClock();
            if (keys[idx] === 'showGreeting' && state.showGreeting) updateGreeting();
            if (keys[idx] === 'showCalendar' && state.showCalendar) updateCalendar();
            if (keys[idx] === 'showTodo' && state.showTodo) updateTodo();
        }
    });
});

document.getElementById('searchSuggestionsToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.searchSuggestions = !state.searchSuggestions;
    applySettings();
    saveSettings();
});

document.getElementById('animatedBlobsToggle').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.animatedBlobs = !state.animatedBlobs;
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

document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all settings to default?')) {
        Object.assign(state, JSON.parse(JSON.stringify(defaultState)));
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
}

function setupWidgetDragging() {
    const widgets = ['weather', 'clock', 'calendar', 'todoWidget'];

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
                if(widgetId === 'todoWidget') state.todoPosition = position;

                saveSettings();
            }
        });
    });
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
        html += `<div class="calendar-day ${isToday ? 'today' : ''}">${day}</div>`;
    }

    grid.innerHTML = html;
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
            <button class="todo-delete" data-index="${index}">
                <span class="material-icons-round">close</span>
            </button>
        </div>
    `).join('');

    document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            const index = parseInt(checkbox.dataset.index);
            state.todos[index].completed = !state.todos[index].completed;
            updateTodo();
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


document.getElementById('calendarPrev').addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    updateCalendar();
});

document.getElementById('calendarNext').addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    updateCalendar();
});

document.getElementById('todoAddBtn').addEventListener('click', () => {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    if (text) {
        if (!state.todos) state.todos = [];
        state.todos.push({ text, completed: false });
        input.value = '';
        updateTodo();
        saveSettings();
    }
});

document.getElementById('todoInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('todoAddBtn').click();
    }
});

setInterval(updateClock, 1000);

// Handle window resize for mobile detection
window.addEventListener('resize', () => {
    const wasMobile = state.isMobile;
    state.isMobile = detectMobileDevice();

    // Only reapply settings if mobile state changed
    if (wasMobile !== state.isMobile) {
        applySettings();
    }
});

loadSettings();
loadWeather();
updateClock();
updateGreeting();
updateCalendar();
updateTodo();
setupNotes();
setupBookmarks();
setupWidgetDragging();
showKeyboardShortcutsTutorial();

