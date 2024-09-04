import cn from 'clsx';
import { ComponentProps, ElementType, ReactNode } from 'react';

import { sAdaptive } from './Adaptive.css';

interface AdaptiveOwnProps<E extends ElementType = ElementType> {
	className?: string;
	children?: ReactNode;
	as?: E;
}

type AdaptiveProps<E extends ElementType = ElementType> = AdaptiveOwnProps<E> &
	Omit<ComponentProps<E>, keyof AdaptiveOwnProps<E>>;

const defaultElement = 'div';

export const Adaptive = <E extends ElementType = typeof defaultElement>({
	className = '',
	children,
	as,
	...props
}: AdaptiveProps<E>) => {
	const TagName = as || defaultElement;

	return (
		<TagName className={cn(sAdaptive, className)} {...props}>
			{children}
		</TagName>
	);
};
