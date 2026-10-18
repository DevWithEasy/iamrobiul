export interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  idealFor: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  turnaround: string;
  startingPrice: string;
  highlightColor: 'emerald' | 'indigo' | 'cyan';
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'wordpress' | 'laravel' | 'f-commerce';
  client: string;
  location: string;
  thumbnailGradient: string;
  imageAlt: string;
  heroHeadline: string;
  businessOutcome: string;
  metrics: {
    label: string;
    value: string;
  }[];
  summary: string;
  techStack: string[];
  liveUrl?: string;
  demoType: 'Live Landing Page' | 'Web Application' | 'Client Portal';
  keyFeatures: string[];
  speedScore: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarInitials: string;
  quote: string;
  projectType: string;
  outcome: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Landing Pages' | 'Laravel' | 'Payment & Delivery' | 'Support';
}

export interface AddOnOption {
  id: string;
  label: string;
  description: string;
  priceBDT: number;
  badge?: string;
}
