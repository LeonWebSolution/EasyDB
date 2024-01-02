export class Accordion {
  constructor() {
      document.addEventListener('DOMContentLoaded', function () {
          var questionTops = document.querySelectorAll('.faq__question-top');

          questionTops.forEach(function (questionTop, index) {
              var content = questionTop.parentNode.querySelector('.faq__question-content');
              var closeBtn = questionTop.querySelector('.close');

              questionTop.addEventListener('click', function () {
                  var maxHeight = content.scrollHeight + 'px';
                  content.style.maxHeight = content.classList.contains('visible') ? 0 : maxHeight;
                  content.classList.toggle('visible');
                  closeBtn.classList.toggle('active');
              });

              closeBtn.addEventListener('click', function () {
                  content.style.maxHeight = 0;
                  content.classList.remove('visible');
                  closeBtn.classList.remove('active');
              });

              // Set initial state for the first element
              if (index === 0) {
                  var firstContent = questionTop.parentNode.querySelector('.faq__question-content');
                  var firstCloseBtn = questionTop.querySelector('.close');
                  firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
                  firstContent.classList.add('visible');
                  firstCloseBtn.classList.add('active');
              }
          });

          // ... existing code ...

          document.addEventListener('DOMContentLoaded', function () {
              const itemTop = document.querySelector('.aditions__item-top');
              const itemContent = document.querySelector('.aditions__item-content');
              const item = document.querySelector('.aditions__item');
              const close = document.querySelector('.close');

              itemTop.addEventListener('click', function () {
                  item.classList.toggle('active');
                  close.classList.toggle('active');

                  // Автоматически высчитываем max-height для элемента aditions__item-content
                  if (item.classList.contains('active')) {
                      itemContent.style.maxHeight = itemContent.scrollHeight + 'px';
                  } else {
                      itemContent.style.maxHeight = '0';
                  }
              });

              // Set initial state for the first element
              var firstItemContent = document.querySelector('.aditions__item-content');
              var firstClose = document.querySelector('.close');
              firstItemContent.style.maxHeight = firstItemContent.scrollHeight + 'px';
              item.classList.add('active');
              firstClose.classList.add('active');
          });
      });
  }
}
