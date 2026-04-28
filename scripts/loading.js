const LOADER = document.getElementById('loader');
const ELMTS = [
    'section.intro div.profile div.text span.hi',
    'section.intro div.profile div.text h1',
    'section.intro div.profile div.text span.job',
    'section.intro div.profile div.links',
    'section.intro div.profile div.photo',
    'section.intro div.social',
    'section.intro div.scrollDown',
    'nav'
];

const OPT = [
    { delay: 1000, duration: 2000, distance: '60px', origin: 'top' },
    { delay: 1060, duration: 2000, distance: '60px', origin: 'top' },
    { delay: 1120, duration: 2000, distance: '60px', origin: 'top' },
    { delay: 1240, duration: 2000, distance: '60px', origin: 'top' },
    { delay: 1600, duration: 2000, distance: '60px', origin: 'top' },
    { delay: 2200, duration: 4000, distance: '60px', origin: 'bottom' },
    { delay: 2200, duration: 4000, distance: '60px', origin: 'bottom' },
    { delay: 2000, duration: 2000 }
];

window.addEventListener('load', () => {
    LOADER.classList.add('loaded');

    for (let i = 0; i < ELMTS.length; i++) {
        ScrollReveal().reveal(ELMTS[i], OPT[i]);
    }
});
