const intro = document.getElementById("intro");
const gallery = document.getElementById("film-gallery");
const startScreen = document.getElementById("startScreen");
const number = document.getElementById("number");

let count = 5;
let interval;

function beep() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "square";
  osc.frequency.value = 800;
  gain.gain.value = 0.1;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.1);
}

function startCountdown() {
  interval = setInterval(() => {
    number.textContent = count;
    beep();

    count--;

    if (count < 0) {
      clearInterval(interval);
      showGallery();
    }
  }, 1000);
}

function showGallery() {
  intro.classList.add("hidden");
  gallery.classList.remove("hidden");
}

startScreen.addEventListener("click", () => {
  startScreen.classList.add("hidden");

  count = 5; // reset just in case
  startCountdown();
});

document.body.style.background = "white";
setTimeout(() => {
  document.body.style.background = "black";
}, 50);

const silentEraCard = document.getElementById("silentEraCard");

if (silentEraCard) {
  silentEraCard.addEventListener("click", () => {
    const panel = silentEraCard.querySelector(".panel");

    if (panel) {
      panel.classList.toggle("hidden");
    }
  });
}

console.log("JS loaded");
