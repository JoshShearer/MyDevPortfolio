import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
// import MyCarousel from "components/Carousel/Carousel.js";
import Quote from "components/Typography/Quote.js";
import { MyPhotos } from "./MyPhotos";
import profile from "assets/img/faces/Josh.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Motorcycle } from "@material-ui/icons";

const useStyles = makeStyles(styles);
const photoData = MyPhotos;

const getPhotos = photoData => {
  const images = photoData.photos.map(images => images.src);
  // const carouselImages = images.map((image)=> )
};
export default function ProfilePage(props) {
  // const Generate
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Josh Shearer</h3>
                    <h6>
                      DESIGNER, ENGINEER, DEVELOPER, TRAVELER, PHOTOGRAPHER
                    </h6>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://www.flickr.com/photos/badshearer"
                      target="_blank"
                    >
                      <i className={"fab fa-flickr"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://www.instagram.com/j_shearer83"
                      target="_blank"
                    >
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href="https://www.linkedin.com/in/joshshearer/"
                      target="_blank"
                    >
                      <i className={"fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
              <div className={classes.typo}>
                <Quote
                  text="“The small wisdom is like water in a glass:
                          clear, transparent, pure.
                          The great wisdom is like the water in the sea:
                          dark, mysterious, impenetrable.”"
                  author="Rabindranath Tagore"
                />
              </div>
            </div>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "PHOTOGRAPHY",
                      tabIcon: Camera,
                      tabContent: (
                        // <MyCarousel modal={true} images={photoData}/>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/4894/45935502555_2f67f4525e_m.jpg"
                              width="240"
                              height="180"
                              alt="20190110_131623"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/4413/36739958362_d6b357e792_m.jpg"
                              width="240"
                              height="86"
                              alt="_DSC1990-Pano"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/849/39718694400_97c278f836_m.jpg"
                              width="240"
                              height="160"
                              alt="_DSC3436"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/869/40528225894_2eac07c24e_m.jpg"
                              width="240"
                              height="180"
                              alt="GOPR0332"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/1846/44291032431_9050d0e351_m.jpg"
                              width="240"
                              height="97"
                              alt="20180818_082245"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/933/43285116024_690e779504_m.jpg"
                              width="240"
                              height="117"
                              alt="20180812_114422"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/796/41402022931_5ceeb622e1_m.jpg"
                              width="240"
                              height="180"
                              alt="20180328_070033"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/863/40347081415_b7ebefe479_m.jpg"
                              width="240"
                              height="160"
                              alt="_DSC3372"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/1839/30064290398_e1e96dc95c_m.jpg"
                              width="240"
                              height="117"
                              alt="20180801_180845"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/4878/31852230738_c21d53fdae_m.jpg"
                              width="240"
                              height="180"
                              alt="GOPR4331-2"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/1793/43097805785_3bcf95a9a1_m.jpg"
                              width="240"
                              height="160"
                              alt="_DSC3742"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/1899/44457522001_3565d1c3aa_m.jpg"
                              width="240"
                              height="135"
                              alt="20180902_100627"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
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
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://www.technotification.com/wp-content/uploads/2017/05/Python-programming-compressed.jpg"
                              className={navImageClasses}
                            />
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
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Hobbies",
                      tabIcon: Motorcycle,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/7822/39884966423_1fa301b24c_c.jpg"
                              width="800"
                              height="600"
                              alt="20190110_132102"
                              // width="240" height="180" alt="20190105_104329"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/7821/31906232367_8a874ac7b2_m.jpg"
                              // width="240" height="180" alt="20190104_164334"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/1832/43868879451_f13522cc69_m.jpg"
                              width="240"
                              height="117"
                              alt="20180727_055932"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/1837/43098036925_2214218111_m.jpg"
                              width="240"
                              height="180"
                              alt="G0010856"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://live.staticflickr.com/891/41411702171_e06699c419_m.jpg"
                              width="240"
                              height="180"
                              alt="20180328_094551"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
