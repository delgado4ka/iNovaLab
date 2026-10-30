// "Услуги" block: age-based tracks (shown along an age axis), a Global track for any age,
// and one-off products. PLACEHOLDER copy and prices.

export interface Track {
  name: string;
  ages: string;
  summary: string;
  includes: string[];
  price: string;
}

export interface OneOffService {
  name: string;
  price: string;
}

export interface Services {
  title: string;
  intro: string;
  tracks: Track[];
  global: Track;
  oneOffTitle: string;
  oneOffIntro: string;
  oneOff: OneOffService[];
  packageNote: string;
}

export const services: Services = {
  title: "Услуги",
  intro:
    "Сопровождение подбирается по возрасту ребёнка и задачам семьи. Пакеты рассчитаны на год и дольше; отдельные услуги можно купить разово.",
  tracks: [
    {
      name: "iNova Junior",
      ages: "5–12 лет",
      summary: "Выбор школы, развитие сильных сторон, подготовка к поступлению в сильную школу или лицей.",
      includes: [
        "Нейропсихологическая диагностика",
        "Подбор школы и дополнительных занятий",
        "Подготовка к вступительным испытаниям",
      ],
      price: "от 180 000 ₽ в год",
    },
    {
      name: "iNova Teens",
      ages: "13–19 лет",
      summary: "Профильные классы, олимпиады, экзамены и стратегия поступления в вуз.",
      includes: [
        "Профориентация и выбор профиля",
        "План олимпиад и конкурсов на 2 года",
        "Воронка вузов: мечта, реалистичные, страховочные",
      ],
      price: "от 240 000 ₽ в год",
    },
    {
      name: "iNova Career",
      ages: "от 16 лет",
      summary: "Выбор специальности, стажировки и первые шаги в профессии.",
      includes: [
        "Карта навыков: hard и soft skills",
        "Список востребованных специальностей",
        "Стажировки и портфолио",
      ],
      price: "от 120 000 ₽ в год",
    },
  ],
  global: {
    name: "iNova Global",
    ages: "любой возраст",
    summary:
      "Обучение за рубежом и переезд семьи: выбор страны и школы, поступление, адаптация ребёнка к новой культуре и языку.",
    includes: [
      "Сравнение стран и систем образования",
      "Поступление в школу или университет",
      "Адаптация после переезда",
    ],
    price: "от 300 000 ₽ в год",
  },
  oneOffTitle: "Разовые услуги",
  oneOffIntro: "Если нужен ответ на один конкретный вопрос.",
  oneOff: [
    { name: "Стратегическая консультация, 90 минут", price: "15 000 ₽" },
    { name: "Список школ Москвы по направлениям", price: "9 000 ₽" },
    { name: "Список востребованных специальностей", price: "7 000 ₽" },
    { name: "Нейропсихологическая диагностика", price: "18 000 ₽" },
    { name: "Подбор вузов за рубежом", price: "25 000 ₽" },
    { name: "Разбор мотивационного письма", price: "8 000 ₽" },
  ],
  packageNote: "Точная стоимость пакета зависит от задач и рассчитывается после первой консультации.",
};
