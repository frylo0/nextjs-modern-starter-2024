import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import SVG_Next from '@/assets/vector/next.svg?url';
import SVG_Vercel from '@/assets/vector/vercel.svg';
import { s } from './page.css';

export default function Page() {
	return (
		<main className={cn(s.main)}>
			<div className={cn(s.description)}>
				<p className={cn(s.descriptionP)}>
					Get started by editing&nbsp;
					<code className={cn(s.code)}>src/app/page.tsx</code>
				</p>
				<div>
					<Link
						className={cn(s.descriptionA, s.mainA)}
						href="https://vercel.com?utm_source=typescript-nextjs-starter"
						target="_blank"
						rel="noopener noreferrer"
					>
						By <SVG_Vercel className={cn(s.vercelLogo)} width={100} height={24} />
					</Link>
				</div>
			</div>

			<div className={cn(s.center)}>
				<Image className={cn(s.logo)} src={SVG_Next} alt="Next.js Logo" width={180} height={37} priority />
			</div>

			<div className={cn(s.grid)}>
				<Link href="/other-page" className={cn(s.card, s.mainA)} target="_self" rel="noopener noreferrer">
					<h2 className={cn(s.cardH2)}>Link to &quot;other page&quot;</h2>
					<p className={cn(s.cardP)}>Check some examples on this page.</p>
				</Link>
			</div>
		</main>
	);
}
