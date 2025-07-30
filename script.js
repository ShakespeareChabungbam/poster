// Mobile Menu Toggle
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', function (event) {
  event.stopPropagation();
  mobileMenu.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', function (event) {
  if (!mobileMenu.contains(event.target) && event.target !== menuButton) {
    mobileMenu.classList.remove('open');
  }
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchInput.addEventListener('focus', function () {
  searchOverlay.style.display = 'flex';
  mobileMenu.classList.remove('open'); // Close mobile menu when searching
});

closeSearch.addEventListener('click', function () {
  searchOverlay.style.display = 'none';
});
