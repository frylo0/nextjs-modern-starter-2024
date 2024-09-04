import cn from 'clsx';

import { sButton, svColor, svSize } from './Button.css';

interface ButtonProps extends React.PropsWithChildren {
	className?: string;
	color?: keyof typeof svColor;
	size?: keyof typeof svSize;
}

export const Button: React.FC<ButtonProps> = ({ className, children, color = 'secondary', size = 'small' }) => {
	return <button className={cn(sButton, svColor[color], svSize[size], className)}>{children}</button>;
};
