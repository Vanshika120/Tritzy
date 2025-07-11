// script.js

// Simple HTML include loader
function includeHTML() {
  const includes = document.querySelectorAll('[data-include-html]');
  includes.forEach(el => {
    const file = el.getAttribute('data-include-html');
    if (file) {
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error('Page not found');
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
          el.removeAttribute('data-include-html');
          includeHTML(); // Recursive in case of nested includes
        })
        .catch(() => {
          el.innerHTML = "Page not found.";
        });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});
