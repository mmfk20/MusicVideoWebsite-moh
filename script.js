// Get box element
let box = document.getElementById("animatedBox");

// Animation variables
let pos = 0;
let direction = 1; // 1 = right, -1 = left

function animateBox() {
    // Reverse direction at limits
    if (pos >= 200 || pos <= 0) {
        direction *= -1;
    }
    pos += direction * 2; // Move 2px each frame
    box.style.left = pos + "px";

    requestAnimationFrame(animateBox);
}

// Start animation
animateBox();
