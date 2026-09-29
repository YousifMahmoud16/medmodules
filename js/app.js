const MODULES = [
  {
    id: "nhb",

    // Module names stay in English
    name: "Normal Human Body",

    desc: {
      en: "Structure and function of the healthy body.",
      ar: "تركيب ووظائف جسم الإنسان في حالته الطبيعية.",
    },

    subjects: [
      {
        id: "anatomy",

        // Subject names stay in English
        name: "Anatomy",

        videos: [
          // Add local video files here later
          // {
          //   title: {
          //     en: "Anatomical planes",
          //     ar: "المستويات التشريحية",
          //   },
          //   url: "assets/videos/nhb/anatomy/anatomical-planes.mp4",
          //   type: "video",
          // },
        ],

        youtube: [
          {
            title: {
              en: "Anatomy introduction — YouTube",
              ar: "مقدمة في علم التشريح — يوتيوب",
            },

            url: "https://www.youtube.com/watch?v=acgrHSSnsxY",

            type: "youtube",
          },

          {
            title: {
              en: "Anatomical terms",
              ar: "Anatomical terms",
            },

            url: "https://www.youtube.com/watch?v=pmyb7ck9sn0",

            type: "youtube",
          },

          {
            title: {
              en: "Types of bones",
              ar: "Types of bones",
            },

            url: "https://www.youtube.com/watch?v=ZfdQEeIWRPs",

            type: "youtube",
          },

          {
            title: {
              en: "Types and development of bones",
              ar: "Types and development of bones",
            },

            url: "https://www.youtube.com/watch?v=m8y_l2fL7s8",

            type: "youtube",
          },

          {
            title: {
              en: "Joints",
              ar: "Joints",
            },

            url: "https://www.youtube.com/watch?v=5CFXzimsDKk",

            type: "youtube",
          },
        ],

        books: [
          {
            title: {
              en: "Introduction and anatomical terms - Dr. Abdou",
              ar: "Introduction and anatomical terms - Dr. Abdou",
            },

            url: "assets/pdfs/nhb/anatomy/introduction-and-anatomical terms-Dr-Abdou.pdf",

            type: "pdf",
          },

          {
            title: {
              en: "Types of bones - Dr. Abdou",
              ar: "Types of bones - Dr. Abdou",
            },

            url: "assets/pdfs/nhb/anatomy/Types-of-bones-Dr-Abdou.pdf",

            type: "pdf",
          },

          {
            title: {
              en: "Joints - Dr. Abdou",
              ar: "Joints - Dr. Abdou",
            },

            url: "assets/pdfs/nhb/anatomy/Joints-Dr-Abdou.pdf",

            type: "pdf",
          },
        ],

        audio: [
          // Add audio files here later
          // {
          //   title: {
          //     en: "Introduction to anatomy",
          //     ar: "مقدمة في التشريح",
          //   },
          //   url: "assets/audio/nhb/anatomy/introduction.mp3",
          //   type: "audio",
          // },
        ],
      },

      {
        id: "physiology",

        name: "Physiology",

        videos: [],
        youtube: [],
        audio: [],
        books: [],
      },

      {
        id: "histology",

        name: "Histology",

        videos: [],
        youtube: [
          {
            title: {
              en: "Structure of cell membrane 1 - Dr Iman Nabil",
              ar: "Structure of cell membrane 1 - Dr Iman Nabil",
            },

            url: "https://www.youtube.com/watch?v=lO5lgPCKFNI",

            type: "youtube",
          },
          {
            title: {
              en: "Structure of cell membrane 2 - Dr Iman Nabil",
              ar: "Structure of cell membrane 2 - Dr Iman Nabil",
            },

            url: "https://www.youtube.com/watch?v=VFF4mGBFLbI",

            type: "youtube",
          },
          {
            title: {
              en: "Vesicular transport across the cell membrane - Dr Iman Nabil",
              ar: "Vesicular transport across the cell membrane - Dr Iman Nabil",
            },

            url: "https://www.youtube.com/watch?v=pDdc50ROeVw",

            type: "youtube",
          },
          {
            title: {
              en: "Cell organelles Part 1 - Dr Iman Nabil",
              ar: "Cell organelles Part 1 - Dr Iman Nabil",
            },

            url: "https://www.youtube.com/watch?v=oD0q2Scir-M",

            type: "youtube",
          },
          {
            title: {
              en: "Cell organelles Part 2 - Dr Iman Nabil",
              ar: "Cell organelles Part 2 - Dr Iman Nabil",
            },

            url: "https://www.youtube.com/watch?v=-Ejq674xbSA",

            type: "youtube",
          },
          {
            title: {
              en: "Cell organelles Part 3 - Dr Iman Nabil",
              ar: "Cell organelles Part 3 - Dr Iman Nabil",
            },

            url: "https://www.youtube.com/watch?v=6f2xCso-1lg",

            type: "youtube",
          },
        ],
        audio: [],
        books: [
          {
            title: {
              en: "Introduction histology",
              ar: "Introduction histology",
            },

            url: "assets/pdfs/nhb/histology/introduction-histology.pdf",

            type: "pdf",
          },
          {
            title: {
              en: "Cell membrane",
              ar: "Cell membrane",
            },

            url: "assets/pdfs/nhb/histology/cell-membrane.pdf",

            type: "pdf",
          },
          {
            title: {
              en: "vesicular transport across the cell membrane",
              ar: "vesicular transport across the cell membrane",
            },

            url: "assets/pdfs/nhb/histology/vesicular-transport across-the-cell-membrane.pdf",

            type: "pdf",
          },

          {
            title: {
              en: "Cell organelles part 1",
              ar: "Cell organelles part 1",
            },

            url: "assets/pdfs/nhb/histology/cell-organelles-1.pdf",

            type: "pdf",
          },
          {
            title: {
              en: "Cell organelles part 2",
              ar: "Cell organelles part 2",
            },

            url: "assets/pdfs/nhb/histology/cell-organelles-2.pdf",

            type: "pdf",
          },
          {
            title: {
              en: "Cell organelles part 3",
              ar: "Cell organelles part 3",
            },

            url: "assets/pdfs/nhb/histology/cell-organelles-3.pdf",

            type: "pdf",
          },
        ],
      },
    ],
  },

  // Add your remaining modules here.
];

