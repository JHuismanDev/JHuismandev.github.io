document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('nav ul li a[href^="#"]');

  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }
});
