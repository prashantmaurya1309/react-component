import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    dialogBox:{
        minWidth:"69.125rem",
        minHeight:"31.813rem",
        backgroundColor:"#2A3E4C",
        borderRadius:"0.375rem",
        
    },
    dialogTitle:{
        margin:"1.875rem",
        padding:"0px"
    },
})


function ModalADD(props) {

    const classes = useStyles()

    const{title,children, addPopup,setAddPopup} = props
    return (
        <div>
            <Dialog open={addPopup} classes = {{paper: classes.dialogBox}}>
                <DialogTitle className = {classes.dialogTitle}>
                    <div style={{display:"flex"}}>
                        <div style={{flexGrow:1}}>
                            {title}
                        </div>
                        <Button onClick={()=>{setAddPopup(false)}}>
                            <CloseIcon/>
                        </Button>
                    </div>
                </DialogTitle>
                <hr style={{border: "0.03px solid #1d2830", width: "99.9%"}}/>
                <DialogContent>
                    <div>{children}</div>
                </DialogContent>
                <hr style={{border: "0.03px solid #1d2830", width: "99.9%"}}/>
                <DialogActions style={{padding:"1.875rem"}}>
                    <Grid justify="space-between" container spacing={0}>
                        <Grid item>
                            <Button onClick={()=>{setAddPopup(false)}} style={{color:"#14AFF1"}}>
                                Cancel
                            </Button>
                        </Grid>

                        <Grid item justify="space-between">
                            <div>
                                <Button variant="contained" style={{marginRight:"1.25rem"}}>
                                    Add
                                </Button>
                                <Button variant="outlined">
                                    Clear
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ModalADD