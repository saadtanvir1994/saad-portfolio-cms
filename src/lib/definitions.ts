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

export interface MainMenuResponse extends Response {
  "logo-dark": MediaResponse;
  "logo-light": MediaResponse;
  "action-button": {
    label: string;
    href: string;
  };
  links: MenuItem[];
}
