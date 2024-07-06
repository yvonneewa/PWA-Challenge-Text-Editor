const butInstall = document.getElementById('buttonInstall');
let defferedPrompt = null;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

event.preventDefault();
defferedPrompt = event;

butInstall.classList.remove('hidden',false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

        if (defferedPrompt) {
          
            defferedPrompt.prompt();   const choiceResult = await defferedPrompt.userChoice;
    
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the prompt');
            } else {
                console.log('User dismissed the prompt');
            }
    
            defferedPrompt= null;

            butInstall.classList.add('hidden');
        }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

   defferedPrompt = null
   console.log('App installed');
});
