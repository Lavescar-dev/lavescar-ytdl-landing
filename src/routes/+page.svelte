<script lang="ts">
  import { onMount } from 'svelte';
  import { i18n } from '$lib/i18n/index.svelte';

  const REPO = 'https://github.com/Lavescar-dev/lavescar-ytdl';
  const RELEASES = `${REPO}/releases`;

  onMount(() => i18n.init());

  // Reactive shorthand into the active dictionary.
  const t = $derived(i18n.t);
  const locale = $derived(i18n.locale);

  // Pre-rendered svg glyphs for OS platforms (no third-party icon font).
  const PLATFORM_ICONS = {
    linux: `<path d="M12 2c-1.6 0-2.7 1.4-2.7 3.2 0 .6.1 1.1.3 1.6-.6.4-1.2 1-1.6 1.7-.5.8-.8 1.6-.8 2.6 0 .9.2 1.6.4 2.3.2.6.4 1.1.4 1.7 0 .5-.2 1-.4 1.4-.3.5-.6 1-.6 1.7 0 .9.5 1.6 1.2 1.9.5.2 1 .3 1.5.4-.2.4-.3.8-.3 1.3 0 1 .8 1.7 1.7 1.7.5 0 .9-.2 1.3-.5.3-.2.6-.4.9-.4.3 0 .5.2.8.4.4.3.8.5 1.3.5.9 0 1.7-.7 1.7-1.7 0-.5-.1-.9-.3-1.3.5-.1 1-.2 1.5-.4.7-.3 1.2-1 1.2-1.9 0-.7-.3-1.2-.6-1.7-.2-.4-.4-.9-.4-1.4 0-.6.2-1.1.4-1.7.2-.7.4-1.4.4-2.3 0-1-.3-1.8-.8-2.6-.4-.7-1-1.3-1.6-1.7.2-.5.3-1 .3-1.6 0-1.8-1.1-3.2-2.7-3.2zm-1.4 4.5c.4 0 .7.4.7 1s-.3 1-.7 1-.7-.4-.7-1 .3-1 .7-1zm2.8 0c.4 0 .7.4.7 1s-.3 1-.7 1-.7-.4-.7-1 .3-1 .7-1zM12 8c.6 0 1.1.2 1.3.4.2.2.3.4.3.6 0 .3-.2.5-.5.7l-1.1.7-1.1-.7c-.3-.2-.5-.4-.5-.7 0-.2.1-.4.3-.6.2-.2.7-.4 1.3-.4z" fill="currentColor"/>`,
    windows: `<path d="M3 5.4 10.4 4.3v7.4H3zM10.4 12.5v7.2L3 18.6v-6.1zM11.3 4.2 21 2.7v9.0h-9.7zM21 12.5v9L11.3 20v-7.5z" fill="currentColor"/>`,
    macos: `<path d="M16.4 13c0-2.4 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.5 3 2.4 1.2-.1 1.6-.8 3.1-.8 1.4 0 1.9.8 3.1.7 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-3.7zm-2.3-6.7c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3z" fill="currentColor"/>`
  } as const;
</script>

