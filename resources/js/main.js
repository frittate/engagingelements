particlesJS.load('particles-js', './../../vendors/js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

  particlesJS.load('particles-js2', './../../vendors/js/particlesjs-config.json', function() {
    console.log('callback - particles.js 2 config loaded');
  });

  $(document).ready(function(){
    let mobileNav = false;

    $('#nav-burger').click(function() {
      if (mobileNav === false) {
        $('.fa-bars').addClass('fa-times').removeClass('fa-bars');
        $('.nav-items').css('display', 'flex');
        mobileNav = true;
      } else {
        $('.fa-times').addClass('fa-bars').removeClass('fa-times');
        $('.nav-items').css('display', 'none');
        mobileNav = false;
      }
      
    })
    
    // jQuery methods go here...
 
 });