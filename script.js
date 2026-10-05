const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const danceFloor = document.getElementById("dance-floor");
const dancer = document.getElementById("dancer");

function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}

// Phase 1: Automatically change panel colors
const panelTimer = setInterval(function () {
    panel1.style.backgroundColor = randomColor();
    panel2.style.backgroundColor = randomColor();
}, 1500);

// Phase 2: Clicking the Dance Floor changes its color
danceFloor.addEventListener("click", function () {
    danceFloor.style.backgroundColor = randomColor();
});

// Phase 2: Clicking the Dancer changes the dancer
dancer.addEventListener("click", function (event) {
    event.stopPropagation();

    dancer.textContent = "💃";
});

// Phase 3: Keyboard controls
window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        dancer.textContent = "🕺";
    }

    if (event.key === "ArrowDown") {
        dancer.textContent = "💃";
    }

    if (event.key === "ArrowLeft") {
        dancer.textContent = "🕴️";
    }

    if (event.key === "ArrowRight") {
        dancer.textContent = "🤸";
    }

    // Reset the Dance Floor and stop the panel timer
    if (event.key.toLowerCase() === "r") {
        danceFloor.style.backgroundColor = "black";
        clearInterval(panelTimer);
    }
});
