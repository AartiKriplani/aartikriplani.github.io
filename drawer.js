/* drawer.js — shared drawer open/close logic for all pages */
(function () {
  function openDrawer(id) {
    closeAllDrawers();
    var el = document.getElementById(id);
    if (el) el.classList.add('open');
  }

  function closeDrawer(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('open');
  }

  function closeAllDrawers() {
    document.querySelectorAll('.drawer.open, .drawer-right.open').forEach(function (el) {
      el.classList.remove('open');
    });
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('.drawer') || e.target.closest('.drawer-right')) return;
    if (e.target.closest('.left-section')) return;
    if (document.querySelector('#image-modal.open, #merch-shirt-modal.open')) return;
    closeAllDrawers();
  }, true);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !document.querySelector('#image-modal.open, #merch-shirt-modal.open')) {
      closeAllDrawers();
    }
  });

  window.openDrawer = openDrawer;
  window.closeDrawer = closeDrawer;
  window.closeAllDrawers = closeAllDrawers;
})();
