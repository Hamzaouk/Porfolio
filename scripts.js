$(document).ready(function() {
  // Smooth scroll function with faster animation
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 500); 
    }
  });
});


document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('main > div[id]');

  function setActiveLink() {
      let index = sections.length;

      while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
      
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
  }

  setActiveLink();
  window.addEventListener('scroll', setActiveLink);
});

$(document).ready(function() {
// Scroll to top functionality
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#scroll-to-top').addClass('show');
  } else {
    $('#scroll-to-top').removeClass('show');
  }
});

$('#scroll-to-top').click(function() {
  $('html, body').animate({scrollTop : 0}, 1000);
  return false;
});
});
