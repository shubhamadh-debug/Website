import React from 'react';

const Contact: React.FC = () => {
	return (
		<div className='pt-32 pb-20 min-h-screen'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='max-w-3xl'>
					<h1 className='text-6xl md:text-9xl font-serif tracking-tighter mb-12'>
						Let's build{' '}
						<span className='italic text-neutral-400'>together.</span>
					</h1>

					<form
						className='space-y-12 mt-20'
						onSubmit={(e) => e.preventDefault()}
					>
						<div className='grid md:grid-cols-2 gap-12'>
							<div className='border-b border-neutral-200 pb-2'>
								<label className='text-xs uppercase tracking-widest text-neutral-400 block mb-2'>
									Name
								</label>
								<input
									type='text'
									className='w-full bg-transparent border-none outline-none text-xl font-serif'
									placeholder='Your name'
								/>
							</div>
							<div className='border-b border-neutral-200 pb-2'>
								<label className='text-xs uppercase tracking-widest text-neutral-400 block mb-2'>
									Email
								</label>
								<input
									type='email'
									className='w-full bg-transparent border-none outline-none text-xl font-serif'
									placeholder='Your email'
								/>
							</div>
						</div>
						<div className='border-b border-neutral-200 pb-2'>
							<label className='text-xs uppercase tracking-widest text-neutral-400 block mb-2'>
								Message
							</label>
							<textarea
								rows={4}
								className='w-full bg-transparent border-none outline-none text-xl font-serif resize-none'
								placeholder='Tell me about your inquiry'
							></textarea>
						</div>
						<button className='px-12 py-4 bg-neutral-900 text-white text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors'>
							Send Message
						</button>
					</form>

					<div className='mt-32 grid md:grid-cols-3 gap-12 text-sm text-neutral-500'>
						<div>
							<p className='uppercase tracking-widest font-bold text-neutral-900 mb-2'>
								Location
							</p>
							<p>155 Anderson Hwy</p>
							<p>Clemson, SC 29631</p>
						</div>
						<div>
							<p className='uppercase tracking-widest font-bold text-neutral-900 mb-2'>
								Direct
							</p>
							<p className='mb-1'>adhika4@clemson.edu</p>
							<p>+1 864 722 7272</p>
						</div>
						<div>
							<p className='uppercase tracking-widest font-bold text-neutral-900 mb-2'>
								Network
							</p>
							<div className='flex flex-col'>
								<a
									href='linkedin.com/in/shubhamadh'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-neutral-900 transition-colors'
								>
									LinkedIn
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
