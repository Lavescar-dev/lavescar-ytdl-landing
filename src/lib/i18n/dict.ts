/**
 * Translation dictionaries for the landing page.
 *
 * Keep the TS structure identical between locales — strings only diverge.
 * The store falls back to `en` for any missing key, so a partial Turkish
 * translation never breaks rendering.
 */

export interface Dict {
  nav: { github: string; site: string };
  hero: {
    title: { lead: string; mid: string; tail: string };
    sub: string;
    download: string;
    githubBtn: string;
    metaLicense: string;
    metaPlatforms: string;
    metaSigning: string;
  };
  mock: {
    sourceUrl: string;
    clip: string;
    fetch: string;
    queue: string;
    metadata: string;
    ready: string;
    bestV: string;
    bestA: string;
    sizeEst: string;
    chapters: string;
    chaptersDetected: string;
    chips: { av1: string; vp9: string; h264: string; m4a: string };
    activeHead: string;
    activeMeta: string;
    dlTitle: string;
    eta: string;
  };
  features: {
    head: string;
    items: { title: string; body: string }[];
  };
  install: {
    head: string;
    note: { lead: string; emphasis: string; tail: string };
    platforms: { label: string; ext: string; note: string; cta: string }[];
    verifyTitle: string;
    sourceTitle: string;
  };
  philosophy: {
    quote: string;
    list: string[];
  };
  footer: {
    crumbs: string;
    github: string;
    issues: string;
    site: string;
  };
  langSwitch: { en: string; tr: string; aria: string };
}

export const en: Dict = {
  nav: { github: 'github', site: 'lavescar.com.tr' },
  hero: {
    title: { lead: 'the', mid: 'quiet, fast,\nkeyboard-first', tail: 'desktop frontend\nfor yt-dlp.' },
    sub: 'Tauri 2 + SvelteKit. An opinionated wrapper that keeps the terminal feel, surfaces yt-dlp’s real power, and turns downloading into a three-keystroke ritual.',
    download: '▸ download',
    githubBtn: 'view on github',
    metaLicense: 'AGPL-3.0',
    metaPlatforms: 'Linux · Windows · macOS',
    metaSigning: 'unsigned but reproducible'
  },
  mock: {
    sourceUrl: 'source url',
    clip: '● clipboard listener active',
    fetch: 'fetch ↵',
    queue: '▸ queue',
    metadata: 'METADATA',
    ready: 'ready · 23:14',
    bestV: 'BEST-V',
    bestA: 'BEST-A',
    sizeEst: 'SIZE-EST',
    chapters: 'CHAPTERS',
    chaptersDetected: '7 chapters detected',
    chips: { av1: 'av1+opus', vp9: 'vp9+opus', h264: 'h264+aac', m4a: 'audio · m4a' },
    activeHead: 'ACTIVE',
    activeMeta: '1 running · concurrent: 3',
    dlTitle: "Wube · How Factorio's Belt Compression…",
    eta: 'eta 0:08'
  },
  features: {
    head: 'what makes it different',
    items: [
      { title: 'Keyboard-first', body: 'Paste URL with ⌘L, switch presets with ⌘1-3 inside the active tab, jump between Video/Audio with ⌘⇧V/⌘⇧A. Hit ? anywhere for the cheatsheet.' },
      { title: 'Preset library', body: 'Video and Audio tabs with 5 opinionated presets each — from archival av1+opus to mp3 v0 or flac lossless. Edit, delete, add your own.' },
      { title: 'Playlist-aware', body: 'Paste a playlist URL and a modal opens with every entry. Select all, a range (1-10, 15, 20-25), or individual videos and queue them in one click.' },
      { title: 'Real concurrency', body: 'A live-adjustable semaphore gates downloads. Queue ten URLs at limit=2 and the manager fires them off in order as slots free up.' },
      { title: 'Self-updating', body: 'yt-dlp breaks every few weeks — one click in Settings pulls the latest binary with SHA-256 verification. The app itself auto-updates through a minisign-signed manifest.' },
      { title: 'Clean cancel', body: 'Cancelled rows move to History as `cancelled` instead of vanishing. Leftover .part fragments surface on next launch with a one-click delete-all banner.' },
      { title: 'Error that helps', body: 'Geo-block, age-gate, and network failures get kind-specific toasts — with a deep-link to the Cookies view when authentication is the issue.' },
      { title: 'Subtitles & SponsorBlock', body: 'Per-download subtitle picker (manual / auto, embed / sidecar VTT). Preset flags carry SponsorBlock, chapter splits, metadata embedding through to yt-dlp verbatim.' }
    ]
  },
  install: {
    head: 'install',
    note: {
      lead: 'v1.0 ships ',
      emphasis: 'unsigned',
      tail: ' — no paid Apple / Windows certificates. Each bundle’s SHA-256 is published on the release page so you can verify before running. Auto-update is signed separately with a local minisign keypair.'
    },
    platforms: [
      { label: 'Linux',   ext: '.deb (x86_64)',                  note: 'sudo dpkg -i lavescar-ytdl_*.deb',                                                                cta: 'download ↗' },
      { label: 'Windows', ext: 'portable .zip (x86_64)',         note: 'Extract; keep lavescar-ytdl.exe and yt-dlp.exe together; SmartScreen → More info → Run anyway.',  cta: 'download ↗' },
      { label: 'macOS',   ext: 'build from source',              note: 'No prebuilt bundle yet — clone the repo and run `npm run tauri:build` on a Mac.',                cta: 'instructions ↗' }
    ],
    verifyTitle: 'verify the SHA-256',
    sourceTitle: 'build from source'
  },
  philosophy: {
    quote: 'yt-dlp is the engine. Most "frontends" ship a Chrome window wrapped around `child_process.spawn`. This isn’t that — it owns the tooling layer so you don’t solve already-solved problems every release.',
    list: [
      'no telemetry, no phoning home',
      'no dark patterns (ads, upsells, account required)',
      'no Electron bundle (Tauri → native webview)',
      'no opinionated file layout hijack — yt-dlp’s -o template stays yours'
    ]
  },
  footer: {
    crumbs: '· v1.0.0 · AGPL-3.0',
    github: 'github',
    issues: 'issues',
    site: 'lavescar.com.tr'
  },
  langSwitch: { en: 'EN', tr: 'TR', aria: 'Language' }
};

