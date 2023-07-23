import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Directions} from "../types";
import BackendIcon from "../assets/image/icon-backend.svg";
import FrontendIcon from "../assets/image/icon-frontend.svg";
import QAIcon from "../assets/image/icon-qa.svg";

//const actionCreators = createAction('GET_DIRECTIONS')

interface  InitialState {
    directions: Array<Directions>;
    status: string;
    error: string;
}
const initialState: InitialState = {
    directions: [],
    status: '',
    error: '',
}
export const fetchDirections = createAsyncThunk<Directions[]>(
    '/direction/getDirections',
    async() => {
        // const response = await
        const response = {
            data: [
                {
                    name: 'Backend-разработка',
                    image: BackendIcon,
                    id: 0,
                },
                {
                    name: 'Frontend-разработка',
                    image: FrontendIcon,
                    id: 1,
                },
                {
                    name: 'Тестирование',
                    image: QAIcon,
                    id: 2,
                },
            ]
        }
        return response.data
    }
    )

const directionsSlice = createSlice({
    name: 'direction',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchDirections.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.directions = [...action.payload];
        })
    }
})

export const getDirectionsStatus = (state: InitialState) => state.status
export const getDirections = (state: any) => state.direction.directions

export default directionsSlice.reducer
