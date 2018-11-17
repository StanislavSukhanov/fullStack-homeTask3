window.addEventListener('DOMContentLoaded', function() {

  // -----------------------исходные данные-----------------------

  var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;
  //var timerId;

  // -----------------------логика-----------------------


  function goToSlide(n) {                                         // функция которая прокручивает слайды

    slides[currentSlide].className = 'slide';

    currentSlide = (n + slides.length) % slides.length;                

    slides[currentSlide].className = 'slide showing';
  }

  function nextSlide() {                                              // функция которая прокручивает на один слайд вперед
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {                                          // функция которая прокручивает на один слайд назад
    goToSlide(currentSlide - 1);
  }

  // handles start of slider autoplay;

  
  function startAutoplay(){
    timerId = setInterval(nextSlide, 1000);
  }

  // handles stop of slider autoplay; 
  function stopAutoplay() {
    clearInterval(timerId);
  }

  // -----------события--------------------------------------

  next.onclick = function() {

    nextSlide();
  };
  previous.onclick = function() {

    previousSlide();
  };

  //handles start of autoplay: 
  start.onclick = function(){
    
    startAutoplay();
    
  };
  
  
  // does not work
  stops.onclick = function(){
    console.log('worked2');
    stopAutoplay();
  };
  
});


// ((0+1))+5%5)  - 1
// ((1+1))+5%5)  - 2
// ((2+1))+5%5)  - 3
// ((3+1))+5%5)  - 4
// ((4+1))+5%5)  - 0
// ((5+1))+5%5)  - 1
// ((6+1))+5%5)  - 2