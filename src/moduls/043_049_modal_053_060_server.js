function modal_043_049_server_053_060() {
  ////////////////// 043 044 Modal создаем и модифицируем модальное окно (окно ввода своих данных)////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  // с поиощью date- делаю выделение нужных мне элеменотов

  const modalUp = document.querySelectorAll("[date-modalUp]"),
    modalClose = document.querySelector(".modal__close"),
    modal = document.querySelector(".modal");
  //..........функция появления формы ..................................................
  function on() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // не позволяет прокручивать страницу .
    //clearInterval(modalTimer);
  }
  //..........функция скрытия формы ..................................................
  function of() {
    modal.style.display = "none";
    document.body.style.overflow = ""; //позволяет прокручивать страницу
  }

  modalUp.forEach((i) => {
    i.addEventListener("click", () => {
      on();
    });
  });

  //....при нажатии на пустую область вокруг формы заполнения создаем событие закрытия формы...
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      of();
    }
  });
  //..............при нажатии клавиши Escape закрывается форма.........................
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      of();
    }
  });

  //Блоки с Автоматически открытием модальных окон
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  /*
  // чтобы модальное окно открывалось через 3 секунды.................................
  const modalTimer = setTimeout(on, 3000);

  // чтобы модальное окно открывалось если пользователь дошел до конца страницы.........

  function scrollEnd() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight * 0.99

      //window.pageYOffset - сколько уже отмотано сайта по верхний левый угол
      //document.documentElement.clientHeight - высота открытой части страницы на экране
      //document.documentElement.scrollHeight - высота всего сайта
    ) {
      on();
      window.removeEventListener("scroll", scrollEnd); //если 1 раз открылось чтоб больше не открывалось
    }
  }
  window.addEventListener("scroll", scrollEnd);
*/
  /////048 Используем классы ( 048 || 049) ////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  /*
  class MenuCard {
    constructor( //прописываем все величины которые будут меняться
      src,
      alt,
      title,
      descr,
      price,
      currency,
      parentSelector,
      course
    ) {
      //прописываем их в this
      this.src = src; //расположение jpg
      this.alt = alt; //название блока
      this.title = title; //заголовок
      this.descr = descr; //текст блока
      this.price = price; //цена
      this.currency = currency; //валюта
      this.parent = document.querySelector(parentSelector); //расположение родительского блока .
      this.course = course; //курс рубля
      this.changeToRub(); //запуск метода перевода цены по курсу в рубль
      // //................................................................................
      // this.render(); //запускаем метод добавления элемента на страницу
      // //можно запустить метод render() здесь - и тогда в дальнейшем не нужно будет его .
      // // запускать после вновь созданных класов так( MenuFit.render();)
      // // т е сразу при создании новых дочерних классов будет добавляться элемент .
      // // на страицу, но мы сделаем иначе
      // //................................................................................
    }
    changeToRub() {
      //метод перевода цены по курсу в рубль
      this.price = this.price * this.course;
    }
    render() {
      //метод добавления элемента на страницу
      const box = document.createElement("fiv"); //обычно называют div
      //создать новый бокс с названием fiv и поместить в него блок рекламного окна
      box.innerHTML = `<div class="menu__item">
      <img src=${this.src} alt=${this.alt} />
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">  
        ${this.descr}
      </div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total">
        <span>${this.price}</span> ${this.currency}/день</div>
      </div>
    </div>
    `;
      this.parent.append(box); //box поместить внутрь-вконец this.parent
    }
  }

  const MenuElite = new MenuCard(
    "img/tabs/elite.jpg",
    '"elite"',
    "Меню “Премиум”",
    `В меню “Премиум” мы используем не только красивый дизайн упаковки, 
    но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - 
    ресторанное меню без похода в ресторан!`,
    27,
    "руб",
    "[data-container]",
    64
  );


  const MenuPost = new MenuCard(
    "img/tabs/post.jpg",
    '"post"',
    "Меню “Постное”",
    `Меню “Постное” - это тщательный подбор ингредиентов: 
    полное отсутствие продуктов животного происхождения, 
    молоко из миндаля, овса, кокоса или гречки, правильное 
    количество белков за счет тофу и импортных вегетарианских стейков.`,
    18,
    "руб",
    "[data-container]",
    64
  );

  const MenuFit = new MenuCard(
    "img/tabs/vegy.jpg",
    '"fit"',
    "Меню “Фитнес”",
    `Меню "Фитнес" - это новый подход к приготовлению блюд: больше
    свежих овощей и фруктов. Продукт активных и здоровых людей. Это
    абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
    13,
    "руб",
    "[data-container]",
    64
  );

  MenuFit.render();
  MenuPost.render();
  MenuElite.render();
*/
  /////049 Используем Rest оператор для добавления классов css в класс JS (048 || 049) ////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////

  class MenuCard {
    constructor(
      src,
      alt,
      title,
      descr,
      price,
      currency = "руб", //задаем параметр по умолчанию
      course = 64, //задаем параметр по умолчанию
      parentSelector = "[data-container]", //задаем параметр по умолчанию
      ...restClasses //добавляем оператор Rest(по сути это пока пустой массив)
    ) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.currency = currency;
      this.course = course;
      this.parent = document.querySelector(parentSelector);
      this.restClasses = restClasses;
      this.changeToRub();
    }
    changeToRub() {
      this.price = this.price * this.course;
    }
    render() {
      const box = document.createElement("div");
      this.restClasses.forEach((i) => {
        //переборка массива с добавлением нового класса в box
        box.classList.add(i); //добавить класс (i) в box
      });
      box.innerHTML = `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt}/>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span>${this.currency}/день</div>
        </div>
      </div>
    `;
      this.parent.append(box);
    }
  }
  //заменяем повторяющийся код классов на формулу с fetch аналогчную postData 796 строчка
  /*
  const MenuElite = new MenuCard(
    "img/tabs/elite.jpg",
    '"elite"',
    "Меню “Премиум”",
    `В меню “Премиум” мы используем не только красивый дизайн упаковки, 
    но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - 
    ресторанное меню без похода в ресторан!`,
    25,
    "USD",
    1,
    "[data-container]",
    "classForRest"
    //добавил "classForRest" как Rest элемент новый класс из css(со курсивным шрифтом - создал специально)
  );

  const MenuPost = new MenuCard(
    "img/tabs/post.jpg",
    '"post"',
    "Меню “Постное”",
    `Меню “Постное” - это тщательный подбор ингредиентов: 
    полное отсутствие продуктов животного происхождения, 
    молоко из миндаля, овса, кокоса или гречки, правильное 
    количество белков за счет тофу и импортных вегетарианских стейков.`,
    18
    //незаданные значения берет из параметров по умолчанию
  );

  const MenuFit = new MenuCard(
    "img/tabs/vegy.jpg",
    '"fit"',
    "Меню “Фитнес”",
    `Меню "Фитнес" - это новый подход к приготовлению блюд: больше
    свежих овощей и фруктов. Продукт активных и здоровых людей. Это
    абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
    13
    //незаданные значения берет из параметров по умолчанию
  );

  MenuFit.render();
  MenuPost.render();
  MenuElite.render();
