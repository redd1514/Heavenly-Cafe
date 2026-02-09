
//burger
        var sidemenu = document.getElementById("sidemenu");
        
        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }

document.addEventListener("DOMContentLoaded", () => {
  
  //active page
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.pathname === window.location.pathname) {
      link.setAttribute('aria-current', 'page');
    }
  });
//  sticky
window.addEventListener("scroll", function() {
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

  // slider ng menu
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prev = document.querySelector('.nav.prev');
  const next = document.querySelector('.nav.next');

  let index = 0;

  function updateSlider() {
    const offset = (index - 1) * -33.333;
    track.style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  if (next && prev) {
    next.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      updateSlider();
    });

    prev.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        updateSlider();
      });
    });

    let autoPlayInterval = setInterval(() => {
      index = (index + 1) % slides.length;
      updateSlider();
    }, 2000);

    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    slider.addEventListener('mouseleave', () => {
      autoPlayInterval = setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlider();
      }, 2000);
    });
  }

  // Category highlight
  const cards = document.querySelectorAll('.category-card');
  const currentPage = window.location.pathname.split("/").pop();
  cards.forEach(card => {
    const linkHref = card.getAttribute('href');
    if (linkHref === currentPage) {
      card.classList.add('active');
    }
  });
});