import React, { useEffect, useRef, useState } from 'react';

const AIRBNB_URL = 'https://www.airbnb.co.in/rooms/1744251549784625436';
const MAILING_ADDRESS = '596 Pebble Ridge Road, Canadian, OK 74425, United States';
const GPS_ADDRESS = '596 Pebble Ridge Road, Eufaula, OK 74432';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAILING_ADDRESS)}`;

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const HeartMark: React.FC<{ className?: string }> = ({ className }) => (
	<svg viewBox='0 0 24 24' className={className} fill='currentColor' aria-hidden='true'>
		<path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
	</svg>
);

const Reveal: React.FC<{
	children: React.ReactNode;
	className?: string;
	delay?: number;
	as?: keyof JSX.IntrinsicElements;
}> = ({ children, className = '', delay = 0, as = 'div' }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);
	const Tag = as as any;

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.unobserve(el);
					}
				});
			},
			{ threshold: 0.2 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<Tag
			ref={ref}
			className={`wi-reveal ${visible ? 'wi-reveal-visible' : ''} ${className}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</Tag>
	);
};

const Divider: React.FC = () => (
	<div className='wi-divider' aria-hidden='true'>
		<span />
		<HeartMark className='wi-divider-heart' />
		<span />
	</div>
);

type ItineraryDay = {
	day: string;
	title: string;
	copy: string;
	note?: string;
	schedule?: { time: string; event: string }[];
	extras?: string[];
};

const ITINERARY: ItineraryDay[] = [
	{
		day: 'Nov 24',
		title: 'Welcome to The Lucas',
		copy: 'We welcome you to Lakefront Retreat: The Lucas, nestled in the wooded landscape facing Lake Eufaula.',
		note: 'Check-In: 3:00 PM – 11:00 PM',
	},
	{
		day: 'Nov 25',
		title: 'The Wedding Day',
		copy: "The day we've been waiting for. Join us as we say “I do.”",
		schedule: [
			{ time: '10:00 AM', event: 'All bridesmaids are welcome to join the Ala ceremony for the bride and groom.' },
			{ time: '10:30 AM', event: "Let's gather for the photoshoot." },
			{ time: '11:00 AM', event: 'Wedding ceremony begins with Buddha Puja, followed by paper signing.' },
		],
		extras: [
			'Lunch will be served with mouthwatering dishes and delicacies.',
			'Games, music, dance, and unlimited entertainment to follow!',
		],
	},
	{
		day: 'Nov 26',
		title: 'Relax & Explore',
		copy: 'Enjoy the lake at your own pace, or wander Carlton Landing, a charming new urbanist town nearby.',
	},
	{
		day: 'Nov 27',
		title: 'Farewell',
		copy: 'Wake up early and check out before 11:00 AM. Safe travels home.',
	},
];

const DIRECTIONS = [
	'As you travel on Highway 9A, head east for approximately 1.6 miles.',
	'Turn south onto McNally Road.',
	'Continue on McNally Road for approximately 1.8 miles.',
	'Turn onto Pebble Ridge Road.',
	'Continue along Pebble Ridge Road toward the property.',
	'596 Pebble Ridge Road will be on your right.',
];

