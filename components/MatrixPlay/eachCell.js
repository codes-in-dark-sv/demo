import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    boxing:{
        width:"80px",
        height:"80px",
    }
    
}));

export const EachCell = ({id, behaviour, changeRecent}) =>{
    const classes = useStyles();
    const handleChange = (cell_id) =>{
        changeRecent(prev=>{
            if(prev.length>1){
                if(prev[0]==cell_id || prev[1]==cell_id){
                     return prev
                }
                else{
                    prev=prev.slice(1,2)
                    prev = prev.concat(cell_id)
                    return prev
                }
            }
            else if(prev.length==1){
                if(prev[0]!=cell_id)
                    prev = prev.concat(cell_id)
                return prev
            }
            else{
                prev = prev.concat(cell_id)
                return prev
            }
            
        }
        )
    }
    return (
        <Grid item xs={3}>
            <Paper className={classes.boxing} id={behaviour=="clicked" ?"touched":"untouched"}  square={true} >
                <Button className={classes.boxing} value={id} onClick={()=>handleChange(id)}>
                </Button>
            </Paper>
        </Grid>
    )
}