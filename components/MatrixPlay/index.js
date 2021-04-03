import React, { useEffect, useState } from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import {EachCell} from "./eachCell";


const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const MatrixPage = ()=>{
    const [recent, setRecent] = useState([]);
    
    useEffect(()=>{
        
    }, [recent])

    const forRow=(start, end)=>{
        return(
        <Grid  
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
         >
           {ids.map((val, index)=>{
               if(val>=start && val <=end)
                    return <EachCell id={val} behaviour={recent && recent.indexOf(val)!=-1?"clicked":"unclicked"} changeRecent={setRecent}/> 
           })}
        </Grid>
        )
    }
    return (
    <div className="matrix-display">
        {forRow(1,4)}
        <br></br>
        {forRow(5,8)}
        <br></br>

        {forRow(9,12)}
        <br></br>

        {forRow(13,16)}
    </div>
       
    )
}

export default MatrixPage;