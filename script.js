function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* CUSTOM CURSOR */

const cursorDot = document.querySelector(".cursor-dot");

if (cursorDot && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    cursorDot.style.opacity = "1";
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  window.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = "0";
  });

  window.addEventListener("mousedown", () => {
    cursorDot.style.transform += " scale(0.7)";
  });

  window.addEventListener("mouseup", () => {
    cursorDot.style.transform = cursorDot.style.transform.replace(
      " scale(0.7)",
      ""
    );
  });
}

/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(".reveal, .project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((el) => observer.observe(el));
