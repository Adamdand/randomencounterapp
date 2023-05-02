import React from "react";
import { Typography, Box, Button, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ParalaxComponent from "./Common/ParalaxComponent";
import { IParallaxImages } from "../Context/Types";
import ZoomParalax from "./Common/ZoomParalax";
import dune6 from "./SVGs/dune6.svg";
import dune5 from "./SVGs/dune5.svg";
import dune4 from "./SVGs/dune4.svg";
import dune3 from "./SVGs/dune3.svg";
import dune2 from "./SVGs/dune2.svg";
import dune1 from "./SVGs/dune1.svg";

import sky1 from "./SVGs/sky1.svg";
import grass1 from "./SVGs/grass1.svg";

import mnt1 from "./SVGs/mnt1.svg";
import mnt2 from "./SVGs/mnt2.svg";
import mnt3 from "./SVGs/mnt3.svg";
import mnt4 from "./SVGs/mnt4.svg";

import tree1 from "./SVGs/tree1.svg";
import tree2 from "./SVGs/tree2.svg";
import tree3 from "./SVGs/tree3.svg";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";

interface IProps {
  gameType: string;
  setGameType: (gameType: string) => void;
}

const useStyle = makeStyles((theme) => ({
  root: {
    display: "block",
    flexDirection: "column",
    alignItems: "center",
    spacing: "8px",
    flexBasis: "88%",
    paddingTop: "24px",
    backgroundColor: "black !important",
    width: "100%",
  },
  innerInput: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "21.79px",
    maxLength: 13,
    minLength: 13,
  },
  container: {
    scrollSnapType: "y mandatory",
  },
  childTitle: {
    backgroundColor: "transparent",
    paddingTop: "25%",
    scrollSnapAlign: "start",
    [theme.breakpoints.down("desktop")]: {
      paddingTop: "50%",
    },
    [theme.breakpoints.down("tablet")]: {
      paddingTop: "70%",
    },
  },
  childText: {
    // paddingTop: "40%",
    paddingLeft: "40px",
    paddingRight: "40px",
    [theme.breakpoints.down("desktop")]: {
      paddingTop: "80%",
    },
    [theme.breakpoints.down("tablet")]: {
      paddingTop: "110%",
    },
  },
}));

