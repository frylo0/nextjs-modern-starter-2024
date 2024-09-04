import { Metadata } from 'next';

import '@/styles/global-in-js.css';
import '@/styles/global-in-css.css';

import { WithClientAuth } from '@/lib/WithClientAuth';
import { InitApp$ } from '@/stores/app.store';

export const metadata: Metadata = {
	title: `TypeScript starter for Next.js`,
	description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<WithClientAuth>
					<InitApp$ />

					{children}
				</WithClientAuth>
			</body>
		</html>
	);
}
