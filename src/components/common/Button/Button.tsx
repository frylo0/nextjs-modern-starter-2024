import cn from 'clsx';

import { s } from './Button.css';

interface ButtonProps extends React.PropsWithChildren {
	className?: string;
	color?: keyof typeof s.color;
	size?: keyof typeof s.size;
}

export const Button: React.FC<ButtonProps> = ({ className, children, color = 'secondary', size = 'small' }) => {
	return <button className={cn(s.button, s.color[color], s.size[size], className)}>{children}</button>;
};
