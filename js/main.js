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

// init Isotope
var $isotope = $('#isotope-container').isotope({});
// filter items on button click
$('#isotope-filters').on( 'click', 'button', function() {
var filterValue = $(this).attr('data-filter');
$isotope.isotope({ filter: filterValue });
});