*/
  const getResourse = async (url) => {
    const put = await fetch(url);
    if (!put.ok) {
      throw new Error(`Could not fetch ${url}, status: ${put.status} `);
    }
    return await put.json();
  };

  /////053 Реализация скрипта отправки данных на сервер (053||053+054) /////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  /*
  const forms = document.querySelectorAll("form"),
    btnMin = document.querySelectorAll(".btn_min");

  const message = {
    //создаем обьект с отпетами пользователю для вывода в div(statusMassage )
    loading: "Идет загрузка",
    succsess: "Спасибо, скоро мы с вами свяжемся",
    errors: "Что-то пошло не так",
  };

  console.log(forms);

  forms.forEach((i) => {
    postData(i);
  });

  function postData(f) {
    f.addEventListener("submit", (e) => {
      //когда в форму чтото внесли, ()=>{}
      e.preventDefault(); //отменяем стандартное поведение браузера

      const statusMassage = document.createElement("div"); // создаем див на странице для вывода ответа .
      f.append(statusMassage); //statusMassage расположить внизу f
      statusMassage.textContent = message.loading; //выведет сообщение загрузка если форма заполнена .

      const r = new XMLHttpRequest(); //создаем серверный обьект XMLHttpRequest()
      r.open("POST", "server.php"); //описываем его

      const formD = new FormData(f);
      //FormData() - позволяет сразу передать серверу введенные пользователем данные .
      //чтоб FormData() работал нужно чтоб в "input" был "name=" (<input name="name"/> .

      //1)Обычная закгрузка(или так 1)..............
      r.send(formD); //загружаем на сервер
      //............................................

      // //2)Загрузка в JSON (или так 2).........................................
      // //r.setRequestHeader("Content-type", "multipart/json"); //описывать его заголовки только если выводишь json .
      // //но лучше не описывать никакие заголовки
      // const obj = {}; //создаем пустой обьект
      // formD.forEach(function (value, key) {
      //   // переводим обьект FormData() в обычный обьект .
      //   obj[key] = value;
      // });
      // const objJson = JSON.stringify(obj); //переводим в JSON
      // r.send(objJson); //загружаем на сервер
      // //......................................................................

      r.addEventListener("load", () => {
        // в случае загрузки
        if (r.status === 200) {
          //если статус загрузки 200
          forms.forEach((i) => {
            // перебрать и очмстить все формы заполнения
            i.reset();
          });
          btnMin.forEach((i) => {
            //перебрать - присвоить кнопке "Перезвонить мне" надпись "Готово" .
            i.textContent = "Готово";
          });
          statusMassage.textContent = message.succsess;
          setTimeout(() => {
            //перебрать - присвоить кнопке "Готово"сново надпись"Перезвонить мне" .
            btnMin.forEach((i) => {
              i.textContent = "Перезвонить мне";
            });
            statusMassage.remove(); //очистить статусный div
          }, 10000); // через 10 сек
        } else {
          statusMassage.textContent = message.errors;
        }
      });
    });
  }
