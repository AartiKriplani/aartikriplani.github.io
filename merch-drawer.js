/* merch-drawer.js — Palestine fundraiser / T-shirt drawer, shared across pages */
(function () {
  var style = document.createElement('style');
  style.textContent = [
    /* Merch inner content — drawer shell comes from styles.css */
    '.merch-lbl{font-size:.62rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold,#d4920e);margin-bottom:.75rem}',
    '.merch-heading{font-weight:900;font-style:italic;font-size:clamp(1.6rem,4vw,2.4rem);line-height:.95;letter-spacing:-.02em;color:var(--cream,#f0e6cc);margin-bottom:1.25rem}',
    '.merch-body{font-size:.88rem;font-weight:300;line-height:1.72;color:rgba(240,230,204,.82);margin-bottom:1.5rem;max-width:38rem}',
    '.merch-cta{display:inline-block;background:var(--gold,#d4920e);color:#0c0a07;padding:.6rem 1.4rem;font-weight:900;font-style:italic;font-size:.9rem;text-decoration:none;transition:background .2s}',
    '.merch-cta:hover{background:var(--gold2,#f0b030)}',
    '.merch-shirt-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:1.75rem;border-radius:1rem;overflow:hidden;border:1px solid rgba(243,186,64,.56)}',
    '.merch-shirt-btn{display:block;padding:0;border:none;background:none;cursor:pointer;overflow:hidden}',
    '.merch-shirt-btn img{width:100%;display:block;aspect-ratio:1;object-fit:cover;filter:saturate(.85) brightness(.88);transition:transform .3s ease,filter .25s ease}',
    '.merch-shirt-btn:hover img{transform:scale(1.04);filter:saturate(1) brightness(.78)}',
    '.merch-note{font-size:.7rem;color:var(--dim,#7c6e56);text-align:center;margin-top:.75rem}',
    /* Shirt lightbox */
    '#merch-shirt-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:2000;align-items:center;justify-content:center}',
    '#merch-shirt-modal.open{display:flex}',
    '#merch-shirt-modal img{max-width:90vw;max-height:90vh;object-fit:contain}',
    '#merch-shirt-modal-close{position:absolute;top:1rem;right:1rem;background:none;border:none;color:var(--cream,#f0e6cc);font-size:2rem;cursor:pointer;line-height:1;padding:.25rem}'
  ].join('');
  document.head.appendChild(style);

  var drawerClass = (window.MERCH_DRAWER_SIDE === 'right') ? 'drawer-right' : 'drawer';

  document.body.insertAdjacentHTML('beforeend',
    '<div id="merch-drawer" class="' + drawerClass + '">' +
      '<div class="drawer-header">' +
        '<button onclick="closeDrawer(\'merch-drawer\')" class="back-btn">Hide x</button>' +
      '</div>' +
      '<div class="drawer-content">' +
        '<div class="merch-lbl">Raising funds for Palestine 🇵🇸</div>' +
        '<div class="merch-heading">100% Organic<br>Cotton T-Shirt</div>' +
        '<div class="merch-body">' +
          'Black \xB7 unisex \xB7 Dub&amp;Dal design.<br>' +
          'Sliding scale <strong style="color:var(--gold,#d4920e)">20–30€</strong> — 50% of proceeds go to support initiatives in Palestine 🇵🇸<br>' +
          'Pick up in Berlin or at events.<br>' +
          'Transfer your chosen amount to PayPal and include your size in the message.' +
        '</div>' +
        '<a href="https://paypal.me/pfaublau" target="_blank" class="merch-cta">Order via PayPal →</a>' +
        '<div class="merch-shirt-grid">' +
          '<button type="button" class="merch-shirt-btn" data-src="./images/Shirt_men.jpeg">' +
            '<img src="./images/Shirt_men.jpeg" alt="Men\'s fit" loading="lazy">' +
          '</button>' +
          '<button type="button" class="merch-shirt-btn" data-src="./images/Shirt_women.jpeg">' +
            '<img src="./images/Shirt_women.jpeg" alt="Women\'s fit" loading="lazy">' +
          '</button>' +
          '<button type="button" class="merch-shirt-btn" data-src="./images/Shirt_size.jpeg">' +
            '<img src="./images/Shirt_size.jpeg" alt="Size chart" loading="lazy">' +
          '</button>' +
        '</div>' +
        '<div class="merch-note">Tap an image to view it larger.</div>' +
      '</div>' +
    '</div>' +
    '<div id="merch-shirt-modal">' +
      '<img id="merch-shirt-img" src="" alt="">' +
      '<button id="merch-shirt-modal-close">\xD7</button>' +
    '</div>'
  );

  var modal = document.getElementById('merch-shirt-modal');
  var modalImg = document.getElementById('merch-shirt-img');

  document.querySelectorAll('.merch-shirt-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      modalImg.src = btn.dataset.src;
      modal.classList.add('open');
    });
  });
  document.getElementById('merch-shirt-modal-close').addEventListener('click', function () {
    modal.classList.remove('open');
  });
  modal.addEventListener('click', function (e) {
    if (e.target === modal) modal.classList.remove('open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') modal.classList.remove('open');
  });

  window.openMerchDrawer = function () { openDrawer('merch-drawer'); };
  window.closeMerchDrawer = function () { closeDrawer('merch-drawer'); };
})();
