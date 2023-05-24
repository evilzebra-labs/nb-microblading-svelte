export default [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Servicios',
		path: '/servicios',
		children: [
			{
				name: 'Microblading',
				path: '/servicios/microblading',
			},
			{
				name: 'Micropigmentación',
				path: '/servicios/micropigmentacion',
			},
			{
				name: 'Extensión de pestañas',
				path: '/servicios/extension-de-pestanas',
			},
			{
				name: 'Peeling',
				path: '/servicios/peeling',
			},
		],
	},
	{
		name: 'Blog',
		path: '/blog',
	},
	{
		name: 'Contacto',
		path: '/contacto',
	},
];
