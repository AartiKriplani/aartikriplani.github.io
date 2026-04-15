/* Shared nav — injected synchronously at the <script> tag's position */
(function () {
  var file = window.location.pathname.split('/').pop();
  var page = (file || '').replace('.html', '') || 'index';

  function cls(p) { return page === p ? ' class="active"' : ''; }

  var html = '<nav class="nav">'
    + '<a href="index.html" class="nav-logo">Dub&amp;Dal</a>'
    + '<div class="nav-right">'
    + '<a href="https://dubndal.weticket.io/dub-dal-festival/shop" target="_blank" class="nav-btn">Buy Tickets \u2192</a>';
    // + '<button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">'
    // + '<span></span><span></span><span></span>'
    // + '</button>'
    // + '</div>'
    // + '</nav>'
    // + '<div class="nav-drawer" aria-hidden="true">'
    // + '<a href="https://dubndal.weticket.io/dub-dal-festival/shop" target="_blank" class="nav-btn">Buy Tickets \u2192</a>'
    // + '</div>';

  /* Insert immediately after this <script> tag */
  var scripts = document.getElementsByTagName('script');
  scripts[scripts.length - 1].insertAdjacentHTML('afterend', html);

  /* Hamburger toggle */
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.nav-hamburger');
    var drawer = document.querySelector('.nav-drawer');
    if (!btn || !drawer) return;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      btn.classList.toggle('open', !open);
      drawer.classList.toggle('open', !open);
      drawer.setAttribute('aria-hidden', String(open));
    });
    /* Close drawer when a link is clicked */
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('open');
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
      });
    });
  });
})();
