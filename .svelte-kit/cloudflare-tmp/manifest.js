export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.B2Oo3Dbr.js",app:"_app/immutable/entry/app.BAjtpmZu.js",imports:["_app/immutable/entry/start.B2Oo3Dbr.js","_app/immutable/chunks/DgXiTs4l.js","_app/immutable/chunks/BBNxFAn3.js","_app/immutable/chunks/Cq1yCX1L.js","_app/immutable/entry/app.BAjtpmZu.js","_app/immutable/chunks/BBNxFAn3.js","_app/immutable/chunks/Ce5yv_5Z.js","_app/immutable/chunks/B3nViKBb.js","_app/immutable/chunks/Cq1yCX1L.js","_app/immutable/chunks/CwuiKGzv.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base_path = "";