// ======================================================
// TABS
// ======================================================

const TABS = [
  ["videos", "Videos", "فيديوهات"],
  ["youtube", "YouTube", "يوتيوب"],
  ["audio", "Voice recordings", "تسجيلات صوتية"],
  ["books", "Books & PDFs", "كتب وملفات PDF"],
];

// ======================================================
// TRANSLATIONS
// ======================================================

const I18N = {
  en: {
    nav: {
      home: "Home",
      modules: "Modules",
    },

    home: {
      eyebrow: "Medical library",

      title: "Everything for your modules, in one place.",

      text: "Choose a module, open a subject, and find your videos, YouTube lectures, recordings, and books in one clean place.",

      modules: "Modules",

      explore: "Explore a module",

      subjects: "Subjects",

      items: "items",

      open: "Open",

      empty: "Nothing has been added here yet.",

      emptyDetail: "Add your material to the corresponding list in app.js.",
    },

    footer: {
      tagline: "Your medical materials, organized.",
    },

    resourceTypes: {
      videos: "Video",
      youtube: "YouTube",
      audio: "Recording",
      books: "Book / PDF",
    },

    viewer: {
      openNew: "Open separately",

      close: "Close",

      videoNotSupported: "Your browser does not support this video format.",

      audioNotSupported: "Your browser does not support this audio format.",

      fileMissing: "Add a valid file path to this resource in app.js.",

      youtubeMissing:
        "Add a valid YouTube video URL to this resource in app.js.",

      youtubeHint: "This video is embedded from YouTube.",

      pdfHint: "Your browser may provide its own PDF controls here.",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      modules: "الموديولات",
    },

    home: {
      eyebrow: "مكتبة طبية",

      title: "كل مواد الموديولات الخاصة بك في مكان واحد.",

      text: "اختر الموديول، ثم المادة، واعثر على الفيديوهات ويوتيوب والتسجيلات والكتب في مكان واحد وبشكل مرتب.",

      modules: "الموديولات",

      explore: "استكشف الموديول",

      subjects: "المواد",

      items: "ملفات",

      open: "فتح",

      empty: "لا توجد مواد مضافة هنا حتى الآن.",

      emptyDetail: "أضف موادك إلى القائمة المناسبة داخل app.js.",
    },

    footer: {
      tagline: "موادك الطبية، مرتبة في مكان واحد.",
    },

    resourceTypes: {
      videos: "فيديو",
      youtube: "يوتيوب",
      audio: "تسجيل صوتي",
      books: "كتاب / PDF",
    },

    viewer: {
      openNew: "فتح بشكل منفصل",

      close: "إغلاق",

      videoNotSupported: "المتصفح لا يدعم صيغة الفيديو هذه.",

      audioNotSupported: "المتصفح لا يدعم صيغة الصوت هذه.",

      fileMissing: "أضف مسارًا صحيحًا للملف لهذا المورد داخل app.js.",

      youtubeMissing: "أضف رابط يوتيوب صحيحًا لهذا المورد داخل app.js.",

      youtubeHint: "هذا الفيديو مضمّن من يوتيوب.",

      pdfHint: "قد يعرض المتصفح أدواته الخاصة لملف PDF هنا.",
    },
  },
};

