// Animate Smooth Scroll
const $viewWork = document.querySelector('#view-work');
const $work = document.querySelector('#images');

$viewWork.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: $work.offsetTop,
        behavior: 'smooth'
    })
});

// Init Isotope
const iso = new Isotope( '#isotope-container', {
    itemSelector: '.image-wrapper',
    layoutMode: 'fitRows'
});

const $filtersElem = document.querySelector('#isotope-filters');

$filtersElem.addEventListener('click', (e) => {
    let filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    iso.arrange({ filter: filterValue });
});

// LIGHTBOX 
lightbox.option({
    'alwaysShowNavOnTouchDevices': true
});

