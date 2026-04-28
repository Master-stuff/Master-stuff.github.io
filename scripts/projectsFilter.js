const FILTER_ICON = document.querySelector('section.projects div.filter i');
const FILTER_ITEMS = document.querySelectorAll('section.projects div.filter span.item');
const PROJECTS = document.querySelectorAll('section.projects div.content div.project');

FILTER_ICON.style.width = FILTER_ITEMS[0].offsetWidth + 'px';

for (let i = 0; i < FILTER_ITEMS.length; i++) {
    const item = FILTER_ITEMS[i];
    item.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            FILTER_ITEMS.forEach(elmt => {
                elmt.classList.remove('active');
            });

            item.classList.add('active');
            FILTER_ICON.style.width = FILTER_ITEMS[i].offsetWidth + 'px';
            let pos = 0;
            for (let j = 0; j < i; j++) {
                pos += FILTER_ITEMS[j].offsetWidth + 20;
            }
            FILTER_ICON.style.left = pos + 'px';
        }

        PROJECTS.forEach(box => {
            if (item.classList.value.split(' ')[1] === 'all') {
                box.style.display = 'flex';
            }
            else if (item.classList.value.split(' ')[1] === box.classList.value.split(' ')[1]) {
                box.style.display = 'flex';
            }
            else {
                box.style.display = 'none';
            }
        });
    });
}