export const tr: Dict = {
  nav: { github: 'github', site: 'lavescar.com.tr' },
  hero: {
    title: { lead: 'sessiz, hızlı,', mid: 'tuş-odaklı', tail: 'yt-dlp masaüstü ön yüzü.' },
    sub: 'Tauri 2 + SvelteKit. Terminal hissini koruyan, yt-dlp’nin gerçek gücünü öne çıkaran ve indirme sürecini üç tuşa indiren fikirli bir wrapper.',
    download: '▸ indir',
    githubBtn: 'github’da incele',
    metaLicense: 'AGPL-3.0',
    metaPlatforms: 'Linux · Windows · macOS',
    metaSigning: 'imzasız ama doğrulanabilir'
  },
  mock: {
    sourceUrl: 'kaynak url',
    clip: '● pano dinleyici aktif',
    fetch: 'getir ↵',
    queue: '▸ kuyruk',
    metadata: 'METADATA',
    ready: 'hazır · 23:14',
    bestV: 'EN İYİ-V',
    bestA: 'EN İYİ-A',
    sizeEst: 'BOYUT-TAH',
    chapters: 'BÖLÜMLER',
    chaptersDetected: '7 bölüm tespit edildi',
    chips: { av1: 'av1+opus', vp9: 'vp9+opus', h264: 'h264+aac', m4a: 'sadece ses · m4a' },
    activeHead: 'AKTİF',
    activeMeta: '1 çalışıyor · eşzamanlı: 3',
    dlTitle: 'Wube · Factorio Bant Sıkıştırması Nasıl Çalışır…',
    eta: 'kalan 0:08'
  },
  features: {
    head: 'farkı yaratan ne',
    items: [
      { title: 'Tuş-odaklı', body: '⌘L ile URL yapıştır, aktıf sekme içinde ⌘1-3 ile preset değiştir, ⌘⇧V/⌘⇧A ile Video/Audio sekmelerine atla. Her yerde ? ile kısayol cheatsheet’i.' },
      { title: 'Preset kütüphanesi', body: 'Video ve Audio sekmeleri, her birinde 5 fikirli preset — arşivlik av1+opus’tan mp3 v0 ya da flac kayıpsıza. Düzenle, sil, kendi preset’ini ekle.' },
      { title: 'Playlist destekli', body: 'Playlist URL’i yapıştır, modal her girişi listeler. Tümünü, bir aralığı (1-10, 15, 20-25) veya tek tek videoları seç ve tek tıkla kuyruğa ekle.' },
      { title: 'Gerçek eşzamanlılık', body: 'Canlı ayarlanan bir semafor indirmeleri kapılar. limit=2 iken 10 URL kuyruğa at; manager sırayla, slot boşaldıkça tetikler.' },
      { title: 'Kendini güncelliyor', body: 'yt-dlp birkaç haftada bir bozulur — Settings’tan tek tık son binary’yi SHA-256 doğrulamasıyla çeker. Uygulamanın kendisi minisign imzalı manifest üzerinden otomatik güncellenir.' },
      { title: 'Temiz iptal', body: 'İptal edilen satırlar kaybolmak yerine History’ye `cancelled` olarak düşer. Geride kalan .part parçaları sonraki açılışta tek tıkla temizleme banner’ıyla yüzeye çıkar.' },
      { title: 'Yardımcı hata mesajları', body: 'Geo-block, age-gate ve ağ hataları türe özgü toast’lar verir — kimlik doğrulama gerektiğinde Cookies sayfasına deep link.' },
      { title: 'Altyazı ve SponsorBlock', body: 'Her indirme için altyazı seçici (manuel / otomatik, gömülü / yan dosya VTT). Preset flag’leri SponsorBlock, bölüm ayırma, metadata gömme özelliklerini yt-dlp’ye birebir aktarır.' }
    ]
  },
  install: {
    head: 'kurulum',
    note: {
      lead: 'v1.0 ',
      emphasis: 'imzasız',
      tail: ' çıkıyor — ücretli Apple / Windows sertifikası yok. Her bundle’ın SHA-256’sı release sayfasında yayınlanır, çalıştırmadan önce doğrulayabilirsin. Otomatik güncelleme ayrıca yerel bir minisign anahtar çiftiyle imzalanır.'
    },
    platforms: [
      { label: 'Linux',   ext: '.deb (x86_64)',                  note: 'sudo dpkg -i lavescar-ytdl_*.deb',                                                                                                cta: 'indir ↗' },
      { label: 'Windows', ext: 'portable .zip (x86_64)',         note: 'Çıkart; lavescar-ytdl.exe ile yt-dlp.exe aynı klasörde kalsın. SmartScreen → Daha fazla bilgi → Yine de çalıştır.',                cta: 'indir ↗' },
      { label: 'macOS',   ext: 'kaynaktan derle',                note: 'Henüz hazır bundle yok — Mac’te repoyu klonla, `npm run tauri:build` çalıştır.',                                              cta: 'talimatlar ↗' }
    ],
    verifyTitle: 'SHA-256’yı doğrula',
    sourceTitle: 'kaynaktan derle'
  },
  philosophy: {
    quote: 'yt-dlp motor. Çoğu "frontend" `child_process.spawn` etrafına sarılmış bir Chrome penceresi gönderir. Bu o değil — tooling katmanını sahiplenir, her release’de çözülmüş problemleri yeniden çözmez.',
    list: [
      'telemetry yok, eve aramaz',
      'karanlık kalıp yok (reklam, hesap zorunluluğu, upsell)',
      'Electron bundle yok (Tauri → native webview)',
      'fikirli dosya yerleşimi dayatması yok — yt-dlp’nin -o şablonu seninkidir'
    ]
  },
  footer: {
    crumbs: '· v1.0.0 · AGPL-3.0',
    github: 'github',
    issues: 'sorunlar',
    site: 'lavescar.com.tr'
  },
  langSwitch: { en: 'EN', tr: 'TR', aria: 'Dil' }
};

export const dictionaries = { en, tr } as const;
export type Locale = keyof typeof dictionaries;
