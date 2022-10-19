import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ParallaxBanner } from "react-scroll-parallax";

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
                    scrollSnapType: "x mandatory",
                  }}
                >
                  <Typography variant="h1" sx={{ color: "white" }}>
                    Search For Monsters
                  </Typography>
                </Box>
              ),
              speed: -10,
            },
            {
              children: (
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    paddingTop: "40%",
                    scrollSnapAlign: "start",
                  }}
                >
                  <Typography
                    sx={{ backgroundColor: "transparent", color: "white" }}
                  >
                    asdjkabsd asjkd gasid gaiud gadu aud aud yasodu asod asd
                    asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp
                  </Typography>
                  <Button
                    sx={{
                      marginTop: "48px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                    onClick={goToMonsterSearch}
                  >
                    Monster Search
                  </Button>
                </Box>
              ),
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "3 / 2" }}
        />
        <Box>
          {/* <Button onClick={goToMonsterSearch}>
            <Typography variant="h1" sx={{ color: "white" }}>
              Search For Monsters
            </Typography>
          </Button> */}
        </Box>
        <ParallaxBanner
          layers={[
            {
              image: "/photo/photo_2.jpg",
              speed: -30,
            },
            {
              children: (
                <Box sx={{ backgroundColor: "transparent", paddingTop: "25%" }}>
                  <Typography variant="h1" sx={{ color: "white" }}>
                    Quick Fight
                  </Typography>
                </Box>
              ),
              speed: -10,
            },
            {
              children: (
                <Box sx={{ backgroundColor: "transparent", paddingTop: "40%" }}>
                  <Typography
                    sx={{ backgroundColor: "transparent", color: "white" }}
                  >
                    asdjkabsd asjkd gasid gaiud gadu aud aud yasodu asod asd
                    asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp
                  </Typography>
                  <Button
                    sx={{
                      marginTop: "48px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                    onClick={goToQuickFight}
                  >
                    Quick Fight
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
        <ParallaxBanner
          layers={[
            {
              image: "/photo/photo_3.jpg",
              speed: -30,
            },
            {
              children: (
                <Box sx={{ backgroundColor: "transparent", paddingTop: "25%" }}>
                  <Typography variant="h1" sx={{ color: "white" }}>
                    Detailed Fight
                  </Typography>
                </Box>
              ),
              speed: -10,
            },
            {
              children: (
                <Box sx={{ backgroundColor: "transparent", paddingTop: "40%" }}>
                  <Typography
                    sx={{ backgroundColor: "transparent", color: "white" }}
                  >
                    asdjkabsd asjkd gasid gaiud gadu aud aud yasodu asod asd
                    asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad
                    ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu asod
                    asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
                    aisdig d asd asp
                  </Typography>
                  <Button
                    sx={{
                      marginTop: "48px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                    onClick={goToQuickFight}
                  >
                    Detailed Fight
                  </Button>
                </Box>
              ),
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "3 / 2" }}
        />
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
