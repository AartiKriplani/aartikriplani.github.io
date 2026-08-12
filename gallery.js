/* ═══════════════════════════════════════════
   SHARED PHOTO GALLERY + LIGHTBOX
   Wires up clicks on any:
     .masonry .photo-item[data-src]   → lightbox with prev/next through the grid
     .gallery-item[data-src]          → lightbox, single image
   Works with markup already in the page and
   with markup injected later (e.g. into a modal),
   since clicks are handled via delegation.
   Pair with gallery.css.
═══════════════════════════════════════════ */
(function () {
  var overlay, imgEl, closeBtn, prevBtn, nextBtn;
  var srcs = [];
  var idx = 0;

  function buildLightbox() {
    if (document.getElementById('lb-overlay')) return;
    document.body.insertAdjacentHTML('beforeend',
      '<div class="lb-overlay" id="lb-overlay" role="dialog" aria-modal="true" aria-label="Enlarged photo">' +
        '<div class="lb-content">' +
          '<button type="button" class="lb-close" id="lb-close" aria-label="Close image preview">×</button>' +
          '<button type="button" class="lb-nav prev" id="lb-prev" aria-label="Previous photo">&#8592;</button>' +
          '<button type="button" class="lb-nav next" id="lb-next" aria-label="Next photo">&#8594;</button>' +
          '<img src="" alt="" id="lb-image">' +
        '</div>' +
      '</div>');

    overlay  = document.getElementById('lb-overlay');
    imgEl    = document.getElementById('lb-image');
    closeBtn = document.getElementById('lb-close');
    prevBtn  = document.getElementById('lb-prev');
    nextBtn  = document.getElementById('lb-next');

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    prevBtn.addEventListener('click', function (e) { e.stopPropagation(); show(idx - 1); });
    nextBtn.addEventListener('click', function (e) { e.stopPropagation(); show(idx + 1); });

    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft')  show(idx - 1);
    });
  }

  function show(i) {
    idx = (i + srcs.length) % srcs.length;
    imgEl.src = srcs[idx];
    imgEl.alt = 'Photo ' + (idx + 1);
  }

  function open(group, i, alt) {
    srcs = group;
    show(i);
    if (alt) imgEl.alt = alt;
    overlay.classList.add('open');
  }

  function close() {
    overlay.classList.remove('open');
    imgEl.src = '';
    imgEl.alt = '';
  }

  document.addEventListener('click', function (e) {
    var item = e.target.closest('.photo-item');
    if (item) {
      var grid  = item.closest('.masonry') || document;
      var items = Array.from(grid.querySelectorAll('.photo-item'));
      open(items.map(function (b) { return b.dataset.src; }), items.indexOf(item));
      return;
    }
    var card = e.target.closest('.gallery-item');
    if (card && card.dataset.src) {
      var cardImg = card.querySelector('img');
      open([card.dataset.src], 0, cardImg ? cardImg.alt : '');
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildLightbox);
  } else {
    buildLightbox();
  }
})();
