import { CSSProperties } from 'react';

/**
 * New way to determine `layout="fill"` from Next.js 13 using style prop of elements.
 *
 * @example
 * ```tsx
 * <div style={{ position: 'relative', width: 200, height: 300 }}>
 * 	<Image src={...} alt={...} style={layoutFill} />
 * </div>
 * ```
 */
export const layoutFill: CSSProperties = {
	objectFit: 'fill',
	width: '100%',
	height: '100%',
};
