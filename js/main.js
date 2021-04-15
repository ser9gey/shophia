$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
  });


$('.brands-slider__wrapp').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1330,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 745,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});