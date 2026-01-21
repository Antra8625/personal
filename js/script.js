/* ========== PAGE NAVIGATION ========== */

// Index page → Countdown
function goToCountdown() {
  window.location.href = "countdown.html";
}

// Surprise start → Wishes / next page
function startSurprise() {
  window.location.href = "celebration.html";
}

/* ========== COUNTDOWN VIDEO AUTO NEXT ========== */
const video = document.getElementById("countVideo");

if (video) {
  video.onended = () => {
    window.location.href = "surprise-start.html";
  };
}
