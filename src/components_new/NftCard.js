import * as React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  NFTCardPreview: {
      zIndex:"5",
    // border: "1px solid green",
    position: "absolute",
    width: "289.27px",
    height: "377.15px",
    left: "110px",
    top: "244px",

    filter: "drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.05))",
  },
  NftRectangle: {
    position: "absolute",
    width: "243px",
    height: "341px",
    left: "135px",
    top: "580px",

    border: "1px solid #00FF47",
    boxSizing: "border-box",
    borderRadius: "54px",
  },
  BftButton: {
    // border: "1px solid green",
    position: "absolute",
    width: "203px",
    height: "49px",
    left: "155px",
    top: "895px",

    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  buttonRectangle: {
    position: "absolute",
    width: "203px",
    height: "49px",

    background: "linear-gradient(90deg, #00FF47 1.89%, #1CD9A0 100%)",
    border: "1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "81px 100px 100px 100px",
  },

  buttonText: {
    position: "absolute",
    width: "118.79px",
    height: "13.48px",
    left: "45px",
    top: "13px",

    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "17px",
    textAlign: "center",

    color: "#000000",
  },
  NFTCardPreviewRectangle: {
    position: "absolute",
    // left: "14.74%",
    // right: "65.19%",
    // top: "13.39%",
    // bottom: "81.64%",

    background:
      "url('https://media.istockphoto.com/photos/tsaatan-boy-with-a-reindeer-in-a-landscape-of-northern-mongolia-picture-id1266475224')",
    // border: "1px solid #000000",
    boxSizing: "border-box",
    filter:
      "drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.02)) drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)) drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)) drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01)) drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)) drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481))",
    borderRadius: "30px 0px",
    height: "380px",
    width: "290px",
    backgroundSize: "contain",
  },
  NFTInnerCard: {
    // border: "1px solid green",
    position: "absolute",
    // left: "14.72%",
    // top: "16.95%",
    height:"380px",
    width:"290px",
  },
  NFTInnerCardRectangle: {
    position: "absolute",
    // left: "14.72%",
    // top: "16.95%",

    background: "rgba(255, 255, 255, 0.96)",
    // border: "1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "0px 0px 30px 0px",
    height: "109.72px",
    width: "291px",
  },

  NFTInnerCardmembership: {
    // border: "1px solid red",
    position: "absolute",
    width: "286px",
    height: "108.72px",
    // left: "-2px",
    top: "291px",
  },
  NFTInnerCardRectangleContent:{
    position: "absolute",
    width: "200px",
    height: "41.72px",
    left: "55px",
    top: "20px",
    // border:"1px solid red",
  },
  NFTInnerCardRectangleText:{
    // width: "81px",
    // height: "14px",
    position: "absolute",
    top: "25px",
    left:"55px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "124.5%",
    display:"flex",
    alignItems:"center",
letterSpacing:"0.0653em",
    color: "#5E6282",
  },
  NftRectangleContent:{
    //   border:"1px solid red",
      width:"201.46px",
      height:"205.57px",
    position: "absolute",
    top: "81px",
    left:"20px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "13px",
    lineHeight: "124.5%",
    display:"flex",
    flexDirection:"column",
    flexWrap:"nowrap",
    alignItems:"center",
    textAlign:"center",
    color: "#000000",
    justifyContent:"space-evenly"
  }
});

export default function NftCard(props) {
    console.log(props.AccessTicketsInfo);
  const classes = useStyles();

  return (
    <div>
      <div className={classes.NFTCardPreview}>
        <div className={classes.NFTCardPreviewRectangle}>
          <div className={classes.NFTInnerCard}>
            <div className={classes.NFTInnerCardmembership}>
              <div className={classes.NFTInnerCardRectangle}>
                  <div className={classes.NFTInnerCardRectangleContent}></div>

                   <div className={classes.NFTInnerCardRectangleText}>{props.AccessTicketsInfo.CardContent}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.NftRectangle}>
          <div className={classes.NftRectangleContent}>
          {
              props.AccessTicketsInfo.RectangleContent.map((e)=>{
                  return (

                    <div> {e}</div>

                  )
              })
          }
</div>
      </div>

      <div className={classes.BftButton}>
        <div className={classes.buttonRectangle}></div>
        <div className={classes.buttonText}>Buy</div>
      </div>
    </div>
  );
}
