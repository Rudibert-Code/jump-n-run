/**
 * Make loading screen visible
 */
function openLoadingScreen(){
    document.getElementById('loading').classList.add("show");
}

/**
 * Make loading screen invisible
 */
function closeLoadingScreen(){
    document.getElementById('loading').classList.remove("show");
}

/**
 * Wait for level elements to be loaded; The trigger closeLoadingScreen() if elements are loaded
 */
async function waitForAssets(){
    if (document.readyState != 'complete') {
        await new Promise((resolve) => {
            window.addEventListener('load', resolve, { once: true });
        });
    }
    closeLoadingScreen();
}

/**
 * Trigger waitForAssets()
 */
waitForAssets();
