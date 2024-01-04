import $ from 'jquery'
// import Swiper from 'swiper'

import 'slick-slider'

// const rater = require('rater-js')

// slider services
$('.slider-services').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // spaceBetween: 15,
  dots: true,
  arrows: false,
  centerPadding: '10px',
  variableWidth: true,
  // centerMode: true,
  // fade: true,
  responsive: [
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
})