// ======================================================
// ELEMENTS
// ======================================================

const app = document.getElementById("app");

const moduleButton = document.getElementById("moduleButton");

const moduleDropdown = document.getElementById("moduleDropdown");

const moduleMenu = document.querySelector(".module-menu");

const languageButton = document.getElementById("languageButton");

const languageLabel = document.getElementById("languageLabel");

// ======================================================
// STATE
// ======================================================

let lang = localStorage.getItem("medmodules-lang") || "en";

let activeTab = "videos";

let lastRouteKey = "";

// ======================================================
// HELPERS
// ======================================================

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const t = (key) => {
  const value = key.split(".").reduce((obj, part) => obj?.[part], I18N[lang]);

  return value ?? key;
};

const text = (value) => (typeof value === "object" ? value[lang] : value);

const totalResources = (subject) =>
  TABS.reduce((total, [key]) => total + (subject[key] || []).length, 0);

const getModule = (id) => MODULES.find((module) => module.id === id);

const getSubject = (module, id) =>
  module?.subjects.find((subject) => subject.id === id);

// ======================================================
// ICONS
// ======================================================

const arrowIcon = () => `
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M5 10h9M11 6l4 4-4 4"></path>
  </svg>
`;

const folderIcon = () => `
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      d="M3.5 5.5h4l1.6 2h7.4v7.8a1.2 1.2 0 0 1-1.2 1.2H4.7a1.2 1.2 0 0 1-1.2-1.2z"
    ></path>

    <path
      d="M3.5 5.5V4.7c0-.7.5-1.2 1.2-1.2H8l1.5 2h6c.7 0 1.2.5 1.2 1.2v.8"
    ></path>
  </svg>
`;

const resourceIcon = (key) => {
  const paths = {
    videos:
      '<rect x="3.5" y="5" width="13" height="10" rx="2"></rect><path d="m8 8 4 2-4 2z"></path>',

    youtube:
      '<rect x="3" y="5.5" width="14" height="9" rx="2.5"></rect><path d="m8.5 8 4 2-4 2z"></path>',

    audio:
      '<path d="M7 8a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"></path><path d="M5 10.5a5 5 0 0 0 10 0M10 16v2"></path>',

    books:
      '<path d="M4 4.5h5.5A2.5 2.5 0 0 1 12 7v8.5H6a2 2 0 0 1-2-2z"></path><path d="M16 4.5h-4A2.5 2.5 0 0 0 9.5 7v8.5H14a2 2 0 0 1 2 2z"></path>',
  };

  return `
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      ${paths[key]}
    </svg>
  `;
};

// ======================================================
// LANGUAGE
// ======================================================

