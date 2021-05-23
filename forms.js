import { Grid, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import DatePicker from './DatePick'
import {pxToVw} from '../utils/theme'

const defaultValues = {
    customerName:"",
    customerNo:"",
    invoiceNo:"",
    invoiceAmount:"",
    dueDate:new Date(),
    notes:""
}
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '94.5',
            margin: theme.spacing(2),
        }
    },
    inputs: {
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between"
    },
    label:{
        textAlign: "left",
        font: "normal normal normal 1.25rem/1.5rem Ubuntu",
        letterSpacing: pxToVw(0.09),
        opacity: 1,
        color:"#97A1A9"
    }

}))


function Form() {

    const classes = useStyles()
    const[values,setValues]=React.useState(defaultValues)
    const handleInputChange= e=>{
        const{name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }


    return (
        <form className = {classes.root}>
            <Grid container spacing = {2}>
                    <Grid item xs = {6}>
                        <div className={classes.inputs}>
                        <label className = {classes.label}>Customer Name:</label>
                        <TextField
                            variant="outlined"
                            name="customerName"
                            autoComplete="off"
                            value={values.customerName}
                            onChange = {handleInputChange}
                        />
                        </div> 

                        <div className={classes.inputs}>
                        <label className = {classes.label}>Customer No:</label>
                        <TextField
                            variant="outlined"
                            name="customerNo"
                            autoComplete="off"
                            value={values.customerNo}
                            onChange = {handleInputChange}
                        />  
                        </div>

                        <div className={classes.inputs}>
                        <label className = {classes.label}>Invoice No:</label>
                        <TextField
                            variant="outlined"
                            name="invoiceNo"
                            autoComplete="off"
                            value={values.invoiceNo}
                            onChange = {handleInputChange}
                        />
                        </div>

                        <div className={classes.inputs}>
                        <label className = {classes.label}>Invoice Amount:</label>
                        <TextField
                            variant="outlined"
                            name="invoiceAmount"
                            autoComplete="off"
                            value={values.invoiceAmount}
                            onChange = {handleInputChange}
                        />
                        </div>
                    </Grid>
                    <Grid item xs = {6}>
                        <div className={classes.inputs}>
                        <label className = {classes.label}>Due Date:</label>   
                        <DatePicker
                            name="dueDate"
                            value={values.dueDate}
                            onChange = {handleInputChange}
                        />
                        </div>

                        <div className={classes.inputs}>
                        <label className = {classes.label}>Notes:</label>
                        <TextField
                            variant="outlined"
                            name="notes"
                            multiline
                            autoComplete="off"
                            value={values.notes}
                            onChange = {handleInputChange}
                            placeholder = "Lorem Ipsum dolor..."
                        />
                        </div>
                    </Grid>

                        
            </Grid>
        </form>
    )
}

export default Form