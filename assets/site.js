
const portraitFrame = document.querySelector("[data-portrait]");

if (portraitFrame && !portraitFrame.querySelector("img")) {
  const portrait = new Image();
  const name = document.querySelector("#name").textContent.trim();
  portrait.alt = `Portrait of ${name}`;
  portrait.addEventListener("load", () => {
    portraitFrame.append(portrait);
    portraitFrame.querySelector(".portrait-placeholder").hidden = true;
  }, { once: true });
  portrait.src = portraitFrame.dataset.portrait;
}

const sectionLinks = [...document.querySelectorAll(".nav-list a")];
const sections = sectionLinks.map((link) => document.querySelector(link.hash));
let scrollScheduled = false;

function updateNavigation() {
  const header = document.querySelector(".site-header");
  const scrollLine = header.getBoundingClientRect().bottom + 32;
  let active = 0;

  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= scrollLine) active = index;
  });

  // Short sections near the footer can share the same final scroll position.
  const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  if (atPageEnd && window.scrollY > 0) {
    const target = sectionLinks.findIndex((link) => link.hash === window.location.hash);
    active = target >= active ? target : sections.length - 1;
  }

  sectionLinks.forEach((link, index) => {
    if (index === active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollScheduled = false;
}

function scheduleNavigationUpdate() {
  if (scrollScheduled) return;
  scrollScheduled = true;
  window.requestAnimationFrame(updateNavigation);
}

window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
window.addEventListener("resize", scheduleNavigationUpdate);
window.addEventListener("hashchange", scheduleNavigationUpdate);
updateNavigation();
