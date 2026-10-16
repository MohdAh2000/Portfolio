// create object | handle the localStorage 
const store = {
  get(key, defult) {
    try { return localStorage.getItem(key) ?? defult; }
    catch { return defult; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); }
    catch {}
  },
};

// Smooth scroll for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

    // Close mobile nav if open
    const nav = document.querySelector(".main-nav");
    nav?.classList.remove("open");
  });
});

const languageToggle = document.getElementById("language-toggle");
const languageLabel = languageToggle?.querySelector(".language-label");
const titleElement = document.querySelector("title");
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  en: {
  title: "GIS Portfolio",
  metaDescription:
  "GIS Portfolio - Mohamed Al-Habbash specializing in Web GIS, Cartography, Remote Sensing, and Spatial Analysis.",
  "nav-about": "About me",
  "nav-works": "My Projects",
  "nav-courses": "Courses & Certification",
  "nav-services": "My Services",
  "nav-contact": "Contacts",
  "hero-heading": '<span class="gis-highlight">GIS</span> Makes Life Better',
  "hero-subtitle": "Smart maps Better decisions.",
  "hero-cta": "View My Projects",
  "about-eyebrow": "About",
  "about-title": "About me",
  "about-intro":
    "I am Mohamed, a GIS specialist focused on web mapping, cartography, and spatial analysis. I work with geographic data to support informed decision-making and provide better spatial insights.",
  "works-eyebrow": "Projects",
  "works-title": "My Projects",
  "works-intro":
    "A selection of GIS projects focused on spatial analysis and mapping.",

    // تحليل السطوح لبنان
  "slide-0-title": "Lebanon Service Analysis",
  "slide-0-description":
    "The surface analysis of Lebanon includes elevations, slopes, and their directions, along with visibility and other analyses.",
  "slide-0-tag-1": "ArcGIS",
  "slide-0-tag-2": "surface analysis",
  "slide-0-aria": "Lebanon Service Analysis",

   // الخدمات الطبية قطاع غزة
  "slide-1-title": "Medical Services Gaza Strip",
  "slide-1-description":
    "A website showcasing medical services in the Gaza Strip, featuring a real-time information dashboard to facilitate viewing and interaction with the information.",
  "slide-1-tag-1": "Web App",
  "slide-1-tag-2": "Dashboard",
  "slide-1-aria": "Medical services gaza strip",

  // التحليل الشبكي المحافظة الوسطى
  "slide-2-title": "Service accessibility analysis",
  "slide-2-description":"Network analysis of the Central Governorate in the Gaza Strip using Geographic Information Systems",
  "slide-2-tag-1": "Network Analysis",
  "slide-2-tag-2": "Spatial Analysis",
  "slide-2-aria": "Network analysis of the central governorate in the Gaza Strip",

  // التغير الارضي في قطاع غزة
  "slide-3-title": "Land Use/Land Cover Analysis 2023 & 2025",
  "slide-3-description":
    "Deep-dive spatial analysis of land cover classifications using advanced GIS techniques and satellite data interpretation.",
  "slide-3-tag-1": "LULC",
  "slide-3-tag-2": "Analysis",
  "slide-3-aria": "Land Use/Land Cover Analysis 2023 & 2025",
  
   // الشهادات والدورات
  "courses-eyebrow": "Education",
  "courses-title": "Courses & Certification",
  "course-0-title": "Using GIS to Solve Problems",
  "course-0-description":"Hands‑on course focused on applying spatial thinking and GIS tools to real‑world decision‑making problems.",
   // ارك جي اس اونلاين 
  "course-1-title": "ArcGIS Online Basics",
  "course-1-description":"Covers the basic concepts in ArcGS online, along with some practical aspects that enhanced understanding.",
  // محادثات الانجليزية
  "course-2-title": "English Conversational Skills",
  "course-2-description":"Successfully completed English Conversational Skills for Beginners, covering basics of English conversation skills.",
  // نظم المعلومات الجغرافية لحل المشكلات
  "course-0-aria": "Using GIS to Solve Problems",
  "course-1-aria": "ArcGIS Online Basics",
  "course-2-aria": "English Conversational Skills",
  // دورة ArcGIS Imagery الإلكترونية المفتوحة
  "course-3-title": "ArcGIS Imagery mooc",
  "course-3-description": "Introduction to ArcGIS Imagery Online and its applications in remote sensing and spatial analysis.",
  // الخدمات
  "services-eyebrow": "Services",
  "services-title": "My Services",
  "service-0-title": "Cartography",
  "service-0-description":
    "Designing clear, accurate, and visually effective maps that communicate geographic information and spatial patterns.",
  "service-1-title": "Remote Sensing",
  "service-1-description":
    "Analyzing satellite and remote sensing data to extract meaningful information, monitor change, and support spatial analysis.",
  "service-2-title": "Python for GIS",
  "service-2-description":
    "Using Python to automate GIS workflows, process spatial data, and improve analysis efficiency.",
  "service-3-title": "Geospatial Data Processing",
  "service-3-description":
    "Preparing, cleaning, and managing geospatial data to ensure accuracy and reliable analytical results.",
  "service-4-title": "Spatial Data Visualization",
  "service-4-description":
    "Transforming complex spatial data into clear visual outputs that support understanding and decision-making.",
  "service-5-title": "Web Map Development",
  "service-5-description":
    "Designing and developing interactive web maps that present spatial data clearly and support exploration and decision-making.",
  "tools-eyebrow": "Programmes & Platforms",
  "tools-title":
    '<span class="Exp-higlight">Experienced</span> with leading GIS tools and platforms',
  "contact-eyebrow": "Contact",
  "contact-title": "Have a question or want to work together?",
  "contact-intro": "Let’s build something useful with GIS",
  "contact-location-title": "Location",
  "contact-location-value": "Gaza - Palestine",
  "contact-email-title": "Email",
  "form-name-label": "Name",
  "form-name-placeholder": "Your name",
  "form-email-label": "Email",
  "form-email-placeholder": "you@example.com",
  "form-subject-label": "Subject",
  "form-subject-placeholder": "Project, question, or collaboration idea",
  "form-message-label": "Message",
  "form-message-placeholder":
  "Tell me more about your project or question...",
  "form-submit": "Send message",
  "form-sending": "Sending...",
  "form-success-name": "Thank you, {name}! Your message has been sent.",
  "form-success": "Thank you! Your message has been sent.",
  "form-error": "Something went wrong. Please try again or email me directly.",
  "form-network-error": "Network error. Please check your connection and try again.",
  "footer-text": "Make your life better & easier by using GIS.",
  "footer-meta":
    "© <span id=\"year\"></span> Created by ❤️ Mohamed Al-Habbash | All rights reserved."
  },
  ar: {
  title: "محفظة نظم المعلومات الجغرافية",
  metaDescription:
    "محفظة نظم المعلومات الجغرافية - محمد الهباش متخصص في نظم المعلومات الجغرافية على الويب، رسم الخرائط، الاستشعار عن بعد، والتحليل المكاني.",
  "nav-about": "نبذة عني",
  "nav-works": "مشاريعي",
  "nav-courses": "الدورات والشهادات",
  "nav-services": "خدماتي",
  "nav-contact": "تواصل",
  "hero-heading": '<span class="gis-highlight">نظم المعلومات الجغرافية</span> تجعل الحياة أفضل',
  "hero-subtitle": "خرائط ذكية قرارات افضل.",
  "hero-cta": "عرض مشاريعي",
  "about-eyebrow": "من أنا",
  "about-title": "نبذة عني",
  "about-intro":
    "أنا محمد، متخصص نظم معلومات جغرافية أركز على خرائط الويب، ورسم الخرائط، والتحليل المكاني. أعمل مع البيانات الجغرافية لدعم اتخاذ القرار وتقديم رؤى مكانية أفضل.",
  "works-eyebrow": "المشاريع",
  "works-title": "أعمالي",
  "works-intro":
    "مجموعة من مشاريع نظم المعلومات الجغرافية التي تركز على التحليل المكاني والخرائط.",

  "slide-0-title": "تحليل السطوح في دولة لبنان",
  "slide-0-description":"تحليل السطوح لدولة لبنان يشمل الارتفاعات والانحدارات واتجاهاتها الى جانب مدى الرؤية والتحليلات الاخرى ",
  "slide-0-tag-1": "ArcGIS",
  "slide-0-tag-2": "تحليل التضاريس",
  "slide-0-aria": "تحليل السطوح في دولة لبنان",

  "slide-1-title": "دليل الخدمات الطبية في قطاع غزة",
  "slide-1-description": "موقع يعرض الخدمات الطبية في قطاع غزة مع عرض لوحة معلومات انية لتسهيل عرضها والتفاعل معها مكانيا ",
  "slide-1-tag-1": "مواقع ويب",
  "slide-1-tag-2": "لوحة معلومات",
  "slide-1-aria": "دليل الخدمات الطبية في قطاع غزة",

  "slide-2-title": "تحليل امكانية الوصول الى الخدمات",
  "slide-2-description": "تحليل شبكي للمحافظة الوسطى في قطاع غزة باستخدام نظم المعلومات الجغرافية ",
  "slide-2-tag-1": "تحليل شبكي",
  "slide-2-tag-2": "تحليل مكاني",
  "slide-2-aria": "تحليل",

  "slide-3-title": "تحليل استخدام/تغطية الأراضي 2023 و 2025",
  "slide-3-description":  "تحليل مكاني متعمق لتصنيفات تغطية الأراضي باستخدام تقنيات نظم المعلومات الجغرافية المتقدمة وتفسير بيانات الأقمار الصناعية.",
  "slide-3-tag-1": "LULC",
  "slide-3-tag-2": "تحليل",
  "slide-3-aria": "تحليل استخدام/تغطية الأراضي 2023 و 2025",

  "courses-eyebrow": "التعليم",
  "courses-title": "الدورات والشهادات",
  "course-0-title": "استخدام نظم المعلومات الجغرافية لحل المشكلات",
  "course-0-description":
    "دورة عملية تركز على تطبيق التفكير المكاني وأدوات نظم المعلومات الجغرافية لحل مشاكل العالم الحقيقي.",
  "course-1-title": "أساسيات ArcGIS Online",
  "course-1-description":
    "يغطي المفاهيم الأساسية في ArcGIS Online مع بعض الجوانب العملية التي تعزز الفهم.",
  "course-2-title": "مهارات المحادثة الإنجليزية",
  "course-2-description":
    "أكملت بنجاح دورة مهارات المحادثة الإنجليزية للمبتدئين، مع تغطية أساسيات المحادثة.",
  "course-3-title": "دورة ArcGIS Imagery الإلكترونية المفتوحة",
  "course-3-description":"إدارة وتحليل وتصور الصور الملتقطة وذلك باستخدام تقنيات متقدمة لنظم المعلومات الجغرافية (GIS) والذكاء الاصطناعي (AI).",

  "course-0-aria": "استخدام نظم المعلومات الجغرافية لحل المشكلات",
  "course-1-aria": "أساسيات ArcGIS Online",
  "course-2-aria": "مهارات المحادثة الإنجليزية",
  "course-3-aria": "دورة ArcGIS Imagery الإلكترونية المفتوحة",
    
  "services-eyebrow": "الخدمات",
  "services-title": "خدماتي",
  "service-0-title": "رسم خرائط",
  "service-0-description":
    "تصميم خرائط واضحة ودقيقة وفعالة بصرياً تنقل المعلومات الجغرافية والأنماط المكانية.",
  "service-1-title": "الاستشعار عن بعد",
  "service-1-description":
    "تحليل بيانات الأقمار الصناعية والاستشعار عن بعد لاستخراج معلومات ذات معنى، ومراقبة التغيرات، ودعم التحليل المكاني.",
  "service-2-title": "بايثون لنظم المعلومات الجغرافية",
  "service-2-description":
    "استخدام بايثون لأتمتة سير عمل نظم المعلومات الجغرافية، ومعالجة البيانات المكانية، وتحسين كفاءة التحليل.",
  "service-3-title": "معالجة البيانات المكانية",
  "service-3-description":
    "إعداد وتنظيف وإدارة البيانات المكانية لضمان الدقة ونتائج تحليلية موثوقة.",
  "service-4-title": "تصوير البيانات المكانية",
  "service-4-description":
    "تحويل البيانات المكانية المعقدة إلى مخرجات بصرية واضحة تدعم الفهم واتخاذ القرار.",
  "service-5-title": "تطوير خرائط الويب",
  "service-5-description":
    "تصميم وتطوير خرائط ويب تفاعلية تعرض البيانات المكانية بوضوح وتدعم الاستكشاف واتخاذ القرار.",
  "tools-eyebrow": "البرامج والمنصات",
  "tools-title":
    '<span class="Exp-higlight">خبرة</span> في أدوات ومنصات نظم المعلومات الجغرافية الرائدة',
  "contact-eyebrow": "تواصل",
  "contact-title": "هل لديك سؤال أو ترغب في العمل معاً؟",
  "contact-intro": "لنقم ببناء شيء مفيد باستخدام نظم المعلومات الجغرافية",
  "contact-location-title": "الموقع",
  "contact-location-value": "غزة - فلسطين",
  "contact-email-title": "البريد الإلكتروني",
  "form-name-label": "الاسم",
  "form-name-placeholder": "اسمك",
  "form-email-label": "البريد الإلكتروني",
  "form-email-placeholder": "you@example.com",
  "form-subject-label": "الموضوع",
  "form-subject-placeholder": "مشروع، سؤال، أو فكرة تعاون",
  "form-message-label": "الرسالة",
  "form-message-placeholder":
    "أخبرني المزيد عن مشروعك أو سؤالك...",
  "form-submit": "إرسال ",
  "form-sending": "جارٍ الإرسال...",
  "form-success-name": "شكرًا {name}! تم إرسال رسالتك.",
  "form-success": "شكرًا لك! تم إرسال رسالتك.",
  "form-error": "حدث خطأ ما. حاول مرة أخرى أو راسلني مباشرة عبر البريد.",
  "form-network-error": "خطأ في الشبكة. تحقق من اتصالك وحاول مرة أخرى.",

  "footer-text": "اجعل حياتك أفضل وأسهل باستخدام نظم المعلومات الجغرافية.",
  "footer-meta":
    "© <span id=\"year\"></span> تم الإنشاء بواسطة ❤️ محمد الهباش | كل الحقوق محفوظة."
  }
};