const Home = (props: IProps) => {
  const { gameType, setGameType } = props;
  const classes = useStyle();
  const { isDesktop } = useResponsiveHelper();
  const goToMonsterSearch = () => {
    setGameType("Monster Search");
  };
  const goToQuickFight = () => {
    setGameType("Quick Fight");
  };
  const goToDetailedFight = () => {
    setGameType("Detailed Fight");
  };

  const parallaxOne = [
    { url: mnt4, width: "100%", top: "-300px", speed: -30 },
    { url: mnt3, width: "100%", top: "100px", speed: -20 },
    { url: mnt2, width: "100%", top: "400px", speed: -10 },
    { url: mnt1, width: "25%", top: "680px", speed: -1 },
  ] as IParallaxImages[];

  const parallaxTwo = [
    { url: dune6, width: "100%", top: "-300px", speed: -30 },
    { url: dune5, width: "100%", top: "-60px", speed: -25 },
    { url: dune4, width: "100%", top: "100px", speed: -20 },
    { url: dune3, width: "100%", top: "200px", speed: -15 },
    { url: dune2, width: "100%", top: "400px", speed: -10 },
    { url: dune1, width: "100%", top: "700px", speed: -5 },
  ] as IParallaxImages[];

  const parallaxThree = [
    { url: sky1, width: "100%", top: "-60px", speed: -5 },
    { url: grass1, width: "100%", top: "200px", speed: -10 },
    { url: tree3, width: "100%", top: "-80px", speed: -15 },
    { url: tree2, width: "100%", top: "0px", speed: -25 },
    { url: tree1, width: "100%", top: "0px", speed: -30 },
  ] as IParallaxImages[];

  return isDesktop ? (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h1" sx={{ color: "white" }}>
          DnD Random Encounter App
        </Typography>
      </Box>
      <Box>
        <ParalaxComponent
          title="Search For Monsters"
          subText={[
            "Don't know which monster to use?",
            "New to Dnd, and don't know many monsters, their challenge ratings, their health and abilities?",
            "Search our databse of monsters to find a monster type that best suits your players skill level.",
          ]}
          buttonFunction={goToMonsterSearch}
          buttonText="Go To Monster Search"
          imageList={parallaxOne}
        />
      </Box>
      <Box sx={{ height: "50px", backgroundColor: "black" }} />

      <Box>
        <ParalaxComponent
          title="Quick Fight"
          subText={[
            `Don't know which monster to use?`,
            `New to Dnd, and don't know many monsters, their challenge
                  ratings, their health and abilities?`,
            `Search our databse of monsters to find a monster type that
                  best suits your players skill level.`,
          ]}
          buttonFunction={goToQuickFight}
          buttonText="Go To Quick Fight"
          imageList={parallaxTwo}
        />
      </Box>
      {/* <Box>
        <ZoomParalax
          title="Quick Fight"
          subText={[
            `Don't know which monster to use?`,
            `New to Dnd, and don't know many monsters, their challenge
                  ratings, their health and abilities?`,
            `Search our databse of monsters to find a monster type that
                  best suits your players skill level.`,
          ]}
          buttonFunction={goToQuickFight}
          buttonText="Go To Quick Fight"
          imageList={parallaxTwo}
        />
      </Box> */}
      <Box sx={{ height: "50px", backgroundColor: "black" }} />
      <Box>
        <ParalaxComponent
          title="Detailed Fight"
          subText={[
            "Having trouble keeping track of the initiative order?",
            "Want to know which players are low on health, so your monsters know who is bleeding and appears to be a weakened target?",
            "Use the Detailed Fight program to optionally keep track of:",
            "- Initiative",
            "- Health (optional)",
            "- AC (optional)",
            "- Death rolls",
            "- Add a reasonable number of monsters to the fight with an appropriate Challenge Ratting.",
            "- Automatically order the players and monsters based on their initiative.",
            "- Add and Remove players/monsters from the initiative order.",
          ]}
          buttonFunction={goToDetailedFight}
          buttonText="Go To Detailed Fight"
          imageList={parallaxThree}
        />
      </Box>

      {/* <Box sx={{ height: "200px", backgroundColor: "black" }} /> */}
    </Box>
  ) : (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h1" sx={{ color: "white" }}>
          DnD Random Encounter App
        </Typography>
      </Box>
      <Box
        sx={{
          display: "block",
          paddingTop: "24px",
          flexDirection: "column",
          contentAlign: "center",
          alignText: "center",
          color: "white",
        }}
      >
        <Box className={classes.container}>
          <ParallaxBanner
            layers={[
              {
                // TODO: import scroll snapping
                image: "/photo/photo_1.jpg",
                speed: -30,
              },
              {
                children: (
                  <Box className={classes.childTitle}>
                    <Typography
                      variant="h1"
                      sx={{ color: "white", textShadow: "1px 1px 2px black" }}
                    >
                      Search For Monsters
                    </Typography>
                  </Box>
                ),
                speed: -10,
              },
              {
                children: (
                  <Box className={classes.childText}>
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "white",
                        textShadow: "1px 1px 2px black",
                      }}
                    >
                      <Box> Don&apos;t know which monster to use?</Box>
                      <Box>
                        New to Dnd, and don&apos;t know many monsters, their
                        challenge ratings, their health and abilities?
                      </Box>
                      <Box sx={{ paddingTop: "16px" }}>
                        Search our databse of monsters to find a monster type
                        that best suits your players skill level.
                      </Box>
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        marginTop: "48px",
                        backgroundColor: "black",
                        color: "black",
                        "&:hover": {
                          borderColor: "black",
                          backgroundColor: "maroon",
                          color: "white",
                        },
                      }}
                      onClick={goToMonsterSearch}
                    >
                      <Typography
                        variant="body1"
                        sx={{ color: "white", textShadow: "1px 1px 2px black" }}
                      >
                        Go To Monster Search
                      </Typography>

                      <ArrowForwardIcon
                        sx={{
                          paddingLeft: "8px",
                          color: "white",
                        }}
                      />
                    </Button>
                  </Box>
                ),
                speed: -20,
              },
            ]}
            style={{ width: "100%", height: window.screen.height }}
          />
        </Box>
        <Box>
          {/* <Button onClick={goToMonsterSearch}>
            <Typography variant="h1" sx={{ color: "white" }}>
              Search For Monsters
            </Typography>
          </Button> */}
        </Box>
        <Box className={classes.container}>
          <ParallaxBanner
            layers={[
              {
                image: "/photo/photo_2.jpg",
                speed: -30,
              },
              {
                children: (
                  <Box className={classes.childTitle}>
                    <Typography
                      variant="h1"
                      sx={{ color: "white", textShadow: "1px 1px 2px black" }}
                    >
                      Quick Fight
                    </Typography>
                  </Box>
                ),
                speed: -10,
              },
              {
                children: (
                  <Box className={classes.childText}>
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "white",
                        textShadow: "1px 1px 2px black",
                      }}
                    >
                      <Box>
                        Not sure how strong of a monster or how many monsters
                        your party should fight?
                      </Box>
                      <Box>
                        Tired of your players complaining to you about the
                        difficulty of their battles?
                      </Box>
                      <Box>Blaim it on us!!!</Box>
                      <Box sx={{ paddingTop: "16px" }}>
                        We will randomly select monsters with reasonable
                        challenge rattings for your players to fight.
                      </Box>{" "}
                      <Box>
                        If they all get destroyed, just throw your hands up and
                        let them know it wasnt your fault, it was fait!
                      </Box>
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        marginTop: "48px",
                        backgroundColor: "black",
                        color: "black",
                        "&:hover": {
                          borderColor: "black",
                          backgroundColor: "maroon",
                          color: "white",
                        },
                      }}
                      onClick={goToQuickFight}
                    >
                      <Typography
                        variant="body1"
                        sx={{ color: "white", textShadow: "1px 1px 2px black" }}
                      >
                        Go To Quick Fight
                      </Typography>

                      <ArrowForwardIcon
                        sx={{
                          paddingLeft: "8px",
                          color: "white",
                        }}
                      />
                    </Button>
                  </Box>
                ),
                speed: -20,
              },
            ]}
            style={{ width: "100%", height: window.screen.height }}
          />
          <Box>
            {/* <Button onClick={goToQuickFight}>
            <Typography variant="h1" sx={{ color: "white" }}>
              Quick Fight
            </Typography>
          </Button> */}
          </Box>
        </Box>
        <Box className={classes.container}>
          <ParallaxBanner
            layers={[
              {
                image: "/photo/photo_3.jpg",
                speed: -30,
              },
              {
                children: (
                  <Box className={classes.childTitle}>
                    <Typography
                      variant="h1"
                      sx={{ color: "white", textShadow: "1px 1px 2px black" }}
                    >
                      Detailed Fight
                    </Typography>
                  </Box>
                ),
                speed: -10,
              },
              {
                children: (
                  <Box className={classes.childText}>
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "white",
                        textShadow: "1px 1px 2px black",
                      }}
                    >
                      <Box>
                        Having trouble keeping track of the initiative order?
                      </Box>
                      <Box>
                        Want to know which players are low on health, so your
                        monsters know who is bleeding and appears to be a
                        weakened target?
                      </Box>
                      <Box sx={{ paddingTop: "16px" }}>
                        Use the Detailed Fight program to optionally keep track
                        of:
                      </Box>{" "}
                      <Box>- Initiative</Box> <Box>- Health - optional.</Box>{" "}
                      <Box>- AC - optional.</Box> <Box>- Death rolls.</Box>{" "}
                      <Box>
                        - Add a reasonable number of monsters to the fight with
                        an appropriate Challenge Ratting.
                      </Box>{" "}
                      <Box>
                        - Automatically order the players and monsters based on
                        their initiative.
                      </Box>{" "}
                      <Box>
                        - Add and Remove players/monsters from the initiative
                        order.
                      </Box>
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        marginTop: "48px",
                        backgroundColor: "black",
                        color: "black",
                        "&:hover": {
                          borderColor: "black",
                          backgroundColor: "maroon",
                          color: "white",
                        },
                      }}
                      onClick={goToDetailedFight}
                    >
                      <Typography
                        variant="body1"
                        sx={{ color: "white", textShadow: "1px 1px 2px black" }}
                      >
                        Go To Detailed Fight
                      </Typography>

                      <ArrowForwardIcon
                        sx={{
                          paddingLeft: "8px",
                          color: "white",
                        }}
                      />
                    </Button>
                  </Box>
                ),
                speed: -20,
              },
            ]}
            style={{ width: "100%", height: window.screen.height }}
          />
        </Box>
        <Box>
          {/* <Button onClick={goToDetailedFight}>
            <Typography variant="h1" sx={{ color: "white" }}>
              Detailed Fight
            </Typography>
          </Button> */}
        </Box>
        <Box sx={{ color: "black", width: "100%", display: "flex" }} />
      </Box>
    </Box>
  );
};

export default Home;
