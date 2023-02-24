function slider_061_062_063() {
  ////////////////////// 061 Создаем слайдер на сайте вариант 1 меняющмеся слайды ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*
  const sliders = document.querySelectorAll(".offer__slide"),
    next = document.querySelector(".offer__slider-next"),
    prev = document.querySelector(".offer__slider-prev"),
    total = document.getElementById("total"),
    current = document.getElementById("current");

  let slideIndex = 1;

  if (sliders.length < 10) {
    total.textContent = `0${sliders.length}`;
  } else {
    total.textContent = sliders.length;
  }

  function showSliders(n) {
    if (n > sliders.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = sliders.length;
    }
    sliders.forEach((i) => {
      i.style.display = "none";
    });
    sliders[slideIndex - 1].style.display = "block";

    if (sliders.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  showSliders(slideIndex);

  function plusSliders(n) {
    showSliders((slideIndex += n));
  }

  next.addEventListener("click", () => {
    plusSliders(1);
  });

  prev.addEventListener("click", () => {
    plusSliders(-1);
  });
*/
  ////////////////////// 061 Создаем слайдер на сайте вариант 1 меняющиеся слайды(МОЙ) //////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*
  let numberSlide = 1;
  const sliders = document.querySelectorAll(".offer__slide"),
    next = document.querySelector(".offer__slider-next"),
    prev = document.querySelector(".offer__slider-prev"),
    total = document.getElementById("total"),
    current = document.getElementById("current");

  function showNumber(pls, val) {
    //создаем функцию вывода номера слайда
    if (val < 10) {
      pls.textContent = `0${val}`;
    } else {
      pls.textContent = val;
    }
  }

  function showSlide() {
    //функция показа конкретного слайда и скрывания остальных
    sliders.forEach((i) => {
      i.classList.add("hide");
      i.classList.remove("show");
    });
    sliders[numberSlide - 1].classList.add("show");
    sliders[numberSlide - 1].classList.remove("hide");
    showNumber(current, numberSlide); //выводим новер текущего слайда
  }
  showSlide(); //функция показа конкретного слайда и скрывания остальных(старт)
  showNumber(total, sliders.length); //выводим общее кол-во слайдов
  showNumber(current, numberSlide); //выводим новер текущего слайда

  next.addEventListener("click", () => {
    // клик по стрелочке вправо
    numberSlide++; //увеличиваем на +1
    if (numberSlide > sliders.length) {
      //если номер слайда больше колличества слайдов, то
      numberSlide = 1;
    }
    showSlide(); //функция показа конкретного слайда и скрывания остальных
  });

  prev.addEventListener("click", () => {
    // клик по стрелочке влево
    numberSlide--; //уменьшаем -1
    if (numberSlide < 1) {
      //если номер слайда меньше ноля, то
      numberSlide = sliders.length;
    }
    showSlide(); //функция показа конкретного слайда и скрывания остальных
  });
  */
  ////////////////////// 062 Создаем слайдер на сайте вариант 2 слайды-flex (061||062) ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*
  let slideIndex = 1,
    offSet = 0;

  const slides = document.querySelectorAll(".offer__slide"),
    next = document.querySelector(".offer__slider-next"),
    prev = document.querySelector(".offer__slider-prev"),
    total = document.getElementById("total"),
    current = document.getElementById("current"),
    slidesField = document.querySelector(".offer__slider-inner"),
    // в html создали div который обьединяет все 4 слайда дали ему произвольный класс

    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    // взяли область отображения сайда на экране

    widthFild = window.getComputedStyle(slidesWrapper).width;
  // обозначили за переменную ширину облати экрана на которой отображается слайд

  slidesField.style.width = slides.length * 100 + "%"; //кол-во слайдов * 100 и переводим в проценты .
  slidesField.style.display = "flex"; //задаем гоизонтальноеотображение всей области на экране(фиксируем) .
  slidesField.style.transition = "0.5s all"; //плавная смена слайдов

  slidesWrapper.style.overflow = "hidden"; //отобразить на экране только 1 слайд

  // //необязательно просто приравнивает ширину слайда к ширине области отображения слайда
  // sliders.forEach((i) => {
  //   i.style.width = widthFild;
  // });

  next.addEventListener("click", () => {
    if (
      offSet ==
      +widthFild.slice(0, widthFild.length - 2) * (slides.length - 1)
    ) {
      offSet = 0;
    } else {
      offSet += +widthFild.slice(0, widthFild.length - 2);
    }
    slidesField.style.transform = `translateX(-${offSet}px)`;
    slideIndex++;
    if (slideIndex > slides.length) {
      //если номер слайда больше колличества слайдов, то
      slideIndex = 1;
    }
    showNumber(current, slideIndex);
  });

  prev.addEventListener("click", () => {
    if (offSet == 0) {
      offSet = +widthFild.slice(0, widthFild.length - 2) * (slides.length - 1);
    } else {
      offSet -= +widthFild.slice(0, widthFild.length - 2);
    }
    slidesField.style.transform = `translateX(-${offSet}px)`;
    slideIndex--;
    if (slideIndex < 1) {
      //если номер слайда больше колличества слайдов, то
      slideIndex = slides.length;
    }
    showNumber(current, slideIndex);
  });

  function showNumber(pls, val) {
    //создаем функцию вывода номера слайда
    if (val < 10) {
      pls.textContent = `0${val}`;
    } else {
      pls.textContent = val;
    }
  }

  showNumber(total, slides.length); //выводим общее кол-во слайдов
  showNumber(current, slideIndex); //выводим новер текущего слайда
*/
  ////////////////////// 063 Создаем навигацию для слайдеров (061||062||63) ///////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let slideIndex = 1,
    offSet = 0;

  const slides = document.querySelectorAll(".offer__slide"),
    next = document.querySelector(".offer__slider-next"),
    prev = document.querySelector(".offer__slider-prev"),
    total = document.getElementById("total"),
    current = document.getElementById("current"),
    slidesField = document.querySelector(".offer__slider-inner"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    widthFild = window.getComputedStyle(slidesWrapper).width,
    slider = document.querySelector(".offer__slider"),
    //(63)берем родительский элемент всех слайдов для того чтоб изменить его .style.position
    indicators = document.createElement("ol"), //(63)добавляем элемент точек индикаторов
    //widthFildWithoutPx = +widthFild.slice(0, widthFild.length - 2); // отображает размер ширины поля слайда без px .
    widthFildWithoutPx0 = widthFild.match(/\d\d\d/gi), //вырожение выше с помощью Регуляных выражений .
    widthFildWithoutPx = +widthFildWithoutPx0.shift(); //т к рег.выраение даем массив, преобразуем встроку и цифру .

  slider.style.position = "relative"; //(63)все элементы которые будут абсолютно с позиционированны будут норм отображаться
  slidesField.style.width = slides.length * 100 + "%"; //кол-во слайдов * 100 и переводим в проценты .
  slidesField.style.display = "flex"; //задаем гоизонтальноеотображение всей области на экране(фиксируем) .
  slidesField.style.transition = "0.5s all"; //плавная смена слайдов
  slidesWrapper.style.overflow = "hidden"; //отобразить на экране только 1 слайд

  //(62)необязательно просто приравнивает ширину слайда к ширине области отображения слайда
  slides.forEach((i) => {
    i.style.width = widthFild;
  });

  indicators.classList.add("carousel-indicators"); //(63)добвляем вновьсозданный класс в css к точкам-индикаторам .

  ////(63) или добавляем стилистику css не трогая файл css, прямо в JS
  // indicators.style.cssText = `
  // position: absolute;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   z-index: 15;
  //   display: flex;
  //   justify-content: center;
  //   margin-right: 15%;
  //   margin-left: 15%;
  //   list-style: none;
  // `;

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li"); //(63)для правильной семантики создаем li - строчку/точку .
    dot.setAttribute("data-slide-to", i + 1); //(63)устанавливаем атрибут для dot и устанавливаем номерацию начиная с 1(i+1) .
    dot.classList.add("dot"); //(63)либо можно добавить стили прямо в JS
    indicators.append(dot); //(63)апендим точку в индикаторс(помещаем внутрь)
  }

  slider.append(indicators); //(63)помещаем точки внутрь родительского блока слайдов

  const dots = document.querySelectorAll(".dot");

  function opacityDot() {
    dots.forEach((i) => {
      i.style.opacity = 0.3;
    });
    dots[slideIndex - 1].style.opacity = 1;
  }
  opacityDot();

  next.addEventListener("click", () => {
    if (offSet == widthFildWithoutPx * (slides.length - 1)) {
      offSet = 0;
    } else {
      offSet += widthFildWithoutPx;
    }
    slidesField.style.transform = `translateX(-${offSet}px)`;
    slideIndex++;
    if (slideIndex > slides.length) {
      //если номер слайда больше колличества слайдов, то
      slideIndex = 1;
    }
    opacityDot();
    showNumber(current, slideIndex);
  });

  prev.addEventListener("click", () => {
    if (offSet == 0) {
      offSet = widthFildWithoutPx * (slides.length - 1);
    } else {
      offSet -= widthFildWithoutPx;
    }
    slidesField.style.transform = `translateX(-${offSet}px)`;
    slideIndex--;
    if (slideIndex < 1) {
      //если номер слайда больше колличества слайдов, то
      slideIndex = slides.length;
    }
    opacityDot();
    showNumber(current, slideIndex);
  });

  function showNumber(pls, val) {
    //создаем функцию вывода номера слайда
    if (val < 10) {
      pls.textContent = `0${val}`;
    } else {
      pls.textContent = val;
    }
  }

  showNumber(total, slides.length); //выводим общее кол-во слайдов
  showNumber(current, slideIndex); //выводим новер текущего слайда

  // (63) переборка кликов по точкам с выводом соответствующего слайда
  dots.forEach((i) => {
    i.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      //ранее установленный атрибут используем как таргет data-slide-to будет давать тот номер атрибута на который будут кликать (1,2,3,4)
      slideIndex = slideTo; // т к атрибуты мы обозначили 1234 начиная с 1, то просто приравниваем .
      offSet = widthFildWithoutPx * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offSet}px)`; //движение слайдов на определенное кол-во px влево (поэтому -)
      opacityDot(); // формула снижения прозрачности выбираемой точки/слайда
      showNumber(current, slideIndex);
    });
  });
  return;
}

export { slider_061_062_063 };
