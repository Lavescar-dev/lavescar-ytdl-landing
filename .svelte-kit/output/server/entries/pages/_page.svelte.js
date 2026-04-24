import { a0 as attr, a1 as ensure_array_like, e as escape_html } from "../../chunks/renderer.js";
function _page($$renderer) {
  const REPO = "https://github.com/Lavescar-dev/lavescar-ytdl";
  const RELEASES = `${REPO}/releases/latest`;
  const features = [
    {
      icon: "⌘",
      title: "Keyboard-first",
      body: "Paste URL with ⌘L, switch presets with ⌘1-3 inside the active tab, jump between Video/Audio with ⌘⇧V/⌘⇧A. Hit ? anywhere for the cheatsheet."
    },
    {
      icon: "◈",
      title: "Preset library",
      body: "Video and Audio tabs with 5 opinionated presets each — from archival av1+opus to mp3 v0 or flac lossless. Edit, delete, add your own."
    },
    {
      icon: "▣",
      title: "Playlist-aware",
      body: "Paste a playlist URL and a modal opens with every entry. Select all, a range (1-10, 15, 20-25), or individual videos and queue them in one click."
    },
    {
      icon: "≡",
      title: "Real concurrency",
      body: "A live-adjustable semaphore gates downloads. Queue ten URLs at limit=2 and the manager fires them off in order as slots free up."
    },
    {
      icon: "↺",
      title: "Self-updating",
      body: "yt-dlp breaks every few weeks — one click in Settings pulls the latest binary with SHA-256 verification. The app itself auto-updates through a minisign-signed manifest."
    },
    {
      icon: "⌦",
      title: "Clean cancel",
      body: 'Cancelled rows move to History as `cancelled` instead of vanishing. Leftover .part fragments surface on next launch with a one-click "delete all" banner.'
    },
    {
      icon: "✦",
      title: "Error that helps",
      body: "Geo-block, age-gate, and network failures get kind-specific toasts — with a deep-link to the Cookies view when authentication is the issue."
    },
    {
      icon: "♪",
      title: "Subtitles & SponsorBlock",
      body: "Per-download subtitle picker (manual / auto, embed / sidecar VTT). Preset flags carry SponsorBlock, chapter splits, metadata embedding through to yt-dlp verbatim."
    }
  ];
  const platforms = [
    {
      id: "linux",
      label: "Linux",
      ext: "AppImage / .deb",
      note: "chmod +x, then run"
    },
    {
      id: "windows",
      label: "Windows",
      ext: ".msi / .exe",
      note: "SmartScreen → More info → Run anyway"
    },
    {
      id: "macos",
      label: "macOS",
      ext: ".dmg",
      note: "xattr -rd com.apple.quarantine /Applications/lavescar-ytdl.app"
    }
  ];
  $$renderer.push(`<main class="page svelte-1uha8ag"><header class="top svelte-1uha8ag"><div class="brand svelte-1uha8ag"><span class="logo svelte-1uha8ag">L</span> <span class="name svelte-1uha8ag">lavescar</span> <span class="sep svelte-1uha8ag">▸</span> <span class="mode svelte-1uha8ag">yt-dlp</span> <span class="ver svelte-1uha8ag">v1.0.0</span></div> <nav class="top-nav svelte-1uha8ag"><a${attr("href", REPO)} target="_blank" rel="noopener">github</a> <a href="https://lavescar.com.tr" target="_blank" rel="noopener">lavescar.com.tr</a></nav></header> <section class="hero svelte-1uha8ag"><div class="hero-main"><h1 class="svelte-1uha8ag"><span class="h-muted svelte-1uha8ag">the</span> quiet, fast,<br/> <span class="h-accent svelte-1uha8ag">keyboard-first</span> desktop<br/> frontend for yt-dlp.</h1> <p class="hero-sub svelte-1uha8ag">Tauri 2 + SvelteKit. An opinionated wrapper that keeps the terminal
        feel, surfaces yt-dlp's real power, and turns downloading into a <em class="svelte-1uha8ag">three-keystroke</em> ritual.</p> <div class="hero-cta svelte-1uha8ag"><a class="btn primary svelte-1uha8ag"${attr("href", RELEASES)} target="_blank" rel="noopener"><span>▸ download v1.0.0</span></a> <a class="btn ghost svelte-1uha8ag"${attr("href", REPO)} target="_blank" rel="noopener"><span>view on github</span></a></div> <div class="hero-meta svelte-1uha8ag"><span>AGPL-3.0</span> <span class="dot-sep svelte-1uha8ag">·</span> <span>Linux · Windows · macOS</span> <span class="dot-sep svelte-1uha8ag">·</span> <span>unsigned but reproducible</span></div></div> <div class="hero-card svelte-1uha8ag" aria-hidden="true"><div class="mock-row head svelte-1uha8ag"><span>source url</span> <span class="clip svelte-1uha8ag">● clipboard listener active</span></div> <div class="mock-input svelte-1uha8ag"><span class="prompt svelte-1uha8ag">$</span> <span class="url svelte-1uha8ag">https://www.youtube.com/watch?v=…</span> <span class="enter svelte-1uha8ag">fetch ↵</span> <span class="queue svelte-1uha8ag">▸ queue</span></div> <div class="mock-row head svelte-1uha8ag">METADATA <span class="ready svelte-1uha8ag">ready · 23:14</span></div> <div class="mock-meta svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="svelte-1uha8ag">BEST-V</span><span class="hi svelte-1uha8ag">av01.0.08M.08 · 1080p60 · 4.2 Mbps</span></div> <div class="svelte-1uha8ag"><span class="svelte-1uha8ag">BEST-A</span><span class="hi svelte-1uha8ag">opus · 160 kbps · 48 kHz</span></div> <div class="svelte-1uha8ag"><span class="svelte-1uha8ag">SIZE-EST</span><span class="svelte-1uha8ag">≈ 116 MB</span></div> <div class="svelte-1uha8ag"><span class="svelte-1uha8ag">CHAPTERS</span><span class="svelte-1uha8ag">7 chapters detected</span></div></div> <div class="mock-chips svelte-1uha8ag"><span class="chip on svelte-1uha8ag">av1+opus</span> <span class="chip svelte-1uha8ag">vp9+opus</span> <span class="chip svelte-1uha8ag">h264+aac</span> <span class="chip svelte-1uha8ag">audio · m4a</span></div> <div class="mock-row head svelte-1uha8ag">ACTIVE <span>1 running · concurrent: 3</span></div> <div class="mock-dl svelte-1uha8ag"><span class="num svelte-1uha8ag">01</span> <div class="dl-main svelte-1uha8ag"><div class="dl-title svelte-1uha8ag">Wube · How Factorio's Belt Compression…</div> <div class="dl-bar svelte-1uha8ag"><div class="dl-fill svelte-1uha8ag" style="width: 68%"></div></div> <div class="dl-stats svelte-1uha8ag"><span>78.9 MB / 116 MB</span><span>4.2 MB/s</span><span class="hi svelte-1uha8ag">68%</span><span>eta 0:08</span></div></div></div></div></section> <section class="features"><div class="sec-head svelte-1uha8ag"><span class="sec-dot svelte-1uha8ag"></span> <h2 class="svelte-1uha8ag">what makes it different</h2></div> <div class="feat-grid svelte-1uha8ag"><!--[-->`);
  const each_array = ensure_array_like(features);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let f = each_array[$$index];
    $$renderer.push(`<div class="feat svelte-1uha8ag"><span class="feat-ico svelte-1uha8ag" aria-hidden="true">${escape_html(f.icon)}</span> <h3 class="svelte-1uha8ag">${escape_html(f.title)}</h3> <p class="svelte-1uha8ag">${escape_html(f.body)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></section> <section class="install"><div class="sec-head svelte-1uha8ag"><span class="sec-dot svelte-1uha8ag"></span> <h2 class="svelte-1uha8ag">install</h2></div> <p class="install-note svelte-1uha8ag">v1.0 ships <strong class="svelte-1uha8ag">unsigned</strong> — no paid Apple / Windows
      certificates. Each bundle's SHA-256 is published on the release page so
      you can verify before running. Auto-update is signed separately with a
      local minisign keypair.</p> <div class="plat-grid svelte-1uha8ag"><!--[-->`);
  const each_array_1 = ensure_array_like(platforms);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let p = each_array_1[$$index_1];
    $$renderer.push(`<a class="plat svelte-1uha8ag"${attr("href", RELEASES)} target="_blank" rel="noopener"><div class="plat-head svelte-1uha8ag"><span class="plat-label svelte-1uha8ag">${escape_html(p.label)}</span> <span class="plat-ext svelte-1uha8ag">${escape_html(p.ext)}</span></div> <div class="plat-note svelte-1uha8ag">${escape_html(p.note)}</div> <div class="plat-cta svelte-1uha8ag">download ↗</div></a>`);
  }
  $$renderer.push(`<!--]--></div> <details class="details svelte-1uha8ag"><summary class="svelte-1uha8ag">verify the SHA-256</summary> <div class="code-block svelte-1uha8ag"><pre class="svelte-1uha8ag">
# Linux
sha256sum lavescar-ytdl_*.AppImage

# macOS
shasum -a 256 lavescar-ytdl_*.dmg

# Windows
certutil -hashfile lavescar-ytdl_*.msi SHA256
</pre></div></details> <details class="details svelte-1uha8ag"><summary class="svelte-1uha8ag">build from source</summary> <div class="code-block svelte-1uha8ag"><pre class="svelte-1uha8ag">
git clone https://github.com/Lavescar-dev/lavescar-ytdl.git
cd lavescar-ytdl
npm install
# fetch yt-dlp sidecar for your platform
curl -L -o src-tauri/binaries/yt-dlp-x86_64-unknown-linux-gnu \\
  https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux
chmod +x src-tauri/binaries/yt-dlp-*
npm run tauri:dev
</pre></div></details></section> <section class="philosophy svelte-1uha8ag"><blockquote class="svelte-1uha8ag"><p>yt-dlp is the engine. Most "frontends" ship a Chrome window wrapped
        around <code class="svelte-1uha8ag">child_process.spawn</code>. This isn't that — it owns the
        tooling layer so you don't solve already-solved problems every release.</p></blockquote> <ul class="anti-list svelte-1uha8ag"><li class="svelte-1uha8ag"><span class="svelte-1uha8ag">▸</span> no telemetry, no phoning home</li> <li class="svelte-1uha8ag"><span class="svelte-1uha8ag">▸</span> no dark patterns (ads, upsells, account required)</li> <li class="svelte-1uha8ag"><span class="svelte-1uha8ag">▸</span> no Electron bundle (Tauri → native webview)</li> <li class="svelte-1uha8ag"><span class="svelte-1uha8ag">▸</span> no opinionated file layout hijack — yt-dlp's <code class="svelte-1uha8ag">-o</code> template stays yours</li></ul></section> <footer class="foot svelte-1uha8ag"><div class="foot-left svelte-1uha8ag"><span>lavescar ▸ yt-dlp</span> <span class="dim svelte-1uha8ag">· v1.0.0 · AGPL-3.0</span></div> <div class="foot-right svelte-1uha8ag"><a${attr("href", REPO)} target="_blank" rel="noopener">github</a> <a${attr("href", `${REPO}/issues`)} target="_blank" rel="noopener">issues</a> <a href="https://lavescar.com.tr" target="_blank" rel="noopener">lavescar.com.tr</a></div></footer></main>`);
}
export {
  _page as default
};
