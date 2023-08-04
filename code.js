      // открывает меню при нажатии одной кнопки, а закрывает либо кнопки либо пунктов меню, 
      // плюс переносит на нужную часть сайта
      var openMenuBtn = document.querySelector("[data-mobile-menu-open]");
      var closeMenuBtn = document.querySelectorAll("[data-mobile-menu-close]");
      var menu = document.querySelector("[data-mobile-menu]");

      openMenuBtn.addEventListener("click", () => {
         menu.classList.toggle('is-hidden');
      });
      closeMenuBtn.forEach(item => {
         item.addEventListener('click', () => {
            menu.classList.toggle('is-hidden');
         });
      })



      // открывает меню при нажатии нескольких кнопок, а закрывает одной кнопкой, 
      
      var openContactBtn = document.querySelectorAll("[data-contact-open]");
      var closeContactBtn = document.querySelector("[data-contact-close]");
      var contact = document.querySelector("[data-contact]");

      openContactBtn.forEach(item => {
         item.addEventListener('click', () => {
            contact.classList.toggle('is-hidden');
         });
      })
         closeContactBtn.addEventListener('click', () => {
            contact.classList.toggle('is-hidden');
      })



      // слайдеры.
      const oneSwiper = new Swiper(".oneSwiper", {
         navigation: {
            nextEl: ".one-next",
            prevEl: ".one-prev"
         },
         loop: true,
         slidesPerView: 4,
         spaceBetween: 30,
         initialSlide: 0,
         grabCursor: true,
         slideToClickedSlide: true,
      });

      const twoSwiper = new Swiper(".twoSwiper", {
         navigation: {
            nextEl: ".two-next",
            prevEl: ".two-prev"
         },
         loop: true,
         slidesPerView: 2,
         spaceBetween: 30,
         initialSlide: 0,
         grabCursor: true,
         slideToClickedSlide: true,
      });



      // при уведении мышки с элемента колекции, состояние фокус сменяется на блюр. И стили фокуса исчезают.
      // не влияет на табуляцию
      let swiperBtn = document.querySelectorAll('[data-focusBtn]')
      swiperBtn.forEach(item => {
         item.addEventListener('mouseout', () => {
            item.blur();
         })
      })

            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // < a class="btn link" onclick = "javascript:history.back(); return false;" href = "#" > come back</a >
            // это действие позволяет через ссылку вернутся назад на то место где клацнул
            // < button onclick = "window.history.back()" > Кнопка назад</button >
            // это для кнопки, но возможно для всех, так как вроде это новый API для возврата назад
            // < input type = "button" onclick = "history.back();" value = "Назад" />
            // это для шнпута с типом кнопка.



      // При нажатии на eventsBtn(кнопка) в колекции все allEvents(li.item),
      //  в которых есть атрибут data - allEvents, убирается или появляется класс is-hidden.
      // и появляются долнительные скрытые элементы. Так же туда добавился класс small, 
      // как тригер что б задать нужные стили для другого размера элемента.
      // Так же проверяются все элементы с классом events__item и всем этим элементам без класса тригера data 
      // добавляется класс тригер small а все нужные элементы получают нужные классы для правильной стилизации.
      // Все стили классов с классоми тригерами записываются ниже основных стилей чтоб почучить больший приоритет.
      // Хотя их приоритет и так должен быть выше так в записи используется два класса.
      // Но на всякий случай
      var eventsBtn = document.querySelector('[data-eventsBtn]');
      var allEvents = document.querySelectorAll('[data-allEvents]');
      eventsBtn.addEventListener('click', () => {
         allEvents.forEach(item => {
            item.classList.toggle('is-hidden');
            item.classList.toggle('small');
         })
         var events = document.querySelectorAll('.events__item')
         for (var i = 0; i < blogs.length; i++) {
            if (events[i].querySelector('.events__item-small').classList.contains('data')) {
               return;
            } else {
               events[i].classList.toggle('small');
               events[i].querySelector('.events__item-small').classList.toggle('small');
               events[i].querySelector('.events__item-big').classList.toggle('is-hidden');
            }
         };
      });



      // var events = document.querySelector('.events__list');
      // var eventsSum = document.querySelector('.events__list').children.classList.contains('is-hidden').length;
      // if (eventsSum >= 4) {
      //    events.classList.toggle('events__list--gorizontale')
      // }




      // при нажатии на featureBtn(кнопка) в колекции все allFeature(li.item),
      //  в которых есть атрибут data - allFeature, убирается или появляется класс is-hidden.
      var featureBtn = document.querySelector('[data-featureBtn]');
      var allFeature = document.querySelectorAll('[data-allFeature]');
      featureBtn.addEventListener('click', () => {
         allFeature.forEach(item => {
            item.classList.toggle('is-hidden');
         })
      });



      // при клике по элементу на инпут ставится checked и элемент реагирует, в нашем случае открывается, 
      // соответсвенно стилям!
      function faqFunction() {
         var chbox;
         chbox = document.getElementById('check');
         if (chbox.checked) {
            checked = false;
         }
         else {
            checked = true;
         }
      }



      // при клике у всех элементов одной вложенности уберается класс открытия и меняются стили их детям, 
      // а элементу по которому кликнули меняется всё наоборот. То есть при клике, элемент открывается,
      // если был закрыт, а остальные закрываются.
      let blogs = document.querySelectorAll('.blog__item')
      blogs.forEach(item => {
         item.addEventListener('click', () => {
            blogs.forEach(item => {
               item.classList.remove('blog__open')
               item.querySelector('.blog__background-open').classList.add('is-hidden')
               item.querySelector('.blog__close').classList.remove('is-hidden')
            })
            item.classList.add('blog__open')
            item.querySelector('.blog__background-open').classList.remove('is-hidden')
            item.querySelector('.blog__close').classList.add('is-hidden')
         })
      })


      // при нажатии на blogsBtn(кнопка) в колекции все allBlog(аrticle), в которых есть атрибут data-allBlog, 
      // убирается или появляется класс is-hidden. Все скобочки и знак функции которые закомитены,
      // изначально были но с ними почемуто не работало. Возможно потому-что они были на отдельном js файле и 
      // подключены по ссылке.
      // (() => {
      // const refs = {
      //    blogsBtn: document.querySelector('[data-blogsBtn]'),
      //    allBlog: document.querySelectorAll('[data-allBlog]'),
      // };
      // refs.blogsBtn.addEventListener('click', toggleAllBlog);
      // function toggleAllBlog() {
      //    refs.allBlog.forEach(item => {
      //       item.classList.toggle('is-hidden');
      //    })
      // }
      // })();
      //  

      // делает туже функцию что верхний код только, как мне кажется сейчас немного понятней.
      // И тут функцию не обьявляли а использовали стрелочную функцию: () =>, либо объявляют function (),
      // либо имя её. Всё это равно значно.
      var blogsBtn = document.querySelector('[data-blogsBtn]');
      var allBlog = document.querySelectorAll('[data-allBlog]');
      blogsBtn.addEventListener('click', () => {
         allBlog.forEach(item => {
            item.classList.toggle('is-hidden');
         })
      });


      // При клике по кнопке происходит поиск атрибута data-trigger и сравнение его значения с false. 
      // Если да, то innerText меняет текст кнопки, также изменяет значение data-trigger с false на true.
      // Если нет, то innerText присваивается значение атрибута data-text, это All Blog.
      // И data-trigger присваивается значение false. С btn не работает потомучто его много, а querySelector
      // выбирает толь одного. Можно попробовать цикл или querySelectorAll и потом forEach.

      // let btnText = document.querySelectorAll('[data-Btn]');
      // // let btnText = document.querySelector('.btn');
      // btnText.addEventListener('click', function () {
      //    if (this.dataset.trigger == 'false') {
      //       this.innerText = 'Close';
      //       this.dataset.trigger = true;
      //    } else {
      //       this.innerText = this.dataset.text;
      //       this.dataset.trigger = false;
      //    }
      // });


      //  Делает тоже самое что и предыдущий код только для всех элементов с классом btn. 
      // Можно подставлять другие атибуты и применить общий код для разных кнопок,
      //  главное чтоб вторая надпись была одинакова надпись
      let btnText = document.querySelectorAll('[data-Btn]');
      btnText.forEach(item => {
         item.addEventListener('click', function () {
            if (this.dataset.trigger == 'false') {
               this.innerText = 'Close';
               this.dataset.trigger = true;
            } else {
               this.innerText = this.dataset.text;
               this.dataset.trigger = false;
            }
         });
      })


