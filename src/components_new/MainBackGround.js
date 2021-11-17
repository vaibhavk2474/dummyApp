import React from 'react'
import { makeStyles } from "@mui/styles";
import AccessTickets from './AccessTickets';


const useStyles = makeStyles({
    mainBackGround: {
position:"absolute",
        width: "1440px",
        height: "6910px",
        left: "0px",
        top: "690px",
        
        background: "#F8F8F8",
        borderRadius: "80px 80px 0px 0px", 
  
  
    },
  });
  
export default function MainBackGround() {
  const classes = useStyles();
    return (
        <div className={classes.mainBackGround}>
            <AccessTickets></AccessTickets>
            
        </div>
    )
}
