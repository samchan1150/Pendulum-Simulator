const canvas = document.getElementById('pendulumCanvas');
const ctx = canvas.getContext('2d');

// Pendulum parameters
let length = 150; // Length in pixels
let angle = 30 * Math.PI / 180; // Convert degrees to radians
let angleVelocity = 0;
let angleAcceleration = 0;
let gravity = 9.81;
let damping = 0.02;
let paused = true;

// Origin point
const originX = canvas.width / 2;
const originY = 0;

// Initialize controls
const lengthSlider = document.getElementById('length');
const angleSlider = document.getElementById('angle');
const gravityInput = document.getElementById('gravity');
const dampingInput = document.getElementById('damping');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');

// Event listeners for controls
lengthSlider.addEventListener('input', () => {
    length = parseFloat(lengthSlider.value);
});

angleSlider.addEventListener('input', () => {
    angle = parseFloat(angleSlider.value) * Math.PI / 180;
    angleVelocity = 0;
});

gravityInput.addEventListener('input', () => {
    gravity = parseFloat(gravityInput.value);
});

dampingInput.addEventListener('input', () => {
    damping = parseFloat(dampingInput.value);
});

startBtn.addEventListener('click', () => {
    if (paused) {
        paused = false;
        animate();
    }
});

pauseBtn.addEventListener('click', () => {
    paused = true;
});

// Draw pendulum
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate pendulum position
    const bobX = originX + length * Math.sin(angle);
    const bobY = originY + length * Math.cos(angle);

    // Draw rod
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(bobX, bobY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw bob
    ctx.beginPath();
    ctx.arc(bobX, bobY, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#007BFF';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();
}

// Update physics
function update() {
    // Formula: θ'' = -(g / L) * sin(θ) - damping * θ'
    angleAcceleration = (-gravity / length) * Math.sin(angle) - damping * angleVelocity;
    angleVelocity += angleAcceleration;
    angle += angleVelocity;
}

function animate() {
    if (!paused) {
        update();
        draw();
        requestAnimationFrame(animate);
    }
}

// Initial draw
draw();