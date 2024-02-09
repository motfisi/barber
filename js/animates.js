document.addEventListener("DOMContentLoaded", function() {
    const block = document.querySelector(".glass");
    const block1 = document.querySelector(".glass1");
    const arrow = document.querySelector(".arrowpic1")
    const arrow1 = document.querySelector(".arrowpic2");
    const logo = document.querySelector(".logo");
    const startButton = document.querySelector(".arrow-container");
    const zapisbutton = document.querySelector(".zapis");
    const uslugibutton = document.querySelector(".uslugi");
    const startButton1 = document.querySelector(".arrow-container1");
    const date = document.querySelectorAll(".block");
    const modal = document.querySelector(".modalzapis");
    const cancel = document.querySelector(".cancel");
  
    startButton.addEventListener("click", function() {
      // Добавляем класс "animate", чтобы запустить анимацию
      block.classList.add("animate");
      block1.classList.add("animate1");
      arrow.classList.add("animate3");
      logo.classList.add("logoleft");
    });
  
    zapisbutton.addEventListener("click", function() {
      // Добавляем класс "animate", чтобы запустить анимацию
      block.classList.add("animate");
      block1.classList.add("animate1");
      arrow.classList.add("animate3");
      logo.classList.add("logoleft");
    });

    uslugibutton.addEventListener("click", function() {
        // Добавляем класс "animate", чтобы запустить анимацию
        block.classList.add("animate");
        block1.classList.remove("animate1");
        block1.classList.add("animate");
        arrow.classList.remove("animate3");
        arrow1.classList.add("animate3");
        logo.classList.add("logoleft");
      });
  
    startButton1.addEventListener("click", function() {
      // Добавляем класс "animate", чтобы запустить анимацию
      block1.classList.remove("animate1");
      block1.classList.add("animate");
      arrow.classList.remove("animate3");
      arrow1.classList.add("animate3");
    });
  
    arrow.addEventListener("click", function() {
      // Добавляем класс "animate", чтобы запустить анимацию
      block.classList.remove("animate");
      block1.classList.remove("animate1");
      block1.classList.remove("animate");
      arrow.classList.remove("animate3");
      logo.classList.remove("logoleft");
    });

    arrow1.addEventListener("click", function() {
        // Добавляем класс "animate", чтобы запустить анимацию
        block1.classList.remove("animate1");
        block1.classList.remove("animate");
        arrow1.classList.remove("animate3");
        block1.classList.add("animate1");
        arrow.classList.add("animate3");
      });

      logo.addEventListener("click", function() {
        // Добавляем класс "animate", чтобы запустить анимацию
        block1.classList.remove("animate1");
        block1.classList.remove("animate");
        arrow1.classList.remove("animate3");
        block1.classList.remove("animate1");
        arrow.classList.remove("animate3");
        block.classList.remove("animate");
        block.classList.remove("animate1");
        logo.classList.remove("logoleft");
      });
      


      date.forEach(function(item) {
        item.addEventListener("click", function() {
          // Проверяем, есть ли у текущего элемента класс block2
          if (this.classList.contains("block2")) {
            // Убираем класс "block2" у текущего элемента
            this.classList.remove("block2");
            modal.classList.add("animate4");
          } else {
            // Удаляем класс "block2" у всех элементов
            date.forEach(function(dateItem) {
              dateItem.classList.remove("block2");
            });
            
            // Удаляем класс "animate4" у модального окна
            modal.classList.remove("animate4");
            
            // Добавляем класс "block2" текущему элементу
            this.classList.add("block2");
          }
        });
      });
      
      
      


      cancel.addEventListener("click", function() {
        // Добавляем класс "animate", чтобы запустить анимацию
        modal.classList.add("animate4");
        date.forEach(function(dateItem) {
          dateItem.classList.remove("block2");
        });
      });
    
  });