// то самое что и код выше, заменяет текст в кнопке. Только при сравнении строк нужно не забывать про регистр.
// У нас в стилях стоит uppercase значит и тут нужно сравнивать с большими буквами иначе не сработает. 
// Или использовать функцию toUpperCase() что б буквы текста были большими не зависимо от того какаие на самом деле,
// а в строке для проверки писать тогда только большими. Ну или toLowerCase тогда наоборот
      // let btnText = document.querySelector('[data-blogsBtn]');
      // // let btnText = document.querySelector('.btn');
      // btnText.addEventListener('click', function () {
      //    if (this.innerText == 'ALL BLOG') {
      //       this.innerText = 'Close';
      //    } else {
      //       this.innerText = 'All Blog';
      //    }
      // });



      // при клике у всех элементов одной вложенности уберается класс открытия,
      // а элементу по которому кликнули всё добаляется, меняется всё наоборот.
      // var blogs = document.querySelectorAll('.blog__item')
      // blogs.forEach(item => {
      //    item.addEventListener('click', () => {
      //       blogs.forEach(item => {
      //          item.classList.remove('blog__open')
      //       })
      //       item.classList.add('blog__open')
      //    })
      // })


      // при клике проверяется есть ли нужный класс и если нет добавляется, если есть уберается
      // var blogs = document.getElementsByClassName('blog__item');
      // for (var i = 0; i < blogs.length; i++) {
      //    blogs[i].addEventListener('click', selectBlog);
      // }
      // function selectBlog() {
      //    if (this.classList.contains('blog__open')) {
      //       this.classList.remove('blog__open');
      //    } else {
      //       this.classList.add('blog__open');
      //    }
      // }


      // при клике проверяется есть ли нужный класс и если нет добавляется, если есть уберается.
      // То есть тоже самое что и код выше только без отдельной функции, всё в одном блоке.
      // плюс - на одну строчку меньше писать,
      // минус - если эта функция ещё понадобится то будешь заново всё писать
      // for (var i = 0; i < blogs.length; i++) {
      //    blogs[i].addEventListener('click', function () {
      //       if (this.classList.contains('blog__open')) {
      //          this.querySelector('.blog__background-open').classList.remove('is-hidden');
      //       } else {
      //          this.querySelector('.blog__background-open').classList.add('is-hidden');
      //       }
      //    });
      // }


      // при клике на элемент у которого уже есть класс blog__open ничего не происходит,
      // при клике где его нет, срабатывают все стили на открывание. ближайшие соседи закрываются,
      // правда стили у них не меняются обратно.
      // var blogs = document.getElementsByClassName('blog__item');
      // for (var i = 0; i < blogs.length; i++) {
      //    blogs[i].addEventListener('click', function () {
      //       if (this.classList.contains('blog__open')) {
      //          return;
      //       } else {
      //          this.classList.add('blog__open');
      //          this.querySelector('.blog__background-open').classList.remove('is-hidden');
      //          this.querySelector('.blog__close').classList.add('is-hidden');
      //          this.nextElementSibling.classList.remove('blog__open');
      //          this.previousElementSibling.classList.remove('blog__open');
      //       }
      //    });
      // }



      // не работает!!!
      // var blogs = document.getElementsByClassName('blog__item');
      // for (var i = 0; i < blogs.length; i++) {
      //    blogs[i].addEventListener('click', function () {
      //       if (this.classList.contains('blog__open')) {
      //          return;
      //       } else {
      //          this.classList.add('blog__open');
      //          this.querySelector('.blog__background-open').classList.remove('is-hidden');
      //          this.querySelector('.blog__close').classList.add('is-hidden');
      //          let previousSibling = document.getElementsByClassName('blog__item').previousElementSibling;
      //          for (var i = 0; i < previousSibling.length; i++) {
      //             previousSibling[i].classList.remove('blog__open');
      //             previousSibling[i].querySelector('.blog__background-open').classList.add('is-hidden');
      //             previousSibling[i].querySelector('.blog__close').classList.remove('is-hidden');
      //          }
      //          let nextSibling = document.getElementsByClassName('blog__item').nextElementSibling;
      //          for (var i = 0; i < nextSibling.length; i++) {
      //             nextSibling[i].classList.remove('blog__open');
      //             nextSibling[i].querySelector('.blog__background-open').classList.add('is-hidden');
      //             nextSibling[i].querySelector('.blog__close').classList.remove('is-hidden');
      //          }
      //       }
      //    })
      // }

      // не работает!!!
      // var blogs = document.getElementsByClassName('blog__item');
      // for (let i = 0; i < blogs.length; i++) {
      //       blogs[i].addEventListener('click', function () {
      //          if (this.classList.contains('blog__open')) {
      //             return;
      //          } else {
      //             this.classList.add('blog__open');
      //             this.querySelector('.blog__background-open').classList.remove('is-hidden');
      //             this.querySelector('.blog__close').classList.add('is-hidden');
      //             let previousSibling = document.getElementsByClassName('blog__item').previousElementSibling;
      //             for (let i = 0; i < previousSibling.length; i++) {
      //                previousSibling[i].classList.remove('blog__open');
      //                if (document.querySelector('blog__open') === null) {
      //                   document.querySelector('.blog__background-open').classList.add('is-hidden');
      //                   document.querySelector('.blog__close').classList.remove('is-hidden');
      //                }
      //             }
      //             let nextSibling = document.getElementsByClassName('blog__item').nextElementSibling;
      //             for (let i = 0; i < nextSibling.length; i++) {
      //                nextSibling[i].classList.remove('blog__open');
      //                if (document.querySelector('blog__open') === null) {
      //                   document.querySelector('.blog__background-open').classList.add('is-hidden');
      //                   document.querySelector('.blog__close').classList.remove('is-hidden');
      //                }
      //             }
      //          }
      //       })
      //    }


      // кликаешь и все стили срабатывают на соседей не действует
      // var blogs = document.querySelector('.blog__item');
      // var blogs = document.getElementsByClassName('blog__item');
      //    for (var i = 0; i < blogs.length; i++) {
      //       blogs[i].addEventListener('click', function () {
      //          if (this.classList.contains('blog__open')) {
      //             this.classList.remove('blog__open')
      //          } else {
      //             this.classList.add('blog__open');
      //          }
      //       });
      //    }
      //    for (let i = 0; i < blogs.length; i++) {
      //       blogs[i].addEventListener('click', function () {
      //          if (this.classList.contains('blog__open')) {
      //             this.querySelector('.blog__background-open').classList.remove('is-hidden');
      //             this.querySelector('.blog__close').classList.add('is-hidden');
      //          } else {
      //             this.querySelector('.blog__background-open').classList.add('is-hidden');
      //             this.querySelector('.blog__close').classList.remove('is-hidden');
      //          }
      //       });
      //    }


      // кликаешь и все стили срабатывают на соседей не действует.
      // Работает всё как и код выше просто всё в одном блоке
      // var blogs = document.getElementsByClassName('blog__item');
      // for (var i = 0; i < blogs.length; i++) {
      //    blogs[i].addEventListener('click', function () {
      //       if (this.classList.contains('blog__open')) {
      //          this.classList.remove('blog__open');
      //          this.querySelector('.blog__background-open').classList.add('is-hidden');
      //          this.querySelector('.blog__close').classList.remove('is-hidden');
      //       } else {
      //          this.classList.add('blog__open');
      //          this.querySelector('.blog__background-open').classList.remove('is-hidden');
      //          this.querySelector('.blog__close').classList.add('is-hidden');
      //       }
      //    });
      // }


// при клике в любом месте нашего элемента инпут либо чекается или наоборот
      // var faqScript = document.querySelector('.faqScript');
      // faqScript.addEventListener('click', function (event) {
      //    if (event.target != event.carrentTarget && event.target.type != 'checkbox') {
      //       var input = event.target.querySelector('input');
      //       input.checked = !input.checked;
      //    }
      // }, false);