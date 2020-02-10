import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import SkillSection from "./SkillSection.js";

import profile from "assets/img/faces/Josh.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const myUseStyles = makeStyles(theme => ({
  grid: {
    padding: theme.spacing(2)
  }
}));
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Josh Shearer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/IguassuSunset.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classNames(classes.container, classes.section)}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <h2 align="center">Active Projects</h2>
              <h4>
                My interests have led me to study and work on Machine Learning
                applications with python among other things.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        <SkillSection />
      </div>
      <Footer/>
    </div>
  );
}
