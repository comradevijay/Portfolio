/* ============================================================
   VIJAY KUMAR — PORTFOLIO  |  script.js
   ============================================================ */

'use strict';

/* ── DATA: Skills ── */
const SKILLS = [
  { label: 'Java (Core & J2EE)',          category: 'language'  },
  { label: 'Python',                       category: 'language'  },
  { label: 'JavaScript (ES6+)',            category: 'language'  },
  { label: 'Spring Boot',                  category: 'backend'   },
  { label: 'Spring MVC',                   category: 'backend'   },
  { label: 'Hibernate (ORM)',              category: 'backend'   },
  { label: 'Spring JDBC',                  category: 'backend'   },
  { label: 'Node.js',                      category: 'backend'   },
  { label: 'Express.js',                   category: 'backend'   },
  { label: 'RESTful API Design',           category: 'backend'   },
  { label: 'React.js',                     category: 'frontend'  },
  { label: 'Vue.js',                       category: 'frontend'  },
  { label: 'Next.js',                      category: 'frontend'  },
  { label: 'HTML5',                        category: 'frontend'  },
  { label: 'CSS3',                         category: 'frontend'  },
  { label: 'Tailwind CSS',                 category: 'frontend'  },
  { label: 'Responsive Design',            category: 'frontend'  },
  { label: 'MySQL',                        category: 'database'  },
  { label: 'MongoDB',                      category: 'database'  },
  { label: 'SQL',                          category: 'database'  },
  { label: 'Git',                          category: 'tool'      },
  { label: 'GitHub',                       category: 'tool'      },
  { label: 'Maven',                        category: 'tool'      },
  { label: 'Apache Tomcat',                category: 'tool'      },
  { label: 'Eclipse',                      category: 'tool'      },
  { label: 'VS Code',                      category: 'tool'      },
  { label: 'OOP',                          category: 'concept'   },
  { label: 'MVC',                          category: 'concept'   },
  { label: 'CRUD',                         category: 'concept'   },
  { label: 'Data Structures & Algorithms', category: 'concept'   },
  { label: 'REST API',                     category: 'concept'   },
  { label: 'Agile / Scrum',               category: 'concept'   },
  { label: 'SDLC',                         category: 'concept'   },
  { label: 'Unit Testing',                 category: 'concept'   },
  { label: 'Debugging',                    category: 'concept'   },
];

/* ── Render Skills ── */
function renderSkills() {
  const wrap = document.getElementById('skills-wrap');
  if (!wrap) return;
  SKILLS.forEach((skill) => {
    const span = document.createElement('span');
    span.className = 'skill-pill';
    span.setAttribute('role', 'listitem');
    span.setAttribute('data-category', skill.category);
    span.textContent = skill.label;
    wrap.appendChild(span);
  });
}

/* ── Navbar ── */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const links    = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const sections = document.querySelectorAll('section[id]');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    highlightNav();
    toggleBackToTop();
  };

  function highlightNav() {
    let current = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    links.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Hamburger ── */
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.07}s`;
    observer.observe(el);
  });
}

/* ── Back To Top ── */
function createBackToTopButton() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = `<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.47 1.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8.75 3.56v9.19a.75.75 0 01-1.5 0V3.56L4.28 6.53a.75.75 0 01-1.06-1.06l4.25-4.25z"/></svg>`;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);
}

function toggleBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
}

/* ── Smooth Scroll ── */
function initSmoothScroll() {
  const NAV_HEIGHT = 64;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  initNavbar();
  initHamburger();
  initScrollReveal();
  createBackToTopButton();
  initSmoothScroll();
});