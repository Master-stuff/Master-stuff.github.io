document.addEventListener('DOMContentLoaded', () => {
  // 1. Category Filtering on index.html
  const filterBtns = document.querySelectorAll('[data-filter]');
  const rows = document.querySelectorAll('.project-row[data-category]');
  const counter = document.getElementById('project-counter');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.toggle('active', b === btn));

      let visible = 0;
      rows.forEach((row) => {
        const match = target === 'all' || row.dataset.category === target;
        row.hidden = !match;
        if (match) visible += 1;
      });

      if (counter) {
        const padded = String(visible).padStart(2, '0');
        counter.textContent = `${padded} ${visible === 1 ? 'PROJECT' : 'PROJECTS'}`;
      }
    });
  });

  // 2. Media Lightbox (<dialog>)
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');

  if (lightbox && lbImg && lbCaption) {
    document.querySelectorAll('.media-frame img').forEach((img) => {
      img.addEventListener('click', () => {
        const frame = img.closest('.media-frame');
        const label = frame ? frame.querySelector('.figure-label, .media-caption') : null;
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbCaption.textContent = img.dataset.caption || (label ? label.textContent.trim() : img.alt);
        lightbox.showModal();
      });
    });

    if (lbClose) lbClose.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.close();
    });
  }

  // 3. One-Click Email Copy
  document.querySelectorAll('.copy-email-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = btn.dataset.email || 'bouaicha.maker@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        btn.textContent = 'Copied';
        setTimeout(() => {
          btn.textContent = '[Copy]';
        }, 2000);
      } catch {
        window.location.href = `mailto:${email}`;
      }
    });
  });
});
