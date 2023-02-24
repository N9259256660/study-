import { tabs_038 } from "./moduls/038_tabs.js";
import { timer_041 } from "./moduls/041_timer.js";
import { modal_043_049_server_053_060 } from "./moduls/043_049_modal_053_060_server.js";
import { slider_061_062_063 } from "./moduls/061_062_063_Slider.js";
import { calc_066_067 } from "./moduls/066_067Calc.js";

window.addEventListener("DOMContentLoaded", () => {
  //...................................................................................
  //  способ запсания импорта по старомустандарту
  //   const  tabs_038 = require("./moduls/038_tabs"),
  //   timer_041 = require("./moduls/041_timer"),
  //   modal_043_049_server_053_060 = require("./moduls/043_049_modal_053_060_server"),
  //   slider_061_062_063 = require("./moduls/061_062_063_Slider"),
  //   calc_066_067 = require("./moduls/066_067Calc");

  tabs_038();
  timer_041();
  modal_043_049_server_053_060();
  slider_061_062_063();
  calc_066_067();
  //...................................................................................
});
