const SECTIONS = document.querySelectorAll('section');

const NAV_LINKS = document.querySelectorAll('nav ul li');
const NAV_ICON = document.querySelector('nav ul i');

const TALK_BTN = document.querySelector('section.intro div.profile div.links a.contact');

function goScroll(i, y=0) {
    for (let j = 0; j < i; j++) {
        y += SECTIONS[j].offsetHeight;
    }
    
    window.scrollTo(0, y);
}

function activateNavLink(element, i) {
    if (!element.classList.contains('active')) {
        NAV_LINKS.forEach(link => {
            link.classList.remove('active');
        });

        element.classList.add('active');
    }
}

window.addEventListener('scroll', () => {
    const y = [
        0,
        SECTIONS[0].offsetHeight * .5,
        SECTIONS[0].offsetHeight + SECTIONS[1].offsetHeight * .5,
        SECTIONS[0].offsetHeight + SECTIONS[1].offsetHeight + SECTIONS[2].offsetHeight * .5,
        SECTIONS[0].offsetHeight + SECTIONS[1].offsetHeight + SECTIONS[2].offsetHeight + SECTIONS[3].offsetHeight * .5
        
    ];

    if (window.scrollY >= y[4]) {
        activateNavLink(NAV_LINKS[4], 4);
        NAV_ICON.style.left = 'calc(16px + ' + 4 + '*(38px + 32px))';
    }
    else if (window.scrollY >= y[3]) {
        activateNavLink(NAV_LINKS[3], 3);
        NAV_ICON.style.left = 'calc(16px + ' + 3 + '*(38px + 32px))';
    }
    else if (window.scrollY >= y[2]) {
        activateNavLink(NAV_LINKS[2], 2);
        NAV_ICON.style.left = 'calc(16px + ' + 2 + '*(38px + 32px))';
    }
    else if (window.scrollY >= y[1]) {
        activateNavLink(NAV_LINKS[1], 1);
        NAV_ICON.style.left = 'calc(16px + ' + 1 + '*(38px + 32px))';
    }
    else if (window.scrollY >= y[0]) {
        activateNavLink(NAV_LINKS[0], 0);
        NAV_ICON.style.left = 'calc(16px + ' + 0 + '*(38px + 32px))';
    }
});
