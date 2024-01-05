import $ from 'jquery'
// import Swiper from 'swiper'

import 'slick-slider'

const rater = require('rater-js')

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

// slider programs
$('.slider-programs').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // spaceBetween: 15,
  dots: true,
  arrows: false,
  centerPadding: '20px',
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

// slider programs
$('.slider-reviews1').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // spaceBetween: 15,
  dots: true,
  arrows: false,
  centerPadding: '20px',
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

// rating star
const ratingElements = document.querySelectorAll('.rater')
function raterRouter(el, ratingInput) {
  const myRater = rater({
    max: 5,
    rating: ratingInput,
    element: el,
    rateCallback: function rateCallback(rating, done) {
      myDataService.rate(rate).then(
        avgRating => {
          // update the avarage rating with the one we get from the server
          myRater.setRating(avgRating)
          // we could disable the rater to prevent another rating
          // if we dont want the user to be able to change their mind
          myRater.disable()
          // dont forget to call done
          done()
        },
        () => {
          // handle the error
          // dont forget to call done
          done()
        },
      )
    },
  })
}

ratingElements.forEach(el =>
  raterRouter(el, Number(el.previousElementSibling.dataset.rating)),
)