/* ============================================================
   SHAHIN WEB — main.js (v3)
   Icon sprite · preloader · particles · rope line · 3D tilt
   scroll graph · lead-catcher game · video popup · team renderer
   ============================================================ */
(function () {
  'use strict';

  /* ============ SVG ICON SPRITE (no emojis anywhere) ============ */
  var S = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">'
    + '<symbol id="i-chat" viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.6A8.5 8.5 0 1 1 21 11.5z"/></symbol>'
    + '<symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></symbol>'
    + '<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></symbol>'
    + '<symbol id="i-pin" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></symbol>'
    + '<symbol id="i-star" viewBox="0 0 24 24"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1z"/></symbol>'
    + '<symbol id="i-rocket" viewBox="0 0 24 24"><path d="M4.5 16.5 3 21l4.5-1.5M15 9l-3 3M14 3.5c3.5-.5 6 1 6.5 6.5-2 5.5-7.5 9.5-13 10.5-.5-5.5 1.5-13 6.5-17z"/><circle cx="15" cy="9" r="1.2"/></symbol>'
    + '<symbol id="i-up" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></symbol>'
    + '<symbol id="i-down" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></symbol>'
    + '<symbol id="i-right" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></symbol>'
    + '<symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3"/></symbol>'
    + '<symbol id="i-code" viewBox="0 0 24 24"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></symbol>'
    + '<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.5-4.5"/></symbol>'
    + '<symbol id="i-bot" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="11" rx="2"/><path d="M12 8V4M9 4h6"/><circle cx="9" cy="13" r="1.2"/><circle cx="15" cy="13" r="1.2"/><path d="M9.5 16.5h5"/></symbol>'
    + '<symbol id="i-film" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 9h5M2 15h5M17 9h5M17 15h5"/></symbol>'
    + '<symbol id="i-pen" viewBox="0 0 24 24"><path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></symbol>'
    + '<symbol id="i-cart" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6"/></symbol>'
    + '<symbol id="i-magnet" viewBox="0 0 24 24"><path d="M6 3v8a6 6 0 0 0 12 0V3M6 8h4M14 8h4"/></symbol>'
    + '<symbol id="i-users" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></symbol>'
    + '<symbol id="i-user" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></symbol>'
    + '<symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>'
    + '<symbol id="i-x" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></symbol>'
    + '<symbol id="i-play" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/></symbol>'
    + '<symbol id="i-chart" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/></symbol>'
    + '<symbol id="i-chart-down" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m7 9 4 4 3-3 5 6"/></symbol>'
    + '<symbol id="i-report" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></symbol>'
    + '<symbol id="i-coins" viewBox="0 0 24 24"><circle cx="9" cy="9" r="6"/><path d="M14.8 6.3a6 6 0 1 1-8.5 8.5"/></symbol>'
    + '<symbol id="i-building" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/></symbol>'
    + '<symbol id="i-heart" viewBox="0 0 24 24"><path d="M19.5 5a5 5 0 0 0-7.5.5A5 5 0 0 0 4.5 5c-2 2-2 5.1 0 7.1L12 19.5l7.5-7.4c2-2 2-5.1 0-7.1z"/></symbol>'
    + '<symbol id="i-grad" viewBox="0 0 24 24"><path d="M22 9 12 4 2 9l10 5z"/><path d="M6 11.5V16c3 3 9 3 12 0v-4.5"/></symbol>'
    + '<symbol id="i-food" viewBox="0 0 24 24"><path d="M4 2v8a2 2 0 0 0 2 2v10M8 2v8a2 2 0 0 1-2 2M8 2v4M20 2c-2.5 1-4 3.5-4 7v4h4v9"/></symbol>'
    + '<symbol id="i-dumbbell" viewBox="0 0 24 24"><path d="m7.4 7.4 9.2 9.2M4.6 9.6 2.5 7.5l2-2 2.1 2.1M9.6 4.6 7.5 2.5l-2 2 2.1 2.1M19.4 14.4l2.1 2.1-2 2-2.1-2.1M14.4 19.4l2.1 2.1 2-2-2.1-2.1"/></symbol>'
    + '<symbol id="i-store" viewBox="0 0 24 24"><path d="m3 9 1-5h16l1 5M5 9v12h14V9M9 21v-6h6v6"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/></symbol>'
    + '<symbol id="i-zap" viewBox="0 0 24 24"><path d="M13 2 3 14h7l-1 8 11-12h-7z"/></symbol>'
    + '<symbol id="i-book" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-2.5"/></symbol>'
    + '<symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>'
    + '<symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1"/></symbol>'
    + '<symbol id="i-gamepad" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v4M5 13h4M15.5 11.5h0M18 14h0"/><circle cx="15.5" cy="11.5" r=".8"/><circle cx="18" cy="14" r=".8"/></symbol>'
    + '<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></symbol>'
    + '<symbol id="i-layout" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></symbol>'
    + '<symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></symbol>'
    + '<symbol id="i-briefcase" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></symbol>'
    + '<symbol id="i-fb" viewBox="0 0 24 24"><path d="M15 3h-2.5C10 3 9 4.6 9 7.1V10H6v3.5h3V21h3.5v-7.5h2.9l.6-3.5h-3.5V7.5c0-1 .3-1.5 1.5-1.5H15z" fill="currentColor" stroke="none"/></symbol>'
    + '<symbol id="i-ig" viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></symbol>'
    + '<symbol id="i-li" viewBox="0 0 24 24"><path d="M6.5 9.5V18M6.5 6.2v.1M11 18v-5a3 3 0 0 1 6 0v5" /><rect x="2.5" y="2.5" width="19" height="19" rx="3"/></symbol>'
    + '<symbol id="i-reddit" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7.5"/><circle cx="9" cy="13.5" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="13.5" r="1" fill="currentColor" stroke="none"/><path d="M9 17c2 1.4 4 1.4 6 0M12 6.5 13 3l4 1"/><circle cx="17.8" cy="4.4" r="1.3"/><circle cx="19.5" cy="11" r="1.5"/><circle cx="4.5" cy="11" r="1.5"/></symbol>'
    + '<symbol id="i-yt" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></symbol>'
    + '</svg>';
  document.body.insertAdjacentHTML('afterbegin', S);
  function icon(name, cls) { return '<svg class="ic' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }
  window.SW_ICON = icon;

  /* ============ PRELOADER (skeleton) ============ */
  var pre = document.createElement('div');
  pre.className = 'preloader';
  pre.innerHTML =
    '<div class="pre-inner">' +
    '<svg class="pre-logo" viewBox="0 0 48 48"><path d="M5 41 C18 41 15 25 24 24 C33 23 30 8 43 7" fill="none" stroke="#00D4FF" stroke-width="5" stroke-linecap="round"/><circle cx="5" cy="41" r="3.5" fill="#00C896"/></svg>' +
    '<div class="pre-skel" style="width:180px"></div>' +
    '<div class="pre-skel" style="width:120px"></div>' +
    '<div class="pre-skel" style="width:150px"></div>' +
    '</div>';
  document.body.appendChild(pre);
  function killPre() {
    pre.classList.add('pre-done');
    setTimeout(function () { if (pre.parentNode) pre.parentNode.removeChild(pre); }, 600);
  }
  if (document.readyState === 'complete') setTimeout(killPre, 350);
  else window.addEventListener('load', function () { setTimeout(killPre, 350); });
  setTimeout(killPre, 2200); /* safety */

  /* ============ CONTENT ============ */
  var DEFAULTS = window.SW_DEFAULTS || {};
  function getContent() {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem('sw_content') || '{}'); } catch (e) {}
    var c = {};
    for (var k in DEFAULTS) c[k] = (saved[k] !== undefined && saved[k] !== '') ? saved[k] : DEFAULTS[k];
    return c;
  }
  var C = getContent();
  window.SW_CONTENT = C;

  document.querySelectorAll('[data-bind]').forEach(function (el) {
    var key = el.getAttribute('data-bind');
    if (C[key] !== undefined) el.textContent = C[key];
  });

  var waDigits = (C.whatsapp || '').replace(/[^\d]/g, '');
  document.querySelectorAll('[data-wa-link]').forEach(function (a) {
    a.href = 'https://wa.me/' + waDigits + '?text=' + encodeURIComponent('Hi Shahin Web! I want to grow my business.');
  });
  document.querySelectorAll('[data-tel-link]').forEach(function (a) { a.href = 'tel:' + (C.phone || '').replace(/\s/g, ''); });
  document.querySelectorAll('[data-mail-link]').forEach(function (a) { a.href = 'mailto:' + C.email; });

  var SOCIALS = { fb: C.fb_url, insta: C.insta_url, yt: C.yt_url, li: C.li_url, reddit: C.reddit_url };
  document.querySelectorAll('[data-social]').forEach(function (a) {
    var url = SOCIALS[a.getAttribute('data-social')];
    if (url) { a.href = url; if (url !== '#') { a.target = '_blank'; a.rel = 'noopener'; } }
    else { a.style.display = 'none'; }
  });

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ============ SCROLL PROGRESS / NAV / TOP ============ */
  var prog = document.createElement('div');
  prog.className = 'scroll-progress';
  document.body.appendChild(prog);

  var nav = document.querySelector('.nav');
  var topBtn = document.createElement('button');
  topBtn.className = 'back-top';
  topBtn.innerHTML = icon('up');
  topBtn.title = 'Back to top';
  topBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  document.body.appendChild(topBtn);

  function onScroll() {
    var y = window.scrollY;
    if (nav && !nav.classList.contains('nav-static')) nav.classList.toggle('scrolled', y > 30);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    topBtn.classList.toggle('show', y > 900);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============ MOBILE MENU ============ */
  var burger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = mobileMenu.classList.toggle('open');
      burger.classList.toggle('is-open', open);
      mobileMenu.querySelectorAll('a').forEach(function (a, i) {
        a.style.transitionDelay = open ? (0.05 * i + 0.08) + 's' : '0s';
      });
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileMenu.classList.remove('open'); burger.classList.remove('is-open'); });
    });
    /* tap outside closes the menu */
    document.addEventListener('click', function (e) {
      if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        mobileMenu.classList.remove('open');
        burger.classList.remove('is-open');
      }
    });
  }

  /* ============ PARTICLES ============ */
  function particles(canvasId, count) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dots = [], W, H;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);
    var n = Math.min(count, Math.floor(W * H / 14000));
    for (var i = 0; i < n; i++) {
      dots.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        c: Math.random() > 0.5 ? '0,212,255' : '255,255,255'
      });
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + d.c + ',0.7)';
        ctx.fill();
        for (var j = i + 1; j < dots.length; j++) {
          var e = dots[j], dx = d.x - e.x, dy = d.y - e.y, dist = dx * dx + dy * dy;
          if (dist < 13000) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y); ctx.lineTo(e.x, e.y);
            ctx.strokeStyle = 'rgba(30,111,255,' + (0.16 * (1 - dist / 13000)) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      if (!reduced) requestAnimationFrame(frame);
    }
    frame();
  }
  particles('particles', 70);
  particles('particles2', 45);

  /* ============ HERO CHAR REVEAL (word-aware — never breaks mid-word) ============ */
  document.querySelectorAll('.char-reveal').forEach(function (el) {
    var text = el.textContent;
    el.textContent = '';
    el.setAttribute('aria-label', text);
    var i = 0;
    text.split(' ').forEach(function (word, wi) {
      if (wi > 0) {
        var sp = document.createElement('span');
        sp.className = 'char-space';
        sp.innerHTML = ' ';
        el.appendChild(sp);
      }
      var w = document.createElement('span');
      w.className = 'word';
      w.setAttribute('aria-hidden', 'true');
      Array.prototype.forEach.call(word, function (ch) {
        var s = document.createElement('span');
        s.className = 'char';
        s.style.animationDelay = (0.03 * i + 0.15) + 's';
        s.textContent = ch;
        w.appendChild(s);
        i++;
      });
      el.appendChild(w);
      i++; /* count the space for timing */
    });
  });

  /* ============ MARQUEES ============ */
  document.querySelectorAll('.marquee[data-marquee="ticker"] .marquee-track').forEach(function (track) {
    var items = ['marq1', 'marq2', 'marq3', 'marq4', 'marq5', 'marq6']
      .map(function (k) { return C[k]; }).filter(Boolean);
    var html = items.map(function (t) {
      return '<span class="mq-item">' + escapeHTML(t) + '</span><span class="mq-star">' + icon('zap') + '</span>';
    }).join('');
    track.innerHTML = html + html;
  });

  var TOOL_ICONS = {
    'next.js': 'nextdotjs', 'react': 'react', 'react native': 'react',
    'claude ai': 'claude', 'claude': 'claude', 'chatgpt': 'openai', 'openai': 'openai',
    'gemini': 'googlegemini', 'supabase': 'supabase', 'node.js': 'nodedotjs',
    'postgresql': 'postgresql', 'shopify': 'shopify', 'wordpress': 'wordpress',
    'meta ads': 'meta', 'google ads': 'googleads', 'google analytics': 'googleanalytics',
    'whatsapp api': 'whatsapp', 'whatsapp': 'whatsapp',
    'github': 'github', 'tailwind css': 'tailwindcss',
    'javascript': 'javascript', 'figma': 'figma', 'canva': 'canva',
    'youtube': 'youtube', 'instagram': 'instagram', 'seo': 'googlesearchconsole'
  };
  /* Themed fallback icons so EVERY tool always shows a visible icon */
  var TOOL_FALLBACK = function (name) {
    var n = name.toLowerCase();
    if (/video|premiere|effects|reel/.test(n)) return 'film';
    if (/ads|meta|google|marketing|seo|analytics/.test(n)) return 'target';
    if (/whatsapp|chat|manychat/.test(n)) return 'chat';
    if (/ai|claude|gpt|gemini|cursor|veo/.test(n)) return 'bot';
    return 'code';
  };
  function toolIconHTML(name) {
    var slug = TOOL_ICONS[name.toLowerCase()];
    var fallback = icon(TOOL_FALLBACK(name));
    if (!slug) return fallback;
    return '<img src="https://cdn.simpleicons.org/' + slug + '/00D4FF" alt="" loading="lazy" data-fallback="' + TOOL_FALLBACK(name) + '">';
  }
  function armImgFallbacks(root) {
    root.querySelectorAll('img[data-fallback]').forEach(function (img) {
      img.addEventListener('error', function () {
        var span = document.createElement('span');
        span.innerHTML = icon(img.getAttribute('data-fallback'));
        img.replaceWith(span.firstChild);
      });
      /* already-failed cached errors */
      if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event('error'));
    });
  }
  document.querySelectorAll('.marquee[data-marquee="tools"] .marquee-track').forEach(function (track) {
    var tools = (C.tools_list || '').split(',').map(function (t) { return t.trim(); }).filter(Boolean);
    var html = tools.map(function (t) {
      return '<span class="tool-chip">' + toolIconHTML(t) + escapeHTML(t) + '</span>';
    }).join('');
    track.innerHTML = html + html;
    armImgFallbacks(track);
  });

  /* ============ HERO CARD TOOL BADGES (data-tools="A,B,C") ============ */
  document.querySelectorAll('[data-tools]').forEach(function (row) {
    var tools = row.getAttribute('data-tools').split(',').map(function (t) { return t.trim(); }).filter(Boolean);
    row.innerHTML = tools.map(function (t) {
      return '<span class="fc-tool" title="' + escapeHTML(t) + '">' + toolIconHTML(t) + '</span>';
    }).join('');
    armImgFallbacks(row);
  });

  /* ============ FLOAT CARD TOUCH/CLICK BOUNCE ============ */
  document.querySelectorAll('.float-card').forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.remove('bounce');
      void card.offsetWidth; /* restart animation */
      card.classList.add('bounce');
    });
  });

  /* ============ CLIENTS WALL (text or logo image) ============ */
  document.querySelectorAll('[data-clients]').forEach(function (wall) {
    var names = (C.clients_list || '').split(',').map(function (t) { return t.trim(); }).filter(Boolean);
    wall.innerHTML = names.map(function (n, i) {
      var parts = n.split('|');
      var name = parts[0].trim();
      var img = null;
      parts.slice(1).forEach(function (p) {
        p = p.trim();
        if (p.indexOf('img:') === 0) img = p.slice(4).trim();
      });
      if (img) {
        return '<span class="client-logo client-logo-img"><img src="' + escapeHTML(img) + '" alt="' + escapeHTML(name) + '" loading="lazy" onerror="this.parentNode.textContent=\'' + escapeHTML(name).replace(/'/g, '') + '\'"></span>';
      }
      return '<span class="client-logo c-style-' + (i % 4) + '">' + escapeHTML(name) + '</span>';
    }).join('');
  });

  /* ============ TEAM RENDERER ============ */
  document.querySelectorAll('[data-team]').forEach(function (grid) {
    var rows = (C.team_list || '').split('\n').map(function (r) { return r.trim(); }).filter(Boolean);
    grid.innerHTML = rows.map(function (r) {
      var p = r.split('|');
      var name = (p[0] || '').trim();
      var role = (p[1] || 'Specialist').trim();
      var initials = name.split(/\s+/).map(function (w) { return w[0] || ''; }).join('').slice(0, 2).toUpperCase();
      var imgFile = 'assets/img/team/' + name.split(/\s+/)[0].toLowerCase() + '.jpg';
      return '<div class="member-chip reveal">' +
        '<span class="member-avatar">' + escapeHTML(initials) +
        '<img src="' + imgFile + '" alt="" loading="lazy" onerror="this.remove()"></span>' +
        '<span class="member-meta"><b>' + escapeHTML(name) + '</b><i>' + escapeHTML(role) + '</i></span>' +
        '</div>';
    }).join('');
    grid.querySelectorAll('.reveal').forEach(function (el, i) {
      setTimeout(function () { el.classList.add('visible'); }, 60 * i + 150);
    });
  });

  /* ============ SCROLL REVEAL ============ */
  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visible'); revealIO.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealIO.observe(el); });

  /* ============ COUNT-UP ============ */
  var cuIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      cuIO.unobserve(en.target);
      var el = en.target;
      var target = parseFloat(el.textContent.replace(/[^\d.]/g, ''));
      if (isNaN(target)) return;
      var decimals = (String(target).split('.')[1] || '').length;
      var dur = 1600, t0 = null;
      function step(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals).replace(/\.0+$/, '');
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.count-up').forEach(function (el) { cuIO.observe(el); });

  /* ============ 3D TILT + MAGNETIC ============ */
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(900px) rotateX(' + (-y * 7) + 'deg) rotateY(' + (x * 7) + 'deg) translateY(-6px) scale(1.02)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
    document.querySelectorAll('.btn-primary, .btn-whatsapp').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.18;
        var y = (e.clientY - r.top - r.height / 2) * 0.3;
        btn.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

  /* ============ HERO PARALLAX ============ */
  var heroVisual = document.querySelector('.hero-visual');
  if (heroVisual && window.matchMedia('(hover: hover)').matches) {
    var hcards = heroVisual.querySelectorAll('.float-card');
    document.querySelector('.hero').addEventListener('mousemove', function (e) {
      var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      var dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
      hcards.forEach(function (c, i) {
        var depth = (i + 1) * 7;
        c.style.transform = 'translate(' + (dx * depth) + 'px,' + (dy * depth) + 'px) rotateY(' + (dx * 4) + 'deg) rotateX(' + (-dy * 4) + 'deg)';
      });
    });
  }

  /* ============ PROCESS TIMELINE ============ */
  var processRow = document.querySelector('.process-row');
  if (processRow) {
    var pIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        pIO.unobserve(en.target);
        var line = processRow.querySelector('.process-line i');
        if (line) setTimeout(function () { line.style.width = '100%'; }, 200);
        processRow.querySelectorAll('.process-step').forEach(function (s, i) {
          setTimeout(function () { s.classList.add('active'); }, 350 * i + 300);
        });
      });
    }, { threshold: 0.3 });
    pIO.observe(processRow);
  }

  /* ============ FAQ ============ */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q'), a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = '0px';
      });
      if (!open) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ============ SCROLL-DRAWN GROWTH GRAPH ============ */
  (function () {
    var section = document.querySelector('.growth-graph');
    if (!section) return;
    var path = section.querySelector('.gg-line');
    var area = section.querySelector('.gg-area');
    var dot = section.querySelector('.gg-dot');
    var halo = section.querySelector('.gg-halo');
    var pct = section.querySelector('.gg-pct');
    if (!path) return;
    var len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    var current = 0, target = 0, raf = null;
    function progress() {
      var r = section.getBoundingClientRect();
      var vh = window.innerHeight;
      var p = (vh - r.top) / (vh * 0.75 + r.height * 0.55);
      return Math.max(0, Math.min(1, p));
    }
    function render() {
      current += (target - current) * 0.09;
      if (Math.abs(target - current) < 0.001) current = target;
      path.style.strokeDashoffset = len * (1 - current);
      var pt = path.getPointAtLength(len * current);
      if (dot) { dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y); }
      if (halo) { halo.setAttribute('cx', pt.x); halo.setAttribute('cy', pt.y); }
      if (area) area.style.opacity = 0.08 + current * 0.5;
      if (pct) pct.textContent = Math.round(current * 186) + 'K';
      if (current !== target) raf = requestAnimationFrame(render);
      else raf = null;
    }
    function onScrollGraph() {
      target = progress();
      if (!raf) raf = requestAnimationFrame(render);
    }
    window.addEventListener('scroll', onScrollGraph, { passive: true });
    window.addEventListener('resize', onScrollGraph);
    onScrollGraph();
  })();

  /* ============ CENTER ROPE LINE (scroll-drawn, homepage) ============ */
  (function () {
    if (!document.querySelector('.rope-host') || window.innerWidth < 1100) return;
    var rope = document.createElement('div');
    rope.className = 'rope-line';
    rope.innerHTML =
      '<svg viewBox="0 0 120 1200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path class="rope-path" d="M60,0 C60,80 20,120 20,200 C20,280 100,320 100,400 C100,480 25,520 25,600 C25,680 95,720 95,800 C95,880 30,920 30,1000 C30,1080 60,1120 60,1200" fill="none"/>' +
      '</svg>';
    document.body.appendChild(rope);
    var rp = rope.querySelector('.rope-path');
    var rlen = rp.getTotalLength();
    rp.style.strokeDasharray = rlen;
    rp.style.strokeDashoffset = rlen;
    function ropeScroll() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? window.scrollY / h : 0;
      rp.style.strokeDashoffset = rlen * (1 - p);
    }
    window.addEventListener('scroll', ropeScroll, { passive: true });
    ropeScroll();
  })();

  /* ============ CURSOR: GLOW + DOT + RING ============ */
  if (window.matchMedia('(hover: hover)').matches) {
    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    var dotEl = document.createElement('div');
    dotEl.className = 'cur-dot';
    var ringEl = document.createElement('div');
    ringEl.className = 'cur-ring';
    document.body.appendChild(ringEl);
    document.body.appendChild(dotEl);
    var mx = -100, my = -100, rx = -100, ry = -100, shown = false;
    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!shown) { shown = true; glow.style.opacity = '1'; dotEl.style.opacity = '1'; ringEl.style.opacity = '1'; }
      glow.style.left = mx + 'px'; glow.style.top = my + 'px';
      dotEl.style.left = mx + 'px'; dotEl.style.top = my + 'px';
    });
    (function ringLoop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      ringEl.style.left = rx + 'px'; ringEl.style.top = ry + 'px';
      requestAnimationFrame(ringLoop);
    })();
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest('a, button, [data-tilt], input, textarea, select')) {
        ringEl.classList.add('cur-active');
        dotEl.classList.add('cur-active');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest('a, button, [data-tilt], input, textarea, select')) {
        ringEl.classList.remove('cur-active');
        dotEl.classList.remove('cur-active');
      }
    });
  }

  /* ============ LEAD FORMS ============ */
  function saveLead(extra) {
    var lead = { id: Date.now(), date: new Date().toLocaleString('en-IN'), page: document.title };
    for (var k in extra) lead[k] = extra[k];
    var leads = [];
    try { leads = JSON.parse(localStorage.getItem('sw_leads') || '[]'); } catch (err) {}
    leads.unshift(lead);
    localStorage.setItem('sw_leads', JSON.stringify(leads));
  }
  window.SW_SAVE_LEAD = saveLead;

  document.querySelectorAll('.lead-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = {};
      form.querySelectorAll('input, textarea, select').forEach(function (f) {
        if (f.name) data[f.name] = f.value;
      });
      saveLead(data);
      form.style.display = 'none';
      var ok = form.parentElement.querySelector('.form-success');
      if (ok) ok.style.display = 'block';
    });
  });

  /* ============ LEAD CATCHER GAME ============ */
  (function () {
    var zone = document.querySelector('.game-zone');
    if (!zone) return;
    var area = zone.querySelector('.game-area');
    var startBtn = zone.querySelector('.game-start');
    var hudTime = zone.querySelector('.game-time');
    var hudScore = zone.querySelector('.game-score');
    var endPanel = zone.querySelector('.game-end');
    var endScore = zone.querySelector('.game-end-score');
    var icons = ['target', 'film', 'code', 'coins', 'magnet'];
    var running = false, score = 0, timeLeft = 20, spawnTimer = null, clockTimer = null;

    function spawn() {
      if (!running) return;
      var item = document.createElement('button');
      item.className = 'game-item';
      item.innerHTML = icon(icons[Math.floor(Math.random() * icons.length)]);
      var pad = 56;
      item.style.left = (pad + Math.random() * (area.clientWidth - pad * 2)) + 'px';
      item.style.top = (pad + Math.random() * (area.clientHeight - pad * 2)) + 'px';
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!running) return;
        score++;
        hudScore.textContent = score;
        item.classList.add('caught');
        setTimeout(function () { item.remove(); }, 200);
      });
      area.appendChild(item);
      setTimeout(function () { if (item.parentNode) item.classList.add('fade'); }, 900);
      setTimeout(function () { if (item.parentNode) item.remove(); }, 1400);
    }

    function start() {
      running = true; score = 0; timeLeft = 20;
      hudScore.textContent = '0';
      hudTime.textContent = '20';
      startBtn.style.display = 'none';
      endPanel.style.display = 'none';
      area.classList.add('playing');
      spawnTimer = setInterval(spawn, 520);
      clockTimer = setInterval(function () {
        timeLeft--;
        hudTime.textContent = timeLeft;
        if (timeLeft <= 0) stop();
      }, 1000);
    }
    function stop() {
      running = false;
      clearInterval(spawnTimer);
      clearInterval(clockTimer);
      area.classList.remove('playing');
      area.querySelectorAll('.game-item').forEach(function (i) { i.remove(); });
      endScore.textContent = score;
      endPanel.style.display = 'block';
    }
    startBtn.addEventListener('click', start);

    var gameForm = zone.querySelector('.game-form');
    if (gameForm) {
      gameForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = { source: 'Lead Catcher game', game_score: String(score) };
        gameForm.querySelectorAll('input').forEach(function (f) { if (f.name) data[f.name] = f.value; });
        saveLead(data);
        gameForm.style.display = 'none';
        var ok = zone.querySelector('.game-form-success');
        if (ok) ok.style.display = 'block';
      });
    }
  })();

  /* ============ VIDEO POPUP (after 5s, if Ad-Duha.mp4 exists) ============ */
  (function () {
    if ((C.video_on || 'yes').toLowerCase() !== 'yes') return;
    if (sessionStorage.getItem('sw_vid_shown')) return;
    if (!document.querySelector('.hero') && !document.querySelector('.page-hero')) return;
    setTimeout(function () {
      var test = document.createElement('video');
      var sources = ['Ad-Duha.mp4', 'assets/img/Ad-Duha.mp4'];
      var idx = 0;
      function tryNext() {
        if (idx >= sources.length) return; /* no video — stay silent */
        test.src = sources[idx++];
      }
      test.addEventListener('error', tryNext);
      test.addEventListener('loadeddata', function () {
        sessionStorage.setItem('sw_vid_shown', '1');
        var modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML =
          '<div class="video-box">' +
          '<button class="video-close" aria-label="Close">' + icon('x') + '</button>' +
          '<video src="' + test.src + '" controls autoplay playsinline></video>' +
          '<div class="video-meta"><b>' + escapeHTML(C.video_title || '') + '</b><p>' + escapeHTML(C.video_sub || '') + '</p>' +
          '<a href="book-call.html" class="btn btn-primary" style="margin-top:10px">' + escapeHTML(C.cta_btn || 'Book a Free Call') + '</a></div>' +
          '</div>';
        document.body.appendChild(modal);
        requestAnimationFrame(function () { modal.classList.add('open'); });
        function close() {
          modal.classList.remove('open');
          var v = modal.querySelector('video');
          if (v) v.pause();
          setTimeout(function () { modal.remove(); }, 350);
        }
        modal.querySelector('.video-close').addEventListener('click', close);
        modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
      });
      test.preload = 'auto';
      tryNext();
    }, 5000);
  })();

  /* ============ FOOTER YEAR ============ */
  document.querySelectorAll('.year').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
