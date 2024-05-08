const images = ["images/stylized1.jpg", "images/stylized2.jpg", "images/stylized3.jpg"];
let currentIndex = 0;
const mainImage = document.getElementById('mainImage');

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.classList.remove('fade-in');
  setTimeout(() => {
    mainImage.src = images[currentIndex];
    mainImage.classList.add('fade-in');
  }, 500); // Delay before changing image
}

setInterval(changeImage, 5000); // Change image every 5 seconds