*/
  ///// 053 + 054 Красивое оповещение пользователя (053||053+054)  /////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  /*
  const forms = document.querySelectorAll("form"),
    answerModal = document.createElement("div"), //создаем div
    modalDialog = document.querySelector(".modal__dialog"); //берем блок для вывода ответа пользователю

  const message = {
    loading: "Идет загрузка",
    succsess: "Спасибо, скоро мы с вами свяжемся",
    errors: "Что-то пошло не так",
    spiner: `<img class="spinner_s" src="icons/spinner.svg"/>`,
  };

  forms.forEach((i) => {
    postData(i);
  });

  function postData(f) {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      showWindowAnswer(message.loading, message.spiner);
      const r = new XMLHttpRequest();
      r.open("POST", "server.php");
      const formD = new FormData(f);
      r.send(formD);
      r.addEventListener("load", () => {
        forms.forEach((i) => {
          i.reset();
        });
        if (r.status === 200) {
          showWindowAnswer(message.succsess);
        } else {
          showWindowAnswer(message.errors, message.spiner);
        }
      });
    });
  }

  function showWindowAnswer(m, s = " ") {
    modalDialog.classList.add("hide"); //добавляем скрывающий класс

    on();
    answerModal.classList.add("modal__dialog"); //вновь созданному div добавляем класс .
    answerModal.innerHTML = `
    <div class="modal__content">
    <div data-close class="modal__close">&times;</div>
    <div class="modal__title">${m}</div>
    <div >${s}</div>   
    </div>     
    `; //прописываем верстку вновь созданного div
    modal.append(answerModal); //поместить answerModal в конец блока modal
    setTimeout(() => {
      answerModal.remove();
      modalDialog.classList.add("show");
      modalDialog.classList.remove("hide");
      of();
    }, 5000);
  }

  document.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-close") == "") {
      //если мы кликаем по атрибуту data-close .
      of();
    }
  });
