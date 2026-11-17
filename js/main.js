// cards -->

const reviewCards = document.querySelectorAll('.reviews__card');
const reviewsSection = document.querySelector('.reviews');

const reviewsObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        reviewCards.forEach((reviewCard, index) => {

            setTimeout(() => {
                reviewCard.classList.add('show');
            }, index * 120);

        });

        reviewsObserver.disconnect();

    });

}, {
    threshold: 0.2
});

reviewsObserver.observe(reviewsSection);

const headerTab = document.querySelectorAll('.categories__list-item');
const itemTab = document.querySelectorAll('.categories__cards');

for (let item of headerTab) {
    item.addEventListener('click', function () {

        for (let head of headerTab) {
            head.classList.remove('active');
        }

        item.classList.add('active');


        for (let element of itemTab) {
            element.classList.add('hidden');
        }

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('hidden');

        const cards = content.querySelectorAll('.categories__card');
        cards.forEach(card => {
            card.classList.add('hide');
        });
        cards.forEach((card, index) => {

            setTimeout(() => {

                card.classList.remove('hide');

            }, index * 200);

        });

    })
}

// <-- cards

// ------------------------ //

// accordeon -->

const accordeon = document.querySelectorAll('.accordeon');
const accordeonTitles = document.querySelectorAll('.accordeon__item-title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
    accordeonTitle.addEventListener('click', function () {
        const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

        accordeonTitle.classList.toggle('accordeon__item-title--active');
        currentText.classList.toggle('accordeon__text--visible');

        if (currentText.classList.contains('accordeon__text--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + '40px'
        } else {
            currentText.style.maxHeight = null
        }

    });
});

// <-- accordeon

// ------------------------ //

// snow -->

const flakes = document.querySelectorAll('.snow__flake');

flakes.forEach((flake, index) => {
  const size = 1.3 + Math.random() * 3; // размер от 0.7em до 1.5em
  const duration = 20 + Math.random() * 10; // время падения от 20 до 30 сек
  const delay = -Math.random() * 20; // случайный старт
  const leftPosition = Math.random() * 100; // позиция по горизонтали в %

  flake.style.fontSize = `${size}em`;
  flake.style.left = `${leftPosition}%`;
  flake.style.animationDuration = `${duration}s`;
  flake.style.animationDelay = `${delay}s`;
});

// <-- snow


