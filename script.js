const intro = document.getElementById("intro");
const gallery = document.getElementById("film-gallery");

const startScreen = document.getElementById("startScreen");
const countdown = document.getElementById("countdown");

const number = document.getElementById("number");

let count = 5;
let interval;

// Beep sound
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

// Start countdown
function startCountdown() {

  countdown.classList.remove("hidden");

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

// Show gallery after countdown
function showGallery() {

  intro.classList.add("hidden");

  gallery.classList.remove("hidden");
}

// Click to begin
startScreen.addEventListener("click", () => {

  startScreen.classList.add("hidden");

  count = 5;

  startCountdown();
});
