//Fading front page text - fades away when scroll down
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const imgText = this.document.getElementById('imgText');
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
        imgText.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
        imgText.classList.remove('scrolled');
    }
});

//Toggle for hamburger menu
function displayMenu(){
  const display = document.querySelector('.mobile-menu');
  if(display.classList.contains('hamburger-pressed')){
    display.classList.remove('hamburger-pressed');
  }else{
    display.classList.add('hamburger-pressed');
  }
}

//Section 3 slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.modules-track');

function goToSlide(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${index * 100/3}%)`;
    updateDots(index);
}

//Dots feature for slideshow
const dots = document.querySelectorAll('.dot');
const updateDots = (index) => {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

//Automatic sliding
setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
}, 5000);

//Slides in stat containers for section 2 when scrolled far enough down
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.6 //Trigger when 10% of the element is visible
  });

  document.querySelectorAll('.slide-in-element').forEach(el => {
    observer.observe(el);
  });

  //Feature that opens/closes footer dropdown
  function openCloseFooter() {
    const hidden = this.document.getElementById('hidden-text');
    const arrow = this.document.getElementById('arrow');
    if(hidden.classList.contains('unhide')){
      hidden.classList.remove('unhide');
      arrow.classList.remove('rotated');
    }else{
      hidden.classList.add('unhide');
      arrow.classList.add('rotated');
    }
  }