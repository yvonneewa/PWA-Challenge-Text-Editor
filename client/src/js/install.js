const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
windowdeferredPrompt = event;
butInstall.classList.toggle('hidden',false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const promptEvent = windowdeferredPrompt;

    if (!promptEvent){
        return;
    }

    promptEvent.prompt();

    windowdeferredPrompt = null;

    butInstall.classList.toggle('hiden', true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    window.defferedPrompt = null
});
