/* Mobile menu keyboard support, shared by every page.
   Each page's own script opens and closes the menu by toggling the "open"
   class; this file keeps the button's state in sync, moves focus into the
   menu, keeps Tab inside it, and closes it with Escape. */
(function () {
  var btn = document.getElementById('hamBtn');
  var menu = document.getElementById('mobMenu');
  if (!btn || !menu) return;

  if (!btn.hasAttribute('aria-controls')) btn.setAttribute('aria-controls', 'mobMenu');

  var links = function () { return Array.prototype.slice.call(menu.querySelectorAll('a')); };
  var isOpen = function () { return menu.classList.contains('open'); };
  var wasOpen = isOpen();

  var sync = function () {
    var open = isOpen();
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open && !wasOpen) {
      var first = links()[0];
      if (first) first.focus();
    }
    wasOpen = open;
  };
  new MutationObserver(sync).observe(menu, { attributes: true, attributeFilter: ['class'] });
  sync();

  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') {
      btn.click();
      btn.focus();
      return;
    }
    if (e.key !== 'Tab') return;
    var items = links();
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1], active = document.activeElement;
    if (e.shiftKey && active === first) { e.preventDefault(); btn.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); btn.focus(); }
    else if (active === btn) { e.preventDefault(); (e.shiftKey ? last : first).focus(); }
  });
})();
