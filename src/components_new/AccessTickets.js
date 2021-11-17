import React from 'react'
import { makeStyles } from "@mui/styles";
import NftCard from './NftCard';

let AccessTicketsData = {
  a: {
    CardContent: "Membership Bronze",

    RectangleContent:["Pre-Access to Spooky & the Trendland Gallery","Surprise artwork airdropped","Lifetime updates"],
    backGroundURL: "",
  },

  b: {
    CardContent: "Membership Silver",
    RectangleContent:["Access to all collection drops","Choice to redeem physical artwork","Governance tokens airdropped", "Surprise artwork airdropped","Lifetime updates"],
    backGroundURL: "",
  },
  c: {
    CardContent: "Membership Gold",

    RectangleContent:["All the ‘Silver’ benefits","Additional governance tokens","Invites to exclusive events","Exclusive 1/1 artwork airdropped","And all the ‘Silver’ benefits"],

    backGroundURL: "",
  },
};
const useStyles = makeStyles({
  mainAccessTicket: {
    position: "absolute",
    width: "998.27px",
    height: "959.66px",
    left: "223px",
    top: "75px",
    // border:"1px solid green"
  },
  tagLine:{
          // border: "1px solid green",
    width: "497px",
    height: "31px",
    position: "absolute",
    left: "280px",
    top: "10px",
    fontFamily:"Tomica",
    fontStyle:"normal",
    fontWeight:"900",
    fontSize:"35px",
    lineHeight:"35px",
    textAlign:"center",
    letterSpacing:"0.13em",
    textTransform:"uppercase",
    color:"#00ff47",
    // border:"0.5px solid #000000",
    textShadow:"2px 2px 0px #000000"
  },

  desc:{
    position: "absolute",
    width: "662px",
    height: "90px",
    left: "213px",
    top: "81px",
    
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    /* or 147% */
    
    display: "flex",
    alignItems: "center",
    
    color: "#5E6282",
  }
  

});

export default function AccessTickets() {
  const classes = useStyles();

    return (
        <div className={classes.mainAccessTicket}>
            <div className={classes.tagLine}>NFT ACCESS Ticket</div>
            <div className={classes.desc}>A limitted pre-access membership tickeets to 5,100. And as a lifetime member you will not only be part of a special group of collectors and artists but have an exclsuive access of the future POLYONE.IO and special 1/1 edition airdropped.</div>
           
            <div style={{position:"absolute",left:"-108px"}} ><NftCard AccessTicketsInfo={AccessTicketsData.a}></NftCard></div>
            <div style={{position:"absolute",left:"250px"}} ><NftCard AccessTicketsInfo={AccessTicketsData.b}></NftCard></div>
            <div style={{position:"absolute",left:"595px"}} ><NftCard AccessTicketsInfo={AccessTicketsData.c}></NftCard></div>
          
        </div>
    )
}




  

