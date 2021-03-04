import $ from "jquery";
import "popper.js";
import "bootstrap";

// import Swiper JS/styles
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
// Swiper navigation
import SwiperCore, { Navigation} from 'swiper/core';
SwiperCore.use([Navigation]);

const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });;

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
})