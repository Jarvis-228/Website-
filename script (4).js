const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#mobile-menu");

toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open menu");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
