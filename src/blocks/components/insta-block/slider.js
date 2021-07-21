import $ from "jquery";

jQuery(function ($) {
  $(function () {
    const $slider = $("#wis-slides");
    // const $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
    // const $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
    // const $sliderCounterTotal = $sliderContainer.find(".js-counter-total");

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      // dots: true,
      fade: false,
      infinite: true,
      // arrows: true,
      // appendDots: $sliderControlsDots,
      // prevArrow: $sliderContainer.find(".carousel-controls-btn--prev"),
      // nextArrow: $sliderContainer.find(".carousel-controls-btn--next"),
    });
  });
});
