import i18n from "i18next";
import {initReactI18next} from "react-i18next";

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
                testTitle: "Quiz",
                resultTitle: "Results",
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
                formMessageSuccessfully: "Your request has been sent successfully",
                widgetSupport: "Connect with us",
                notFound: "Page not found",
                redirectLink: "Return to our home page",
                redirectLinkToTechnologies: "Return to our technologies page",
                redirectLinkToDirection: "Return to our direction page",
                notFoundSection: "Section is under development",
                directionsNotFound: "Directions not found"
            }
        },
        ru: {
            translation: {
                directionTitle: "Направления",
                directionSubTitle: "Выберите направление",
                technologyTitle: "Технологии",
                technologySubTitle: "Выберите технологию",
                resultTitle: "Результаты",
                testTitle: "Тест",
                about: "О нас",
                support: "Написать в поддержку",
                contacts: "Контакты",
                nextQuestion: "Дальше",
                finishQuiz: "Завершить",
                formEmailError: "Пожалуйста, введите корректный email адрес",
                formSubjectError: "Длина текста не должна превышать 150 символов",
                formMessageError: "Длина текста не должна превышать 300 символов",
                formLabelEmail: "Email",
                formLabelSubject: "Тема сообщения",
                formLabelMessage: "Текст сообщения",
                formButtonText: "Отправить",
                formMessageSuccessfully: "Ваше обращение успешно отправлено",
                widgetSupport: "Связаться с нами",
                notFound: "Страница не найдена",
                redirectLink: "Вернуться на главную",
                redirectLinkToTechnologies: "Вернуться к выбору технологий",
                redirectLinkToDirection: "Вернуться к выбору направлений",
                notFoundSection: "Раздел находится в разработке",
                directionsNotFound: "Направления не найдены"
            }
        }
    },
});

export default i18n;