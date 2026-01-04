
export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Urban' | 'Conceptual' | 'Thesis' | 'Hospitality';
  year: string;
  location: string;
  thumbnail: string;
  images: string[];
  description: string;
  label: string;
  awards?: string[];
  specifications: {
    area: string;
    materials: string[];
    course: string;
    institution: string;
    instructor?: string;
  };
}

export interface AIInsight {
  narrative: string;
  logic: string;
  environmentalImpact: string;
}
