import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import EmailDetails from './apps/email/pages/EmailDetails.js'
import EmailIndex from './apps/email/pages/EmailIndex.js'
import NoteDetails from './apps/keep/pages/NoteDetails.js'
import NoteIndex from './apps/keep/pages/NoteIndex.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/about',
			component: AboutUs,
		},
		{
			path: '/keep',
			component: NoteIndex,
		},
		{
			path: '/keep/:id',
			component: NoteDetails,
		},
		{
			path: '/mail',
			component: EmailIndex,
			children: [
				{
				  path: ':id',
				  component: EmailDetails,
				},
			]
		},
		// {
		// 	path: '/mail/:id',
		// 	component: EmailDetails,
		// },
	],
}

export const router = createRouter(routerOptions)
