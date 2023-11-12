
// ====== Hero Section Slider

var swiper = new Swiper('.swiper-container', {
      pagination: {
            el: '.swiper-pagination',
      },
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },
      on: {
            slideChange: function () {
                  var current = swiper.realIndex + 1;
                  var total = swiper.slides.length;

                  document.querySelector('.swiper-fraction-current').textContent = current;
                  document.querySelector('.swiper-fraction-total').textContent = total;
            }
      }
});