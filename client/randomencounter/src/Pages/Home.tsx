import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ParallaxBanner } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    backgroundColor: "black",
    width: "100%",
    height: window.screen.height,
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
  childText: {
    backgroundColor: "transparent",
    paddingTop: "40%",
    scrollSnapAlign: "start",
    paddingLeft: "40px",
    paddingRight: "40px",
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

  return (
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
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      paddingTop: "25%",
                      scrollSnapAlign: "start",
                    }}
                  >
                    <Typography variant="h1" sx={{ color: "white", 
                      textShadow: "1px 1px 2px black"
                      }}>
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
                      sx={{ backgroundColor: "transparent", color: "white",   textShadow: "1px 1px 2px black" }}
                    >
                      <Box> Dont know which monster to use?</Box>
                      <Box>
                        New to Dnd, and dont know many monsters, their challenge
                        rattings, their health and abilities?
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
                        backgroundColor: "white",
                        color: "black",
                      }}
                      onClick={goToMonsterSearch}
                    >
                      Go To Monster Search
                      <ArrowForwardIcon sx={{ paddingLeft: "8px" }} />
                    </Button>
                  </Box>
                ),
                speed: -20,
              },
            ]}
            style={{ aspectRatio: "3 / 2" }}
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
                  <Box
                    sx={{ backgroundColor: "transparent", paddingTop: "25%" }}
                  >
                    <Typography variant="h1" sx={{ color: "white", textShadow: "1px 1px 2px black" }}>
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
                      sx={{ backgroundColor: "transparent", color: "white",  textShadow: "1px 1px 2px black" }}
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
                      sx={{
                        marginTop: "48px",
                        backgroundColor: "white",
                        color: "black",
                      }}
                      onClick={goToQuickFight}
                    >
                      Go To Quick Fight
                      <ArrowForwardIcon sx={{ paddingLeft: "8px" }} />
                    </Button>
                  </Box>
                ),
                speed: -20,
              },
            ]}
            style={{ aspectRatio: "3 / 2" }}
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
                  <Box
                    sx={{ backgroundColor: "transparent", paddingTop: "25%" }}
                  >
                    <Typography variant="h1" sx={{ color: "white",  textShadow: "1px 1px 2px black" }}>
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
                      sx={{ backgroundColor: "transparent", color: "white",  textShadow: "1px 1px 2px black" }}
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
                      sx={{
                        marginTop: "48px",
                        backgroundColor: "white",
                        color: "black",
                      }}
                      onClick={goToQuickFight}
                    >
                      Go To Detailed Fight
                      <ArrowForwardIcon sx={{ paddingLeft: "8px" }} />
                    </Button>
                  </Box>
                ),
                speed: -20,
              },
            ]}
            style={{ aspectRatio: "3 / 2" }}
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