*/
  ///// (053+054+056) 056 Fetch API вместо XMLHttpRequest() (053||053+054||053+054+056) /////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  /*
  const forms = document.querySelectorAll("form"),
    answerModal = document.createElement("div"), //создаем div
    modalDialog = document.querySelector(".modal__dialog"); //берем блок для вывода ответа пользователю .

  const message = {
    loading: "Идет загрузка",
    succsess: "Спасибо, скоро мы с вами свяжемся",
    errors: "Что-то пошло не так",
    spiner: `<img class="spinner_s" src="icons/spinner.svg"/>`,
  };

  forms.forEach((i) => {
    bindPostData(i);
  });

  function bindPostData(f) {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      showWindowAnswer(message.loading, message.spiner);
      const formData = new FormData(f);

      const formDataObject = {}; //созаем пустой обьект
      formData.forEach((value, key) => {
        formDataObject[key] = value; //перебираем обьект formData в обычный обьект formDataObject .
      });

      // const r = new XMLHttpRequest(); //-убираем обьект XMLHttpRequest() и меняем его на fetch
      // r.open("POST", "server.php");
      // - убираем обьект XMLHttpRequest() и меняем его на fetch
      fetch("server.php", {
        method: "POST",

        //body: formData, //в качестве тела сообщения отсылаем обьект FormData

        body: JSON.stringify(formDataObject), //в качестве тела сообщения отсылаем обьект JSON .
        headers: {
          "Content-type": "application/json", //прописываем заголовки(обычно одинаковые )
        }, //обычно используется при передаче JSON + надо разкоментить 2 срочку в php .
      })
        .then((data) => {
          showWindowAnswer(message.succsess);
          console.log(data.text());
        })
        .catch(() => {
          showWindowAnswer(message.errors, message.spiner);
        })
        .finally(() => {
          forms.forEach((n) => {
            n.reset();
          });
        });

      // вместо этого кода используем Promise(fetch.then.catch.finally) который выше .
      // r.addEventListener("load", () => {
      //   forms.forEach((i) => {
      //     i.reset();
      //   });
      //   if (r.status === 200) {
      //     showWindowAnswer(message.succsess);
      //   } else {
      //     showWindowAnswer(message.errors, message.spiner);
      //   }
      // });
    });
  }

  function showWindowAnswer(m, s = " ") {
    modalDialog.classList.add("hide"); //добавляем скрывающий класс
    on();
    answerModal.classList.add("modal__dialog"); //вновь созданному div добавляем класс .
    answerModal.innerHTML = `
    <div class="modal__content">
    <div data-close class="modal__close">&times;</div>
    <div class="modal__title">${m}</div>
    <div >${s}</div>   
    </div>     
    `; //прописываем верстку вновь созданного div
    modal.append(answerModal); //поместить answerModal в конец блока modal
    setTimeout(() => {
      answerModal.remove();
      modalDialog.classList.add("show");
      json;
      modalDialog.classList.remove("hide");
      of();
    }, 5000);
  }

  document.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-close") == "") {
      //если мы кликаем по атрибуту data-close .
      of();
    }
  });
  */
  ///// 058 npm json-sever ///////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  // npm init
  // npm i json-server --seve-dev
  // json-server db.json (если неработает) npx json-server --watch db.json   .
  // npm i (это если скачиваешь чужой репозиторий)

  // fetch("http://localhost:3000/menudb.json")
  //   .then((data) => data.json())
  //   .then((res) => console.log(res));
  /*
   */
  ///// 059 Получение данных с сервера. Async_Await (ES8) (056 || 059) ///////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////

  const forms = document.querySelectorAll("form"),
    answerModal = document.createElement("div"),
    modalDialog = document.querySelector(".modal__dialog");

  const message = {
    loading: "Идет загрузка",
    succsess: "Спасибо, скоро мы с вами свяжемся",
    errors: "Что-то пошло не так",
    spiner: `<img class="spinner_s" src="icons/spinner.svg"/>`,
  };

  forms.forEach((i) => {
    bindPostData(i);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json", //прописываем заголовки(обычно одинаковые )
      },
    });
    return await res.json();
  };

  function bindPostData(f) {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      showWindowAnswer(message.loading, message.spiner);
      const formData = new FormData(f);

      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

      //////////// вместо массивного перебота будем использовать  entries и formEntries для FormData(НЕ РАБОТАЕТ) .
      //////////// entries - превращает FormData в массив массивов
      //////////// Object.formEntries - превращаем массив массивов в обьект
      //const formJson = JSON.stringify(Object.formEntries(formData.entries()));

      postData("http://localhost:3000/requests", JSON.stringify(formDataObject))
        .then(() => {
          showWindowAnswer(message.succsess);
        })
        .catch(() => {
          showWindowAnswer(message.errors);
        })
        .finally(() => {
          forms.forEach((n) => {
            n.reset();
          });
        });
    });
  }

  function showWindowAnswer(m, s = " ") {
    modalDialog.classList.add("hide");
    on();
    answerModal.classList.add("modal__dialog");
    answerModal.innerHTML = `
    <div class="modal__content">
    <div data-close class="modal__close">&times;</div>
    <div class="modal__title">${m}</div>
    <div >${s}</div>   
    </div>     
    `;
    modal.append(answerModal);
    setTimeout(() => {
      answerModal.remove();
      modalDialog.classList.add("show");
      modalDialog.classList.remove("hide");
      of();
    }, 3000);
  }

  document.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-close") == "") {
      of();
    }
  });
  ////// 060 используем fetch-библиотеку exios (добавили ссылку на нее в HTML 384 стр) (заменяем код ниже на axios запрос) //////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  // getResourse("http://localhost:3000/menu").then((data) => {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     new MenuCard(img, altimg, title, descr, price).render();
  //   });
  // });

  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(img, altimg, title, descr, price).render();
    });
  });
  return;
}
export { modal_043_049_server_053_060 };
