window.addEventListener('scroll',() =>{
    const header =document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
})

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('open');
}
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
    invert: false,
    },
    // autoHeight: true,
    pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
    }
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false
    }
});
