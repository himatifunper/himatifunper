const menubtn = document.querySelector('.menu');
const crossbtn = document.querySelector('.cross-icon');
const navLinks = document.querySelector('.links');
menubtn.addEventListener('click', () => {
    navLinks.classList.add('active');

})
crossbtn.addEventListener('click', () => {
    navLinks.classList.remove('active');

})

    let currentIndex = 0;
    const slides = document.querySelectorAll('.background-slider img');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? 1 : 0;
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    setInterval(nextSlide, 5000); // Ubah 5000 menjadi durasi yang Anda inginkan (dalam milidetik)
    
    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);

    //berita terbaru
    $(document).ready(function(){
        // News Slider (for sliding multiple items at a time)
        $('.news-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    
        // Custom Navigation
        $('.slide-prev').on('click', function(){
            $('.news-slider').slick('slickPrev');
        });
    
        $('.slide-next').on('click', function(){
            $('.news-slider').slick('slickNext');
        });
    });
    
