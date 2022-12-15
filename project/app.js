const navicon = document.getElementById('navicon');
const links = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

navicon.addEventListener('click', function() {
  links.classList.toggle('active');
  if(links.classList.contains('active')) {
    navbar.style.backgroundColor = 'black';
    links.style.transition = '1s'
  

  } else {
    navbar.style.backgroundColor = 'transparent';


  }





  



  
  
});