<main class="page">
  <!-- Header -->
  <header class="top">
    <div class="brand">
      <span class="logo">L</span>
      <span class="name">lavescar</span>
      <span class="sep">▸</span>
      <span class="mode">yt-dlp</span>
      <span class="ver">v1.0.0</span>
    </div>
    <nav class="top-nav" aria-label={t.langSwitch.aria}>
      <a href={REPO} target="_blank" rel="noopener">{t.nav.github}</a>
      <a href="https://lavescar.com.tr" target="_blank" rel="noopener">{t.nav.site}</a>
      <div class="lang" role="group" aria-label={t.langSwitch.aria}>
        <button
          class="lang-btn"
          class:on={locale === 'en'}
          aria-pressed={locale === 'en'}
          onclick={() => i18n.set('en')}
        >{t.langSwitch.en}</button>
        <button
          class="lang-btn"
          class:on={locale === 'tr'}
          aria-pressed={locale === 'tr'}
          onclick={() => i18n.set('tr')}
        >{t.langSwitch.tr}</button>
      </div>
    </nav>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-main">
      <h1>
        <span class="h-muted">{t.hero.title.lead}</span><br />
        {#each t.hero.title.mid.split('\n') as line, i}
          {#if i === 0}<span class="h-accent">{line}</span>{:else}<br />{line}{/if}
        {/each}<br />
        {#each t.hero.title.tail.split('\n') as line, i}
          {#if i > 0}<br />{/if}{line}
        {/each}
      </h1>
      <p class="hero-sub">{t.hero.sub}</p>

      <div class="hero-cta">
        <a class="btn primary" href="#install">
          <span>{t.hero.download}</span>
        </a>
        <div class="plat-icons" role="group" aria-label="Choose platform">
          <a class="plat-ico" href="#install-linux"   aria-label="Linux">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">{@html PLATFORM_ICONS.linux}</svg>
          </a>
          <a class="plat-ico" href="#install-windows" aria-label="Windows">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">{@html PLATFORM_ICONS.windows}</svg>
          </a>
          <a class="plat-ico" href="#install-macos"   aria-label="macOS">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">{@html PLATFORM_ICONS.macos}</svg>
          </a>
        </div>
        <a class="btn ghost" href={REPO} target="_blank" rel="noopener">
          <span>{t.hero.githubBtn}</span>
        </a>
      </div>

      <div class="hero-meta">
        <span>{t.hero.metaLicense}</span>
        <span class="dot-sep">·</span>
        <span>{t.hero.metaPlatforms}</span>
        <span class="dot-sep">·</span>
        <span>{t.hero.metaSigning}</span>
      </div>
    </div>

    <!-- ASCII-mockup card -->
    <div class="hero-card" aria-hidden="true">
      <div class="mock-row head">
        <span>{t.mock.sourceUrl}</span>
        <span class="clip">{t.mock.clip}</span>
      </div>
      <div class="mock-input">
        <span class="prompt">$</span>
        <span class="url">https://www.youtube.com/watch?v=…</span>
        <span class="enter">{t.mock.fetch}</span>
        <span class="queue">{t.mock.queue}</span>
      </div>
      <div class="mock-row head">{t.mock.metadata} <span class="ready">{t.mock.ready}</span></div>
      <div class="mock-meta">
        <div><span>{t.mock.bestV}</span><span class="hi">av01.0.08M.08 · 1080p60 · 4.2 Mbps</span></div>
        <div><span>{t.mock.bestA}</span><span class="hi">opus · 160 kbps · 48 kHz</span></div>
        <div><span>{t.mock.sizeEst}</span><span>≈ 116 MB</span></div>
        <div><span>{t.mock.chapters}</span><span>{t.mock.chaptersDetected}</span></div>
      </div>
      <div class="mock-chips">
        <span class="chip on">{t.mock.chips.av1}</span>
        <span class="chip">{t.mock.chips.vp9}</span>
        <span class="chip">{t.mock.chips.h264}</span>
        <span class="chip">{t.mock.chips.m4a}</span>
      </div>
      <div class="mock-row head">{t.mock.activeHead} <span>{t.mock.activeMeta}</span></div>
      <div class="mock-dl">
        <span class="num">01</span>
        <div class="dl-main">
          <div class="dl-title">{t.mock.dlTitle}</div>
          <div class="dl-bar"><div class="dl-fill" style="width: 68%"></div></div>
          <div class="dl-stats"><span>78.9 MB / 116 MB</span><span>4.2 MB/s</span><span class="hi">68%</span><span>{t.mock.eta}</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="features">
    <div class="sec-head">
      <span class="sec-dot"></span>
      <h2>{t.features.head}</h2>
    </div>
    <div class="feat-grid">
      {#each t.features.items as f, i}
        {@const icons = ['⌘', '◈', '▣', '≡', '↺', '⌦', '✦', '♪']}
        <div class="feat">
          <span class="feat-ico" aria-hidden="true">{icons[i] ?? '·'}</span>
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Install -->
  <section class="install" id="install">
    <div class="sec-head">
      <span class="sec-dot"></span>
      <h2>{t.install.head}</h2>
    </div>
    <p class="install-note">
      {t.install.note.lead}<strong>{t.install.note.emphasis}</strong>{t.install.note.tail}
    </p>

    <div class="plat-grid">
      {#each t.install.platforms as p, i}
        {@const ids = ['install-linux', 'install-windows', 'install-macos']}
        {@const iconKey = ['linux', 'windows', 'macos'][i] as 'linux'|'windows'|'macos'}
        {@const href = i === 2 ? `${REPO}#building-from-source` : RELEASES}
        <a class="plat" id={ids[i]} href={href} target="_blank" rel="noopener">
          <div class="plat-head">
            <span class="plat-label">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" class="plat-svg">{@html PLATFORM_ICONS[iconKey]}</svg>
              {p.label}
            </span>
            <span class="plat-ext">{p.ext}</span>
          </div>
          <div class="plat-note">{p.note}</div>
          <div class="plat-cta">{p.cta}</div>
        </a>
      {/each}
    </div>

    <details class="details">
      <summary>{t.install.verifyTitle}</summary>
      <div class="code-block">
<pre>
# Linux
sha256sum lavescar-ytdl_*.AppImage

# macOS
shasum -a 256 lavescar-ytdl_*.dmg

# Windows
certutil -hashfile lavescar-ytdl_*.msi SHA256
</pre>
      </div>
    </details>

    <details class="details">
      <summary>{t.install.sourceTitle}</summary>
      <div class="code-block">
<pre>
git clone https://github.com/Lavescar-dev/lavescar-ytdl.git
cd lavescar-ytdl
npm install
# fetch yt-dlp sidecar for your platform
curl -L -o src-tauri/binaries/yt-dlp-x86_64-unknown-linux-gnu \
  https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux
chmod +x src-tauri/binaries/yt-dlp-*
npm run tauri:dev
</pre>
      </div>
    </details>
  </section>

  <!-- Philosophy -->
  <section class="philosophy">
    <blockquote><p>{t.philosophy.quote}</p></blockquote>
    <ul class="anti-list">
      {#each t.philosophy.list as line}
        <li><span>▸</span> {line}</li>
      {/each}
    </ul>
  </section>

  <!-- Footer -->
  <footer class="foot">
    <div class="foot-left">
      <span>lavescar ▸ yt-dlp</span>
      <span class="dim">{t.footer.crumbs}</span>
    </div>
    <div class="foot-right">
      <a href={REPO} target="_blank" rel="noopener">{t.footer.github}</a>
      <a href={`${REPO}/issues`} target="_blank" rel="noopener">{t.footer.issues}</a>
      <a href="https://lavescar.com.tr" target="_blank" rel="noopener">{t.footer.site}</a>
    </div>
  </footer>
</main>

<style>
  /* ---------- layout ---------- */
  .page {
    max-width: 1160px;
    margin: 0 auto;
    padding: 20px 28px 80px;
    display: flex;
    flex-direction: column;
    gap: 56px;
  }
  :global(html) { scroll-behavior: smooth; }

  /* ---------- top bar ---------- */
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--line-soft);
    gap: 16px;
    flex-wrap: wrap;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
  }
  .logo {
    display: inline-grid;
    place-items: center;
    width: 22px;
    height: 22px;
    background: var(--amber);
    color: var(--bg);
    font-weight: 600;
  }
  .name { color: var(--text-hi); font-weight: 500; }
  .sep { color: var(--amber); }
  .mode { color: var(--text); }
  .ver {
    color: var(--dim);
    font-size: 11px;
    border: 1px solid var(--line);
    padding: 1px 7px;
    margin-left: 4px;
  }
  .top-nav {
    display: flex;
    gap: 16px;
    font-size: 12px;
    color: var(--dim);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    align-items: center;
  }
  .lang {
    display: flex;
    border: 1px solid var(--line);
    overflow: hidden;
  }
  .lang-btn {
    padding: 4px 10px;
    background: transparent;
    border: 0;
    color: var(--dim);
    font-size: 10.5px;
    letter-spacing: 0.14em;
    font-family: inherit;
    cursor: pointer;
  }
  .lang-btn.on {
    background: var(--amber);
    color: var(--bg);
  }
  .lang-btn:not(.on):hover { color: var(--text-hi); }
  .lang-btn + .lang-btn { border-left: 1px solid var(--line); }

  /* ---------- hero ---------- */
  .hero {
    display: grid;
    grid-template-columns: 1fr 1.05fr;
    gap: 48px;
    align-items: start;
    padding-top: 24px;
  }
  @media (max-width: 960px) {
    .hero { grid-template-columns: 1fr; gap: 32px; }
  }

  h1 {
    font-family: var(--sans);
    font-weight: 500;
    font-size: clamp(32px, 4.5vw, 52px);
    line-height: 1.12;
    color: var(--text-hi);
    letter-spacing: -0.02em;
  }
  .h-muted { color: var(--dim); font-weight: 400; }
  .h-accent { color: var(--amber); }

  .hero-sub {
    margin-top: 20px;
    color: var(--text);
    font-size: 15px;
    max-width: 520px;
    line-height: 1.6;
  }
  .hero-sub :global(em) {
    color: var(--amber);
    font-style: normal;
    font-weight: 500;
  }

  .hero-cta {
    margin-top: 28px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
  }
  .btn {
    padding: 10px 18px;
    font-size: 13px;
    border: 1px solid var(--line);
    transition: all 0.14s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .btn.primary {
    background: var(--amber);
    color: var(--bg);
    border-color: var(--amber);
    font-weight: 500;
  }
  .btn.primary:hover { background: var(--text-hi); color: var(--bg); }
  .btn.ghost { color: var(--text); }
  .btn.ghost:hover { color: var(--amber); border-color: var(--amber-soft); }

  .plat-icons {
    display: inline-flex;
    border: 1px solid var(--line);
    height: 38px;
  }
  .plat-ico {
    width: 40px;
    height: 100%;
    display: grid;
    place-items: center;
    color: var(--dim);
    transition: all 0.12s ease;
  }
  .plat-ico:hover { color: var(--amber); background: var(--surface-2); }
  .plat-ico + .plat-ico { border-left: 1px solid var(--line); }

  .hero-meta {
    margin-top: 20px;
    font-size: 11px;
    color: var(--dim);
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    letter-spacing: 0.08em;
  }
  .dot-sep { color: var(--line); }

  /* ---------- hero card ---------- */
  .hero-card {
    border: 1px solid var(--line);
    background: var(--surface);
    padding: 16px;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }
  .hero-card::before, .hero-card::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-color: var(--amber-soft);
    opacity: 0.55;
  }
  .hero-card::before { top: -1px; left: -1px; border-top: 1px solid; border-left: 1px solid; }
  .hero-card::after { bottom: -1px; right: -1px; border-bottom: 1px solid; border-right: 1px solid; }

  .mock-row {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--dim);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .mock-row .clip { color: var(--olive); text-transform: none; letter-spacing: 0.08em; }
  .mock-row .ready { color: var(--olive); text-transform: none; letter-spacing: 0.08em; }

  .mock-input {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid var(--line);
    background: var(--bg);
  }
  .mock-input .prompt { color: var(--amber); }
  .mock-input .url { flex: 1; color: var(--text-hi); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mock-input .enter {
    color: var(--dim);
    padding: 2px 8px;
    border-left: 1px solid var(--line);
  }
  .mock-input .queue {
    color: var(--bg);
    background: var(--amber);
    padding: 2px 10px;
    font-weight: 500;
  }

  .mock-meta {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3px 16px;
    font-size: 11px;
    padding: 4px 2px;
  }
  .mock-meta > div { display: contents; }
  .mock-meta span:first-child {
    color: var(--dim);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 10px;
  }
  .mock-meta .hi { color: var(--amber); }

  .mock-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .chip {
    border: 1px solid var(--line);
    background: var(--bg);
    padding: 3px 8px;
    font-size: 10px;
    color: var(--dim);
  }
  .chip.on {
    color: var(--amber);
    border-color: var(--amber);
    background: rgba(245, 184, 59, 0.08);
  }

  .mock-dl {
    display: grid;
    grid-template-columns: 22px 1fr;
    gap: 10px;
    align-items: start;
  }
  .mock-dl .num { color: var(--dim); font-size: 10px; padding-top: 2px; }
  .dl-main { min-width: 0; }
  .dl-title {
    color: var(--text-hi);
    font-size: 11.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 4px;
  }
  .dl-bar {
    height: 9px;
    border: 1px solid var(--line-soft);
    background: var(--bg);
    overflow: hidden;
    margin-bottom: 4px;
  }
  .dl-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--amber-soft), var(--amber));
  }
  .dl-stats {
    display: flex;
    gap: 12px;
    font-size: 10px;
    color: var(--dim);
  }
  .dl-stats .hi { color: var(--amber); }

  /* ---------- section heads ---------- */
  .sec-head {
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid var(--line-soft);
    padding-bottom: 10px;
    margin-bottom: 24px;
  }
  .sec-head h2 {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--text-hi);
    font-weight: 500;
    margin: 0;
  }
  .sec-dot {
    width: 6px;
    height: 6px;
    background: var(--amber);
    border-radius: 50%;
  }

  /* ---------- features ---------- */
  .feat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1px;
    background: var(--line-soft);
    border: 1px solid var(--line-soft);
  }
  .feat {
    padding: 22px 20px;
    background: var(--bg-soft);
    transition: background 0.12s ease;
  }
  .feat:hover { background: var(--surface); }
  .feat-ico {
    color: var(--amber);
    font-size: 18px;
    display: block;
    margin-bottom: 12px;
  }
  .feat h3 {
    color: var(--text-hi);
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 8px;
    font-family: var(--sans);
  }
  .feat p {
    font-size: 12.5px;
    color: var(--text);
    line-height: 1.6;
  }

  /* ---------- install ---------- */
  .install-note {
    font-size: 13px;
    color: var(--text);
    max-width: 720px;
    margin-bottom: 22px;
  }
  .install-note :global(strong) {
    color: var(--amber);
    font-weight: 500;
  }

  .plat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
    margin-bottom: 22px;
  }
  .plat {
    display: block;
    padding: 18px 20px;
    border: 1px solid var(--line);
    background: var(--surface);
    transition: all 0.14s ease;
  }
  .plat:hover {
    border-color: var(--amber-soft);
    background: var(--surface-2);
    color: var(--text);
  }
  .plat-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
  }
  .plat-label {
    color: var(--text-hi);
    font-size: 14px;
    font-weight: 500;
    font-family: var(--sans);
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .plat-svg { color: var(--amber); }
  .plat-ext {
    color: var(--dim);
    font-size: 11px;
  }
  .plat-note {
    color: var(--text);
    font-size: 12px;
    line-height: 1.55;
    margin-bottom: 12px;
    font-family: var(--mono);
  }
  .plat-cta {
    color: var(--amber);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
  }

  .details {
    margin-top: 16px;
    padding: 12px 16px;
    border: 1px solid var(--line);
    background: var(--bg-soft);
  }
  .details summary {
    cursor: pointer;
    color: var(--amber);
    font-size: 11.5px;
    letter-spacing: 0.04em;
  }
  .details[open] summary { margin-bottom: 10px; color: var(--text-hi); }
  .code-block {
    background: var(--bg);
    border: 1px solid var(--line);
    padding: 12px 14px;
    overflow-x: auto;
  }
  .code-block pre {
    color: var(--text);
    font-size: 11.5px;
    line-height: 1.6;
    font-family: var(--mono);
  }

  /* ---------- philosophy ---------- */
  .philosophy {
    border-top: 1px solid var(--line-soft);
    border-bottom: 1px solid var(--line-soft);
    padding: 36px 0;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 36px;
    align-items: center;
  }
  @media (max-width: 820px) {
    .philosophy { grid-template-columns: 1fr; }
  }
  blockquote {
    font-family: var(--serif);
    font-style: italic;
    font-size: 17px;
    line-height: 1.6;
    color: var(--text-hi);
    padding-left: 20px;
    border-left: 2px solid var(--amber);
  }
  .anti-list {
    list-style: none;
    font-size: 12.5px;
    color: var(--text);
  }
  .anti-list li {
    display: flex;
    gap: 10px;
    padding: 6px 0;
    border-bottom: 1px dashed var(--line);
  }
  .anti-list li:last-child { border-bottom: none; }
  .anti-list li span { color: var(--olive); }

  /* ---------- footer ---------- */
  .foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid var(--line-soft);
    font-size: 11px;
    color: var(--dim);
    flex-wrap: wrap;
    gap: 12px;
  }
  .foot-left { display: flex; gap: 8px; }
  .foot-left .dim { color: var(--dim); }
  .foot-right { display: flex; gap: 16px; text-transform: uppercase; letter-spacing: 0.14em; }
</style>
