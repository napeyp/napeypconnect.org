//sidebar
$('.mobile-nav-menu').click(function () {
  $('#homescreen-image').toggleClass('homescreen-image-side-nav');
  $('.sidenav-content').toggleClass('display');
});

$(document).click(function (e) {
  var sidebar = $('.sidenav-content, .mobile-nav-menu, #homescreen-image');
  if (!sidebar.is(e.target) && sidebar.has(e.target).length == 0) {
    sidebar.removeClass('display');
    sidebar.removeClass('homescreen-image-side-nav');
  }
});

// //modal
// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);
// });

// Or with jQuery

$(document).ready(function () {
  $('.modal').modal({
    opacity: 0.5,
    endingTop: '40%',
    inDuration: 600,
    outDuration: 600,
  });
});
