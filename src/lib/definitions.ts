export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Response {}

export interface MediaResponse extends Response {
  name: string;
  caption: string;
  size: number;
  url: string;
  cloud_storage: boolean;
}

export interface ButtonResponse extends Response {
  label: string;
  href: string;
}

export interface MainMenuResponse extends Response {
  "logo-dark": MediaResponse;
  "logo-light": MediaResponse;
  "action-button": ButtonResponse;
  links: MenuItem[];
}

export interface HeroResponse extends Response {
  tagline: string;
  headline: string;
  "emphasized-text": string;
  description: string;
  image: MediaResponse;
  freelancer: string;
  brandbox: string;
  services: string;
  "cta-button": ButtonResponse;
}
