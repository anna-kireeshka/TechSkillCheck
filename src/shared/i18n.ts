
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        directionTitle: "Directions",
        directionSubTitle: "Select a direction",
        technologyTitle: "Technologies",
        technologySubTitle: "Select a technology",
        about: "About",
        support: "Write to support",
        contacts: "Contacts",
        nextQuestion: "Next",
        finishQuiz: "Finish"
      }
    },
    ru: {
      translation: {
        directionTitle: "Направления",
        directionSubTitle: "Выберите направление",
        technologyTitle: "Технологии",
        technologySubTitle: "Выберите технологию",
        about: "О нас",
        support: "Написать в поддержку",
        contacts: "Контакты",
        nextQuestion: "Дальше",
        finishQuiz: "Завершить"
      }
    }
  },
});

export default i18n;