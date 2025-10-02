
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
document.addEventListener('DOMContentLoaded', () => {

    // Snake toggle logic
    const toggleBtn = document.getElementById("snakeToggle");
    if (toggleBtn) {
        let snakeEnabled = false;
        let trail = [];

        toggleBtn.addEventListener("click", () => {
            snakeEnabled = !snakeEnabled;
            if (snakeEnabled) {
                document.body.classList.add("snake-cursor");
                document.addEventListener("mousemove", drawSnake);
                toggleBtn.innerHTML = '<span style="margin-left: 20px;">Disable Snake</span>';
                toggleBtn.classList.add("active");
            } else {
                document.body.classList.remove("snake-cursor");
                document.removeEventListener("mousemove", drawSnake);
                clearTrail();
                toggleBtn.innerHTML = '<span style="margin-left: 20px;">Snake Cursor</span>';
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
    }


    // Recently Viewed Problems Logic 
    const recentlyViewedList = document.getElementById('recently-viewed-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    // reads from localStorage and builds the HTML list
    function displayRecentProblems() {
        recentlyViewedList.innerHTML = '';
        const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

        if (recentlyViewed.length === 0) {
            recentlyViewedList.innerHTML = '<li>No recent problems viewed</li>';
            clearHistoryBtn.style.display = 'none';
        } else {
            recentlyViewed.forEach(problem => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = problem.url;
                link.textContent = problem.title;
                listItem.appendChild(link);
                recentlyViewedList.appendChild(listItem);
            });
            clearHistoryBtn.style.display = 'block';
        }
    }

    //function to clear history on buttonclick
    function clearHistory() {
        localStorage.removeItem('recentlyViewed');
        displayRecentProblems();
    }
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', clearHistory);
    }
    displayRecentProblems();

});
function navigateTo(page) {
    window.location.href = page;
}
