// "Контакты" block copy. Contact values themselves live in site.ts. PLACEHOLDER copy.

export interface ContactsBlock {
  title: string;
  text: string;
  questionnaire: {
    title: string;
    text: string;
    button: string;
  };
}

export const contactsBlock: ContactsBlock = {
  title: "Расскажите о ребёнке",
  text: "Напишите нам удобным способом. Первая короткая встреча нужна, чтобы понять задачу семьи и предложить формат работы.",
  questionnaire: {
    title: "Анкета перед консультацией",
    text: "Десять минут ваших ответов экономят половину первой встречи и помогают сразу рассчитать стоимость.",
    button: "Заполнить анкету",
  },
};
