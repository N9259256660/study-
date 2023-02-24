function tabs_038() {
  /////////////////// 038 создаем табы в новом проэкте ////////////////////////////////////////////////
  //редактируем страницу с нагромождением данных и привязываем клик по табам меню к появлению на экране нужной инфы
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items"),
    divs = tabsParent.querySelectorAll("div");
  ////////////////// 1 вариант с tabs //////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  /*
  //............создаю фугкцию hideTabsOnStert - скрыть табы в начале ...................
  function hideTabsOnStart() {
    tabsContent.forEach((n) => {
      n.style.display = "none"; //скрыть все tabsContent(не отбражать на дисплее )
    });
    tabsContent[0].style.display = "block"; //отобразить первый элемент на начальной странице .
  }
  hideTabsOnStart();

  //............ создаю функцию hideTubsAfterClick - скрыть табы после клика ............
  
  function hideTabsAfterClick() {
    tabsContent.forEach((n) => {
      n.style.display = "none"; //скрыть все tabsContent(не отбражать на дисплее)
    });
    tabs.forEach((i) => {
      i.classList.remove("tabheader__item_active"); //удалить этот класс со всех эл.массива
    });
  }
  
  //.............. переборка кликов .....................................................

  tabs.forEach((n, i) => {
    n.addEventListener("click", () => {
      hideTabsAfterClick(); //скрыть табы после клика
      tabsContent[i].style.display = "block"; //отобразить конкренный элемент
      n.classList.add("tabheader__item_active"); //добавить класс к соотв.элементу
    });
  });
*/
  ///////////////// 2 вариант с div ///////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*
  function tabsOut() {
    tabsContent.forEach((i) => {
      i.style.display = "none";
    });
    divs.forEach((i) => {
      i.classList.remove("tabheader__item_active");
      i.classList.add("tabheader__item");
    });
  }
  //....................................................................................

  function tabStart() {
    tabsContent.forEach((i) => {
      i.style.display = "none";
      tabsContent[0].style.display = "block";
    });
  }
  tabStart();
  //....................................................................................

  divs.forEach((n, i) => {
    n.addEventListener("click", () => {
      tabsOut();
      tabsContent[i].style.display = "block";
      n.classList.add("tabheader__item_active");
    });
  });
*/
  //////////////// 3 вариант по шаблону урока////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  /*
function hideTab() {
    tabsContent.forEach((i) => {
      i.style.display = "none";
    });
    tabs.forEach((i) => {
      i.classList.remove("tabheader__item_active");
    });
  }
  //....................................................................................

  function showTab(i) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
  //.....................................................................................

  hideTab();
  showTab(0);
  //....................................................................................

  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("tabheader__item"))
      tabs.forEach((t, i) => {
        if (e.target == t) {
          hideTab();
          showTab(i);
        }
      });
  });
  */
  //////////////// 4 вариант с классами////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////// в файл css добавил несколько стилей (ниже) //////////////////////////////////

  // .hide {display: none;} - стиль скрывания элемента на странице

  // .show {display: block;} - стиль закрепления элемента на странице

  // .fade {animation-name: fade;animation-duration: 1.5s;} - стиль плавного появления элем.
  // @keyframes fade {from {opacity: 0.1;} to {opacity: 1;}}

  ///.................................................................................

  function hideTab() {
    tabsContent.forEach((i) => {
      i.classList.add("hide");
      i.classList.remove("show", "fade");
    });
    tabs.forEach((i) => {
      i.classList.remove("tabheader__item_active");
    });
  }

  //....................................................................................

  function showTab(i) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  //.....................................................................................

  hideTab();
  showTab(0);

  //....................................................................................

  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("tabheader__item")) {
      tabs.forEach((t, i) => {
        if (e.target == t) {
          hideTab();
          showTab(i);
        }
      });
    }
  });
  return;
}
export { tabs_038 };
