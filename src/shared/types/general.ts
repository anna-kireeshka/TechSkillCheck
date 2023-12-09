export interface InitialState<T> {
    data: T;
    status: 'idle' | 'pending' | 'successfully' | 'failed',
    error?: string,
}

export interface NextTestQueryRequest {
    quiz_id: number,
    question_id: number,
    option_id: number,
    lang?: string
}