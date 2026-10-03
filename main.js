const { load } = window.__TAURI__.store;
const { invoke } = window.__TAURI__.core;
const { appWindow } = window.__TAURI__.window;
const { WebviewWindow } = window.__TAURI__.webviewWindow;

let greetInputEl;
let button = document.getElementById("greet-button");
let trackingWindow = await WebviewWindow.getByLabel("track-window");

const store = await load('store.json', { autoSave: true });



/*async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}*/

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  document.querySelector("#greet-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    store.set('name-input', { value: greetInputEl.value });
    if (greetInputEl.value) {
      await store.set('name-input', { value: greetInputEl.value });
      await store.save();
      console.log("Yay");
    }
    window.location.href = "track.html";

  });
});

function openTrackingWindow() {
  if (trackingWindow) {
    trackingWindow.show();
    trackingWindow.setFocus();
    currentWindow.close();
  }
}
button.addEventListener("click", async () => {
  console.log("Button clicked");
  openTrackingWindow();
});

