// "Команда" block. Names are optional: the customer hasn't decided whether to publish them.
// PLACEHOLDER copy.

export interface TeamRole {
  role: string;
  text: string;
  name?: string;
}

export interface Team {
  title: string;
  intro: string;
  signature: string;
  roles: TeamRole[];
}

export const team: Team = {
  title: "Команда",
  intro:
    "С каждой семьёй работает несколько специалистов. Я лично веду стратегию и отвечаю за результат.",
  signature: "Команда под моим личным супервизорским контролем",
  roles: [
    {
      role: "Нейропсихологи",
      text: "Оценивают особенности внимания, памяти и мышления, подсказывают, в какой среде ребёнку будет легче учиться.",
    },
    {
      role: "Профориентологи",
      text: "Помогают подростку найти направление, которое совпадает с его интересами и способностями.",
    },
    {
      role: "Кураторы",
      text: "Ведут ежедневную работу по плану: дедлайны, подготовка, связь с семьёй.",
    },
    {
      role: "Партнёры из вузов",
      text: "Преподаватели и сотрудники приёмных комиссий в России и за рубежом консультируют по поступлению.",
    },
  ],
};
