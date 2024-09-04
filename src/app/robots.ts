import { MetadataRoute } from 'next';

import { BASE_URL } from '@/constants/env';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			disallow: [''],
			allow: ['/*?*'],
		},
		sitemap: `${BASE_URL}/sitemap.xml`,
	};
}