function applyLanguage() {
  document.documentElement.lang = lang;

  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  languageLabel.textContent = lang === "en" ? "عربي" : "English";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document
    .querySelector("[data-nav-home]")
    ?.classList.toggle(
      "active",
      !location.hash || location.hash === "#/" || location.hash === "#",
    );
}

// ======================================================
// MODULE DROPDOWN
// ======================================================

function renderDropdown() {
  moduleDropdown.innerHTML = MODULES.map(
    (module) => `
        <a
          class="module-option"
          href="#/m/${encodeURIComponent(module.id)}"
        >

          <strong>
            ${esc(text(module.name))}
          </strong>

          <span>
            ${esc(text(module.desc))}
          </span>

        </a>
      `,
  ).join("");
}

function setDropdown(open) {
  moduleDropdown.hidden = !open;

  moduleButton.setAttribute("aria-expanded", String(open));

  moduleMenu.classList.toggle("open", open);
}

// ======================================================
// HOME
// ======================================================

function renderHome() {
  return `
    <section class="hero">

      <div class="eyebrow">
        <span class="eyebrow-dot"></span>

        ${esc(t("home.eyebrow"))}
      </div>


      <h1>
        ${esc(t("home.title"))}
      </h1>


      <p>
        ${esc(t("home.text"))}
      </p>


      <svg
        class="hero-pulse"
        viewBox="0 0 430 48"
        aria-hidden="true"
      >
        <path
          d="M0 28H128l17-18 19 29 21-34 18 23h63"
        ></path>
      </svg>

    </section>


    <section class="section">

      <div class="section-heading">

        <h2>
          ${esc(t("home.modules"))}
        </h2>

      </div>


      <div class="card-grid">

        ${MODULES.map(
          (module) => `
            <a
              class="module-card"
              href="#/m/${encodeURIComponent(module.id)}"
            >

              <div>

                <div class="card-top">

                  <div>

                    <h3 class="card-title">
                      ${esc(text(module.name))}
                    </h3>


                    <p class="card-desc">
                      ${esc(text(module.desc))}
                    </p>

                  </div>


                  <div class="card-icon">
                    ${folderIcon()}
                  </div>

                </div>

              </div>


              <div class="card-bottom">

                <span class="item-count">

                  ${module.subjects.length}

                  ${lang === "ar" ? "مواد" : "subjects"}

                </span>


                <span class="card-arrow">
                  ${arrowIcon()}
                </span>

              </div>

            </a>
          `,
        ).join("")}

      </div>

    </section>
  `;
}

// ======================================================
// BREADCRUMBS
// ======================================================

function crumbs(module, subject = null) {
  const homeLabel = t("nav.home");

  const parts = [`<a href="#/">${esc(homeLabel)}</a>`];

  if (module) {
    parts.push(`<span class="crumb-separator">/</span>`);

    parts.push(
      `
        <a
          href="#/m/${encodeURIComponent(module.id)}"
        >
          ${esc(text(module.name))}
        </a>
      `,
    );
  }

  if (subject) {
    parts.push(`<span class="crumb-separator">/</span>`);

    parts.push(`<span>${esc(text(subject.name))}</span>`);
  }

  return parts.join("");
}

// ======================================================
// MODULE PAGE
// ======================================================

function renderModule(module) {
  return `
    <section class="page-title">

      <div class="crumbs">
        ${crumbs(module)}
      </div>


      <h1>
        ${esc(text(module.name))}
      </h1>


      <p class="page-description">
        ${esc(text(module.desc))}
      </p>

    </section>


    <section>

      <div class="section-heading">

        <h2>
          ${esc(t("home.subjects"))}
        </h2>

      </div>


      <div class="subject-grid">

        ${module.subjects
          .map(
            (subject) => `
              <a
                class="subject-card"
                href="#/m/${encodeURIComponent(module.id)}/${encodeURIComponent(
                  subject.id,
                )}"
              >

                <div>

                  <strong>
                    ${esc(text(subject.name))}
                  </strong>


                  <span>
                    ${totalResources(subject)}

                    ${esc(t("home.items"))}
                  </span>

                </div>


                <span class="subject-arrow">
                  ${arrowIcon()}
                </span>

              </a>
            `,
          )
          .join("")}

      </div>

    </section>
  `;
}

