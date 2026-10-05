// Botón de tema claro/oscuro. Recuerda la elección en localStorage.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');

  function current() {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Año del pie de página
  document.getElementById('year').textContent = new Date().getFullYear();
})();
