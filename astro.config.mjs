// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	base: '/my-blog-znoopy',   
	// (Highly Recommended) Set the full URL for your live site
	site: 'https://zubin-tries.github.io',
	integrations: [mdx(), sitemap()],
});
