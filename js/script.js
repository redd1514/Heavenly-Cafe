//burger

        var sidemenu = document.getElementById("sidemenu");
        
        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }


//sticky nav

window.addEventListener("scroll", function() {
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//active page
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.pathname === window.location.pathname) {
    link.setAttribute('aria-current', 'page');
  }
});
//slider
const slides = document.querySelectorAll('.slideH');
const dots = document.querySelectorAll('.dotH');
const next = document.querySelector('.nextH');
const prev = document.querySelector('.prevH');

let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[i].classList.add('active');
  dots[i].classList.add('active');

  document.querySelector('.slides').style.transform = `translateX(-${i * 100}%)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});



//autoplay ule
let autoPlayInterval = setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index); 
}, 3000);

const slider = document.querySelector('.sliderH');
slider.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
slider.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index); 
  }, 3000);
});