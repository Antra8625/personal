const cards = document.querySelectorAll(".card");
const stage = document.querySelector(".card-stage");
const nextBtn = document.querySelector("button");

let isDragging = false;
let startX = 0;

/* =====================
   SET CARD STACK
===================== */
function setStack() {
  const all = document.querySelectorAll(".card");

  all.forEach((card, i) => {
    card.classList.remove("front", "back-1", "back-2", "back-3");

    if (i === all.length - 1) card.classList.add("front");
    else if (i === all.length - 2) card.classList.add("back-1");
    else if (i === all.length - 3) card.classList.add("back-2");
    else card.classList.add("back-3");

    card.style.transform = "";
    card.style.transition = "0.3s";
  });
}

setStack();

/* =====================
   GET FRONT CARD
===================== */
function getFrontCard() {
  return document.querySelector(".card.front");
}

/* =====================
   TOUCH EVENTS
===================== */
document.addEventListener("touchstart", e => {
  const card = getFrontCard();
  if (!card || !e.target.closest(".front")) return;

  startX = e.touches[0].clientX;
  isDragging = true;
});

document.addEventListener("touchmove", e => {
  if (!isDragging) return;

  const moveX = e.touches[0].clientX - startX;
  const card = getFrontCard();

  card.style.transform =
    `translateX(${moveX}px) rotate(${moveX / 15}deg)`;
});

document.addEventListener("touchend", () => {
  if (!isDragging) return;
  isDragging = false;

  const card = getFrontCard();
  const diff = Math.abs(card.getBoundingClientRect().left);

  if (diff > 100) swipe(card);
  else card.style.transform = "";
});

/* =====================
   MOUSE EVENTS
===================== */
document.addEventListener("mousedown", e => {
  if (!e.target.closest(".front")) return;

  startX = e.clientX;
  isDragging = true;
});

document.addEventListener("mousemove", e => {
  if (!isDragging) return;

  const moveX = e.clientX - startX;
  const card = getFrontCard();

  card.style.transform =
    `translateX(${moveX}px) rotate(${moveX / 15}deg)`;
});

document.addEventListener("mouseup", () => {
  if (!isDragging) return;
  isDragging = false;

  const card = getFrontCard();
  const diff = Math.abs(card.getBoundingClientRect().left);

  if (diff > 100) swipe(card);
  else card.style.transform = "";
});

/* =====================
   SWIPE FUNCTION
===================== */
function swipe(card) {
  card.style.transition = "0.4s ease";
  card.style.transform = "translateX(800px) rotate(25deg)";

  setTimeout(() => {
    stage.insertBefore(card, stage.firstChild);
    setStack();
  }, 350);
}

/* =====================
   NEXT INTERFACE BUTTON
===================== */
nextBtn.addEventListener("click", () => {
  window.location.href = "wishes.html"; // 👈 next page
});
