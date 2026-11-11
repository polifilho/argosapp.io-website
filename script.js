const year = document.getElementById("y");
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll(".language-switcher [data-language]").forEach((link) => {
  link.addEventListener("click", () => {
    try {
      localStorage.setItem("argos.language", link.dataset.language);
    } catch {
      // Language links work even when storage is unavailable.
    }
  });
});
