import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export default function DatePick(props) {

    const { name, value, onChange } = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                format="dd/MM/yyyy"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}
                keyboardIcon={<CalendarTodayIcon style={{color:"#FFFFFF"}}/>}

            />
        </MuiPickersUtilsProvider>
    )
}