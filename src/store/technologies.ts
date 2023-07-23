import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Technologies} from "../types";
import iconGO from "../assets/image/icon-go.svg";
import iconPHP from "../assets/image/icon-php.svg";
import iconJava from "../assets/image/icon-java.svg";
import iconCPlus from "../assets/image/icon-c-plus.svg";
import iconC from "../assets/image/icon-c.svg";
import nodeJS from "../assets/image/icon-node-js.svg";
import phyton from "../assets/image/icon-python.svg"

interface  InitialState {
    technologies: Array<Technologies>;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState: InitialState = {
    technologies: [],
    loading: 'idle',
}

export const fetchTechnologies = createAsyncThunk<Technologies[]>(
    '/technology/getTechnologies',
    async() => {
        const response = {
            data: [
                {
                    lang: 'GO',
                    image: iconGO,
                    id: 0,
                },
                {
                    lang: 'PHP',
                    image: iconPHP,
                    id: 1,
                },
                {
                    lang: 'Java',
                    image: iconJava,
                    id: 3,
                },
                {
                    lang: 'C++',
                    image: iconCPlus,
                    id: 4,
                },
                {
                    lang: 'C#',
                    image: iconC,
                    id: 5,
                },
                {
                    lang: 'NodeJS',
                    image: nodeJS,
                    id: 6,
                },
                {
                    lang: 'Phyton',
                    image: phyton,
                    id: 7,
                },
                {
                    lang: 'Objective-C',
                    image: iconC,
                    id: 8
                }
            ]
        }
        return response.data
    }
)

const technologiesSlice = createSlice({
    name: 'technology',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTechnologies.fulfilled, (state, action) => {
                state.technologies =[...action.payload];
            })
    }
})

export const getTechnologies = (state: any) => state.technology.technologies

export default technologiesSlice.reducer
