import { IconName } from "lucide-react/dynamic";

export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface Content {
  metadata?: MetadataContent;
}

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
  logo: MediaContent;
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

export interface IntroductionContent extends Content {
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
  "action-button": ActionButton;
  logo: MediaContent;
  "social-links": {
    label: string;
    url: string;
  }[];
  locations: string[];
  "company-details": string[];
  email: string;
}

export interface MetadataContent extends Content {
  metaTitle: string;
  metaDescription: string;
  metaImage: string;
  logo: string;
  type: string;
  canonicalUrl: string;
  keywords: string;
  structuredData: string;
}

// About Page Content

export interface InnerHeroContent extends Content {
  path: string;
  slug: string;
  title: string;
  description: string;
  "cta-button": ActionButton;
}

export interface ImageWithDim {
  image: MediaContent;
  height: number;
  width: number;
}

export interface AboutSectionContent extends Content {
  subtitle: string;
  title: string;
  headline: string;
  paragraphs: string[];
  "marquee-images": ImageWithDim[];
}

export interface NumberText {
  number: string;
  text: string;
}

export interface ImageText {
  image: MediaContent;
  text: string;
}

export interface StatsItemContent {
  empty: boolean;
  number: string;
  title: string;
  description: string;
}

interface ServiceItemContent extends Content {
  service: string;
  items: {
    label: string;
    url: string;
  }[];
}

export interface CapabilitiesContent extends Content {
  subtitle: string;
  title: string;
  paragraph: string;
  services: ServiceItemContent[];
}

export interface StatsCapabilitiesContent extends Content {
  stats: StatsItemContent[];
  capabilities: CapabilitiesContent;
}

export interface MilestonesContent extends Content {
  subtitle: string;
  title: string;
  paragraph: string;
  "action-button": ActionButton;
  statistics: NumberText[];
}

export interface HireMeContent extends Content {
  title: string;
  image: MediaContent;
  reasons: {
    "icon-name": IconName;
    title: string;
    description: string;
  }[];
}

export interface MilestonesHireContent extends Content {
  milestones: MilestonesContent;
  hiring: HireMeContent;
}

export interface FunfactItem {
  label: string;
  number: number;
  color: "black" | "orange";
  height: number;
}

export interface FunfactsContent extends Content {
  subtitle: string;
  title: string;
  items: FunfactItem[];
}

// Services Page

export interface SubserviceItem {
  "icon-name": IconName;
  title: string;
  description: string;
}

export interface SubservicesContent extends Content {
  title: string;
  description: string;
  subservices: SubserviceItem[];
}

export interface ServiceContent extends Content {
  slug: string;
  hero: InnerHeroContent;
  subservices: SubservicesContent;
}

// Blogs

export interface BlogsPageContent extends Content {
  title: string;
  description: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
}

export interface BlogAuthor {
  name: string;
  avatar: MediaContent;
}

export interface BlogContent extends Content {
  title: string;
  excerpt: string;
  slug: string;
  author: BlogAuthor;
  categories: BlogCategory[];
  "reading-time": number;
  "cover-image": MediaContent;
  content: string;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  metadata: MetadataContent;
}
