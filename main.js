AOS.init({
  duration: 650,
});
const menuIcon= document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});


const toggleForm = () => {
  const signed = document.querySelector('.signed');
  signed.classList.toggle('active');
};





