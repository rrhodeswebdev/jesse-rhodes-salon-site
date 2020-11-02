const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

module.exports = {
	siteMetadata: {
		title: 'Jesse Rhodes | Stylist & Extension Specialist',
		description:
			'Jesse Rhodes is a master stylist, advanced extension artist, and passionate hair educator located in Concord, NC. Reach out if you want to book an appointment or need a consultation.',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Jesse Rhodes Website',
				short_name: 'Jesse Rhodes',
				start_url: '/',
				background_color: '#e0ddd7',
				theme_color: '#b18e72',
				display: 'minimal-ui',
				icons: [],
				include_favicon: false,
			},
		},
		{
			resolve: 'gatsby-plugin-prefetch-google-fonts',
			options: {
				fonts: [
					{
						family: 'Lato',
						variants: ['300', '400', '700'],
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {
				displayName: false,
			},
		},
		{
			resolve: 'gatsby-plugin-hubspot',
			options: {
				trackingCode: '6152086',
				respectDNT: true,
				productionOnly: false,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'UA-140378431-1',
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: true,
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'v3ftkilgbp2p',
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
	],
};
