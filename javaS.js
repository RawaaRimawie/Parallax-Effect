window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;

    const parallax1 = document.querySelector('.parallax-1');
    const parallax2 = document.querySelector('.parallax-2');
    const parallax3 = document.querySelector('.parallax-3');

    parallax1.style.transform = 'translateY(' + (scrollTop * 0.3) + 'px)';
    parallax2.style.transform = 'translateY(' + (scrollTop * 0.4) + 'px)';
    parallax3.style.transform = 'translateY(' + (scrollTop * 0.9) + 'px)';



    
    
});



  


