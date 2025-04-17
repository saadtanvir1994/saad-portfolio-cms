import { IconName } from "lucide-react/dynamic";
import Stripe from "stripe";

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
  external: boolean;
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
  "status-text": string;
  "status-color": string;
}

export interface HeroContent extends Content {
  tagline: string;
  headline: string;
  "emphasized-text": string;
  description: string;
  image: MediaContent;
  "freelancer-icon": MediaContent;
  freelancer: string;
  brandbox: string;
  "services-title": string;
  services: string;
  "cta-button": ActionButton;
  "services-cta": ActionButton;
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
  "icon-image": MediaContent;
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
  date: string;
  title: string;
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
  external: boolean;
  "short-description": string;
  "long-description": string;
  "bg-image": MediaContent;
  "challenges-label": string;
  challenges: string[];
  "solutions-label": string;
  solutions: string[];
  "skills-label": string;
  skills: string[];
}

export interface PortfolioContent extends Content {
  tagline: string;
  heading: string;
  description: string;
  items: PortfolioItemContent[];
}

export interface ShowcaseContent extends Content {
  testimonials: TestimonialsContent;
  portfolio: PortfolioContent;
  "swapping-text": {
    prefix: string;
    items: string[]
  };
}

export interface PricingItemContent extends Content {
  name: string;
  description: string;
  href: string;
  "link-text": string;
  "link-external": boolean;
  "short-description": string;
  price: string | number;
  frequency?: string;
  "features-heading": string;
  features: string[];
  primary: boolean;
  "price-id": string;
  recurring: boolean;
}

export interface PricingContent extends Content {
  tagline: string;
  text: string;
  description: string;
  items: PricingItemContent[];
  "product-items": string[];
  packages: Stripe.Product[];
}

export interface FaqsContent extends Content {
  title: string;
  subtitle?: string;
  description: string;
  items: {
    question: string;
    answer: string;
    ques: string;
    ans: string;
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
    external: boolean;
  }[];
  locations: string[];
  "company-details": string[];
  email: string;
  "left-text": string;
  "bottom-text": string;
  links: ActionButton[];
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
  subtitle: string;
  title: string;
  description: string;
  "cta-button": ActionButton;
  "brandbox-title": string;
  number: string;
  "number-text": string;
  image: MediaContent;
  "box-href": string;
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
    external: boolean;
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

export interface ComparisonItem {
  subtitle: string;
  title: string;
  description: string;
  "col-span": number;
  image: MediaContent;
  aspect: "square" | "video";
  "subtitle-color":
    | "pink"
    | "blue"
    | "amber"
    | "green"
    | "purple"
    | "sky"
    | "indigo"
    | "rose"
    | "teal";
  "image-height": number;
}

export interface ComparisonContent {
  subtitle: string;
  title: string;
  description: string;
  items: ComparisonItem[];
  "cta-button": ActionButton;
}

export interface MilestonesComparisonContent extends Content {
  milestones: MilestonesContent;
  comparison: ComparisonContent;
}

export interface FunfactItem {
  label: string;
  number: number;
  color: "black" | "orange";
  height: number;
  image: MediaContent;
}

export interface FunfactsContent extends Content {
  subtitle: string;
  title: string;
  number: string;
  "first-paragraph": string;
  "second-paragraph": string;
  items: FunfactItem[];
}

export interface CertificateItem {
  subtitle: string;
  title: string;
  "awarded-by": string;
  image: MediaContent;
  url: string;
  external: boolean;
}

export interface CertificatesContent {
  subtitle: string;
  title: string;
  description: string;
  items: CertificateItem[];
  "action-button": ActionButton;
}

// Services Page

export interface SubserviceItem {
  "icon-name": IconName;
  title: string;
  description: string;
}

export interface SubservicesContent extends Content {
  subtitle: string;
  title: string;
  description: string;
  subservices: SubserviceItem[];
}

export interface TabItem {
  name: string;
  image: MediaContent;
  heading: string;
  paragraph: string;
  list: string[];
}

export interface SubserviceSection {
  mode: "light" | "dark";
  subtitle: string;
  title: string;
  description: string;
}

export interface SubserviceTabs extends SubserviceSection {
  tabs: TabItem[];
}

export interface SubserviceStatItem {
  icon: IconName;
  value: string;
  label: string;
}

export interface SubserviceStats extends SubserviceSection {
  items: SubserviceStatItem[];
}

export interface SubservicePricing extends SubserviceSection {
  "price-subtitle": string;
  price: string;
  "price-subtext": string;
  "cta-button": ActionButton;
  "features-title": string;
  features: string[];
}

export interface SubserviceProblemItem {
  subtitle: string;
  title: string;
  graphic: "icon" | "image";
  icon: IconName;
  image: MediaContent;
  paragraph: string;
  list: string[];
}

export interface SubserviceProblem extends SubserviceSection {
  items: SubserviceProblemItem[];
}

export interface SubserviceContentFeature {
  graphic: "icon" | "image";
  icon: IconName;
  image: MediaContent;
  title: string;
  description: string;
}

export interface SubserviceContent extends SubserviceSection {
  "center-image": MediaContent;
  features: SubserviceContentFeature[];
}

export interface SubserviceApproachTab {
  label: string;
  icon: IconName;
  color: string;
  description: string;
  "deliverables-label": string;
  deliverables: string[];
}

export interface SubserviceApproach extends SubserviceSection {
  tabs: SubserviceApproachTab[];
}

export interface SubserviceComparisonItem {
  icon: IconName;
  title: string;
  description: string;
  others: "true" | "false" | "partial" | "value";
  me: "true" | "false" | "partial" | "value";
  othertextvalue: string;
  mytextvalue: string;
}

export interface SubserviceComparison extends SubserviceSection {
  avatar: MediaContent;
  "first-column-label": string;
  "second-column-label": string;
  "third-column-label": string;
  features: SubserviceComparisonItem[];
}

export interface ServiceContent extends Content {
  slug: string;
  hero: InnerHeroContent;
  subservices: SubservicesContent;
  "subservice-tabs": SubserviceTabs;
  "subservice-stats": SubserviceStats;
  "subservice-pricing": SubservicePricing;
  "subservice-problem": SubserviceProblem;
  "subservice-content": SubserviceContent;
  "subservice-approach": SubserviceApproach;
  "subservice-comparison": SubserviceComparison;
  "subservice-faqs": FaqsContent;
}

// Blogs

export interface BlogsPageContent extends Content {
  subtitle: string;
  title: string;
  description: string;
  "title-alt": string;
  "description-alt": string;
  button: ActionButton;
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
  category: BlogCategory;
  "reading-time": number;
  "cover-image": MediaContent;
  content: string;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  metadata: MetadataContent;
}

export interface ContactSection {
  subtitle: string;
  title: string;
  heading: string;
  description: string;
  buttons: {
    label: string;
    href: string;
    primary: boolean;
    external: boolean;
  }[];
  "text-items": {
    title: string;
    items: string[];
  }[];
  image: MediaContent;
}

interface BaseProps {
  text?: string;
  className?: string;
  ariaLabel: string;
  align?: "left" | "right";
  variant?: "light" | "dark" | "icon-only" | "simple" | "simpleoutlined";
}

interface LinkProps extends BaseProps {
  href?: string;
  external?: boolean;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseProps {
  type?: "button" | "submit" | "reset";
  href?: never;
  external?: never;
}

export type AnimatedCTAButtonProps = LinkProps | ButtonProps;