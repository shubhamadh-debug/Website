import { Project } from './types';

/**
 * TO CHANGE IMAGES:
 * Replace the 'thumbnail' and 'images' strings below with your image paths.
 * If your images are in the same folder, use './your-image.jpg'.
 * If they are hosted online, use 'https://url-to-image.jpg'.
 */

export const PROJECTS: Project[] = [
	{
		id: 'prana-2016',
		title: 'PRANA',
		category: 'Conceptual',
		year: '2016',
		location: 'Kathmandu, Nepal',
		label: 'III semester / Undergrad',
		thumbnail: 'assets/prana/prana.jpg', // Replace with your first image path
		images: [
			`assets/prana/prana.jpg`,
			'assets/prana/prana_1.jpg',
			'assets/prana/prana_2.jpg',
			'assets/prana/prana_3.jpg',
			'assets/prana/prana_4.jpg',
			'assets/prana/prana_5.jpg',
			'assets/prana/prana_6.jpg',
			'assets/prana/prana_7.jpg',
		],
		description:
			'PRANA, also known as the force of life is about revitalization of the slum and squatter settlement of Thapathali area in Kathmandu, Nepal. One of the major areas affected by the waste management in Kathmandu are the riverside corridors which directly or indirectly influences the slums and squatter settlements present there. In the shadows of the urban jungle, slums and squatter settlements are growing daily. Living at the margins of the society, their inhabitants are deprived of basic access to health, education and a decent standard of living.\n\nIn Design Studio III of 6th semester, we were asked to redevelop any slum or squatter settlement in the Kathmandu Valley. I and my team choose Thapathali slum area for our project. With the concept of ameliorating and uplifting the settlements and the inhabitants that live there, the settlement focuses on self sustaining principle that works on a circular economy. This not only boosts the economy of the place but also creates job opportunities for the people there, specially the female population.',
		specifications: {
			area: '1,200 sqm',
			materials: [
				'Interactive Sculptures',
				'Permeable Paving',
				'Native Vegetation',
			],
			course: 'Design Studio III',
			institution: 'Kathmandu Engineering College',
		},
	},
	{
		id: 'the-cultivator-2019',
		title: 'THE CULTIVATOR',
		category: 'Thesis',
		year: '2019',
		location: 'Lalitpur, Nepal',
		label: 'V semester / Undergrad Thesis',
		thumbnail: 'assets/cultivator/cultivator.jpg', // Replace with your second image path
		images: [
			'assets/cultivator/cultivator.jpg',
			'assets/cultivator/1.jpg',
			'assets/cultivator/2.jpg',
			'assets/cultivator/3.jpg',
			'assets/cultivator/4.jpg',
			'assets/cultivator/5.jpg',
			'assets/cultivator/6.jpg',
			'assets/cultivator/7.jpg',
			'assets/cultivator/8.jpg',
			'assets/cultivator/9.jpg',
		],
		description:
			'In recent decades it has become increasingly clear that the way we farm and supply food is a threat to food security. Due to limited access to lands for farming, there is a need for sustainable farming techniques. Also, the way we live and eat is a risk to our health and health of our ecosystem. \n\nMy final year project was to address this issue and design a vertical building farm that not only cultivates food but also is self sustaining itself and which generates energy in order to run the building as well. This farm would be a very new approach for agriculture practice in Nepal, so research unit were added in order to gain more understanding and knowledge behind the different systems involved in vertical farming. \n\nMany aspects strain on food industry and processing such as; the rising population and its growing needs, reduction of natural resources due to growing cities and urbanization, global climate change. In addition, it is predicted that the world population will reach 9.8 billion by 2050, with an expected 80% of it living in urban areas. The food supply demand is to increase to 60% higher than today. As urban populations grow and more developing countries adopt the western diet, the footprint of our food will increase dramatically. Now the question is, where and how will we get the food we need?\n\nGlobal Climate change has already had observable effects on the environment. Climate change is expected to negatively impact crop yields, particularly in the hungriest parts of the world. The growing water use and rising temperature are expected to further increase water stress in many agricultural areas by 2050.\n\nRanked 4th under the climate vulnerability index, the process has already begun in Nepal as well. Food insecurity and malnutrition is one of the major health issues caused by climate change in Nepal. Food and Agriculture Organization (FAO) reports that climate change will affect all four dimensions of food security, namely food availability, access to food, the stability of food supplies and food utilization.',
		awards: [
			'Second Topper Award: Thesis “CULTIVATOR; Vertical Farm and Research Unit”, Kathmandu Engineering College, 2019.',
		],
		specifications: {
			area: '4,500 sqm',
			materials: ['Biomorphic Shell', 'Hydroponic Systems', 'Laminated Glass'],
			course: 'Undergraduate Thesis',
			institution: 'Kathmandu Engineering College',
			instructor: 'Ass. Prof. Kalish Shrestha',
		},
	},
	{
		id: 'thimi-2021',
		title: 'THIMI RESIDENCE',
		category: 'Residential',
		year: '2021',
		location: 'Bhaktapur, Nepal',
		label: 'Professional Work',
		thumbnail: 'assets/thimi/thimi.jpg', // Replace with your sixth image path
		images: [
			'assets/thimi/thimi.jpg',
			'assets/thimi/1.jpg',
			'assets/thimi/2.jpg',
			'assets/thimi/3.jpg',
			'assets/thimi/4.jpg',
			'assets/thimi/5.jpg',
			'assets/thimi/6.jpg',
			'assets/thimi/7.jpg',
			'assets/thimi/8.jpg',
			'assets/thimi/9.jpg',
			'assets/thimi/10.jpg',
			'assets/thimi/11.jpg',
		],
		description: `Located in the heart of New Thimi, Bhaktapur, the Thimi Residence is the project that is undoubtedly closest to my heart. Following my undergraduate studies, this was my first experience managing a design-build project, and it was uniquely personal because the clients were my own parents, and the structure would become our family home. The site itself posed a creative challenge, situated on a small plot of land where every inch counted.\n\n
Architecturally, I approached the form of the building as a composition of different, intersecting planes. This concept allowed me to introduce strategic projections; these elements aren't just for a modern aesthetic but serve as crucial functional shading for the windows and balconies, while also emphasizing a clean, dynamic interplay of horizontal and vertical lines. The final look—as seen in the 3D visualization—balances these elements with a material palette of warm wood and textured concrete.\n\n
I was fully immersed in this project from the very beginning, designing the complete package from the exterior architecture to the nuanced interior details. However, this was more than just a design exercise. Living and working on the design-build meant I was present for the entire construction process. It was an invaluable learning curve, teaching me firsthand about material selection, manpower management, scheduling, budgeting, and rigorous on-site supervision. The Thimi Residence is not just a house I built; it’s the place where I truly learned the full cycle of architectural execution.
`,
		// TODO: CHANGE specifications AS REQUIRED
		specifications: {
			area: '0000 sqm',
			materials: ['Hand-molded Brick', 'Industrial Steel', 'Timber Decking'],
			course: 'Professional Practice',
			institution: 'Rootnine Design Pvt. Ltd.',
			instructor: 'Shubham Adhikari',
		},
	},
	{
		id: 'nagarkot-resort-2022',
		title: 'NAGARKOT RESORT',
		category: 'Hospitality',
		year: '2022',
		location: 'Nagarkot, Nepal',
		label: 'Professional work',
		thumbnail: 'assets/nagarkot/nagarkot.jpg', // Replace with your third image path
		images: [
			'assets/nagarkot/nagarkot.jpg',
			'assets/nagarkot/1.jpg',
			'assets/nagarkot/2.jpg',
			'assets/nagarkot/3.jpg',
			'assets/nagarkot/4.jpg',
			'assets/nagarkot/5.jpg',
			'assets/nagarkot/6.jpg',
		],
		description:
			'Nagarkot resort is an ongoing project that I have been involved in at Zero Dia Nepal. This project is one of the major challenges I took upon myself and has been a book of knowledge in the learning curve as I have been involved in it from conceptualization, zoning, planning and providing 3d visualizations. \n\nThe site is located in one of the hills in Nagarkot region, east of Kathmandu. The site provides a range of mountain views in the northern side. Taking this into consideration, the client wanted an 80 capacity rooms with most of them providing the mountain view and with different necessary amenities for a resort. Since the site has many contour levels, the need for cut-fill was taken into notice and the stone from the site itself was used for the construction of the resort with other sustainable materials like timber. The client also wanted the overall outlook of the resort to have slope roofs as Nagarkot receives good amount of rainfall and even snow sometimes.',
		specifications: {
			area: '8,000 sqm',
			materials: ['White Render', 'Stone Masonry', 'Glass Ribbons'],
			course: 'Professional Practice',
			institution: 'Zero Dia Nepal Pvt. Ltd.',
			instructor: 'Ar. Toran Prasad Pandit',
		},
	},
	{
		id: 'mega-residence-2022',
		title: 'MEGA RESIDENCE',
		category: 'Hospitality',
		year: '2022',
		location: 'Kathmandu, Nepal',
		label: 'Professional work',
		thumbnail: 'assets/mega/mega.jpg', // Replace with your third image path
		images: [
			'assets/mega/mega.jpg',
			'assets/mega/1.jpg',
			'assets/mega/2.jpg',
			'assets/mega/3.jpg',
			'assets/mega/4.jpg',
			'assets/mega/5.jpg',
			'assets/mega/6.jpg',
			'assets/mega/7.jpg',
			'assets/mega/8.jpg',
			'assets/mega/9.jpg',
			'assets/mega/10.jpg',
		],
		description: `The Mega Residence in Jhamsikhel is a great example of how modern design can still feel warm and grounded. The building uses a "planar" approach, where thick, overhanging slabs and vertical stone walls intersect to create a really dynamic, layered look. These deep overhangs aren't just for style—they provide natural shading for the huge floor-to-ceiling windows that wrap around the living spaces. By mixing the rugged texture of natural stone with the warmth of horizontal wood patterns, we were able to give the exterior a natural, organic feel that softens the bold geometry.\n\n
I was heavily involved across several stages of the project, contributing to the initial planning and technical detailing, as well as leading the 3D modeling and final visualization to bring the design’s unique material harmony to life.
`,
		specifications: {
			area: '8,000 sqm',
			materials: ['White Render', 'Stone Masonry', 'Glass Ribbons'],
			course: 'Professional Practice',
			institution: 'Rootnine Design Pvt. Ltd.',
			instructor: 'Shubham Adhikari',
		},
	},
	{
		id: 'devghat-farmhouse-2023',
		title: 'DEVGHAT FARMHOUSE / RESORT',
		category: 'Hospitality',
		year: '2023',
		location: 'Gandaki, Nepal',
		label: 'Professional work',
		thumbnail: 'assets/devghat/devghat.jpg', // Replace with your third image path
		images: [
			'assets/devghat/devghat.jpg',
			'assets/devghat/1.jpg',
			'assets/devghat/2.jpg',
			'assets/devghat/3.jpg',
			'assets/devghat/4.jpg',
			'assets/devghat/5.jpg',
			'assets/devghat/6.jpg',
			'assets/devghat/7.jpg',
			'assets/devghat/8.jpg',
			'assets/devghat/9.jpg',
			'assets/devghat/10.jpg',
			'assets/devghat/11.jpg',
		],
		description: `Located on the banks of the Narayani River in Devghat, Gandaki, Nepal- the Devghat Farmhouse/Resort is a unique project designed to harmonize with the dramatic site contour. The client envisioned a versatile complex that could function as both a private family farmhouse and a semi-commercial hotel, necessitating a series of separate, self-contained unit blocks.\n\n
Our core architectural concept was to literally and figuratively project these living spaces from the steeply sloped terrain. This dramatic, projected geometry not only minimizes the building's footprint on the natural site but also creates stunning, cantilevered volumes that float above the landscape. Encased in large, floor-to-ceiling windows, each unit is positioned to frame panoramic, east-facing views across the broad Narayani River and towards the distant hills, ensuring every guest experiences the site’s breathtaking beauty.\n\n
This projecting form left a substantial, underutilized space beneath. We turned this challenge into a key feature, designing a beautiful swimming pool and a sunbathing area directly below the units. This not only makes efficient use of the vertical space but also creates a covered, private oasis for recreational activity, perfect for either family downtime or resort guests.\n\n
My role on this project was extensive, and I was deeply involved from the very beginning. I led the initial client consultation and survey process to understand the land’s complexities. From there, I moved into the planning and designing phases, and finally, created the 3D visualization to bring the complete vision of these cantilevered spaces and their relationship to the river and the pool to life.
`,
		specifications: {
			area: '8,000 sqm',
			materials: ['White Render', 'Stone Masonry', 'Glass Ribbons'],
			course: 'Professional Practice',
			institution: 'Rootnine Design Pvt. Ltd.',
			instructor: 'Shubham Adhikari',
		},
	},
	{
		id: 'tideroot-2024',
		title: 'TIDEROOT',
		category: 'Urban',
		year: '2024',
		location: 'St. Helena Island',
		label: 'I semester / Graduate',
		thumbnail: 'assets/tideroot/tideroot.jpg', // Replace with your fourth image path
		images: [
			'assets/tideroot/tideroot.jpg',
			'assets/tideroot/1.jpg',
			'assets/tideroot/2.jpg',
			'assets/tideroot/3.jpg',
			'assets/tideroot/4.jpg',
			'assets/tideroot/5.jpg',
			'assets/tideroot/6.jpg',
			'assets/tideroot/7.jpg',
			'assets/tideroot/8.jpg',
			'assets/tideroot/9.jpg',
		],
		description:
			"In the first semester of the Master of Architecture Track II program, we were tasked with researching and designing sustainable and resilient coastal architecture solutions for communities in South Carolina's Lowcountry region. These communities, situated along the Southeastern coast of the United States, face severe challenges from climate change, including intensified storms and hurricanes, worsening flood surges, tidal flooding, and the looming threat of sea level rise. Over recent decades, uncontrolled tourist development has exacerbated these issues, displacing underserved populations from the shoreline and further destabilizing the region. Our project brief introduced us to an outreach program led by Clemson School of Architecture, which combines expertise in sustainable architecture and coastal environments to assist vulnerable communities in South Carolina and Georgia. The program’s dual objectives are to educate the public about these climate threats through exhibitions and workshops and to create resources for practical recovery after extreme weather events. These efforts begin in graduate-level research and design studios, fostering partnerships with affected coastal communities to develop actionable, impactful solutions.\n\nHistorically, the South Carolina salt marshes have served as a sanctuary, fostering the delicate balance between ecological systems and human interactions. However, with the pressures of overdevelopment and the mounting challenges of climate change, this vital ecosystem faces an uncertain future. Through Tideroot, our architectural response, we seek to honor the marsh’s protective role in sustaining the Gullah Geechee culture and its biodiversity. Visioned as a floating architecture, Tideroot will harmonize with the rhythm of rising and falling tides, adapting fluidly as sea levels shift over time, while preserving the resilience and spirit of this treasured landscape.",
		awards: [
			'Project “Tideroot” awarded Student Honor Award by SARA Nationals, November 2025',
			'Project “Tideroot” awarded Student Design Awards of Honor by SARA New York, April 2025',
			'Project “Tideroot” awarded Student Excellence Award by SARA California, April 2025',
		],
		specifications: {
			area: '12,000 sqm',
			materials: [
				'Timber Walkways',
				'Floating Pavilions',
				'Salt-Tolerant Landscaping',
			],
			course: 'Graduate Studies | Design Studio I',
			institution: 'Clemson University',
			instructor:
				'Prof. Ulrike Heine, Prof. Rayshad Dorsey, and Prof. Amy Trick',
		},
	},
	{
		id: 'concrete-blanket-2024',
		title: 'CONCRETE BLANKET',
		category: 'Residential',
		year: '2024',
		location: 'Material Lab',
		label: 'II semester / Graduate',
		thumbnail: 'assets/concrete/concrete.jpg', // Replace with your fifth image path
		images: [
			'assets/concrete/concrete.jpg',
			'assets/concrete/1.jpg',
			'assets/concrete/2.jpg',
			'assets/concrete/3.jpg',
		],
		description:
			'The Hybrid Automation elective course introduced the fundamentals of digital fabrication through material- focused explorations in textiles and concrete. We were engaged with current research on materially efficient concrete construction while addressing the challanges of applying digital fabrication to soft and amorphous materials. Through a series of projects, tutorials, and workshops, we learned the basics of parametric design and digital fabrication techniques. In parallel, we also learned the fundamentals of conrete as a building material- its mixes, testing standards, and potential for innovative research applications. We were tasked to design and fabricate prototypes that envision new futures for concrete construction, developing methods of hybrid automation that integrate digital precision with material behavior.\n\nOur goal was to create a 3D printed system which acts a formwork o create a flexible concrete sheet. Once the sheet has conformed to its natural resting position, mortar willl be added in the gaps to lock in the shape. In turn, a near perfect dome, arch or complex surface can be created using little to no wasted formwork. The Modular Tiles would have the capability to take on differing visual apperances. Using TPU as a flexible material was not enough. Different test were done to find optimal shape which allowed for flexibility, strength, and edurance.\n\nThe main idea was that the conformal “blanket” system can function in tension, similar to a revetment mattress and compression, when mortar is applied at the joints. It incorporates 3D-printed components and digital fabrication, enabling precise control and expanding design potential.',
		specifications: {
			area: 'Experimental Scale',
			materials: ['UHPC Modular Tiles', 'Flexible Connectors', 'TPU 3D Print'],
			course: 'Hybrid Automation I',
			institution: 'Clemson University',
			instructor: 'Prof. Lavender Tessmer',
		},
	},
	{
		id: 'porch-commons-2025',
		title: 'PORCH COMMONS',
		category: 'Urban',
		year: '2025',
		location: 'Abbeville, SC',
		label: 'III semester / Graduate',
		thumbnail: 'assets/porch/porch.jpg', // Replace with your sixth image path
		images: [
			'assets/porch/porch.jpg',
			'assets/porch/1.jpg',
			'assets/porch/2.jpg',
			'assets/porch/3.jpg',
			'assets/porch/4.jpg',
			'assets/porch/5.jpg',
			'assets/porch/6.jpg',
			'assets/porch/7.jpg',
			'assets/porch/8.jpg',
		],
		description:
			'In this design studio, we were tasked with developing strategies for urban revitalization and economic resilience for communities in South Carolina facing demographic and economic pressure. These towns, situated throughout the Southeast, possess significant historic assets and deep-rooted cultural charm but are simultaneously confronting persistent struggles, notably sustained population decline and underutilized commercial cores. Over the last 35 years, the City of Abbeville, South Carolina, has seen its population consistently shrink, dropping from approximately 6,000 people in 1990 to an estimated 4,800 today. The city’s current comprehensive plan has established a vital goal: to regain the 6,000-resident threshold by better leveraging existing urban assets and promoting strategic new development. This studio partnered with an outreach program, combining academic research with professional expertise, to develop actionable, impactful solutions that foster lasting civic and economic vitality.\n\nHistorically, the Abbeville Town Square has functioned as the heart of the community, fostering the essential balance between commercial enterprise and civic life. However, mounting pressures have left key properties adjacent to this core vacant or underutilized, disrupting the historic urban rhythm. Through our design, our architectural response seeks to honor the Square’s protective role in sustaining the community’s identity and promoting economic recovery. Visioned in partnership with the national design firm Hanbury and local leaders, the project reimagined the city block fronting Town Square between Trinity Street and West Pickens Street. We focused on six priority properties, five of which the students of Clemson would redesign, coordinated with Hanbury’s ongoing project on the sixth—to develop a new masterplan. This plan aims to transform the entire block into a more active, connective urban center that champions the resilience and spirit of Abbeville.',
		specifications: {
			area: '15,000 sqm',
			materials: ['Hand-molded Brick', 'Industrial Steel', 'Timber Decking'],
			course: 'Design Fluid Studio',
			institution: 'Clemson University',
			instructor: 'Prof. Kendall Roberts',
		},
	},
];

export const NAV_LINKS = [
	{ label: 'Work', path: '/' },
	{ label: 'About', path: '/about' },
	{ label: 'Contact', path: '/contact' },
];
