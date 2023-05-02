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
}));

const Home = (props: IProps) => {
  const { gameType, setGameType } = props;
  const classes = useStyle();

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

  return (
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
  );
};

export default Home;
