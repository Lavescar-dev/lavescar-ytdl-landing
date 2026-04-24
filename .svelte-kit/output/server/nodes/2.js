

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7dlukhYF.js","_app/immutable/chunks/B3nViKBb.js","_app/immutable/chunks/BBNxFAn3.js","_app/immutable/chunks/Ce5yv_5Z.js"];
export const stylesheets = ["_app/immutable/assets/2.DWVGdw52.css"];
export const fonts = [];
