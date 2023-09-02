
export interface  InitialState<T> {
    data: T;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}