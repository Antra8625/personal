const balloons = document.querySelectorAll(".balloon");
const revealText = document.getElementById("revealText");
const topText = document.getElementById("topText");
const popSound = document.getElementById("popSound");
const showMemoriesBtn = document.getElementById("showMemoriesBtn");


let poppedCount = 0;

balloons.forEach((balloon) => {

  balloon.addEventListener("click", () => {

    if (balloon.classList.contains("pop")) return;

    // pop sound
    popSound.currentTime = 0;
    popSound.play();

    // pop animation
    balloon.classList.add("pop");

    // get word from data attribute
    const word = balloon.dataset.word;

    // create word behind THIS balloon
    const wordEl = document.createElement("div");
    wordEl.className = "reveal-text show";
    wordEl.innerText = word;

    // position same as balloon
    const rect = balloon.getBoundingClientRect();

    wordEl.style.left = rect.left + rect.width / 2 + "px";
    wordEl.style.top = rect.top + rect.height / 2 + "px";
    wordEl.style.transform = "translate(-50%, -50%) scale(1)";

    document.body.appendChild(wordEl);

    poppedCount++;

    // last balloon → final message
    if (poppedCount === balloons.length) {
      topText.innerText = "🎉 Surprise 🎉";

      setTimeout(() => {
        revealText.classList.add("show");
        showMemoriesBtn.classList.add("show");
      }, 600);
    }
  });

});
if (showMemoriesBtn) {
  showMemoriesBtn.addEventListener("click", () => {
    window.location.href = "memories.html";
  });
}