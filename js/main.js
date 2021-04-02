// background color changing while scrolling
// reference: https://codepen.io/patrickcameron/pen/WNGrpEw
// $(function() {
//   $(window).scroll(function() {
//     if( $(this).scrollTop() > 600 ) {
//       $('body').addClass('changeColorGrey');
//     } else {
//       $('body').removeClass('changeColorGrey');
//     }
//   })
// })

$(function() {
  $(window).scroll(function() {
    if( $(this).scrollTop() > 600 ) {
      $('body').addClass('changeColorGrey');

    // } else if( $(this).scrollTop() > 1200 ) {
    //   $('body').removeClass('changeColorGrey');
    //   $('body').addClass('changeColorWhite');

    } else {
      $('body').removeClass('changeColorGrey');
    }
  })
})

$(function() {
  $(window).scroll(function() {
    if( $(this).scrollTop() > 1200 ) {
      $('body').removeClass('changeColorGrey');
      $('body').addClass('changeColorWhite');

    } else {
      $('body').removeClass('changeColorGrey');
      $('body').addClass('changeColorWhite');
    }
  })
})


//making the arrow dissapear while scrolling
// $(function() {
//   $(window).scroll(function() {
//     if( $(this).scrollTop() > 200 ) {
//       removeClass('arrow');
//     }
//   })
// })
