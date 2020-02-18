import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VPNKey from "@material-ui/icons/VpnKey";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import SentimentVerySatisfied from "@material-ui/icons/SentimentVerySatisfied";
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk projects</h2>
          <h5 className={classes.description}>
            We provide custom development solutions. Our focus in on small
            business and startup's that need to develop a scalable web presence
            in one or more of the following: eCommerce/Online shopping,
            iPhone/Android app development (React), data analysis and machine
            learning.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Ecommerce"
              description="Speed and security are a priority when helping our clients develop an ecommerce presence.  Providing a great customer experience will help your business grow beyond expectations."
              icon={VPNKey}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="High Speed"
              description="We optimize the front end on the same technology used to makes websites and apps like facebook ultra fast despite the large datasets present."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Scalable"
              description="We focus on the future of your business. From websites to apps to customer relationships.  We build solutions that are built to remain lighting fast requiring minimal upkeep as your business grows by magnitudes"
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Data Driven"
              description="We can help you put your data to use in a way that helps to grow your business.  Most data is collected but never completely utilized to drive improved sales and customer support."
              icon={TrendingUp}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Deep Learning"
              description="You would be surprised what happens when you put your existing dataset to good use."
              icon={FlightTakeoff}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Friends and Partners"
              description="We focus our business on helping our customers grow."
              icon={SentimentVerySatisfied}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
