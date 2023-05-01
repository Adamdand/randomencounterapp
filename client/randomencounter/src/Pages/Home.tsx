import React from "react";
import { Typography, Box, Button, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ParalaxComponent from "./Common/ParalaxComponent";
import { IParallaxImages } from "../Context/Types";
import ZoomParalax from "./Common/ZoomParalax";

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
    { url: "/photo/mnt4.jpg", width: "100%", top: "-300px", speed: -30 },
    { url: "/photo/mnt3.jpg", width: "100%", top: "100px", speed: -20 },
    { url: "/photo/mnt2.jpg", width: "100%", top: "400px", speed: -10 },
    { url: "/photo/mnt1.jpg", width: "25%", top: "660px", speed: -1 },
  ] as IParallaxImages[];

  const parallaxTwo = [
    { url: "/photo/dune6.jpg", width: "100%", top: "-300px", speed: -30 },
    { url: "/photo/dune5.jpg", width: "100%", top: "-60px", speed: -25 },
    { url: "/photo/dune4.jpg", width: "100%", top: "100px", speed: -20 },
    { url: "/photo/dune3.jpg", width: "100%", top: "200px", speed: -15 },
    { url: "/photo/dune2.jpg", width: "100%", top: "400px", speed: -10 },
    { url: "/photo/dune1.jpg", width: "100%", top: "700px", speed: -5 },
  ] as IParallaxImages[];

  const parallaxThree = [
    { url: "/photo/sky1.jpg", width: "100%", top: "-60px", speed: -5 },
    { url: "/photo/grass1.jpg", width: "100%", top: "200px", speed: -10 },
    { url: "/photo/tree3.jpg", width: "100%", top: "-80px", speed: -15 },
    { url: "/photo/tree2.jpg", width: "100%", top: "0px", speed: -25 },
    { url: "/photo/tree1.jpg", width: "100%", top: "0px", speed: -30 },
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
      {/* <Box sx={{ height: "200px", backgroundColor: "black" }} /> */}

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
      {/* <Box sx={{ height: "200px", backgroundColor: "black" }} /> */}
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
