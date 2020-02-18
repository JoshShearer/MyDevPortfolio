import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import ProjectOverlay from "components/ProjectOverlay/ProjectOverlay.js";
import { MyProjects } from "./MyProjects";
import { grey } from "@material-ui/core/colors";

import profile from "assets/img/faces/Josh.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
const projects = MyProjects;

const myUseStyles = makeStyles(theme => ({
  root: {
    backgroundColor: grey[800],
    color: grey[100],
    left: "30%",
    // right: "50%"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const classy = myUseStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(
    classes.imgRounded,
    classes.imgGallery,
    classy.paper
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="Josh Shearer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/RioEvening.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classNames(classes.container, classes.section)}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 align="center">Active Projects</h2>
                <h3>
                  My interests have led me to study and work on many
                  applications from Machine Learning with python to Full Stack
                  Web Development based around Java and React.
                </h3>
                <Button
                  href="/technical-page"
                  size="large"
                  className={classy.root}
                >
                  Technical Tools
                </Button>
                <br/>
                <br/>
              </GridItem>
            </GridContainer>
          </div>
          {/* index == 0 || index % 3 ? (
                <GridItem xs={12} sm={12} md={4}>
                  <ProjectOverlay {...project} />
                </GridItem>
              ) : (
                <ProjectOverlay {...project} />
              )
            )} */}

          <GridContainer justify="center">
            {projects.map(project => (
              <GridItem xs={12} sm={12} md={4}>
                <ProjectOverlay {...project} />
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
