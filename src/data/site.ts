// Global site info: used by the layout (SEO meta), header, footer and contacts.
// Edit values here; components should never hardcode this text.
// PLACEHOLDER values are marked; replace them when the customer sends real data.

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  lang: string;
  title: string;
  description: string;
  url: string;
  founder: {
    name: string;
    role: string;
    roleEn: string;
  };
  nav: NavItem[];
  cta: NavItem;
  contacts: {
    phone: string;
    email: string;
    telegram: string;
    whatsapp: string;
    location: string;
  };
  questionnaireUrl: string;
  privacyUrl: string;
}

export const site: SiteConfig = {
  name: "iNovaLab",
  lang: "ru",
  title: "iNovaLab: образовательная стратегия для детей и подростков",
  description:
    "Помогаем семьям выстроить образовательный маршрут ребёнка: выбор школы и вуза, профориентация, поступление за рубежом и адаптация после переезда.",
  url: "https://inovalab.ru",
  founder: {
    name: "Юлия Лаптева",
    role: "Семейный образовательный стратег, карьерный архитектор для детей и подростков",
    roleEn: "Independent Educational Planner / Youth Career Architect",
  },
  nav: [
    { label: "Обо мне", href: "#about" },
    { label: "Методология", href: "#method" },
    { label: "Команда", href: "#team" },
    { label: "Услуги", href: "#services" },
    { label: "Истории", href: "#stories" },
    { label: "Контакты", href: "#contacts" },
  ],
  cta: { label: "Записаться на консультацию", href: "#contacts" },
  // PLACEHOLDER contacts
  contacts: {
    phone: "+7 (900) 000-00-00",
    email: "hello@inovalab.ru",
    telegram: "https://t.me/inovalab",
    whatsapp: "https://wa.me/79000000000",
    location: "Москва и онлайн",
  },
  // PLACEHOLDER: real questionnaire form comes later
  questionnaireUrl: "#contacts",
  privacyUrl: "#",
};
