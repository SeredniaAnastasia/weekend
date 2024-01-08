import $ from 'jquery'
// import Swiper from 'swiper'
import './components/burger'

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

// animate();

function circle(d, a, element, radius, sped) {
  const canvas = document.getElementById(element);
  const ctx = canvas.getContext("2d");
  let delta = d;
  let angle = a;
  let width = canvas.width - delta * 2;
  let height = canvas.height - delta * 2;
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let r = width / 2;
  // }

  function draw() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "transparent";
    ctx.strokeStyle = "rgba(32, 180, 134, 0.25)";
    ctx.arc(width / 2 + delta, height / 2 + delta, width / 2, 0, 2 * Math.PI);
    ctx.moveTo(canvas.width / 2 - delta - delta + canvas.width / 2.4 + delta, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, width / 2.4, 0, 2 * Math.PI);

    ctx.moveTo(canvas.width / 2 + width / 3.11, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, width / 3.13, 0, 2 * Math.PI);

    ctx.moveTo((canvas.width / 2 + width / 5.12), (canvas.height / 2));
    ctx.arc(canvas.width / 2, canvas.height / 2, width / 5.1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    angle -= sped;

    ctx.beginPath();
    ctx.fillStyle = "rgba(32, 180, 134, 1)";
    ctx.moveTo(x - r * Math.sin(angle), y - r * Math.cos(angle));
    ctx.arc(x - r * Math.sin(angle), y - r * Math.cos(angle), radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    window.requestAnimationFrame(draw);
  }
  draw()
}
// }
circle(8, 0, "myCanvas", 5, 0.003)
circle(8, 3, "myCanvas1", 7, 0.005)