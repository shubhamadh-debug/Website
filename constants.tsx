
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
    thumbnail: 'prana.jpg', // Replace with your first image path
    images: ['prana.jpg'],
    description: 'A vibrant public space intervention focused on community engagement and play. The project utilizes typography and landscape to create an interactive urban "lung" that breathes life into the neighborhood through inclusive design.',
    specifications: {
      area: '1,200 sqm',
      materials: ['Interactive Sculptures', 'Permeable Paving', 'Native Vegetation'],
      course: 'Design Studio II',
      institution: 'Kathmandu Engineering College',
      instructor: 'Ar. Ramesh Manandhar'
    }
  },
  {
    id: 'the-cultivator-2019',
    title: 'The Cultivator',
    category: 'Thesis',
    year: '2019',
    location: 'Lalitpur, Nepal',
    label: 'V semester / Undergrad Thesis',
    thumbnail: 'the-cultivator.jpg', // Replace with your second image path
    images: ['the-cultivator.jpg'],
    description: 'A high-rise vertical farm and research unit that integrates organic forms with high-tech agriculture. The biophilic skin serves as a productive surface for urban cultivation, reimagining the skyscraper as a living organism.',
    specifications: {
      area: '4,500 sqm',
      materials: ['Biomorphic Shell', 'Hydroponic Systems', 'Laminated Glass'],
      course: 'Undergraduate Thesis',
      institution: 'Tribhuvan University',
      instructor: 'Ar. Bibhuti Man Singh'
    }
  },
  {
    id: 'nagarkot-resort-2022',
    title: 'Nagarkot Resort',
    category: 'Hospitality',
    year: '2022',
    location: 'Nagarkot, Nepal',
    label: 'Professional work',
    thumbnail: 'nagarkot-resort.jpg', // Replace with your third image path
    images: ['nagarkot-resort.jpg'],
    description: 'A hillside retreat designed through rigorous topographic modeling. The project emphasizes the relationship between built form and the stepped terrain of the Himalayas, utilizing a monochromatic palette to highlight shadows and form.',
    specifications: {
      area: '8,000 sqm',
      materials: ['White Render', 'Stone Masonry', 'Glass Ribbons'],
      course: 'Professional Practice',
      institution: 'Architecture Firm Studio',
      instructor: 'Senior Principal Ar.'
    }
  },
  {
    id: 'tideroot-2024',
    title: 'Tideroot',
    category: 'Urban',
    year: '2024',
    location: 'St. Helena Island',
    label: 'I semester / Graduate',
    thumbnail: 'tideroot.jpg', // Replace with your fourth image path
    images: ['tideroot.jpg'],
    description: 'A resilient design honoring Gullah Geechee culture. Tideroot proposes a hybrid landscape-building that adapts to rising sea levels while preserving the cultural identity and agricultural heritage of the marshland community.',
    specifications: {
      area: '12,000 sqm',
      materials: ['Timber Walkways', 'Floating Pavilions', 'Salt-Tolerant Landscaping'],
      course: 'Advanced Design Studio I',
      institution: 'Graduate School of Design',
      instructor: 'Prof. David Lawson'
    }
  },
  {
    id: 'concrete-blanket-2024',
    title: 'Concrete Blanket',
    category: 'Residential',
    year: '2024',
    location: 'Material Lab',
    label: 'II semester / Graduate',
    thumbnail: 'concrete-blanket.jpg', // Replace with your fifth image path
    images: ['concrete-blanket.jpg'],
    description: 'A technical exploration of ultra-flexible concrete systems. The "blanket" investigates modularity and movement in heavyweight materials, challenging the static nature of concrete through human-scale interaction.',
    specifications: {
      area: 'Experimental Scale',
      materials: ['UHPC Modular Tiles', 'Flexible Connectors'],
      course: 'Material Tectonics II',
      institution: 'Graduate School of Design',
      instructor: 'Ar. Elena Rossi'
    }
  },
  {
    id: 'porch-commons-2025',
    title: 'Porch Commons',
    category: 'Urban',
    year: '2025',
    location: 'Community Center',
    label: 'III semester / Graduate',
    thumbnail: 'porch-commons.jpg', // Replace with your sixth image path
    images: ['porch-commons.jpg'],
    description: 'A brick-clad community hub that reclaims the porch as a vital site of civic interaction. The design scales domestic architectural elements to foster social resilience and community belonging in an urban context.',
    specifications: {
      area: '15,000 sqm',
      materials: ['Hand-molded Brick', 'Industrial Steel', 'Timber Decking'],
      course: 'Civic Design Studio III',
      institution: 'Graduate School of Design',
      instructor: 'Prof. Samantha Greer'
    }
  }
];

export const NAV_LINKS = [
  { label: 'Work', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];
