import React from "react";
import { makeStyles } from "@mui/styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  header: {
    // border: "1px solid green",
    width: "1440px",
    height: "761px",
    position: "absolute",
    left: "0px",
    top: "0px",
  },
  rectangle: {
    width: "1440px",
    height: "761px",
    position: "absolute",
    left: "0px",
    top: "0px",
    mixBlendMode: "normal",
    borderRadius: "0px",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(.jpg)",
    backgroundColor: "rgb(206,209,219)",
  },

  preview: {
    position: "absolute",
    width: "289.27px",
    height: "377.15px",
    left: "900px",
    top: "185px",
    // border: "1px solid green",
    filter: "drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.05))",
  },

  rectangle2: {
    position: "absolute",
    width: "289px",
    height: "377px",
    // left: "900px",
    // top: "185px",
    backgroundSize: "cover",
    background:
      "url(https://media.istockphoto.com/photos/tsaatan-boy-with-a-reindeer-in-a-landscape-of-northern-mongolia-picture-id1266475224)",
    // border: "1px solid #000000",
    boxSizing: "border-box",
    filter:
      "drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.02)) drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)) drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)) drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01)) drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)) drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481))",
    borderRadius: "30px 0px",
  },

  card2: {
    position: "absolute",
    // border: "1px solid green",
    width: "289.11px",
    height: "107.29px",
    top: "268px",
  },

  text1: {
    position: "absolute",
    left: "225px",
    top: "78px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13px",
    lineHeight: "124.5%",
    color: "#000000",
  },
  text2: {
    position: "absolute",
    left: "73px",
    top: "10px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "center",
    letterSpacing: "0.065em",
    lineHeight: "124.5%",
    color: "#000000",
  },

  rectangleCard: {
    position: "absolute",
    background: "rgba(255, 255, 255, 0.91)",
    border: "1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "0px 0px 30px 0px",
    position: "absolute",
    border: "1px solid green",
    width: "289.11px",
    height: "111.29px",
  },
  outlineIcon: {
    position: "absolute",
    width: "22.7px",
    height: "22.7px",
    left: "235px",
  },

  HeroContent: {
    width: "486px",
    height: "146px",
    position: "absolute",
    left: "234px",
    top: "295px",
    // border: "1px solid brown",
  },

  tagLine: {
    // border: "1px solid green",
    width: "312px",
    height: "19px",
    position: "absolute",
    left: "0px",
    top: "0px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "19px",
    letterSpacing: "0.075em",
    textTransform: "uppercase",
    color: "#141414",
  },
  heading: {
    // border: "1px solid green",
    width: "382px",
    height: "55px",
    position: "absolute",
    left: "0px",
    top: "28px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "55px",
    color: "#181E4B",
  },
  desc: {
    // border: "1px solid brown",
    width: "486px",
    height: "60px",
    position: "absolute",
    left: "0px",
    top: "80px",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "24px",
    color: "#5E6282",
  },
});
export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.rectangle}>
        <div className={classes.HeroContent}>
          <div className={classes.tagLine}>Exclusive NFT TICKET access</div>
          <div className={classes.heading}>PolyOne NFT Portal</div>
          <div className={classes.desc}>
            As a member of the PolyOne.IO you’ll be able to pre-access the
            platform before official launch, Collect & mint exclu sive NFT
            artwork by world renowned artists.
          </div>
        </div>

        <div className={classes.preview}>
          <div className={classes.rectangle2}></div>
          <div className={classes.card2}>
            <div className={classes.rectangleCard}>
              <div className={classes.text1}> 1/888</div>
              <div className={classes.text2}>Membership NFT </div>
              <div
                className={classes.text2}
                style={{ position: "absolute", left: "89px", top: "25px" }}
              >
                Access Card{" "}
              </div>
              <div
                className={classes.text2}
                style={{ position: "absolute", left: "118px", top: "40px" }}
              >
                Silver
              </div>
              <div className={classes.outlineIcon}>
                <div
                  style={{
                    width: "16.55px",
                    height: "13.72",
                    position: "absolute",
                  }}
                >
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                  {/* <image src={"https://media.istockphoto.com/photos/red-heart-isolated-on-white-background-picture-id911787836"}></image> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
