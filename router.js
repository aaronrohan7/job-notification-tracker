const ROUTES = {
  "/": "Dashboard",
  "/dashboard": "Dashboard",
  "/saved": "Saved",
  "/digest": "Digest",
  "/settings": "Settings",
  "/proof": "Proof",
};

function getCurrentPath() {
  const hash = window.location.hash || "#/";
  const value = hash.replace(/^#/, "");
  return value === "" ? "/" : value;
}

function setActiveNav(path) {
  const links = document.querySelectorAll(".kn-nav-link");
  links.forEach((link) => {
    const route = link.getAttribute("data-route");
    if (route === path || (route === "/" && (path === "/" || path === "/dashboard"))) {
      link.classList.add("kn-nav-link--active");
    } else {
      link.classList.remove("kn-nav-link--active");
    }
  });
}

function updateRoute(path) {
  const name = ROUTES[path] || "Dashboard";
  const titleEl = document.getElementById("route-title");
  const subtextEl = document.getElementById("route-subtext");
  const secondaryTitleEl = document.getElementById("route-secondary-title");
  const secondarySubtextEl = document.getElementById("route-secondary-subtext");

  if (titleEl) {
    titleEl.textContent = name;
  }
  if (secondaryTitleEl) {
    secondaryTitleEl.textContent = name;
  }
  const placeholder = "This section will be built in the next step.";
  if (subtextEl) {
    subtextEl.textContent = placeholder;
  }
  if (secondarySubtextEl) {
    secondarySubtextEl.textContent = placeholder;
  }

  setActiveNav(path);
}

function toggleMobileNav() {
  const nav = document.querySelector(".kn-topbar__nav");
  const toggle = document.querySelector(".kn-topbar__menu-toggle");
  if (!nav || !toggle) return;
  const isOpen = nav.classList.toggle("kn-topbar__nav--open");
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

window.addEventListener("DOMContentLoaded", () => {
  const initialPath = getCurrentPath();
  updateRoute(initialPath);

  const toggleBtn = document.querySelector(".kn-topbar__menu-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleMobileNav);
  }

  const nav = document.querySelector(".kn-topbar__nav");
  if (nav) {
    nav.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        const route = target.getAttribute("data-route");
        if (route) {
          event.preventDefault();
          window.location.hash = route === "/" ? "#/" : `#${route}`;
          if (nav.classList.contains("kn-topbar__nav--open")) {
            toggleMobileNav();
          }
        }
      }
    });
  }

  window.addEventListener("hashchange", () => {
    const path = getCurrentPath();
    updateRoute(path);
  });
});

