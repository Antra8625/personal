const btn = document.getElementById("mainBtn");
const music = document.getElementById("bgMusic");
const cake = document.querySelector(".cake");

let step = 0;

/* ================= BUTTON FLOW ================= */
btn.addEventListener("click", () => {

  /* STEP 0 → DECOR */
  if (step === 0) {

    document.querySelector(".fairy-lights").classList.add("show");
    cake.classList.add("dance");

    btn.innerText = "🎉 Let’s Celebrate";
    step = 1;
  }

  /* STEP 1 → CELEBRATION */
  else if (step === 1) {

    music.play();
document.querySelector(".birthday-text").classList.add("show");

    document.querySelector(".confetti").classList.add("show");
    document.querySelector(".hearts").classList.add("show");
    document.querySelector(".balloons").classList.add("show");
    document.querySelector(".sparkles").classList.add("show");

    startConfetti();
    startHearts();
    startBalloons();
    sparkleAroundCake();

    btn.innerText = "👉 Continue";
    step = 2;
  }

  /* STEP 2 → NEXT PAGE */
  else if (step === 2) {
    window.location.href = "balloons.html";
  }

});

/* ================= RANDOM EMOJI ENGINE ================= */

function createEmoji(symbol, container) {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerText = symbol;

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = 18 + Math.random() * 30 + "px";
  emoji.style.animationDuration = 4 + Math.random() * 4 + "s";

  container.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 8000);
}

/* 🎊 CONFETTI */
function startConfetti() {
  const box = document.querySelector(".confetti");
  setInterval(() => {
    createEmoji("🎊", box);
    createEmoji("🎉", box);
  }, 300);
}

/* 💖 HEARTS */
function startHearts() {
  const box = document.querySelector(".hearts");
  setInterval(() => {
    createEmoji("💖", box);
  }, 500);
}

/* 🎈 BALLOONS */
function startBalloons() {
  const box = document.querySelector(".balloons");
  setInterval(() => {
    createEmoji("🎈", box);
  }, 700);
}
/*       musiclogo   */
function startBalloons() {
  const box = document.querySelector(".musiclogo");
  setInterval(() => {
    createEmoji("𝄞", box);
  }, 500);
}

/* ✨ SPARKLES NEAR CAKE */
function sparkleAroundCake() {
  setInterval(() => {

    const rect = cake.getBoundingClientRect();

    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.innerText = "✨";

    const side = Math.random() > 0.5 ? -30 : rect.width + 10;

    sparkle.style.left = rect.left + side + "px";
    sparkle.style.top =
      rect.top + Math.random() * rect.height + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1500);

  }, 350);
}
