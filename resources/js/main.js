particlesJS.load('particles-js', '../../vendors/js/particlesjs-config.json', function() {
    
  }); 
  /*

  particlesJS.load('particles-js2', './../../vendors/js/particlesjs-config.json', function() {
    console.log('callback - particles.js 2 config loaded');
  }); */

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
    
    // Formular Ausführliche Anfrage
   
      var form = $('#ajax-contact');
      var formMessages = $('#form-messages');
    
      $(form).submit(function(event) {
        event.preventDefault();
    
        var formData = $(form).serialize();

        $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData,
        })
        .done(function(response) {
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          $(formMessages).text(response);

          $('#form_field-name').val('');
          $('#form_field-mail').val('');
          $('#form_field-text').val('');
        })
        .fail(function(data) {
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text('Ein Fehler ist aufgetreten. Bitte versuchen Sie es nocheinmal.')
          }
        });
      });

      //Formular Quick-Anfrage
   
      var formQuick = $('ajax-contact-quick');
      var formQuickMessages = $('#formQuick-messages');

      $(formQuick).submit(function(event) {
        event.preventDefault();

        var formData = $(formQuick).serialize();

        $.ajax({
          type: 'POST',
          url: $(formQuick).attr('action'),
          data: formQuickData,
        })
        .done(function(response){
          $(formQuickMessages).removeClass('error');
          $(formQuickMessages).addClass('success');
          $(formQuickMessages).text(response);

          $('#formQuick_field-name').val('');
          $('#formQuick_field-tel').val('');
        })
        .fail(function(data) {
          $(formQuickMessages).removeClass('success');
          $(formQuickMessages).addClass('error');

          if (data.responseText !== '') {
            $(formQuickMessages).text(data.responseText);
          } else {
            $(formQuickMessages).text('Ein Fehler ist aufgetreten. Bitte versuchen Sie es nocheinmal.')
          }
        });
      });
 });