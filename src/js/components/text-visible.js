export class TextVisible {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', function () {
            var questionTops = document.querySelectorAll('.faq__question-top');
        
            questionTops.forEach(function (questionTop) {
                var content = questionTop.nextElementSibling.querySelector('.faq__question-content');
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
            });
        });
    }
}