const Wedding: React.FC = () => {
	const stageRef = useRef<HTMLDivElement>(null);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		document.title = 'Our Wedding · November 25th';
	}, []);

	useEffect(() => {
		let ticking = false;

		const measure = () => {
			const el = stageRef.current;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const scrollable = rect.height - window.innerHeight;
			const p = scrollable > 0 ? clamp(-rect.top / scrollable) : 0;
			setProgress(p);
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(measure);
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		measure();
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	}, []);

	const flapProgress = clamp(progress / 0.4);
	const flapRotation = -168 * flapProgress;
	const flapOpacity = 1 - clamp((flapProgress - 0.45) / 0.55);

	const pullProgress = clamp((progress - 0.22) / 0.68);
	const letterTranslateY = 74 - 82 * pullProgress;
	const letterScale = 0.05 + 1.01 * pullProgress;
	const letterOpacity = clamp(pullProgress / 0.06);

	const envelopeOpacity = 1 - clamp((progress - 0.82) / 0.18);
	const hintOpacity = 1 - clamp(progress / 0.12);

	return (
		<div className='wi-root'>
			<style>{`
				.wi-root {
					--ink: #2d4c6b;
					--muted: #7a8a99;
					--paper: #f2f3f4;
					--paper-deep: #c7c7c7;
					--clay: #8a6d1b;
					--clay-dark: #6e5714;
					--gold: #556b2f;
					--sage: #556b2f;
					--font-display: 'Cormorant Garamond', serif;
					--font-sans: 'Jost', 'Inter', sans-serif;
					background: var(--paper);
					color: var(--ink);
					font-family: var(--font-sans);
				}
				.wi-root * { box-sizing: border-box; }

				.wi-stage-section {
					position: relative;
					height: 300vh;
					background: linear-gradient(180deg, #e3e5e7 0%, var(--paper) 78%);
				}
				.wi-stage-sticky {
					position: sticky;
					top: 0;
					height: 100vh;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					overflow: hidden;
				}
				.wi-eyebrow-top {
					position: absolute;
					top: clamp(28px, 8vh, 64px);
					left: 50%;
					transform: translateX(-50%);
					font-size: 11px;
					letter-spacing: 0.3em;
					text-transform: uppercase;
					color: var(--muted);
					text-align: center;
					opacity: ${hintOpacity};
				}
				.wi-scene {
					position: relative;
					width: min(78vw, 320px);
					height: min(58vh, 440px);
					perspective: 1400px;
				}
				.wi-envelope {
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					aspect-ratio: 3 / 2;
					border-radius: 16px;
					background: rgba(201, 162, 39, ${envelopeOpacity});
					box-shadow: 0 30px 60px -28px rgba(20, 20, 24, ${0.55 * envelopeOpacity});
					overflow: visible;
				}
				.wi-envelope-pocket {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 66%;
					border-radius: 0 0 16px 16px;
					background: rgba(156, 122, 30, ${envelopeOpacity});
					z-index: 3;
				}
				.wi-envelope-flap {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 46%;
					background: #9c7a1e;
					border-radius: 16px 16px 0 0;
					clip-path: polygon(0 0, 100% 0, 50% 100%);
					transform-origin: top center;
					transform: rotateX(${flapRotation}deg);
					opacity: ${flapOpacity};
					z-index: 4;
					transition: opacity 0.05s linear;
				}
				.wi-seal {
					position: absolute;
					top: 44%;
					left: 50%;
					width: 38px;
					height: 38px;
					transform: translate(-50%, -50%);
					background: var(--ink);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					box-shadow: 0 6px 14px rgba(20, 20, 24, 0.35);
					z-index: 5;
					opacity: ${envelopeOpacity};
				}
				.wi-seal svg { width: 16px; height: 16px; color: var(--paper); }

				.wi-letter {
					position: absolute;
					left: 50%;
					bottom: 6%;
					width: 88%;
					height: 84%;
					background: var(--paper);
					border-radius: 12px;
					box-shadow: 0 35px 70px -30px rgba(20, 20, 24, 0.45);
					z-index: 2;
					display: flex;
					flex-direction: column;
					overflow: hidden;
					transform-origin: 50% 15%;
					transform: translate(-50%, ${letterTranslateY}%) scale(${letterScale});
					opacity: ${letterOpacity};
					border: 1px solid rgba(0,0,0,0.04);
				}
				.wi-letter-photo {
					flex: 1 1 60%;
					min-height: 0;
					background-image: url('assets/wedding/couple.jpg');
					background-size: cover;
					background-position: center 78%;
				}
				.wi-letter-text {
					flex: 0 0 auto;
					padding: 7% 8% 9%;
					text-align: center;
					background: var(--paper);
				}
				.wi-letter-eyebrow {
					font-size: 11px;
					letter-spacing: 0.35em;
					text-transform: uppercase;
					color: var(--clay);
					margin-bottom: 12px;
				}
				.wi-letter-title {
					font-family: var(--font-display);
					font-weight: 500;
					font-size: clamp(24px, 6vw, 32px);
					line-height: 1.08;
					color: var(--ink);
				}
				.wi-letter-date {
					margin-top: 12px;
					font-family: var(--font-display);
					font-style: italic;
					font-size: clamp(14px, 3.8vw, 18px);
					color: var(--muted);
					letter-spacing: 0.05em;
				}

				.wi-hint {
					position: absolute;
					bottom: clamp(28px, 6vh, 56px);
					left: 50%;
					transform: translateX(-50%);
					font-size: 11px;
					letter-spacing: 0.25em;
					text-transform: uppercase;
					color: var(--muted);
					opacity: ${hintOpacity};
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 8px;
				}
				.wi-hint-arrow {
					animation: wi-bounce 1.8s ease-in-out infinite;
					font-size: 16px;
				}
				@keyframes wi-bounce {
					0%, 100% { transform: translateY(0); }
					50% { transform: translateY(6px); }
				}

				.wi-paper {
					position: relative;
					background: var(--paper);
					padding: 0 0 10vh;
				}
				.wi-section {
					max-width: 480px;
					margin: 0 auto;
					padding: 14vw 28px;
					text-align: center;
				}
				.wi-eyebrow {
					font-size: 11px;
					letter-spacing: 0.32em;
					text-transform: uppercase;
					color: var(--clay);
					margin-bottom: 14px;
				}
				.wi-heading {
					font-family: var(--font-display);
					font-weight: 500;
					font-size: clamp(30px, 8vw, 42px);
					line-height: 1.1;
					color: var(--ink);
				}
				.wi-subheading {
					margin-top: 10px;
					font-family: var(--font-display);
					font-style: italic;
					font-size: 18px;
					color: var(--muted);
				}
				.wi-body {
					margin-top: 20px;
					font-size: 15px;
					line-height: 1.75;
					color: var(--ink);
					font-weight: 300;
				}
				.wi-muted { color: var(--muted); }

				.wi-divider {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 14px;
					max-width: 220px;
					margin: 0 auto;
					padding: 8px 0 0;
				}
				.wi-divider span {
					flex: 1;
					height: 1px;
					background: rgba(122, 138, 153, 0.35);
				}
				.wi-divider-heart { width: 14px; height: 14px; color: var(--clay); flex: none; }

				.wi-timeline {
					margin-top: 36px;
					text-align: left;
					display: flex;
					flex-direction: column;
					gap: 28px;
				}
				.wi-timeline-row {
					display: grid;
					grid-template-columns: 84px 1fr;
					gap: 16px;
					align-items: baseline;
					padding-bottom: 24px;
					border-bottom: 1px solid rgba(122, 138, 153, 0.2);
				}
				.wi-timeline-row:last-child { border-bottom: none; padding-bottom: 0; }
				.wi-timeline-day {
					font-family: var(--font-display);
					font-size: 20px;
					font-weight: 600;
					color: var(--clay);
					white-space: nowrap;
				}
				.wi-timeline-title {
					font-size: 13px;
					letter-spacing: 0.08em;
					text-transform: uppercase;
					color: var(--ink);
					margin-bottom: 6px;
					font-weight: 500;
				}
				.wi-timeline-copy {
					font-size: 14px;
					line-height: 1.65;
					color: var(--muted);
					font-weight: 300;
				}
				.wi-schedule {
					margin-top: 14px;
					display: flex;
					flex-direction: column;
					gap: 10px;
				}
				.wi-schedule-row {
					display: grid;
					grid-template-columns: 72px 1fr;
					gap: 10px;
					font-size: 13px;
					line-height: 1.6;
				}
				.wi-schedule-time {
					font-weight: 600;
					color: var(--clay);
					white-space: nowrap;
				}
				.wi-schedule-event {
					color: var(--ink);
					font-weight: 300;
				}
				.wi-timeline-extra {
					margin-top: 12px;
					font-size: 14px;
					line-height: 1.65;
					color: var(--muted);
					font-weight: 300;
				}
				.wi-timeline-note {
					margin-top: 12px;
					font-size: 13px;
					font-weight: 500;
					letter-spacing: 0.02em;
					color: var(--clay);
				}

				.wi-card {
					margin-top: 32px;
					background: var(--paper-deep);
					border-radius: 18px;
					padding: 32px 26px;
					text-align: left;
				}
				.wi-card-title {
					font-family: var(--font-display);
					font-size: 24px;
					font-weight: 500;
					color: var(--ink);
				}
				.wi-card-copy {
					margin-top: 10px;
					font-size: 14px;
					line-height: 1.7;
					color: var(--muted);
					font-weight: 300;
				}
				.wi-btn {
					display: inline-flex;
					align-items: center;
					gap: 8px;
					margin-top: 20px;
					padding: 13px 26px;
					background: var(--clay);
					color: var(--paper);
					font-size: 12px;
					letter-spacing: 0.18em;
					text-transform: uppercase;
					border-radius: 999px;
					text-decoration: none;
					transition: background 0.25s ease, transform 0.25s ease;
				}
				.wi-btn:hover { background: var(--clay-dark); transform: translateY(-1px); }

				.wi-address-block {
					margin-top: 22px;
					padding-top: 20px;
					border-top: 1px solid rgba(122, 138, 153, 0.25);
				}
				.wi-address-label {
					font-size: 11px;
					letter-spacing: 0.22em;
					text-transform: uppercase;
					color: var(--muted);
					margin-bottom: 8px;
				}
				.wi-address {
					font-size: 15px;
					line-height: 1.6;
					color: var(--ink);
				}
				.wi-address a {
					color: var(--clay-dark);
					text-decoration: underline;
					text-underline-offset: 3px;
				}

				.wi-badge {
					display: inline-flex;
					align-items: center;
					gap: 10px;
					margin-top: 20px;
					padding: 10px 18px;
					background: rgba(85, 107, 47, 0.12);
					border: 1px solid rgba(85, 107, 47, 0.3);
					border-radius: 999px;
					font-size: 12px;
					letter-spacing: 0.08em;
					color: var(--sage);
				}
				.wi-badge strong {
					font-family: var(--font-display);
					font-size: 15px;
					letter-spacing: 0.04em;
				}

				.wi-steps {
					margin-top: 32px;
					text-align: left;
					counter-reset: wi-step;
					display: flex;
					flex-direction: column;
					gap: 18px;
				}
				.wi-step {
					display: grid;
					grid-template-columns: 28px 1fr;
					gap: 12px;
					font-size: 14px;
					line-height: 1.65;
					color: var(--ink);
					font-weight: 300;
				}
				.wi-step-index {
					counter-increment: wi-step;
					font-family: var(--font-display);
					font-weight: 600;
					color: var(--clay);
					font-size: 16px;
				}
				.wi-step-index::before { content: counter(wi-step); }

				.wi-note {
					margin-top: 32px;
					text-align: left;
					background: #f7f8f8;
					border-left: 3px solid var(--gold);
					border-radius: 4px 14px 14px 4px;
					padding: 24px 22px;
				}
				.wi-note-title {
					font-size: 12px;
					letter-spacing: 0.12em;
					text-transform: uppercase;
					color: var(--clay-dark);
					font-weight: 500;
					margin-bottom: 10px;
				}
				.wi-note-copy {
					font-size: 14px;
					line-height: 1.7;
					color: var(--ink);
					font-weight: 300;
				}
				.wi-note-copy strong { font-weight: 500; }

				.wi-closing {
					padding: 18vw 28px 16vh;
				}
				.wi-closing .wi-heading { font-size: clamp(36px, 11vw, 56px); }
				.wi-closing-heart {
					width: 22px;
					height: 22px;
					color: var(--clay);
					margin: 0 auto 22px;
				}

				.wi-reveal {
					opacity: 0;
					transform: translateY(28px);
					transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
				}
				.wi-reveal-visible {
					opacity: 1;
					transform: translateY(0);
				}
			`}</style>

			<section className='wi-stage-section' ref={stageRef}>
				<div className='wi-stage-sticky'>
					<p className='wi-eyebrow-top'>Save the Date</p>
					<div className='wi-scene'>
						<div className='wi-letter'>
							<div className='wi-letter-photo' role='img' aria-label='The two of us' />
							<div className='wi-letter-text'>
								<p className='wi-letter-eyebrow'>You're Invited</p>
								<h1 className='wi-letter-title'>Welcome to Our Wedding</h1>
								<p className='wi-letter-date'>25th of November</p>
							</div>
						</div>
						<div className='wi-envelope'>
							<div className='wi-envelope-pocket' />
							<div className='wi-envelope-flap' />
							<div className='wi-seal'>
								<HeartMark />
							</div>
						</div>
					</div>
					<div className='wi-hint'>
						<span>Pull to Open</span>
						<span className='wi-hint-arrow'>&#8595;</span>
					</div>
				</div>
			</section>

			<main className='wi-paper'>
				<Reveal className='wi-section' as='section'>
					<p className='wi-eyebrow'>The Itinerary</p>
					<h2 className='wi-heading'>Stay With Us</h2>
					<p className='wi-subheading'>November 24 &ndash; 27</p>
					<div className='wi-timeline'>
						{ITINERARY.map((item) => (
							<div className='wi-timeline-row' key={item.day}>
								<span className='wi-timeline-day'>{item.day}</span>
								<div>
									<p className='wi-timeline-title'>{item.title}</p>
									<p className='wi-timeline-copy'>{item.copy}</p>
									{item.schedule && (
										<div className='wi-schedule'>
											{item.schedule.map((s) => (
												<div className='wi-schedule-row' key={s.time}>
													<span className='wi-schedule-time'>{s.time}</span>
													<span className='wi-schedule-event'>{s.event}</span>
												</div>
											))}
										</div>
									)}
									{item.extras?.map((line, i) => (
										<p className='wi-timeline-extra' key={i}>{line}</p>
									))}
									{item.note && <p className='wi-timeline-note'>{item.note}</p>}
								</div>
							</div>
						))}
					</div>
				</Reveal>

				<Divider />

				<Reveal className='wi-section' as='section'>
					<p className='wi-eyebrow'>The Accommodation</p>
					<h2 className='wi-heading'>A Cozy Lake Retreat</h2>
					<p className='wi-body'>
						Enjoy your stay at a cozy Airbnb on Lake Eufaula &mdash; the perfect
						home base for the whole weekend.
					</p>
					<div className='wi-card'>
						<p className='wi-card-title'>Our Airbnb</p>
						<p className='wi-card-copy'>
							Take a look around before you arrive and get a feel for the space.
						</p>
						<a
							className='wi-btn'
							href={AIRBNB_URL}
							target='_blank'
							rel='noopener noreferrer'
						>
							View the Airbnb &#8599;
						</a>
						<div className='wi-address-block'>
							<p className='wi-address-label'>Address</p>
							<p className='wi-address'>
								{MAILING_ADDRESS}
								<br />
								<a href={MAPS_URL} target='_blank' rel='noopener noreferrer'>
									Open in Maps
								</a>
							</p>
						</div>
						<div className='wi-badge'>
							Gated Entrance &middot; Code <strong>0088</strong>
						</div>
					</div>
				</Reveal>

				<Divider />

				<Reveal className='wi-section' as='section'>
					<p className='wi-eyebrow'>Getting There</p>
					<h2 className='wi-heading'>Finding Your Way</h2>
					<div className='wi-steps'>
						{DIRECTIONS.map((step, i) => (
							<div className='wi-step' key={i}>
								<span className='wi-step-index' />
								<span>{step}</span>
							</div>
						))}
					</div>
					<div className='wi-note'>
						<p className='wi-note-title'>Save Your GPS Directions Before You Arrive</p>
						<p className='wi-note-copy'>
							Cell service can become very limited approximately 2 miles before
							you reach the property. We strongly recommend entering{' '}
							<strong>{GPS_ADDRESS}</strong> into your GPS and starting
							navigation before you reach the area with limited cell service.
						</p>
					</div>
				</Reveal>

				<Divider />

				<Reveal className='wi-section wi-closing' as='section'>
					<HeartMark className='wi-closing-heart' />
					<p className='wi-eyebrow'>Thank You</p>
					<h2 className='wi-heading'>Let's Celebrate Together</h2>
					<p className='wi-body wi-muted'>
						We can't wait to share this day with you, surrounded by the people
						we love most.
					</p>
				</Reveal>
			</main>
		</div>
	);
};

export default Wedding;
