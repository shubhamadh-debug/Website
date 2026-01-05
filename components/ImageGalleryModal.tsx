import React, { useEffect } from 'react';

interface ImageGalleryModalProps {
	images: string[];
	currentIndex: number;
	onClose: () => void;
	onNext: () => void;
	onPrevious: () => void;
	projectTitle: string;
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
	images,
	currentIndex,
	onClose,
	onNext,
	onPrevious,
	projectTitle,
}) => {
	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
			if (e.key === 'ArrowRight') onNext();
			if (e.key === 'ArrowLeft') onPrevious();
		};

		window.addEventListener('keydown', handleKeyDown);
		// Prevent body scroll when modal is open
		document.body.style.overflow = 'hidden';

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'unset';
		};
	}, [onClose, onNext, onPrevious]);

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* Backdrop */}
			<div
				className='absolute inset-0 bg-black/60 backdrop-blur-md'
				onClick={onClose}
			/>

			{/* Modal Content */}
			<div className='relative z-10 w-full h-full flex items-center justify-center p-4 md:p-8'>
				{/* Close Button */}
				<button
					onClick={onClose}
					className='absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-neutral-300 transition-colors z-20'
					aria-label='Close gallery'
				>
					<svg
						className='w-8 h-8 md:w-10 md:h-10'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1.5}
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>

				{/* Image Counter */}
				<div className='absolute top-4 left-4 md:top-8 md:left-8 text-white text-sm md:text-base font-light tracking-wider z-20'>
					<span className='font-semibold'>{currentIndex + 1}</span> /{' '}
					{images.length}
				</div>

				{/* Previous Button */}
				{currentIndex > 0 && (
					<button
						onClick={onPrevious}
						className='absolute left-4 md:left-8 text-white hover:text-neutral-300 transition-colors z-20'
						aria-label='Previous image'
					>
						<svg
							className='w-10 h-10 md:w-12 md:h-12'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1.5}
								d='M15 19l-7-7 7-7'
							/>
						</svg>
					</button>
				)}

				{/* Image */}
				<div className='max-w-7xl max-h-full flex items-center justify-center'>
					<img
						src={images[currentIndex]}
						alt={`${projectTitle} view ${currentIndex + 1}`}
						className='max-w-full max-h-[85vh] object-contain'
					/>
				</div>

				{/* Next Button */}
				{currentIndex < images.length - 1 && (
					<button
						onClick={onNext}
						className='absolute right-4 md:right-8 text-white hover:text-neutral-300 transition-colors z-20'
						aria-label='Next image'
					>
						<svg
							className='w-10 h-10 md:w-12 md:h-12'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1.5}
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</button>
				)}

				{/* Thumbnail Strip (optional) */}
				<div className='absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4'>
					{images.map((img, idx) => (
						<button
							key={idx}
							onClick={() => {
								const diff = idx - currentIndex;
								if (diff > 0) {
									for (let i = 0; i < diff; i++) onNext();
								} else if (diff < 0) {
									for (let i = 0; i < Math.abs(diff); i++) onPrevious();
								}
							}}
							className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all ${
								idx === currentIndex
									? 'border-white opacity-100'
									: 'border-transparent opacity-50 hover:opacity-75'
							}`}
						>
							<img
								src={img}
								alt={`Thumbnail ${idx + 1}`}
								className='w-full h-full object-cover'
							/>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageGalleryModal;
