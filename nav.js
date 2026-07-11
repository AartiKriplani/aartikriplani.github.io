/* Shared nav — injected synchronously at the <script> tag's position */ /* v3 */
(function () {
  var file = window.location.pathname.split('/').pop();
  var page = (file || '').replace('.html', '') || 'index';

  var logo = window.NAV_LOGO || { src: './images/logo.png', alt: 'Dub&Dal logo', href: 'index.html' };

  var html = '<nav class="nav">'
    + '<a href="' + logo.href + '" class="nav-logo"><img src="' + logo.src + '" alt="' + logo.alt + '"></a>'
    + '<div class="nav-right">'
    + '<button type="button" data-tally-open="68yj7k" data-tally-layout="modal" data-tally-width="480" class="nav-btn">Sign up for updates →</button>'
    + '<a href="index.html" class="nav-link nav-desktop" style="margin-left:0.55rem">home</a>'
    + '<a href="festival.html" class="nav-link nav-desktop" style="margin-left:0.55rem">festival</a>'
    + '<a href="archive.html" class="nav-link nav-desktop" style="margin-left:0.55rem">has been</a>'
    + '<a href="upcoming.html" class="nav-link nav-desktop" style="margin-left:0.55rem">will be</a>'
    + '<a href="about.html" class="nav-link nav-desktop" style="margin-left:0.55rem">about</a>'
    + '<a href="community-chai.html" class="nav-link nav-desktop" style="margin-left:0.55rem">community chai</a>'
    + '<button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">'
    + '<span></span><span></span><span></span>'
    + '</button>'
    + '</div>'
    + '</nav>'
    + '<div class="nav-drawer" aria-hidden="true">'
    + '<a href="index.html" class="nav-link">home</a>'
    + '<a href="festival.html" class="nav-link">festival</a>'
    + '<a href="archive.html" class="nav-link">has been</a>'
    + '<a href="upcoming.html" class="nav-link">will be</a>'
    + '<a href="about.html" class="nav-link">about</a>'
    + '<a href="community-chai.html" class="nav-link">community chai</a>'
    + '</div>';

  /* Insert immediately after this <script> tag */
  var scripts = document.getElementsByTagName('script');
  scripts[scripts.length - 1].insertAdjacentHTML('afterend', html);

  /* Tally popup embed */
  var ts = document.createElement('script');
  ts.src = 'https://tally.so/widgets/embed.js';
  ts.async = true;
  document.head.appendChild(ts);

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
