import cn from 'clsx';

import { s } from './SomeBlock.css';

interface SomeBlockProps extends React.PropsWithChildren {
	className?: string;
}

export const SomeBlock: React.FC<SomeBlockProps> = ({ className, children }) => {
	return <div className={cn(s.someBlock, className)}>{children}</div>;
};
