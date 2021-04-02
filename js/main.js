// background color changing while scrolling
// reference: https://codepen.io/patrickcameron/pen/WNGrpEw

// $(function() {
//   $(window).scroll(function() {
//     if( $(this).scrollTop() > 600 ) {
//       $('body').addClass('changeColorGrey');
//
//     } else if( $(this).scrollTop() > 1200 ) {
//       $('body').removeClass('changeColorGrey');
//       $('body').addClass('changeColorWhite');
//
//     } else {
//       $('body').removeClass('changeColorGrey');
//     }
//   })
// })



//making the background change colors when scrolling
// https://codepen.io/daveredfern/pen/zBGBJV
$(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

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
