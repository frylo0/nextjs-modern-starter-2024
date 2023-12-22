import cn from 'clsx';
import Image from 'next/image';

import SVG_Next from '@/assets/vector/next.svg?url';
import SVG_Vercel from '@/assets/vector/vercel.svg';
import { s } from './Images.css';

interface ImagesProps {
	className?: string;
	showSrcImage: boolean;
	showComponentImage: boolean;
}

export const Images: React.FC<ImagesProps> = ({ className, showSrcImage, showComponentImage }) => {
	return (
		<div className={cn(s.images, className)}>
			{showSrcImage && <Image src={SVG_Next} alt="Next.js Logo" />}
			{showComponentImage && <SVG_Vercel width={100} />}
		</div>
	);
};
