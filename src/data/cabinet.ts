// "Личный кабинет" block: what the client gets, plus sample data for the illustrated preview.
// PLACEHOLDER copy; the real cabinet is a future feature.

export interface CabinetFeature {
  title: string;
  text: string;
}

export interface Cabinet {
  title: string;
  intro: string;
  features: CabinetFeature[];
  preview: {
    caption: string;
    student: string;
    skills: { name: string; value: number }[];
    funnel: { label: string; count: number }[];
    deadlines: { date: string; name: string }[];
    nextSession: string;
  };
}

export const cabinet: Cabinet = {
  title: "Личный кабинет",
  intro: "Весь маршрут ребёнка в одном месте. Наполнение кабинета зависит от возраста.",
  features: [
    { title: "Карта навыков", text: "Hard и soft skills ребёнка и их динамика от сессии к сессии." },
    { title: "Воронка школ и вузов", text: "Мечта, реалистичные и страховочные варианты с требованиями." },
    { title: "Олимпиады и конкурсы", text: "Список с дедлайнами на два года вперёд." },
    { title: "Стратегические сессии", text: "Ежеквартальная сверка курса и протоколы встреч." },
  ],
  preview: {
    caption: "Пример кабинета ученицы 10 класса",
    student: "Анна, 15 лет",
    skills: [
      { name: "Математика", value: 82 },
      { name: "Английский", value: 74 },
      { name: "Публичные выступления", value: 58 },
      { name: "Командная работа", value: 66 },
    ],
    funnel: [
      { label: "Мечта", count: 2 },
      { label: "Реалистичные", count: 5 },
      { label: "Страховочные", count: 3 },
    ],
    deadlines: [
      { date: "15 ноя", name: "Олимпиада «Высшая проба»" },
      { date: "1 дек", name: "Заявка в летнюю школу" },
      { date: "20 янв", name: "IELTS, пробный тест" },
    ],
    nextSession: "Стратегическая сессия 12 декабря",
  },
};
