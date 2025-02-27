import { IconName } from "lucide-react/dynamic";

export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Content {}

export interface MediaContent extends Content {
  name: string;
  caption: string;
  size: number;
  url: string;
  cloud_storage: boolean;
}

export interface ActionButton {
  label: string;
  href: string;
}

export interface MainMenuContent extends Content {
  "logo": MediaContent;
  "logo-dark": MediaContent;
  "logo-light": MediaContent;
  "action-button": ActionButton;
  email: string;
  links: MenuItem[];
  "social-links": {
    label: string;
    url: string;
  }[];
}

export interface HeroContent extends Content {
  tagline: string;
  headline: string;
  "emphasized-text": string;
  description: string;
  image: MediaContent;
  freelancer: string;
  brandbox: string;
  services: string;
  "cta-button": ActionButton;
}

export interface LogosContent extends Content {
  text: string[];
  logos: MediaContent[];
}

export interface AboutContent extends Content {
  tagline: string;
  heading: string;
  "action-button": ActionButton;
  image: MediaContent;
  "marquee-text": string[];
  headline: string;
  paragraphs: string[];
  "infinite-marquee-items": string[];
}

export interface ServiceItem extends Content {
  title: string;
  description: string;
  icon: IconName;
  "icon-color": string;
  "sub-services": string[];
  href: string;
}

export interface ServicesContent extends Content {
  tagline: string;
  heading: string;
  description: string;
  items: ServiceItem[];
}

export interface TechnologiesContent extends Content {
  tagline: string;
  heading: string;
  paragraph: string;
}

export interface ExpectationsContent extends Content {
  heading: string;
  description: string;
  points: {
    heading: string;
    paragraph: string;
  }[];
}

export interface WorkStagesContent extends Content {
  heading: string;
  "video-embed": string;
  stages: {
    number: number;
    label: string;
    description: string;
    tags: string[];
    gradient: string;
  }[];
}

export interface WorkflowContent extends Content {
  technologies: TechnologiesContent;
  expectations: ExpectationsContent;
  "work-stages": WorkStagesContent;
}

export interface TestimonialContent extends Content {
  avatar: MediaContent;
  name: string;
  designation: string;
  message: string;
}

export interface TestimonialsContent extends Content {
  title: string;
  tagline: string;
  items: TestimonialContent[];
}

export interface PortfolioItemContent extends Content {
  title: string;
  href: string;
  "short-description": string;
  "long-description": string;
  "bg-image": MediaContent;
  challenges: string[];
  solutions: string[];
  skills: string[];
}

export interface PortfolioContent extends Content {
  tagline: string;
  heading: string;
  description: string;
  items: PortfolioItemContent[];
}

export interface ShowcaseContent extends Content {
  roles: string[];
  testimonials: TestimonialsContent;
  portfolio: PortfolioContent;
}

export interface PricingItemContent extends Content {
  name: string;
  description: string;
  "short-description": string;
  price: string;
  frequency?: string;
  features: string[];
  primary: boolean;
}

export interface PricingContent extends Content {
  tagline: string;
  text: string;
  description: string;
  items: PricingItemContent[];
}

export interface FaqsContent extends Content {
  title: string;
  subtitle?: string;
  description: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export interface PricingFaqsContent extends Content {
  pricing: PricingContent;
  faqs: FaqsContent;
}

export interface FooterContent extends Content {
  heading: string;
  "action-buttons": ActionButton[];
  logo: MediaContent;
  "social-links": {
    label: string;
    url: string;
  }[];
}

export interface MetadataContent extends Content {
  metaTitle: string;
  metaDescription: string;
  metaImage: string;
  logo: string;
  type: string;
  canonicalUrl: string;
  keywords: string;
}