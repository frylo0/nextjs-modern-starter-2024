import cn from 'clsx';

import { sSomeSection } from './SomeSection.css';

interface SomeSectionProps extends React.PropsWithChildren {
	className?: string;
}

export const SomeSection: React.FC<SomeSectionProps> = ({ className, children }) => {
	return <div className={cn(sSomeSection, className)}>{children}</div>;
};
