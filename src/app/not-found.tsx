import cn from 'clsx';

import { sMain } from './not-found.css';

export default function Page() {
	return <main className={cn(sMain)}>404 not found page</main>;
}
