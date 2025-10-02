function navigateTo(page) {
  window.location.href = page;
}

//Snake toggle logic 
const toggleBtn = document.getElementById("snakeToggle");
let snakeEnabled = false;
let trail = [];

toggleBtn.addEventListener("click", () => {
  snakeEnabled = !snakeEnabled;
  if (snakeEnabled) {
    document.body.classList.add("snake-cursor");
    document.addEventListener("mousemove", drawSnake);
    toggleBtn.textContent = "Disable Snake";
    toggleBtn.classList.add("active");
  } else {
    document.body.classList.remove("snake-cursor");
    document.removeEventListener("mousemove", drawSnake);
    clearTrail();
    toggleBtn.textContent = "Snake Cursor";
    toggleBtn.classList.remove("active");
  }
});

function drawSnake(e) {
  const seg = document.createElement("div");
  seg.className = "snake-segment";
  seg.style.left = e.pageX + "px";
  seg.style.top = e.pageY + "px";
  document.body.appendChild(seg);
  trail.push(seg);

  setTimeout(() => {
    seg.remove();
    trail.shift();
  }, 500);
}

function clearTrail() {
  trail.forEach(seg => seg.remove());
  trail = [];
}


// Flowchart toggle functionality
document.querySelectorAll(".flowchart-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const container = btn.nextElementSibling; // find the div right after this button
    container.style.display = 
      container.style.display === "none" ? "block" : "none";

    // Optional: toggle button text
    btn.textContent = container.style.display === "block" 
      ? "Hide Flowchart" 
      : "View Flowchart";
  });
});
