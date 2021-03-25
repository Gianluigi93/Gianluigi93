
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y >= 4000) {
      $('p.scroll,.scroll-down').addClass("cambiaColore");
    } else {
      $('p.scroll,.scroll-down').removeClass("cambiaColore");
    }
  });
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y >= 300) {
      $('p.scroll,.scroll-down').addClass("cambiaColoreMobile");
    } else {
      $('p.scroll,.scroll-down').removeClass("cambiaColoreMobile");
    }
  });
  
  $(document).ready( function() {
      // Add event listener
      document.addEventListener("mousemove", parallax);
      const elem = document.querySelector("#paralax");
      // Magic happens here
      function parallax(e) {
          let _w = window.innerWidth/2;
          let _h = window.innerHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
          let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
          let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
          let x = `${_depth3}, ${_depth2}, ${_depth1}`;
          console.log(x);
          elem.style.backgroundPosition = x;
      }
  })
  
  $(document).ready( function() {
      // Add event listener
      document.addEventListener("mousemove", parallax);
      const elem = document.querySelector("#paralax-footer");
      // Magic happens here
      function parallax(e) {
          let _w = window.innerWidth/2;
          let _h = window.innerHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
          let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
          let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
          let x = `${_depth3}, ${_depth2}, ${_depth1}`;
          console.log(x);
          elem.style.backgroundPosition = x;
      }
  });
  $(window).scroll(function() {
    
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.sezione');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
  
  }).scroll();