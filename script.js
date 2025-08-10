// Select the animated box
let box = document.getElementById("animatedBox");

// Starting position
let pos = 0;
let direction = 1; // 1 = right, -1 = left

function animateBox() {
    // Change direction if hitting boundaries
    if (pos >= 200 || pos <= 0) {
        direction *= -1;
    }

    // Update position
    pos += direction * 2;
    box.style.left = pos + "px";

    // Keep looping the animation
    requestAnimationFrame(animateBox);
}

// Start the animation
animateBox();
