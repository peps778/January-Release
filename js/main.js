document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const navbarMenu = document.getElementById('navbar-sticky');
    
    toggleButton.addEventListener('click', function () {
      // Toggle the 'hidden' class to show/hide the menu
      navbarMenu.classList.toggle('hidden');
      
      // Toggle the 'aria-expanded' attribute
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
      toggleButton.setAttribute('aria-expanded', !expanded);
    });
  });
  