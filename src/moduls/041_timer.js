function timer_041() {
  /////////////////////////////// 041  Timer  ///////////////////////////////////////////////

  // 1000 - 1 cек
  // 60 000 - 1 мин
  // 3 600 000 - 1 час
  // 86 400 000 - 1 день
  // 2 592 000 000 - 30 дней
  // 31 536 000 000 - 365 дней(1год)
  // 315 532 800 000 - 10 лет(8лет по 365 дней и 2 года по 366 дней)
  // 946 684 800 000 - 2000-01-01T00:00:00.000Z
  // 1 577 836 800 000 - 2020-01-01T00:00:00.000Z
  /*
  const deadLine = "2022-12-31"; //задаем дату конца акции

  //....функция будет определять разницу между временем конца акции и временем сейчас......

  function getTimeRemaining(endtime) {
    const tt = Date.parse(endtime) - Date.parse(new Date()),
      // tt это переменная между заданным временем конца акции и мгновенным временем сейчас
      //Math.floor - округление до целого
      //(% 24 показать остаток от деления на 24)
      days = Math.floor(tt / 86400000), //узнаем кол-во оставшихся дней
      hours = Math.floor((tt / 3600000) % 24), //узнаем кол-во оставшихся часов
      minutes = Math.floor((tt / 60000) % 60), //узнаем кол-во оставшихся минут
      seconds = Math.floor((tt / 1000) % 60); //узнаем кол-во оставшихся секунд
    return {
      total: tt,
      dayss: days,
      hourss: hours,
      minitess: minutes,
      secondss: seconds,
      //выводим все переменные в глоб.область как обьект
    };
  }

  //.....функция установки таймера на страницу..........................................

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector), //выбираем блок таймера
      days = timer.querySelector("#days"), // # потому что выбираем id
      hours = timer.querySelector("#hours"), //--||--
      minutes = timer.querySelector("#minutes"), //--||--
      seconds = timer.querySelector("#seconds"), //--||--
      timeInterval = setInterval(updateClock, 1000);
    updateClock(); //запускаем сдесь чтоб избежать залипания на 1 сек старых значений

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZiro(t.dayss); //записываем все на страницу добавляя gitZiro для добавления нуля слеева 
      hours.innerHTML = getZiro(t.hourss); //--||--
      minutes.innerHTML = getZiro(t.minitess); //--||--
      seconds.innerHTML = getZiro(t.secondss); //--||--
      if (t.total <= 0) {//если разинца между временем акции и реал.временем 0 и меньше
        clearInterval(timeInterval);//то заканчиваем интервал
      }
    }
  }
//.......................функция добавления нуля слева от недвузначных цифр..............

  function getZiro(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  setClock(".timer", deadLine);
*/
  /////////////////////////////// 041 Timer  ТО ЖЕ САМОЕ СДЕЛАЛ САМ ////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  const theEnd = "2023-02-28T23:59:59";

  const go = setInterval(deltaTime, 1000);

  function deltaTime() {
    const t = Date.parse(theEnd) - Date.parse(new Date()),
      d = Math.floor(t / 86400000),
      h = Math.floor((t % 86400000) / 3600000),
      m = Math.floor((t % 3600000) / 60000),
      s = Math.floor((t % 60000) / 1000),
      arr1 = [d, h, m, s],
      D = document.getElementById("days"),
      H = document.getElementById("hours"),
      M = document.getElementById("minutes"),
      S = document.getElementById("seconds"),
      arr2 = [D, H, M, S];
    arr2.forEach((n, i) => {
      n.innerHTML = createZiro(arr1[i]);
    });
    if (t === 0) {
      clearInterval(go);
    }
  }

  function createZiro(z) {
    if (z < 10) {
      z = `0${z}`;
    }
    return z;
  }
  ///////////////////////////////  Timer + bonus ///////////////////////////////////////////////

  function lessonTime() {
    const arrLesson = [8, 11, 20, 19, 29, 7, 12, 23, 16],
      allM = arrLesson.reduce((a, b) => {
        return a + b;
      }),
      lesson = arrLesson.length,
      lessonH = Math.floor(allM / 60),
      lessonM = Math.floor(allM % 60),
      arrL1 = [lesson, lessonH, lessonM],
      les = document.getElementById("lesson"),
      lesH = document.getElementById("hours-lesson"),
      lesM = document.getElementById("minutes-lesson"),
      arrL2 = [les, lesH, lesM];
    arrL2.forEach((n, i) => {
      n.innerHTML = createZiro(arrL1[i]);
    });
  }
  lessonTime();
  return;
}
export { timer_041 };
