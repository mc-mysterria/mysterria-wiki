// Mysterria Wiki - Page Loading and Transition Handler
(function() {
    'use strict';

    // Configuration
    const LOADING_DELAY_MIN = 300; // Minimum loading time for smooth UX
    const PROGRESS_SPEED = 50; // Progress bar animation speed
    const TRANSITION_DURATION = 400; // Page transition duration

    // State management
    let isLoading = false;
    let loadingStartTime = 0;
    let progressInterval = null;

    // Create and inject loading elements
    function createLoadingElements() {
        // Progress bar
        if (!document.getElementById('mysterria-progress-bar')) {
            const progressBar = document.createElement('div');
            progressBar.id = 'mysterria-progress-bar';
            progressBar.className = 'loading-progress-bar';
            document.body.appendChild(progressBar);
        }

        // Loading overlay
        if (!document.getElementById('mysterria-loading-overlay')) {
            const overlay = document.createElement('div');
            overlay.id = 'mysterria-loading-overlay';
            overlay.className = 'page-loading-overlay';
            overlay.innerHTML = `
                <div class="mystical-loader">
                    <div class="loader-orb"></div>
                    <div class="loader-core"></div>
                    <div class="loading-text">Loading...</div>
                </div>
            `;
            document.body.appendChild(overlay);
        }
    }

    // Show loading animation
    function showLoading(text = 'Loading...') {
        if (isLoading) return;
        
        isLoading = true;
        loadingStartTime = Date.now();

        const overlay = document.getElementById('mysterria-loading-overlay');
        const progressBar = document.getElementById('mysterria-progress-bar');
        const loadingText = overlay?.querySelector('.loading-text');

        if (loadingText) {
            loadingText.textContent = text;
        }

        // Show overlay
        if (overlay) {
            overlay.classList.add('active');
        }

        // Animate progress bar
        if (progressBar) {
            progressBar.style.width = '0%';
            progressBar.classList.remove('hidden', 'complete');
            
            let progress = 0;
            progressInterval = setInterval(() => {
                progress += Math.random() * 30;
                if (progress > 85) progress = 85; // Stop at 85% until page loads
                progressBar.style.width = progress + '%';
            }, PROGRESS_SPEED);
        }

        // Add loading class to body
        document.body.classList.add('page-loading');
    }

    // Hide loading animation
    function hideLoading() {
        if (!isLoading) return;

        const elapsedTime = Date.now() - loadingStartTime;
        const remainingTime = Math.max(0, LOADING_DELAY_MIN - elapsedTime);

        setTimeout(() => {
            isLoading = false;

            const overlay = document.getElementById('mysterria-loading-overlay');
            const progressBar = document.getElementById('mysterria-progress-bar');

            // Complete progress bar
            if (progressBar) {
                clearInterval(progressInterval);
                progressBar.style.width = '100%';
                progressBar.classList.add('complete');
                
                setTimeout(() => {
                    progressBar.classList.add('hidden');
                }, 500);
            }

            // Hide overlay
            if (overlay) {
                setTimeout(() => {
                    overlay.classList.remove('active');
                }, 200);
            }

            // Remove loading class
            document.body.classList.remove('page-loading');

            // Add content fade-in animation
            const mainContent = document.querySelector('main, .sl-markdown-content');
            if (mainContent) {
                mainContent.classList.add('content-fade-in');
                setTimeout(() => {
                    mainContent.classList.remove('content-fade-in');
                }, 600);
            }
        }, remainingTime);
    }

    // Enhanced language selector handler
    function handleLanguageSwitch() {
        const langSelectors = document.querySelectorAll('starlight-lang-select select');
        
        langSelectors.forEach(select => {
            select.addEventListener('change', function(e) {
                const container = this.closest('starlight-lang-select');
                const selectedLang = this.options[this.selectedIndex].text;
                
                // Add loading state to selector
                container.classList.add('language-switching');
                
                // Show loading with language-specific text
                showLoading(`Switching to ${selectedLang}...`);
                
                // Navigate to new language
                window.location.pathname = this.value;
            });
        });
    }

    // Enhanced link navigation handler
    function handleLinkClicks() {
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a[href]');
            
            if (!link) return;
            
            const href = link.getAttribute('href');
            
            // Skip external links and anchors
            if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) {
                return;
            }

            // Skip footer links (they have custom handling)
            if (link.classList.contains('uap-footer-link')) {
                return;
            }

            // Skip if it's a download or special link
            if (link.hasAttribute('download') || href.endsWith('.pdf') || href.endsWith('.zip')) {
                return;
            }

            // Show loading for internal navigation
            e.preventDefault();
            showLoading('Loading page...');
            
            // Navigate after brief delay
            setTimeout(() => {
                window.location.href = href;
            }, 100);
        });
    }

    // Page load handler
    function handlePageLoad() {
        // Handle initial page load
        if (document.readyState === 'loading') {
            showLoading('Loading page...');
        }

        // Hide loading when page is fully loaded
        window.addEventListener('load', hideLoading);
        
        // Fallback for fast loading
        if (document.readyState === 'complete') {
            hideLoading();
        }
    }

    // Handle browser back/forward navigation
    function handlePopState() {
        window.addEventListener('popstate', () => {
            showLoading('Loading page...');
        });
    }

    // Handle page visibility changes (for better UX when returning to tab)
    function handleVisibilityChange() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Page is hidden, cancel any loading animations
                if (isLoading && progressInterval) {
                    clearInterval(progressInterval);
                }
            }
        });
    }

    // Form submission handler (for search, etc.)
    function handleFormSubmissions() {
        document.addEventListener('submit', function(e) {
            const form = e.target;
            
            // Skip if it's a search form that stays on same page
            if (form.method?.toLowerCase() === 'get') {
                showLoading('Searching...');
            }
        });
    }

    // Theme switch enhancement
    function enhanceThemeSelector() {
        const themeSelectors = document.querySelectorAll('starlight-theme-select select');
        
        themeSelectors.forEach(select => {
            select.addEventListener('change', function() {
                // Add brief loading for theme change
                const container = this.closest('starlight-theme-select');
                container.style.opacity = '0.7';
                
                setTimeout(() => {
                    container.style.opacity = '1';
                }, 300);
            });
        });
    }

    // Initialize all functionality
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        createLoadingElements();
        handlePageLoad();
        handleLinkClicks();
        handleLanguageSwitch();
        handlePopState();
        handleVisibilityChange();
        handleFormSubmissions();
        enhanceThemeSelector();

        // Debug info
        console.log('🔮 Mysterria Wiki loading animations initialized');
    }

    // Start initialization
    init();

    // Expose some functions globally for manual control if needed
    window.MysterriaLoader = {
        show: showLoading,
        hide: hideLoading,
        isLoading: () => isLoading
    };

})();