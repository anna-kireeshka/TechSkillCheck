
export interface  InitialState<T> {
    data: T;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export interface NextTestQueryRequest {
    quiz_id: number,
    question_id: number,
    option_id: number,
    lang?: string
}