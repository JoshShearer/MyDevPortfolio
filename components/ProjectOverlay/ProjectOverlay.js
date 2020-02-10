import React, { useState, forwardRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    backgroundColor: grey[800],
    color: grey[100],
    borderRadius: "10px"
  },
  media: {
    height: 280
  },
  avatar: {
    marginLeft: "auto"
  }
});
const myUseStyles = makeStyles(styles);

export default function ProjectOverlay(props) {
  const [classicModal, setClassicModal] = useState(false);

  const classes = useStyles();
  const classy = myUseStyles();
  const navImageClasses = classNames(
    classes.media,
    props.className,
    classy.Card
  );

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={() => setClassicModal(true)}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={4}></GridItem>
          </GridContainer>
          <CardMedia className={navImageClasses} image={props.imageLink} />
          <CardContent>
            <Typography variant="h6" component="h6">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={classicModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setClassicModal(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            {/* <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => setClassicModal(false)}
              justify="right"
            >
              <Close className={classes.modalClose} />
            </IconButton> */}
            <h4 className={classes.modalTitle}>
              <strong>{props.title} Project</strong>
            </h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <h5>
              <strong>Skills: </strong>
              {props.skills}
            </h5>
            <h5>
              <strong>ToolSet Utilized: </strong>
              {props.toolset}
            </h5>
            <h5>
              <strong>Notable Libraries: </strong>
              {props.notableLibraries}
            </h5>
            <br />
            <h5>
              <strong>Key Lessons Learned</strong>
            </h5>
            <p>{props.keyLessons}</p>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => setClassicModal(false)}
              color="danger"
              simple
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <CardActions>
          <Button
            href={props.demoLink}
            size="large"
            target="_blank"
            color="inherit"
            className={classes.avatar}
          >
            Demo
          </Button>
          <Button
            href={props.githubLink}
            size="large"
            target="_blank"
            color="inherit"
          >
            Code
          </Button>
        </CardActions>
      </Card>
      <br />
    </div>
  );
}