const i18nElements = document.querySelectorAll("[data-i18n]");
const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
const i18nAria = document.querySelectorAll("[data-i18n-aria]");
const htmlElement = document.documentElement;
const bodyElement = document.body;


function updateLanguageToggle(lang) {
  if (!languageToggle || !languageLabel) return;
  
  languageLabel.textContent = lang === "ar" ? "EN" : "AR";
  languageToggle.setAttribute(
  "aria-label",
  lang === "ar" ? "التبديل إلى الإنجليزية" : "Switch to Arabic"
  );
}

function translatePage(lang) {
  const currentLang = translations[lang] ? lang : "en";
  htmlElement.lang = currentLang;
  htmlElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  if (titleElement) {
    titleElement.textContent = translations[currentLang].title;
  }

  if (metaDescription) {
    metaDescription.content = translations[currentLang].metaDescription;
  }

  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const text = translations[currentLang][key];
    if (typeof text !== "undefined") {
      element.innerHTML = text;
    }
  });

  i18nPlaceholders.forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (!key) return;
    const placeholder = translations[currentLang][key];
    if (typeof placeholder !== "undefined") {
      element.placeholder = placeholder;
    }
  });

  i18nAria.forEach((element) => {
    const key = element.dataset.i18nAria;
    if (!key) return;
    const aria = translations[currentLang][key];
    if (typeof aria !== "undefined") {
      element.setAttribute("aria-label", aria);
    }
  });

  updateLanguageToggle(currentLang);
  updateSliderArrows(currentLang);

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  store.set("language", currentLang);
}

