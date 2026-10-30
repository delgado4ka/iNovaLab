// Global site info: used by the layout (SEO meta) and by sections (header, footer, contacts).
// Edit values here; components should never hardcode this text.

export interface SiteConfig {
  name: string;
  lang: string;
  title: string;
  description: string;
  url: string;
  contacts: {
    phone: string;
    email: string;
    address: string;
  };
}

export const site: SiteConfig = {
  name: "iNovaLab",
  lang: "en",
  title: "iNovaLab",
  description: "iNovaLab: placeholder description, replace with real content.",
  url: "https://example.com",
  contacts: {
    phone: "+0 000 000 00 00",
    email: "info@example.com",
    address: "Address placeholder",
  },
};
