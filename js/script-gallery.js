let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let slide = document.querySelector('.slide-interior');
    let items = document.querySelectorAll('.slide-interior .item');
    
    // move the first item to the end
    slide.appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let slide = document.querySelector('.slide-interior');
    let items = document.querySelectorAll('.slide-interior .item');
    
    // move the last item to the front
    slide.prepend(items[items.length - 1]);
});