import cn from 'clsx';

import { Button } from '@/components/common/Button/Button';
import { sButton, sMain } from './page.css';

export default function Home() {
	return (
		<main className={cn(sMain)}>
			<Button className={cn(sButton)}>Click me</Button>
		</main>
	);
}
