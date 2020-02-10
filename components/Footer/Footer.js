/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/profile-page"
                // component={Link}
                className={classes.block}
                // onClick={0}
                // target="_blank"
              >
                About Me
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/technical-page"
                className={classes.block}
                // target="_blank
              >
                Technical Skills
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/landing-page"
                className={classes.block}
                // target="_blank"
              >
                Contact
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          Copyright 
          &copy; {1900 + new Date().getYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
