function getRandomRotation() {
  return Math.random() * 30 - 15; // Generates a random number between -15 and 15
}

// Get all the li elements with the class 'holiday-item'
var holidayItems = document.querySelectorAll('.holiday-item');

// Loop through each li element and apply a random rotation
holidayItems.forEach(function(item) {
  // Generate a random rotation angle
  var rotation = getRandomRotation();
  // Apply the rotation using CSS transform property
  item.style.transform = 'rotate(' + rotation + 'deg)';
});