function updateSliderArrows(lang) {
  const prevButtons = document.querySelectorAll('.slider-btn-prev, .courses-slider-btn-prev');
  const nextButtons = document.querySelectorAll('.slider-btn-next, .courses-slider-btn-next');
  const leftIcon = '<i class="fa-solid fa-chevron-left"></i>';
  const rightIcon = '<i class="fa-solid fa-chevron-right"></i>';

  if (lang === 'ar') {
    // In RTL, visually reverse arrows
    prevButtons.forEach((btn) => { if (btn) btn.innerHTML = rightIcon; });
    nextButtons.forEach((btn) => { if (btn) btn.innerHTML = leftIcon; });
  } else {
    prevButtons.forEach((btn) => { if (btn) btn.innerHTML = leftIcon; });
    nextButtons.forEach((btn) => { if (btn) btn.innerHTML = rightIcon; });
  }
}

const savedLanguage = store.get("language", "en");
translatePage(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
  const nextLang = htmlElement.lang === "ar" ? "en" : "ar";
  translatePage(nextLang);
  });
}

// Theme toggle for dark mode
const themeToggle = document.getElementById("theme-toggle");

// Check for saved theme preference or default to light mode
const savedTheme = store.get("theme", "light");
if (savedTheme === "dark") {
  bodyElement.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Theme toggle event listener
themeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");

  if (bodyElement.classList.contains("dark-mode")) {
    store.set("theme", "dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    store.set("theme", "light");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Contact form submit -> sends the message to Formspree,
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

const t = (key) => translations[htmlElement.lang]?.[key] ?? translations.en[key];

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    if (submitBtn) submitBtn.disabled = true;
    formStatus.classList.remove("error");
    formStatus.textContent = t("form-sending");

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent =
          name && typeof name === "string" && name.trim()
            ? t("form-success-name").replace("{name}", name.trim())
            : t("form-success");
        contactForm.reset();
      } else {
        formStatus.textContent = t("form-error");
        formStatus.classList.add("error");
      }
    } catch (error) {
      formStatus.textContent = t("form-network-error");
      formStatus.classList.add("error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      setTimeout(() => {
        formStatus.textContent = "";
        formStatus.classList.remove("error");
      }, 5000);
    }
  });
}
// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll(
  ".section-eyebrow, .section-title, .section-intro, " +
  ".service-card, " +
  ".card, .about-image-wrapper, .contact-form, .site-footer, " +
  ".works-header, .tools-header, .section-grid > div:last-child"
).forEach((el) => {
  observer.observe(el);
});

const sliderObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target
      .querySelectorAll(".slide, .course-slide, .tool-slide")
      .forEach((s) => s.classList.add("animate-in"));
    sliderObserver.unobserve(entry.target);
  });
}, observerOptions);

document.querySelectorAll(".works-slider, .courses-slider, .tools-slider")
  .forEach((el) => sliderObserver.observe(el));

// Works slider 
function createSlider({ root, track, slides, prev, next, dots = [], delay = 5000, paged = false }) {
  if (!root || !track || !slides.length) return;

  const viewport = track.parentElement;
  let index = 0;       
  let timer = null;
  let paused = false;  

  const getGap = () => parseFloat(getComputedStyle(track).columnGap) || 0;

  function perView() {
    const slideWidth = slides[0].offsetWidth;
    if (!slideWidth) return 1;
    const gap = getGap();
    return Math.max(1, Math.round((viewport.clientWidth + gap) / (slideWidth + gap)));
  }

  const maxIndex = () => Math.max(0, slides.length - perView());
  const stepSize = () => (paged ? perView() : 1);

  function render() {
    const max = maxIndex();
    index = Math.min(index, max);

    const step = slides[0].offsetWidth + getGap();
    track.style.transform = `translateX(${-index * step}px)`;

    const canSlide = max > 0;
    [prev, next].forEach((btn) => {
      if (btn) btn.style.visibility = canSlide ? "" : "hidden";
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
      dot.hidden = !canSlide || i > max;
    });
  }

  function goNext() {
    const max = maxIndex();
    index = index >= max ? 0 : Math.min(index + stepSize(), max);
    render();
  }

  function goPrev() {
    const max = maxIndex();
    index = index <= 0 ? max : Math.max(index - stepSize(), 0);
    render();
  }

  function start() {
    stop();
    if (paused || maxIndex() === 0) return;
    timer = setInterval(goNext, delay);
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  next?.addEventListener("click", () => { goNext(); start(); });
  prev?.addEventListener("click", () => { goPrev(); start(); });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      index = Math.min(Number(dot.dataset.slide) || 0, maxIndex());
      render();
      start();
    });
  });

  root.addEventListener("pointerenter", (e) => {
    if (e.pointerType !== "mouse") return;
    paused = true;
    stop();
  });
  root.addEventListener("pointerleave", (e) => {
    if (e.pointerType !== "mouse") return;
    paused = false;
    start();
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { render(); start(); }, 150);
  });

  render();
  start();
}

createSlider({
  root: document.querySelector(".works-slider"),
  track: document.querySelector(".works-slider .slider-track"),
  slides: document.querySelectorAll(".works-slider .slide"),
  prev: document.querySelector(".works-slider .slider-btn-prev"),
  next: document.querySelector(".works-slider .slider-btn-next"),
  dots: document.querySelectorAll(".works-slider .slider-dot"),
  delay: 5000,
});

createSlider({
  root: document.querySelector(".courses-slider"),
  track: document.querySelector(".courses-slider-track"),
  slides: document.querySelectorAll(".courses-slider .course-slide"),
  prev: document.querySelector(".courses-slider-btn-prev"),
  next: document.querySelector(".courses-slider-btn-next"),
  dots: document.querySelectorAll(".courses-slider-dot"),
  delay: 4000,
});

createSlider({
  root: document.querySelector(".tools-slider"),
  track: document.querySelector(".tools-track"),
  slides: document.querySelectorAll(".tools-slider .tool-slide"),
  prev: document.querySelector(".tools-slider .slider-btn-prev"),
  next: document.querySelector(".tools-slider .slider-btn-next"),
  delay: 3000,
  paged: true,
});