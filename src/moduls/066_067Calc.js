function calc_066_067() {
  ////////////////////// 066 067 Калькулятор на сайте //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  // обозначаем пол,активность как рест операторыб
  // потому что изначально классы активности(подсвечено зеленым) присвоены
  // остальные 3 переменных будут вноситься пользователем это вес рост возрост
  // всё меняется - поэтому let
  let sex = "female",
    height,
    weight,
    age,
    ratio = 1.375;
  const result = document.querySelector(".calculating__result span");

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    localStorage.setItem("sex", sex);
  }
  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    localStorage.setItem("ratio", ratio);
  }
  function startSelection(selector, activClass) {
    const elementLocal = document.querySelectorAll(selector);
    elementLocal.forEach((i) => {
      i.classList.remove(activClass);
      if (i.getAttribute("id") === localStorage.getItem("sex")) {
        i.classList.add(activClass);
      }
      if (i.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
        i.classList.add(activClass);
      }
    });
  }
  startSelection("#gender div", "calculating__choose-item_active");
  startSelection(".calculating__choose_big div", "calculating__choose-item_active");
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //функция финального калькулирования внесенных данных
  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      //если хотябы 1 поле не заполнено и не выбрано(folse)
      result.textContent = "_____";
      return; //чтоб прекратило выполняться
    }
    if (sex === "female") {
      //если женщина
      result.textContent = Math.round((447, 6 + (9, 2 * weight) + 3.1 * height - 4.3 * age) * ratio); //формула каллорий для женщин
    } else {
      result.textContent = Math.round((88, 36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio); //формула каллорий для мужчин
    }
  }
  calcTotal(); //чтоб сразу выдал ______

  //функция статичной информации т е выбора кликом по подходящему полю(муж/жен и тд)
  function staticInformation(selector, activClass) {
    const element = document.querySelectorAll(selector); //у нас 6 полей для, оптимизации сщздал универсальную форму с переменной
    element.forEach((m) => {
      //переборка в таком виде оказалась нужна чтоб работали сами поля а не области вокруг нах (был баг)
      m.addEventListener("click", (e) => {
        //если кликают на область
        if (e.target.getAttribute("data-ratio")) {
          // и эта обасть имеет атрибут "data-ratio"
          ratio = +e.target.getAttribute("data-ratio"); //то ratio присваевается циферное значение наход.внутри этого атрибута
        } else {
          // если эта обасть не имеет атрибут "data-ratio"
          sex = e.target.getAttribute("id"); //переменной sex присваивается значение находящееся в соответствующем id
        }
        console.log(ratio, sex); //просто проверка что все Ок
        localStorage.setItem("sex", sex);
        localStorage.setItem("ratio", ratio);
        //сначала с помощью forEach удаляем со всех полей класс активности потом добавляем выбранному
        element.forEach((i) => {
          i.classList.remove(activClass);
        });
        e.target.classList.add(activClass);

        calcTotal(); //финально калькулируем
      });
    });
  }
  staticInformation("#gender div", "calculating__choose-item_active");
  staticInformation(".calculating__choose_big div", "calculating__choose-item_active");

  //функция динимичной информации т е выбора кликом по подходящему полю(муж/жен и тд)
  function dinamicIformation(selector) {
    const input = document.querySelector(selector); //у нас 3 поля, для оптимизации сделал универсальную форму с переменной
    input.addEventListener("input", () => {
      //если заполяется форма
      if (input.value.match(/\D/g)) {
        //если значение введенное в input не число \D
        input.style.border = "2px solid red"; //то окрасить границы input в красный цвет толщиной 1px
      } else {
        input.style.border = "none"; //если нет, то убрать краску границы
      }
      switch (input.getAttribute("id")) {
        //посути тот же if(), switch - если значенмие id у формы
        case "height": //сли значенмие id у формы "height"
          height = +input.value; //присваиваем height циферное значение внутри input
          break; //остановка
        case "weight":
          weight = +input.value;
          break;
        case "age":
          age = +input.value;
          break;
      }
      calcTotal(); //финально калькулируем
    });
  }

  dinamicIformation("#height");
  dinamicIformation("#weight");
  dinamicIformation("#age");
  return;
}
export { calc_066_067 };
