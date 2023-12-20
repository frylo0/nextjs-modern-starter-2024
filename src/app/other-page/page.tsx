import cn from 'clsx';

import { Button } from '@/components/common/Button/Button';
import { s } from './page.css';

export default function Home() {
	return (
		<main className={cn(s.main)}>
			<Button className={cn(s.button)}>Click me</Button>
		</main>
	);
}