// ======================================================
// SUBJECT PAGE
// ======================================================

function renderSubject(module, subject) {
  const list = subject[activeTab] || [];

  return `
    <section class="page-title">

      <div class="crumbs">
        ${crumbs(module, subject)}
      </div>


      <h1>
        ${esc(text(subject.name))}
      </h1>

    </section>


    <section class="resource-box">

      <div
        class="tabs"
        role="tablist"
        aria-label="${esc(text(subject.name))}"
      >

        ${TABS.map(([key, en, ar]) => {
          const count = (subject[key] || []).length;

          const label = lang === "ar" ? ar : en;

          return `
              <button
                class="tab"
                type="button"
                role="tab"
                data-tab="${esc(key)}"
                aria-selected="${String(key === activeTab)}"
              >

                ${esc(label)}

                <span>
                  (${count})
                </span>

              </button>
            `;
        }).join("")}

      </div>


      <div class="resource-list">

        ${
          list.length
            ? list
                .map(
                  (item, index) => `

                    <button
                      class="resource-item"
                      type="button"
                      data-resource-index="${index}"
                    >

                      <span class="resource-icon">
                        ${resourceIcon(activeTab)}
                      </span>


                      <span class="resource-main">

                        <span class="resource-title">
                          ${esc(text(item.title))}
                        </span>


                        <span class="resource-type">
                          ${esc(t(`resourceTypes.${activeTab}`))}
                        </span>

                      </span>


                      <span class="open-resource">
                        ${esc(t("home.open"))}
                      </span>

                    </button>
                  `,
                )
                .join("")
            : `

              <div class="empty">

                <div class="empty-icon">
                  ${resourceIcon(activeTab)}
                </div>


                <div>
                  ${esc(t("home.empty"))}
                </div>


                <div>
                  ${esc(t("home.emptyDetail"))}
                </div>

              </div>

            `
        }

      </div>

    </section>
  `;
}

// ======================================================
// ROUTING
// ======================================================

function routeParts() {
  return location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
}

// ======================================================
// YOUTUBE URL
// ======================================================

function getYouTubeEmbedUrl(url) {
  if (!url) {
    return null;
  }

  const value = String(url).trim();

  if (!value) {
    return null;
  }

  try {
    const parsed = new URL(value);

    const hostname = parsed.hostname.toLowerCase().replace(/^www\./, "");

    // Already an embed URL

    if (hostname === "youtube.com" && parsed.pathname.startsWith("/embed/")) {
      const videoId = parsed.pathname.split("/").filter(Boolean)[1];

      if (!videoId) {
        return null;
      }

      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
        videoId,
      )}`;
    }

    // Normal youtube.com/watch?v=...

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const videoId = parsed.searchParams.get("v");

        if (!videoId) {
          return null;
        }

        return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
          videoId,
        )}`;
      }

      // YouTube Shorts

      if (parsed.pathname.startsWith("/shorts/")) {
        const videoId = parsed.pathname.split("/").filter(Boolean)[1];

        if (!videoId) {
          return null;
        }

        return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
          videoId,
        )}`;
      }
    }

    // youtu.be/VIDEO_ID

    if (hostname === "youtu.be") {
      const videoId = parsed.pathname.split("/").filter(Boolean)[0];

      if (!videoId) {
        return null;
      }

      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
        videoId,
      )}`;
    }

    return null;
  } catch {
    return null;
  }
}

// ======================================================
// CLOSE VIEWER
// ======================================================

function closeViewer() {
  const viewer = document.getElementById("resourceViewer");

  if (!viewer) {
    return;
  }

  const video = viewer.querySelector("video");

  const audio = viewer.querySelector("audio");

  if (video) {
    video.pause();

    video.removeAttribute("src");

    video.load();
  }

  if (audio) {
    audio.pause();

    audio.removeAttribute("src");

    audio.load();
  }

  viewer.remove();

  document.body.classList.remove("viewer-open");

  document.removeEventListener("keydown", handleViewerKeydown);
}

