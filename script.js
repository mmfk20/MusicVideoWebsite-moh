document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("animatedBox");

  box.addEventListener("click", () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const maxLeft = vw - box.offsetWidth;
    const maxTop = vh - box.offsetHeight;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    box.style.position = "fixed";
    box.style.left = randomLeft + "px";
    box.style.top = randomTop + "px";
  });

  // Moving microphone animation
  const mic = document.getElementById("mic");
  let posX = 0;
  let posY = 0;
  let speedX = 2;
  let speedY = 1.5;

  function moveMic() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    posX += speedX;
    posY += speedY;

    // Bounce off edges
    if (posX > vw - mic.offsetWidth || posX < 0) speedX *= -1;
    if (posY > vh - mic.offsetHeight || posY < 0) speedY *= -1;

    mic.style.left = posX + "px";
    mic.style.top = posY + "px";

    requestAnimationFrame(moveMic);
  }

  moveMic();
});
