//function openLoadingScreen(){
//    document.getElementById('loading').classList.add("show");
//}

function closeLoadingScreen(){
    document.getElementById('loading').classList.remove("show");
}

async function waitForAssets(){
    if (document.readyState != 'complete') {
        await new Promise((resolve) => {
            window.addEventListener('load', resolve, { once: true });
        });
    }
    closeLoadingScreen();
}

waitForAssets();
