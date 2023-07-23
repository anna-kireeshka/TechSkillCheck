export interface Directions {
    name: string;
    image: string;
    id: number
}

export interface Technologies {
    lang: string,
    image: string,
    id: number
}

export interface TestCase {
    id: number;
    currentIdx: number; // Номер текушего вопроса 1,2,3,4,5,6,7
    totalQuestions: number; // Общее число вопросов
    question: string; // Вопрос
    answersList: [
        {
            id: number,
            answer: string
        },
    ],
}
