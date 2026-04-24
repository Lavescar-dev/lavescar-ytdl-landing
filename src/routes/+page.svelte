<script lang="ts">
  const REPO = 'https://github.com/Lavescar-dev/lavescar-ytdl';
  const RELEASES = `${REPO}/releases/latest`;

  const features = [
    {
      icon: '⌘',
      title: 'Keyboard-first',
      body: 'Paste URL with ⌘L, switch presets with ⌘1-3 inside the active tab, jump between Video/Audio with ⌘⇧V/⌘⇧A. Hit ? anywhere for the cheatsheet.'
    },
    {
      icon: '◈',
      title: 'Preset library',
      body: 'Video and Audio tabs with 5 opinionated presets each — from archival av1+opus to mp3 v0 or flac lossless. Edit, delete, add your own.'
    },
    {
      icon: '▣',
      title: 'Playlist-aware',
      body: 'Paste a playlist URL and a modal opens with every entry. Select all, a range (1-10, 15, 20-25), or individual videos and queue them in one click.'
    },
    {
      icon: '≡',
      title: 'Real concurrency',
      body: 'A live-adjustable semaphore gates downloads. Queue ten URLs at limit=2 and the manager fires them off in order as slots free up.'
    },
    {
      icon: '↺',
      title: 'Self-updating',
      body: 'yt-dlp breaks every few weeks — one click in Settings pulls the latest binary with SHA-256 verification. The app itself auto-updates through a minisign-signed manifest.'
    },
    {
      icon: '⌦',
      title: 'Clean cancel',
      body: 'Cancelled rows move to History as `cancelled` instead of vanishing. Leftover .part fragments surface on next launch with a one-click "delete all" banner.'
    },
    {
      icon: '✦',
      title: 'Error that helps',
      body: 'Geo-block, age-gate, and network failures get kind-specific toasts — with a deep-link to the Cookies view when authentication is the issue.'
    },
    {
      icon: '♪',
      title: 'Subtitles & SponsorBlock',
      body: 'Per-download subtitle picker (manual / auto, embed / sidecar VTT). Preset flags carry SponsorBlock, chapter splits, metadata embedding through to yt-dlp verbatim.'
    }
  ];

  const platforms = [
    { id: 'linux',   label: 'Linux',    ext: 'AppImage / .deb',   note: 'chmod +x, then run' },
    { id: 'windows', label: 'Windows',  ext: '.msi / .exe',       note: 'SmartScreen → More info → Run anyway' },
    { id: 'macos',   label: 'macOS',    ext: '.dmg',              note: 'xattr -rd com.apple.quarantine /Applications/lavescar-ytdl.app' }
  ];
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
    <nav class="top-nav">
      <a href={REPO} target="_blank" rel="noopener">github</a>
      <a href="https://lavescar.com.tr" target="_blank" rel="noopener">lavescar.com.tr</a>
    </nav>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-main">
      <h1>
        <span class="h-muted">the</span> quiet, fast,<br />
        <span class="h-accent">keyboard-first</span> desktop<br />
        frontend for yt-dlp.
      </h1>
      <p class="hero-sub">
        Tauri 2 + SvelteKit. An opinionated wrapper that keeps the terminal
        feel, surfaces yt-dlp's real power, and turns downloading into a
        <em>three-keystroke</em> ritual.
      </p>
      <div class="hero-cta">
        <a class="btn primary" href={RELEASES} target="_blank" rel="noopener">
          <span>▸ download v1.0.0</span>
        </a>
        <a class="btn ghost" href={REPO} target="_blank" rel="noopener">
          <span>view on github</span>
        </a>
      </div>
      <div class="hero-meta">
        <span>AGPL-3.0</span>
        <span class="dot-sep">·</span>
        <span>Linux · Windows · macOS</span>
        <span class="dot-sep">·</span>
        <span>unsigned but reproducible</span>
      </div>
    </div>

    <!-- ASCII-mockup card: no screenshot dependency -->
    <div class="hero-card" aria-hidden="true">
      <div class="mock-row head">
        <span>source url</span>
        <span class="clip">● clipboard listener active</span>
      </div>
      <div class="mock-input">
        <span class="prompt">$</span>
        <span class="url">https://www.youtube.com/watch?v=…</span>
        <span class="enter">fetch ↵</span>
        <span class="queue">▸ queue</span>
      </div>
      <div class="mock-row head">METADATA <span class="ready">ready · 23:14</span></div>
      <div class="mock-meta">
        <div><span>BEST-V</span><span class="hi">av01.0.08M.08 · 1080p60 · 4.2 Mbps</span></div>
        <div><span>BEST-A</span><span class="hi">opus · 160 kbps · 48 kHz</span></div>
        <div><span>SIZE-EST</span><span>≈ 116 MB</span></div>
        <div><span>CHAPTERS</span><span>7 chapters detected</span></div>
      </div>
      <div class="mock-chips">
        <span class="chip on">av1+opus</span>
        <span class="chip">vp9+opus</span>
        <span class="chip">h264+aac</span>
        <span class="chip">audio · m4a</span>
      </div>
      <div class="mock-row head">ACTIVE <span>1 running · concurrent: 3</span></div>
      <div class="mock-dl">
        <span class="num">01</span>
        <div class="dl-main">
          <div class="dl-title">Wube · How Factorio's Belt Compression…</div>
          <div class="dl-bar"><div class="dl-fill" style="width: 68%"></div></div>
          <div class="dl-stats"><span>78.9 MB / 116 MB</span><span>4.2 MB/s</span><span class="hi">68%</span><span>eta 0:08</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="features">
    <div class="sec-head">
      <span class="sec-dot"></span>
      <h2>what makes it different</h2>
    </div>
    <div class="feat-grid">
      {#each features as f}
        <div class="feat">
          <span class="feat-ico" aria-hidden="true">{f.icon}</span>
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Install -->
  <section class="install">
    <div class="sec-head">
      <span class="sec-dot"></span>
      <h2>install</h2>
    </div>
    <p class="install-note">
      v1.0 ships <strong>unsigned</strong> — no paid Apple / Windows
      certificates. Each bundle's SHA-256 is published on the release page so
      you can verify before running. Auto-update is signed separately with a
      local minisign keypair.
    </p>

    <div class="plat-grid">
      {#each platforms as p}
        <a class="plat" href={RELEASES} target="_blank" rel="noopener">
          <div class="plat-head">
            <span class="plat-label">{p.label}</span>
            <span class="plat-ext">{p.ext}</span>
          </div>
          <div class="plat-note">{p.note}</div>
          <div class="plat-cta">download ↗</div>
        </a>
      {/each}
    </div>

    <details class="details">
      <summary>verify the SHA-256</summary>
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
      <summary>build from source</summary>
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
    <blockquote>
      <p>
        yt-dlp is the engine. Most "frontends" ship a Chrome window wrapped
        around <code>child_process.spawn</code>. This isn't that — it owns the
        tooling layer so you don't solve already-solved problems every release.
      </p>
    </blockquote>
    <ul class="anti-list">
      <li><span>▸</span> no telemetry, no phoning home</li>
      <li><span>▸</span> no dark patterns (ads, upsells, account required)</li>
      <li><span>▸</span> no Electron bundle (Tauri → native webview)</li>
      <li><span>▸</span> no opinionated file layout hijack — yt-dlp's <code>-o</code> template stays yours</li>
    </ul>
  </section>

  <!-- Footer -->
  <footer class="foot">
    <div class="foot-left">
      <span>lavescar ▸ yt-dlp</span>
      <span class="dim">· v1.0.0 · AGPL-3.0</span>
    </div>
    <div class="foot-right">
      <a href={REPO} target="_blank" rel="noopener">github</a>
      <a href={`${REPO}/issues`} target="_blank" rel="noopener">issues</a>
      <a href="https://lavescar.com.tr" target="_blank" rel="noopener">lavescar.com.tr</a>
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

  /* ---------- top bar ---------- */
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--line-soft);
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
    gap: 18px;
    font-size: 12px;
    color: var(--dim);
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

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
  .hero-sub em {
    color: var(--amber);
    font-style: normal;
    font-weight: 500;
  }

  .hero-cta {
    margin-top: 28px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
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

  /* ---------- hero card (ascii-ish mockup) ---------- */
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
  .mock-meta > div {
    display: contents;
  }
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
  .install-note strong {
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
  }
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
  blockquote code {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--amber);
    font-style: normal;
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
  .anti-list code {
    color: var(--amber);
    font-family: var(--mono);
    font-size: 11.5px;
  }

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
