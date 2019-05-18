$('.navbar-nav li').hover(
  function() {
    if($(this).hasClass('dropdown') && !$('#navbar').hasClass('in')){
      $(this)
        .addClass('open')
        .find('a').attr('aria-expanded','true');
    }
  }, function() {
    if($(this).hasClass('dropdown') && !$('#navbar').hasClass('in')){
      $(this)
        .removeClass('open')
        .find('a').attr('aria-expanded','false');

    }
  }
);