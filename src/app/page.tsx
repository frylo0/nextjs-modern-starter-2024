'use client';

import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import SVG_Next from '@/assets/vector/next.svg?url';
import SVG_Vercel from '@/assets/vector/vercel.svg';
import { useApp$ } from '@/stores/app.store';
import {
	sCard,
	sCardH2,
	sCardP,
	sCenter,
	sCode,
	sCounter,
	sDescription,
	sDescriptionA,
	sDescriptionP,
	sGrid,
	sLogo,
	sMain,
	sMainA,
	sPersons,
	sVercelLogo,
} from './page.css';

export default function Page() {
	const { count, increment, decrement, ready, persons } = useApp$();

	return (
		<main className={cn(sMain)}>
			<div className={cn(sDescription)}>
				<p className={cn(sDescriptionP)}>
					Get started by editing&nbsp;
					<code className={cn(sCode)}>src/app/page.tsx</code>
				</p>
				<div>
					<Link
						className={cn(sDescriptionA, sMainA)}
						href="https://vercel.com?utm_source=typescript-nextjs-starter"
						target="_blank"
						rel="noopener noreferrer"
					>
						By <SVG_Vercel className={cn(sVercelLogo)} width={100} height={24} />
					</Link>
				</div>
			</div>

			<div className={cn(sCenter)}>
				<Image className={cn(sLogo)} src={SVG_Next.src} alt="Next.js Logo" width={180} height={37} priority />

				<div className={cn(sCounter)}>
					<button onClick={decrement}>-</button>
					{count}
					<button onClick={increment}>+</button>
				</div>

				<div className={cn(sPersons)}>{ready ? JSON.stringify(persons, null, 2) : 'Loading...'}</div>
			</div>

			<div className={cn(sGrid)}>
				<Link href="/other-page" className={cn(sCard, sMainA)} target="_self" rel="noopener noreferrer">
					<h2 className={cn(sCardH2)}>Link to &quot;other page&quot;</h2>
					<p className={cn(sCardP)}>Check some examples on this page.</p>
				</Link>
			</div>
		</main>
	);
}