// ======================================================
// VIEWER KEYBOARD
// ======================================================

function handleViewerKeydown(event) {
  if (event.key === "Escape") {
    closeViewer();
  }
}

// ======================================================
// OPEN VIEWER
// ======================================================

function openViewer(item, category) {
  closeViewer();

  const viewer = document.createElement("div");

  viewer.id = "resourceViewer";

  viewer.className = "viewer-overlay";

  viewer.setAttribute("role", "dialog");

  viewer.setAttribute("aria-modal", "true");

  viewer.setAttribute("aria-label", text(item.title));

  const type = item.type || getViewerType(category);

  const url = String(item.url || "").trim();

  let mediaHTML = "";

  // ==================================================
  // MISSING URL
  // ==================================================

  if (!url || url === "#") {
    const messageKey =
      category === "youtube" ? "viewer.youtubeMissing" : "viewer.fileMissing";

    mediaHTML = `
      <div class="viewer-message">

        ${resourceIcon(category)}

        <p>
          ${esc(t(messageKey))}
        </p>

      </div>
    `;
  }

  // ==================================================
  // LOCAL VIDEO
  // ==================================================
  else if (type === "video") {
    mediaHTML = `
      <div class="viewer-media viewer-video-wrap">

        <video
          class="viewer-video"
          controls
          playsinline
          preload="metadata"
        >

          <source
            src="${esc(url)}"
          >

          ${esc(t("viewer.videoNotSupported"))}

        </video>

      </div>
    `;
  }

  // ==================================================
  // YOUTUBE
  // ==================================================
  else if (type === "youtube") {
    const embedUrl = getYouTubeEmbedUrl(url);

    if (!embedUrl) {
      mediaHTML = `
        <div class="viewer-message">

          ${resourceIcon("youtube")}

          <p>
            ${esc(t("viewer.youtubeMissing"))}
          </p>

        </div>
      `;
    } else {
      mediaHTML = `
        <div class="viewer-youtube-wrap">

          <iframe
            class="viewer-youtube"
            src="${esc(embedUrl)}"
            title="${esc(text(item.title))}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

        </div>
      `;
    }
  }

  // ==================================================
  // AUDIO
  // ==================================================
  else if (type === "audio") {
    mediaHTML = `
      <div class="viewer-media viewer-audio-wrap">

        <div class="viewer-audio-icon">
          ${resourceIcon("audio")}
        </div>


        <audio
          class="viewer-audio"
          controls
          preload="metadata"
        >

          <source
            src="${esc(url)}"
          >

          ${esc(t("viewer.audioNotSupported"))}

        </audio>

      </div>
    `;
  }

  // ==================================================
  // PDF
  // ==================================================
  else if (type === "pdf") {
    mediaHTML = `
      <div class="viewer-pdf-wrap">

        <iframe
          class="viewer-pdf"
          src="${esc(url)}"
          title="${esc(text(item.title))}"
        ></iframe>


        <p class="viewer-pdf-hint">

          ${esc(t("viewer.pdfHint"))}

        </p>

      </div>
    `;
  }

  // ==================================================
  // UNKNOWN
  // ==================================================
  else {
    mediaHTML = `
      <div class="viewer-message">

        <p>
          ${esc(t("viewer.fileMissing"))}
        </p>

      </div>
    `;
  }

  // ==================================================
  // VIEWER HTML
  // ==================================================

  viewer.innerHTML = `

    <div
      class="viewer-backdrop"
      data-close-viewer
    ></div>


    <div class="viewer-panel">

      <header class="viewer-header">

        <div class="viewer-title-wrap">

          <span class="viewer-type">

            ${esc(t(`resourceTypes.${category}`))}

          </span>


          <h2 class="viewer-title">

            ${esc(text(item.title))}

          </h2>

        </div>


        <button
          class="viewer-close"
          type="button"
          data-close-viewer
          aria-label="${esc(t("viewer.close"))}"
        >
          ×
        </button>

      </header>


      <div class="viewer-content">

        ${mediaHTML}

      </div>


      ${
        type === "youtube"
          ? ""
          : url && url !== "#"
            ? `
              <footer class="viewer-footer">

                <a
                  class="viewer-open-new"
                  href="${esc(url)}"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  ${esc(t("viewer.openNew"))}

                </a>

              </footer>
            `
            : ""
      }

    </div>
  `;

  document.body.appendChild(viewer);

  document.body.classList.add("viewer-open");

  // ==================================================
  // CLOSE EVENTS
  // ==================================================

  viewer.querySelectorAll("[data-close-viewer]").forEach((element) => {
    element.addEventListener("click", closeViewer);
  });

  document.addEventListener("keydown", handleViewerKeydown);

  // ==================================================
  // MEDIA ERROR HANDLING
  // ==================================================

  const media = viewer.querySelector("video, audio");

  if (media) {
    media.addEventListener("error", () => {
      console.warn("Could not load media:", url);
    });
  }
}

