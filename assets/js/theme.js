/* Theme toggle: system default, with an explicit override remembered per browser.
   Loaded in <head> without defer so the stored choice applies before first paint. */
(function () {
  var KEY = "kc-theme";
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  var saved = stored();
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  function systemIsDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("[data-theme-toggle]");
    if (!buttons.length) return;

    function label() {
      var current = root.getAttribute("data-theme") || (systemIsDark() ? "dark" : "light");
      var text = current === "dark" ? "Light" : "Dark";
      for (var i = 0; i < buttons.length; i++) buttons[i].textContent = text;
    }

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var current = root.getAttribute("data-theme") || (systemIsDark() ? "dark" : "light");
        var next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem(KEY, next); } catch (e) {}
        label();
      });
    }

    label();
  });
})();
