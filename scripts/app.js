// Select the navigation menu
const navigationMenu = document.querySelector(".navigation-menu");

// Select the navigation toggle button
const navigationToggle = document.querySelector(".navigation-toggle");

// Add click event listener to the navigation toggle button
navigationToggle.addEventListener("click", function() {
  navigationMenu.classList.toggle("active");
});
