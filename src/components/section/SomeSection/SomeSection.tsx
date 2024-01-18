import cn from 'clsx';

import { s } from './SomeSection.css';

interface SomeSectionProps extends React.PropsWithChildren {
	className?: string;
}

export const SomeSection: React.FC<SomeSectionProps> = ({ className, children }) => {
	return <div className={cn(s.someSection, className)}>{children}</div>;
};
