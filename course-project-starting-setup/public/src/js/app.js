if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log("service worker is registered");
    })
    .catch((e) => console.log(e));
}

window.addEventListener("beofeinstallprompt", (e) => {
  console.log("before install propmt fired");
  e.preventDefault();
  defferedPrompt = e;
  return false;
});
