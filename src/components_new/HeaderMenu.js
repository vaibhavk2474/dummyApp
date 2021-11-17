import React from "react";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles({
  headerMenu: {
    zIndex: "1",
    borderBottom: "1px solid #EEEEEE",
    width: "1440px",
    height: "82px",
    position: "fixed",
  },
  pollyLogoPic: {
    // border: "1px solid red",
    width: "222px",
    height: "69px",
    position: "absolute",
    // background: "rgb(206,209,219)",
    top: "5px",
    left: "50px",
    textAlign: "center",
    fontSize: "xxx-large",
    color: "aliceblue",
  },
  bkgBlurry: {
    position: "absolute",
    width: "1440px",
    height: "82px",
    left: "calc(50% - 1440px/2)",
    top: "0px",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))",
    backdropFilter: "blur(9px)",
  },
  myButton_a: {
    position: "absolute",
    width: "88px",
    height: "38px",
  },
  rectangleButton_a: {
    // border: "1px solid #000000",
    textAlign: "center",
    width: "88px",
    height: "38px",
    position: "absolute",
    background: "linear-gradient(90deg, #00FF47 1.89%, #1CD9A0 100%)",
    left: "290px",
    top: "20px",
    boxSizing: "border-box",
    borderRadius: "81px 100px 100px 100px",
  },
  text: {
    width: "86.41px",
    height: "10px",
    position: "absolute",
    top: "13px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "10px",
    lineHeight: "10px",
    textAlign: "center",
    color: "#000000",
  },
  NavItemAbout: {
    position: "absolute",
    width: "44px",
    height: "14px",
    top: "31px",
    left: "400px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: "0.03em",
    color: "#000000",
  },
  NavItemCurators: {
    position: "absolute",
    width: "44px",
    height: "14px",
    top: "31px",
    left: "450px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: "0.03em",
    color: "#000000",
  },
  rectangleButton_b: {
    border: "1px solid #00FF47",
    textAlign: "center",
    width: "88px",
    height: "40px",
    position: "absolute",
    left: "1050px",
    top: "20px",
    boxSizing: "border-box",
    borderRadius: "81px 100px 100px 100px",

    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  myButton_b: {
    position: "absolute",
    width: "88px",
    height: "40px",
  },
  text_b: {
    width: "68.51px",
    left: "25px",
    height: "11px",
    position: "absolute",
    top: "10px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "11px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },

  social: {
    width: "41px",
    height: "41px",
    position: "absolute",
    left: "1150px",
    top: "21px",
  },
  bkgSocial: {
    width: "41px",
    borderRadius: "50%",
    height: "41px",
    position: "absolute",

    background: "#FFFFFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  picSocial: {
    width: "18px",
    height: "14px",
    position: "absolute",
    left: "13px",
    top: "11px",
  },

  social_b: {
    width: "41px",
    height: "41px",
    position: "absolute",
    left: "1200px",
    top: "21px",
  },
  bkgSocial_b: {
    width: "41px",
    borderRadius: "50%",
    height: "41px",
    position: "absolute",

    background: "#FFFFFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  picSocial_b: {
    width: "18px",
    height: "14px",
    position: "absolute",
    left: "13px",
    top: "11px",
  },
  connectButtonRectangle: {
    border: "1px solid #FFFFFF",
    textAlign: "center",
    width: "142px",
    height: "40px",
    position: "absolute",

    boxSizing: "border-box",
    borderRadius: "100px",

    filter: "drop-shadow(0px 4px 9px #000000)",
  },
  myConnectButtun: {
    width: "142px",
    height: "40px",
    position: "absolute",
    left: "1250px",
    top: "21px",
  },
  connectButtonText: {
    width: "81px",
    height: "14px",
    position: "absolute",
    top: "10px",
    fontFamily: "Tomica",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "14px",
    textAlign: "center",
    color: "#000000",
  },
});
export default function HeaderMenu() {
  const classes = useStyles();
  return (
    <div className={classes.headerMenu}>
      <div className={classes.bkgBlurry}>
        <div className={classes.pollyLogoPic}>PolyOne</div>
        <div className={classes.myButton_a}>
          <div className={classes.rectangleButton_a}>
            <div className={classes.text}>Early Access</div>
          </div>
        </div>

        <div className={classes.NavItemAbout}>About</div>
        <div className={classes.NavItemCurators}>Curators</div>

        <div className={classes.myButton_b}>
          <div className={classes.rectangleButton_b}>
            <div className={classes.text_b}>submit</div>
          </div>
        </div>

        <div className={classes.social}>
          <div className={classes.bkgSocial}>
            <div className={classes.picSocial}>
              {" "}
              <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </div>
          </div>
        </div>

        <div className={classes.social_b}>
          <div className={classes.bkgSocial_b}>
            <div className={classes.picSocial_b}>
              {" "}
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div>
          </div>
        </div>

        <div className={classes.myConnectButtun}>
          <div className={classes.connectButtonRectangle}>
            <div className={classes.connectButtonText}>connect</div>
            <div className={classes.connectButtonText} style={{ left: "65px" }}>
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