// ======================================================
// VIEWER TYPE
// ======================================================

function getViewerType(category) {
  if (category === "videos") {
    return "video";
  }

  if (category === "youtube") {
    return "youtube";
  }

  if (category === "audio") {
    return "audio";
  }

  if (category === "books") {
    return "pdf";
  }

  return null;
}

// ======================================================
// RENDER
// ======================================================

function render() {
  const parts = routeParts();

  const module =
    parts[0] === "m" ? getModule(decodeURIComponent(parts[1] || "")) : null;

  const subject =
    module && parts[2]
      ? getSubject(module, decodeURIComponent(parts[2]))
      : null;

  const key = parts.join("/");

  if (key !== lastRouteKey) {
    activeTab = "videos";

    lastRouteKey = key;

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  if (subject) {
    app.innerHTML = renderSubject(module, subject);

    document.title = `${text(subject.name)} — MedModules`;
  } else if (module) {
    app.innerHTML = renderModule(module);

    document.title = `${text(module.name)} — MedModules`;
  } else {
    app.innerHTML = renderHome();

    document.title = "MedModules";
  }

  renderDropdown();

  applyLanguage();

  const homeActive = !module;

  document
    .querySelector("[data-nav-home]")
    ?.classList.toggle("active", homeActive);
}

// ======================================================
// MODULE MENU
// ======================================================

moduleButton.addEventListener("click", () => {
  setDropdown(moduleDropdown.hidden);
});

document.addEventListener("click", (event) => {
  if (!moduleMenu.contains(event.target)) {
    setDropdown(false);
  }
});

// ======================================================
// LANGUAGE
// ======================================================

languageButton.addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";

  localStorage.setItem("medmodules-lang", lang);

  render();
});

// ======================================================
// APP CLICK HANDLER
// ======================================================

app.addEventListener("click", (event) => {
  // ==================================================
  // TAB
  // ==================================================

  const tabButton = event.target.closest("[data-tab]");

  if (tabButton) {
    activeTab = tabButton.dataset.tab;

    const parts = routeParts();

    const module =
      parts[0] === "m" ? getModule(decodeURIComponent(parts[1] || "")) : null;

    const subject =
      module && parts[2]
        ? getSubject(module, decodeURIComponent(parts[2]))
        : null;

    if (module && subject) {
      app.innerHTML = renderSubject(module, subject);

      applyLanguage();
    }

    return;
  }

  // ==================================================
  // RESOURCE
  // ==================================================

  const resourceButton = event.target.closest("[data-resource-index]");

  if (!resourceButton) {
    return;
  }

  const parts = routeParts();

  const module =
    parts[0] === "m" ? getModule(decodeURIComponent(parts[1] || "")) : null;

  const subject =
    module && parts[2]
      ? getSubject(module, decodeURIComponent(parts[2]))
      : null;

  if (!module || !subject) {
    return;
  }

  const index = Number(resourceButton.dataset.resourceIndex);

  const item = subject[activeTab]?.[index];

  if (!item) {
    return;
  }

  openViewer(item, activeTab);
});

// ======================================================
// HASH CHANGE
// ======================================================

window.addEventListener("hashchange", () => {
  closeViewer();

  setDropdown(false);

  render();
});

// ======================================================
// START
// ======================================================

render();
