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
  "logo-dark": MediaContent;
  "logo-light": MediaContent;
  "action-button": ActionButton;
  links: MenuItem[];
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