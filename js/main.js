/* =========================================================
   Abed AghAtabay — Personal Website
   ========================================================= */

(function () {
  "use strict";

  const i18n = {
    fa: {
      brand: "عابد آق آتابای",
      "nav.menu": "منو",
      "nav.home": "خانه",
      "nav.about": "درباره من",
      "nav.skills": "مهارت‌ها",
      "nav.portfolio": "نمونه‌کارها",
      "nav.contact": "تماس",
      "nav.journey": "مسیر من",
      "hero.badge": "توسعه‌دهنده فول‌استک",
      "hero.greet": "سلام، من",
      "hero.name": "عابد آق آتابای",
      "hero.roles": [
        "توسعه‌دهنده فول‌استک",
        "توسعه‌دهنده بک‌اند",
        "طراح رابط کاربری",
      ],
      "hero.desc":
        "به وب‌سایت شخصی من خوش آمدید. من عاشق طراحی تجربه‌های کاربری زیبا، مدرن و کارآمد هستم.",
      "hero.btnPortfolio": "مشاهده نمونه‌کارها",
      "hero.btnContact": "ارتباط با من",
      "hero.scroll": "اسکرول کنید",
      "about-head": "درباره من",
      "about.title": "من کی هستم؟",
      "about.p1":
        "من عابد آق آتابای هستم، توسعه‌دهنده فول‌استک با علاقه به ساخت وب‌سایت‌های مدرن و ریسپانسیو. همیشه به دنبال یادگیری تکنولوژی‌های جدید و بهبود مهارت‌های خود هستم.",
      "about.p2":
        "این قالب به گونه‌ای طراحی شده که پایه‌ای محکم برای یک سایت شخصی حرفه‌ای باشد. همه بخش‌ها کاملاً ریسپانسیو و با انیمیشن‌های نرم ساخته شده‌اند.",
      "about.name": "نام:",
      "about.nameVal": "عابد آق آتابای",
      "about.email": "ایمیل:",
      "about.role": "نقش:",
      "about.roleVal": "توسعه‌دهنده فول‌استک",
      "about.location": "موقعیت:",
      "about.locationVal": "گلستان، ایران",
      "about.years": "سال تجربه",
      "about.projects": "پروژه کامل",
      "about.btn": "سفارش پروژه",
      "skills-head": "مهارت‌ها",
      "skills.title": "فناوری‌هایی که با آن‌ها کار می‌کنم",
      "portfolio-head": "نمونه‌کارها",
      "portfolio.title": "برخی از پروژه‌های اخیر من",
      "portfolio.p1t": "وب‌سایت شرکتی",
      "portfolio.p1d": "طراحی ریسپانسیو با انیمیشن‌های نرم و مدرن.",
      "portfolio.p2t": "اپلیکیشن مدیریت وظایف",
      "portfolio.p2d": "رابط‌کاربری مدرن با React و مدیریت حالت.",
      "portfolio.p3t": "وبلاگ شخصی",
      "portfolio.p3d": "سیستم مدیریت محتوا با Vue و پایگاه‌داده ابری.",
      "journey-head": "مسیر من",
      "journey.title": "مسیر تا به اینجا",
      "journey.subtitle":
        "از اولین خط کد تا امروز — سفری واقعی با تمام چالش‌ها و یادگیری‌ها.",
      "journey.m1.title": "شروع با HTML و CSS",
      "journey.m1.desc":
        "اولین قدم: ساخت صفحات ساده و یادگیری ساختار وب. هر خط کد یک درس جدید بود.",
      "journey.m3.title": "اولین پروژه واقعی",
      "journey.m3.desc":
        "یک وب‌سایت شرکتی ساده با طراحی ریسپانسیو. اولین بار که کد من زنده شد.",
      "journey.m6.title": "ورود به JavaScript",
      "journey.m6.desc":
        "یادگیری منطق برنامه‌نویسی و تعامل با کاربر. از استاتیک به دینامیک.",
      "journey.m9.title": "PHP و Laravel",
      "journey.m9.desc":
        "ورود به دنیای بک‌اند، پایگاه داده و API. درک عمیق‌تر از معماری نرم‌افزار.",
      "journey.m12.title": "توسعه‌دهنده فول‌استک",
      "journey.m12.desc":
        "ترکیب تمام مهارت‌ها برای ساخت تجربه‌های کاربری کامل و مدرن.",
      "contact-head": "ارتباط با من",
      "contact.title": "خوشحال می‌شوم پیام شما را دریافت کنم",
      "contact.email": "ایمیل",
      "contact.location": "موقعیت",
      "contact.locationVal": "گلستان، ایران",
      "contact.fName": "نام",
      "contact.phName": "نام خود را وارد کنید",
      "contact.fEmail": "ایمیل",
      "contact.fSubject": "موضوع",
      "contact.phSubject": "موضوع پیام",
      "contact.fMessage": "پیام",
      "contact.phMessage": "متن پیام خود را بنویسید...",
      "contact.btn": "ارسال پیام",
      "form.sending": "در حال ارسال...",
      "form.success": "پیام شما با موفقیت ارسال شد. ممنون از تماس شما!",
      "form.error": "لطفاً همه فیلدها را به درستی پر کنید.",
      "footer.aboutTitle": "عابد آق آتابای",
      "footer.about":
        "توسعه‌دهنده فول‌استک با علاقه به طراحی وب‌سایت‌های مدرن، ریسپانسیو و کاربرپسند.",
      "footer.quickTitle": "دسترسی سریع",
      "footer.servicesTitle": "خدمات",
      "footer.s1": "طراحی وب‌سایت",
      "footer.s2": "توسعه فول‌استک",
      "footer.s3": "طراحی رابط کاربری",
      "footer.s4": "بهینه‌سازی و سرعت",
      "footer.s5": "ریسپانسیو و موبایل",
      "footer.contactTitle": "تماس",
      "footer.location": "گلستان، ایران",
      "footer.copyrightName": "عابد آق‌آتابای",
    },
    en: {
      brand: "Abed AghAtabay",
      "nav.menu": "Menu",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.portfolio": "Projects",
      "nav.contact": "Contact",
      "nav.journey": "Journey",
      "hero.badge": "Fullstack Developer",
      "hero.greet": "Hi, I'm",
      "hero.name": "Abed AghAtabay",
      "hero.roles": [
        "Fullstack Developer",
        "Backend Developer",
        "UI/UX Designer",
      ],
      "hero.desc":
        "Welcome to my personal website. I love crafting beautiful, modern and efficient user experiences.",
      "hero.btnPortfolio": "View Projects",
      "hero.btnContact": "Contact Me",
      "hero.scroll": "Scroll down",
      "about-head": "About Me",
      "about.title": "Who am I?",
      "about.p1":
        "I'm Abed AghAtabay, a fullstack developer passionate about building modern and responsive websites. I'm always eager to learn new technologies and improve my skills.",
      "about.p2":
        "This template is designed as a solid base for a professional personal website. All sections are fully responsive and built with smooth animations.",
      "about.name": "Name:",
      "about.nameVal": "Abed AghAtabay",
      "about.email": "Email:",
      "about.role": "Role:",
      "about.roleVal": "Fullstack Developer",
      "about.location": "Location:",
      "about.locationVal": "Golestan, Iran",
      "about.years": "Years Experience",
      "about.projects": "Projects Done",
      "about.btn": "Hire Me",
      "skills-head": "Skills",
      "skills.title": "Technologies I work with",
      "portfolio-head": "Portfolio",
      "portfolio.title": "Some of my recent projects",
      "portfolio.p1t": "Corporate Website",
      "portfolio.p1d": "Responsive design with soft and modern animations.",
      "portfolio.p2t": "Task Management App",
      "portfolio.p2d": "Modern UI built with React and state management.",
      "portfolio.p3t": "Personal Blog",
      "portfolio.p3d": "Content management with Vue and cloud database.",
      "journey-head": "My Journey",
      "journey.title": "The path here",
      "journey.subtitle":
        "From the first line of code to today — a real journey with challenges and growth.",
      "journey.m1.title": "HTML & CSS",
      "journey.m1.desc":
        "First step: building simple pages and learning web structure. Every line was a new lesson.",
      "journey.m3.title": "First Real Project",
      "journey.m3.desc":
        "A simple responsive corporate site. The first time my code came alive.",
      "journey.m6.title": "Learning JavaScript",
      "journey.m6.desc":
        "Programming logic and user interaction. Moving from static to dynamic.",
      "journey.m9.title": "PHP & Laravel",
      "journey.m9.desc":
        "Entering backend, databases and APIs. Deeper understanding of software architecture.",
      "journey.m12.title": "Fullstack Developer",
      "journey.m12.desc":
        "Combining all skills to build complete, modern user experiences.",
      "contact-head": "Contact",
      "contact.title": "I'd love to hear from you",
      "contact.email": "Email",
      "contact.location": "Location",
      "contact.locationVal": "Golestan, Iran",
      "contact.fName": "Name",
      "contact.phName": "Enter your name",
      "contact.fEmail": "Email",
      "contact.fSubject": "Subject",
      "contact.phSubject": "Message subject",
      "contact.fMessage": "Message",
      "contact.phMessage": "Write your message...",
      "contact.btn": "Send Message",
      "form.sending": "Sending...",
      "form.success": "Your message has been sent. Thank you for reaching out!",
      "form.error": "Please fill all fields correctly.",
      "footer.aboutTitle": "Abed AghAtabay",
      "footer.about":
        "Fullstack developer passionate about crafting modern, responsive and user-friendly websites.",
      "footer.quickTitle": "Quick Links",
      "footer.servicesTitle": "Services",
      "footer.s1": "Web Design",
      "footer.s2": "Fullstack Development",
      "footer.s3": "UI Design",
      "footer.s4": "Performance & Optimization",
      "footer.s5": "Responsive & Mobile",
      "footer.contactTitle": "Contact",
      "footer.location": "Golestan, Iran",
      "footer.copyrightName": "Abed AghAtabay",
    },
  };

  const root = document.documentElement;
  const savedLang = localStorage.getItem("abed_lang") || "fa";
  const savedTheme = localStorage.getItem("abed_theme") || "dark";
  let currentLang = savedLang;
  let currentTheme = savedTheme;

  /* ---------- تایپ افکت ---------- */
  const typedEl = document.querySelector(".typed-line");
  let typeTimeout = null;

  function startTyping(lang) {
    if (!typedEl) return;
    clearTimeout(typeTimeout);
    if (typedEl) typedEl.setAttribute("dir", "ltr");
    const roles = i18n[lang]["hero.roles"] || [];
    let ri = 0,
      ci = 0,
      del = false;
    function tick() {
      const w = roles[ri];
      typedEl.textContent = del
        ? w.substring(0, ci - 1)
        : w.substring(0, ci + 1);
      ci += del ? -1 : 1;
      let spd = del ? 40 : 80;
      if (!del && ci === w.length) {
        spd = 1600;
        del = true;
      } else if (del && ci === 0) {
        del = false;
        ri = (ri + 1) % roles.length;
        spd = 400;
      }
      typeTimeout = setTimeout(tick, spd);
    }
    tick();
  }

  /* ---------- ترجمه ---------- */
  function applyTranslation(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      if (i18n[lang] && i18n[lang][k] !== undefined)
        el.textContent = i18n[lang][k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const k = el.dataset.i18nPh;
      if (i18n[lang] && i18n[lang][k] !== undefined)
        el.placeholder = i18n[lang][k];
    });
    document.title = lang === "fa" ? "عابد آق آتابای | توسعه دهنده فول استک" : "Abed AghAtabay | Fullstack Develeper";
    const lb = document.getElementById("langToggle");
    if (lb) lb.textContent = lang === "fa" ? "EN" : "فا";
    startTyping(lang);
  }

  function setLang(lang) {
    currentLang = lang;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    localStorage.setItem("abed_lang", lang);

    const offcanvas = document.getElementById("mobileMenu");
    if (offcanvas) {
      offcanvas.classList.remove("offcanvas-end", "offcanvas-start");
      offcanvas.classList.add(
        lang === "fa" ? "offcanvas-start" : "offcanvas-end",
      );
    }

    const hero = document.getElementById("hero");
    if (hero) {
      hero.classList.remove("text-lg-start", "text-lg-end");
      hero.classList.add(lang === "fa" ? "text-lg-end" : "text-lg-start");
    }

    applyTranslation(lang);
  }

  function initializeRTL() {
    const offcanvas = document.getElementById("mobileMenu");
    if (offcanvas && currentLang === "fa") {
      offcanvas.classList.remove("offcanvas-end");
      offcanvas.classList.add("offcanvas-start");
    }

    const hero = document.getElementById("hero");
    if (hero && currentLang === "fa") {
      hero.classList.remove("text-lg-start");
      hero.classList.add("text-lg-end");
    }
  }

  /* ---------- تم ---------- */
  function setTheme(theme) {
    currentTheme = theme;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("abed_theme", theme);
    const icon = document.querySelector(".theme-icon");
    if (icon) {
      icon.className =
        "bi " +
        (theme === "dark" ? "bi-sun-fill" : "bi-moon-stars") +
        " theme-icon";
      icon.style.transform = "rotate(180deg)";
      setTimeout(() => (icon.style.transform = ""), 350);
    }
  }

  /* ---------- لینک فعال ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    ".radial-menu__item, .navbar-nav .nav-link",
  );
  function setActive() {
    let cur = "";
    const sp = window.scrollY + 120;
    sections.forEach((s) => {
      if (sp >= s.offsetTop) cur = s.id;
    });
    navLinks.forEach((l) =>
      l.classList.toggle("active", l.getAttribute("href") === "#" + cur),
    );
  }

  /* ---------- Reveal ---------- */
  const ro = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          ro.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));

  /* ---------- Skill bars ---------- */
  const so = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          so.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  document.querySelectorAll(".skill-card").forEach((el) => so.observe(el));

  /* ---------- شمارنده ---------- */
  const co = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target,
            tgt = +el.dataset.count,
            dur = 1400,
            st = performance.now();
          function step(now) {
            const p = Math.min((now - st) / dur, 1);
            el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * tgt);
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = tgt;
          }
          requestAnimationFrame(step);
          co.unobserve(el);
        }
      });
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll("[data-count]").forEach((el) => co.observe(el));

  /* ---------- فرم ---------- */
  const form = document.getElementById("contactForm");
  const fs = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const n = document.getElementById("name"),
        em = document.getElementById("email"),
        s = document.getElementById("subject"),
        m = document.getElementById("message");
      if (
        !n.value.trim() ||
        !em.value.trim() ||
        !s.value.trim() ||
        !m.value.trim()
      ) {
        fs.textContent = i18n[currentLang]["form.error"];
        fs.className = "form-status error";
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML =
        '<i class="bi bi-hourglass-split me-2"></i>' +
        i18n[currentLang]["form.sending"];
      setTimeout(() => {
        fs.textContent = i18n[currentLang]["form.success"];
        fs.className = "form-status success";
        btn.disabled = false;
        btn.innerHTML = orig;
        form.reset();
        setTimeout(() => (fs.textContent = ""), 6000);
      }, 1200);
    });
  }

  /* ---------- رویدادها ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    setActive();
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  });
  document
    .getElementById("themeToggle")
    .addEventListener("click", () =>
      setTheme(currentTheme === "dark" ? "light" : "dark"),
    );
  document
    .getElementById("langToggle")
    .addEventListener("click", () =>
      setLang(currentLang === "fa" ? "en" : "fa"),
    );

  setTheme(currentTheme);
  setLang(currentLang);
  setActive();
  initializeRTL();

  /* ---------- منوی Radial ---------- */
  const burger = document.getElementById("navBurger");
  const radialMenu = document.getElementById("radialMenu");

  if (burger && radialMenu) {
    const toggleMenu = (open) => {
      const isOpen = open ?? !radialMenu.classList.contains("is-open");
      radialMenu.classList.toggle("is-open", isOpen);
      burger.classList.toggle("is-open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      radialMenu.setAttribute("aria-hidden", String(!isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    burger.addEventListener("click", () => toggleMenu());
    radialMenu.querySelectorAll(".radial-menu__item").forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });
    radialMenu.addEventListener("click", (e) => {
      if (
        !e.target.closest(
          ".radial-menu__item, .radial-menu__social, .nav-burger, .radial-menu__center",
        )
      ) {
        toggleMenu(false);
      }
    });
    radialMenu.addEventListener(
      "touchstart",
      (e) => {
        if (e.target.closest(".radial-menu__item, .radial-menu__social"))
          return;
        toggleMenu(false);
      },
      { passive: true },
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && radialMenu.classList.contains("is-open")) {
        toggleMenu(false);
      }
    });
  }
})();
