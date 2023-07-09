
import React, {FC} from 'react';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

interface Props {
    list: string[]
}
const RadioButtonGroup: FC<Props> = (list) => {
    console.log(list.list)
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                {
                    list.list.map((el: string, idx: number) => (
                            <FormControlLabel key={idx} value={el} control={<Radio name={el}/>} label={el}/>
                    ))
                }
            </RadioGroup>
        </FormControl>
    )
}
export default RadioButtonGroup
