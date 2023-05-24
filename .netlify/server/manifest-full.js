export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ea17760b.js","app":"_app/immutable/entry/app.d928351b.js","imports":["_app/immutable/entry/start.ea17760b.js","_app/immutable/chunks/index.7cbb902f.js","_app/immutable/chunks/singletons.10cc4b4d.js","_app/immutable/entry/app.d928351b.js","_app/immutable/chunks/index.7cbb902f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/servicios/microblading",
				pattern: /^\/servicios\/microblading\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
