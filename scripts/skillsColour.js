document.addEventListener("DOMContentLoaded", function() {
  const skillBars = document.querySelectorAll(".skill-level-bar");

  skillBars.forEach(bar => {
    const percentage = parseInt(bar.parentElement.dataset.percentage);

    if (percentage < 25) {
      bar.classList.add("red");
    } else if (percentage >= 25 && percentage <= 74) {
      bar.classList.add("orange");
    } else {
      bar.classList.add("green");
    }
  });
});
