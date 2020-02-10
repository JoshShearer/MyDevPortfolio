import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import profile from "assets/img/faces/Josh.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Motorcycle } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SkillSection(props) {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 align="center">Technical Skills </h2>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <img
              alt="..."
              src="https://www.technotification.com/wp-content/uploads/2017/05/Python-programming-compressed.jpg"
              className={navImageClasses}
            />
            <img
              alt="..."
              src="https://i.ytimg.com/vi/MrijcdNl_U4/maxresdefault.jpg"
              className={navImageClasses}
            />
            <img
              alt="..."
              src="https://www.freelancinggig.com/blog/wp-content/uploads/2017/07/Natural-Language-Processing.png"
              className={navImageClasses}
            />
            <img
              alt="..."
              src="https://www.digitaledge.org/wp-content/uploads/2018/02/How-Can-You-Master-Algorithmic-Trading.jpeg"
              className={navImageClasses}
            />
            <img
              alt="..."
              src="http://www.skyarch.net/blog/wp-content/uploads/2014/12/mysql_logo.jpg"
              className={navImageClasses}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img
              alt="..."
              src="https://www.mindinventory.com/blog/wp-content/uploads/2017/08/reactjs.jpg"
              className={navImageClasses}
            />
            <img
              alt="..."
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/90562701/original/2efb936eb6ad65c1257e56f9ff1c16ab104bbf8d/fix-any-html-css-javascript-errors-website-bugs-or-issues.png"
              className={navImageClasses}
            />
            <img
              alt="..."
              src="https://static.cdn-cdpl.com/source/13629/codepolitan_firebase_banner_700_350-image(700x350-crop).png"
              className={navImageClasses}
            />
            <img
              alt="..."
              src="http://cdn02.androidauthority.net/wp-content/uploads/2016/09/react-native-logo.jpg"
              className={navImageClasses}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img
              alt="..."
              src="https://www.hostingadvice.com/wp-content/uploads/2018/09/node-js-logo.jpg"
              className={navImageClasses}
            />
            <img
              alt="..."
              src="https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.javascript.png"
              className={navImageClasses}
            />
            <img
              alt="..."
              src="http://media02.hongkiat.com/webdev-with-mongodb-part1/mongodb-logo.jpg"
              className={navImageClasses}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
