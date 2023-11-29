
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

var sections = document.querySelectorAll('section')
var navLinks = document.querySelectorAll('header nav a ')

window.onscroll = () => {


  sections.forEach(element => {
    var top = window.scrollY;
    var offset = element.offsetTop - 100;
    var height = element.offsetHeight;
    var id = element.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');


}
