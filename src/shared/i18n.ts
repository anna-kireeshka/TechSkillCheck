
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
        finishQuiz: "Finish",
        formEmailError: "Please enter a valid email address",
        formSubjectError: "Maximum text length 150 characters",
        formMessageError: "Maximum text length 300 characters",
        formLabelEmail: "Email",
        formLabelSubject: "Message subject",
        formLabelMessage: "Message text",
        formButtonText: "Send",
        widgetSupport: "Connect with us"
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
        finishQuiz: "Завершить",
        formEmailError: "Пожауйста, введите корректный email адрес",
        formSubjectError: "Длина текста не должна превышать 150 символов",
        formMessageError: "Длина текста не должна превышать 300 символов",
        formLabelEmail: "Email",
        formLabelSubject: "Тема сообщения",
        formLabelMessage: "Текст сообщения",
        formButtonText: "Отправить",
        widgetSupport: "Связаться с нами"
      }
    }
  },
});

export default i18n;