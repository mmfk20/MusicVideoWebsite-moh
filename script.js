const box = document.getElementById("animatedBox");

function moveBoxRandomly() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const maxLeft = vw - box.offsetWidth;
  const maxTop = vh - box.offsetHeight;

  const randomLeft = Math.floor(Math.random() * maxLeft);
  const randomTop = Math.floor(Math.random() * maxTop);

  box.style.position = "fixed";
  box.style.left = randomLeft + "px";
  box.style.top = randomTop + "px";
}

box.addEventListener("click", moveBoxRandomly);
