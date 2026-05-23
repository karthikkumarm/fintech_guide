/* ================================================================
   app.js — interactions, animations, nav, canvas
   fintech_guide — single vertical scroll, Apple-quality experience
================================================================ */
(function () {
  'use strict';

  var body = document.body;
  var lang = 'en';

  /* ── Language toggle ─────────────────────────────────────────── */
  window.setLang = function (l) {
    lang = l;
    body.classList.toggle('tamil', l === 'ta');
    // update sidebar lang buttons
    document.querySelectorAll('.sn-lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === l);
    });
    // legacy top-nav lang-btns (kept for safety)
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isEn = btn.textContent.trim() === 'EN';
      var isTa = btn.textContent.trim() === 'தமிழ்';
      btn.classList.toggle('active', (l === 'en' && isEn) || (l === 'ta' && isTa));
    });
  };

  /* ── Section emoji lookup ─────────────────────────────────────── */
  function secEmoji(id) {
    var map = {
      distinction:'⚖️', resellers:'📦', pyramid:'🔺', greyzone:'⚠️',
      shadow:'👁️', company:'🏢', costs:'💰', license:'📋',
      payout:'💸', wallet:'🔗', bankapi:'⚡'
    };
    return map[id] || '●';
  }

  /* ── Build left sidebar nav ───────────────────────────────────── */
  function buildNav() {
    var nav = document.getElementById('main-nav');
    if (!nav || !window.SECTIONS || !window.CHAPTERS) return;

    nav.className = 'side-nav';

    // Header
    nav.innerHTML =
      '<div class="sn-header">' +
        '<div class="sn-logo"><span class="en">Fintech Stack</span><span class="ta">ஃபின்டெக்</span></div>' +
        '<div class="sn-sub">India PA / PG Guide</div>' +
      '</div>' +
      '<div class="sn-body" id="sn-body"></div>' +
      '<div class="sn-footer">' +
        '<div class="sn-lang">' +
          '<button class="sn-lang-btn active" data-lang="en" onclick="setLang(\'en\')">EN</button>' +
          '<button class="sn-lang-btn" data-lang="ta" onclick="setLang(\'ta\')">தமிழ்</button>' +
        '</div>' +
      '</div>';

    var body = document.getElementById('sn-body');

    // Group sections under each chapter
    (window.CHAPTERS || []).forEach(function (ch) {
      var chSections = (window.SECTIONS || []).filter(function (s) { return s.chapter === ch.id; });
      if (!chSections.length) return;

      var lbl = document.createElement('div');
      lbl.className = 'sn-ch-label';
      lbl.innerHTML = ch.emoji + ' <span class="en">' + ch.label.en + '</span><span class="ta">' + ch.label.ta + '</span>';
      body.appendChild(lbl);

      chSections.forEach(function (sec) {
        var btn = document.createElement('button');
        btn.className = 'sn-link';
        btn.dataset.section = sec.id;
        btn.innerHTML =
          '<span class="sn-emoji">' + secEmoji(sec.id) + '</span>' +
          '<span class="sn-text en">' + sec.nav.en + '</span>' +
          '<span class="sn-text ta">' + sec.nav.ta + '</span>';
        btn.addEventListener('click', function () {
          var target = document.getElementById(sec.id);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        body.appendChild(btn);
      });
    });
  }

  /* ── Inject sections ─────────────────────────────────────────── */
  function buildSections() {
    var root = document.getElementById('content-root');
    if (!root || !window.SECTIONS) return;

    window.SECTIONS.forEach(function (sec) {
      var el = document.createElement('section');
      el.id = sec.id;
      el.className = 'guide-section ' + (sec.theme || '');
      el.innerHTML = '<div class="section-inner">' + sec.html + '</div>';
      root.appendChild(el);
    });
  }

  /* ── Scroll reveals (IntersectionObserver) ───────────────────── */
  function initReveals() {
    if (!window.IntersectionObserver) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('[data-reveal], [data-stagger], [data-slide-left]').forEach(function (el) {
      obs.observe(el);
    });
  }

  /* ── Nav active section tracking ─────────────────────────────── */
  function initNavActive() {
    var sections = [];

    function gatherSections() {
      sections = Array.from(document.querySelectorAll('.guide-section'));
    }

    function updateActive() {
      var mid = window.scrollY + window.innerHeight * 0.38;
      var activeId = null;
      for (var i = 0; i < sections.length; i++) {
        var s = sections[i];
        if (mid >= s.offsetTop && mid < s.offsetTop + s.offsetHeight) {
          activeId = s.id; break;
        }
      }
      document.querySelectorAll('.sn-link').forEach(function (link) {
        link.classList.toggle('active', link.dataset.section === activeId);
      });
    }

    setTimeout(gatherSections, 100);
    window.addEventListener('scroll', updateActive, { passive: true });
  }

  /* ── Progress bar + Back to top ──────────────────────────────── */
  function initScrollUI() {
    var bar = document.getElementById('progress-bar');
    var btt = document.getElementById('btt');

    window.addEventListener('scroll', function () {
      var total = document.documentElement.scrollHeight - window.innerHeight;
      var pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (bar) bar.style.width = pct.toFixed(2) + '%';
      if (btt) btt.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
  }

  /* ── 3D card tilt on hover ───────────────────────────────────── */
  function initTilt() {
    var selectors = '.m-tile, .cmp-card, .api-card, .cost-card, .payout-card';

    document.addEventListener('mousemove', function (e) {
      var card = e.target.closest(selectors);
      if (!card) return;
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width  - 0.5;
      var y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = 'translateY(-6px) perspective(900px) rotateX(' + (-y * 7) + 'deg) rotateY(' + (x * 7) + 'deg)';
    });

    document.addEventListener('mouseleave', function (e) {
      var card = e.target.closest(selectors);
      if (card) card.style.transform = '';
    }, true);
  }

  /* ── Hero canvas particles ───────────────────────────────────── */
  function initCanvas() {
    var canvas = document.getElementById('hero-canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var W, H;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function Particle() {
      this.reset();
    }
    Particle.prototype.reset = function () {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.2 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -Math.random() * 0.4 - 0.1;
      this.alpha = Math.random() * 0.55 + 0.1;
    };
    Particle.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -4 || this.x < -4 || this.x > W + 4) this.reset();
    };

    resize();
    for (var i = 0; i < 120; i++) particles.push(new Particle());
    window.addEventListener('resize', resize);

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(function (p) {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,' + p.alpha + ')';
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ── Context menu (right-click) ──────────────────────────────── */
  function initContextMenu() {
    var menu = document.getElementById('ctx-menu');
    if (!menu) return;

    function show(x, y) {
      menu.style.display = 'block';
      menu.style.left = Math.min(x, window.innerWidth  - 200) + 'px';
      menu.style.top  = Math.min(y, window.innerHeight - 130) + 'px';
      menu.innerHTML =
        '<div class="ctx-brand">© Karthi &nbsp;·&nbsp; Robosynaptix</div>' +
        '<div class="ctx-sep"></div>' +
        '<div class="ctx-item" onclick="document.execCommand(\'copy\')">📋 <span class="en">Copy</span><span class="ta">நகலெடு</span></div>' +
        '<div class="ctx-item" onclick="window.print()">🖨️ <span class="en">Print / PDF</span><span class="ta">அச்சிடு</span></div>';
      // hide on outside click
      setTimeout(function () {
        document.addEventListener('click', function hide() {
          menu.style.display = 'none';
          document.removeEventListener('click', hide);
        });
      }, 50);
    }

    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      show(e.clientX, e.clientY);
    });

    // Block View Source and Save shortcuts; allow Copy (Ctrl+C) and Print (Ctrl+P)
    document.addEventListener('keydown', function (e) {
      var mod = e.ctrlKey || e.metaKey;
      if (mod && (e.key === 'u' || e.key === 'U')) { e.preventDefault(); }  // View Source
      if (mod && (e.key === 's' || e.key === 'S')) { e.preventDefault(); }  // Save Page
      if (mod && e.shiftKey && (e.key === 'i' || e.key === 'I' || e.key === 'j' || e.key === 'J' || e.key === 'c' || e.key === 'C')) { e.preventDefault(); } // DevTools
      if (e.key === 'F12') { e.preventDefault(); }  // DevTools
    });
  }

  /* ── Animated counters ───────────────────────────────────────── */
  function initCounters() {
    if (!window.IntersectionObserver) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        obs.unobserve(el);
        var to   = parseFloat(el.dataset.countTo);
        var dur  = 1400;
        var step = 16;
        var steps = Math.ceil(dur / step);
        var cur   = 0;
        var timer = setInterval(function () {
          cur++;
          var val = Math.round((cur / steps) * to);
          el.textContent = val;
          if (cur >= steps) { el.textContent = to; clearInterval(timer); }
        }, step);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count-to]').forEach(function (el) { obs.observe(el); });
  }

  /* ── Floating rupee symbols ──────────────────────────────────── */
  function initRupeeFloat() {
    var count = 14;
    for (var i = 0; i < count; i++) {
      var el = document.createElement('span');
      el.className = 'rupee-float';
      el.textContent = '₹';
      el.setAttribute('aria-hidden', 'true');
      el.style.left = (Math.random() * 100) + 'vw';
      el.style.top = (Math.random() * 100) + 'vh';
      el.style.fontSize = (2 + Math.random() * 5) + 'rem';
      el.style.animationDuration = (18 + Math.random() * 30) + 's';
      el.style.animationDelay = '-' + (Math.random() * 50) + 's';
      el.style.setProperty('--r-op', (0.022 + Math.random() * 0.028).toFixed(3));
      document.body.appendChild(el);
    }
  }

  /* ── Init ────────────────────────────────────────────────────── */
  function init() {
    buildNav();
    buildSections();
    // slight defer so DOM is fully rendered before setting up observers
    setTimeout(function () {
      initReveals();
      initNavActive();
      initScrollUI();
      initTilt();
      initCounters();
    }, 60);
    initCanvas();
    initContextMenu();
    initRupeeFloat();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
