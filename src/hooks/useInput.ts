import {useState} from "react";


export default function useInput(initialValue: string | number) {
    const [value, setValue] = useState(initialValue)

    const onChange = (ev: { target: HTMLInputElement }) => {
        setValue(ev.target.value)
    }

    return {
        value, onChange
    }
}