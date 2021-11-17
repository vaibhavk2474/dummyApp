import * as React from "react";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import MainBackGround from "./MainBackGround";

const useStyles = makeStyles({
  mainPage: {
    border: "1px solid #fafafa",
    // borderBottom:" 1px solid #fafafa",
    width: "1440px",
    height: "7600px",
    position: "relative",
    left: "35px",
  },
});

export default function PolyOnePage() {
  const classes = useStyles();
  return (
    <div className={classes.mainPage}>
      <HeaderMenu></HeaderMenu>
      <Header></Header>
      <MainBackGround></MainBackGround>
    </div>
  );
}
