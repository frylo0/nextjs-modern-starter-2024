import cn from 'clsx';

import { s } from './Button.css';

interface ButtonProps extends React.PropsWithChildren {
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children }) => {
	return <button className={cn(s.button, className)}>{children}</button>;
};
