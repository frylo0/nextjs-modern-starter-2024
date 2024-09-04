import cn from 'clsx';

import { sSomeBlock } from './SomeBlock.css';

interface SomeBlockProps extends React.PropsWithChildren {
	className?: string;
}

export const SomeBlock: React.FC<SomeBlockProps> = ({ className, children }) => {
	return <div className={cn(sSomeBlock, className)}>{children}</div>;
};
