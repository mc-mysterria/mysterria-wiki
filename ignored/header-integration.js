// Header Integration Script for Starlight Theme Selector
document.addEventListener('DOMContentLoaded', function() {
  console.log('Header integration script loaded');
  
  // Wait for Starlight to initialize and inject theme selector
  function moveThemeSelector() {
    // Look for theme selectors in various possible locations
    const possibleSelectors = [
      document.querySelector('body > starlight-theme-select'),
      document.querySelector('.sl-nav starlight-theme-select'),
      document.querySelector('header starlight-theme-select'),
      document.querySelector('starlight-theme-select')
    ];
    
    const starlightThemeSelector = possibleSelectors.find(selector => selector && !selector.closest('.theme-toggle-wrapper'));
    const themeToggleWrapper = document.querySelector('.theme-toggle-wrapper');
    
    if (starlightThemeSelector && themeToggleWrapper) {
      // Hide fallback selector if it exists
      const fallbackSelector = themeToggleWrapper.querySelector('.fallback-theme-selector');
      if (fallbackSelector) {
        fallbackSelector.style.display = 'none';
      }
      
      // Move the theme selector into our header wrapper
      if (!themeToggleWrapper.contains(starlightThemeSelector)) {
        // Clear the wrapper first
        themeToggleWrapper.innerHTML = '';
        themeToggleWrapper.appendChild(starlightThemeSelector);
        console.log('Theme selector moved to custom header');
        return true;
      }
    } else {
      // If no Starlight selector found, show fallback
      const fallbackSelector = themeToggleWrapper?.querySelector('.fallback-theme-selector');
      if (fallbackSelector) {
        fallbackSelector.style.display = 'block';
        console.log('Using fallback theme selector');
      }
    }
    return false;
  }
  
  // Try to find and move theme selector multiple times
  let attempts = 0;
  const maxAttempts = 20;
  
  function tryMove() {
    attempts++;
    if (moveThemeSelector() || attempts >= maxAttempts) {
      return; // Success or give up
    }
    setTimeout(tryMove, 250); // Try again after 250ms
  }
  
  // Start trying immediately
  tryMove();
  
  // Also watch for mutations in case the theme selector is added dynamically
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeName === 'STARLIGHT-THEME-SELECT' || 
              (node.nodeType === 1 && node.querySelector && node.querySelector('starlight-theme-select'))) {
            setTimeout(moveThemeSelector, 50);
          }
        });
      }
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Clean up observer after 10 seconds
  setTimeout(() => observer.disconnect(), 10000);
});