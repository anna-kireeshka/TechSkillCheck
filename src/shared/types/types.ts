
export interface DirectionsDTO {
    total: number;
    items: [
        {
            id: number;
            name: string;
            short_description?: string,
            image_url: string;
        }
    ]
}

export interface TechnologiesDTO {
    total: number;
    items: [
        {
            id: number;
            name: string;
            short_description?: string,
            image_url: string;
        }
    ]
}

export interface QuizDTO {
    id: number,
    total: number,
    current: number,
    question: {
        id: number,
        text: string,
        code: string,
        image: string,
    },
    options:[
        {
            id: number,
            text: string,
            code: string,
            image: string
        },
    ]
}
