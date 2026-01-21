const text = `Happy Birthday ❤️🎉
Aaj ka din sirf tumhare liye hai, kyunki you truly deserve all the
love and happiness in the world ✨ Tumhari smile kisi ka bhi din 
bright kar sakti hai, aur tumhari presence har jagah positivity le
aati hai 💕 Tum jaha bhi ho, waha warmth aur good vibes automatically
feel hoti hain. May this year bring you success, good health,
aur endless reasons to smile 🎂🌸 Tumhare saare dreams poore ho aur
life tumhe hamesha wahi de jo tum deserve karte ho. Stay the same—kind,
strong, and beautiful inside out ❤️🥰
Enjoy your day to the fullest and keep shining always ✨🎈`;

let index = 0;
const speed = 40;

const typingText = document.getElementById("typingText");
const readBtn = document.getElementById("readBtn");
const thankBtn = document.getElementById("thankBtn");
const music = document.getElementById("bgMusic");
const endScreen = document.getElementById("endScreen");

function typeText() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  } else {
    // typing finished → show thank you
    thankBtn.style.display = "block";
  }
}

readBtn.addEventListener("click", () => {
  readBtn.style.display = "none";
  music.play();
  typeText();
});

thankBtn.addEventListener("click", () => {
  endScreen.classList.add("show");
});
