import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ParallaxBanner } from "react-scroll-parallax";

interface IProps {
  gameType: string;
}

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    spacing: "8px",
    flexBasis: "88%",
    paddingTop: "24px",
    backgroundColor: "black",
    width: "100%",
    height: "2000px",
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
  const { gameType } = props;
  const classes = useStyle();

  return (
    <Box className={classes.root} sx={{ display: "flex" }}>
      <Box>
        <Typography variant="h1" sx={{ color: "white" }}>
          DnD Random Encounter App
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          paddingTop: "24px",
          flexDirection: "column",
          contentAlign: "center",
          alignText: "center",
          color: "white",
        }}
      >
        {/* <Box sx={{ height: "100%" }}> */}
        <ParallaxBanner
          layers={[
            {
              image: "/photo/photo_1.jpg",
              speed: -30,
            },
            {
              children: (
                <Box sx={{ backgroundColor: "transparent", paddingTop: "25%" }}>
                  <Typography variant="h1" sx={{ color: "white" }}>
                    Search For Monsters
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
                </Box>
              ),
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "3 / 2" }}
        />
        {/* </Box> */}
        {/* <Typography variant="h1" sx={{ color: "white" }}>
          Random Encounter DnD App
        </Typography>
        <Box sx={{ backgroundColor: "transparent" }}>
          <Typography sx={{ backgroundColor: "transparent", color: "white" }}>
            asdjkabsd asjkd gasid gaiud gadu aud aud yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu
            asod asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
            aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad ipad ai
            dad pasd piasd ipasigd aisdig d asd asp yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu
            asod asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
            aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad ipad ai
            dad pasd piasd ipasigd aisdig d asd asp yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu
            asod asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
            aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad ipad ai
            dad pasd piasd ipasigd aisdig d asd asp yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu
            asod asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
            aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad ipad ai
            dad pasd piasd ipasigd aisdig d asd asp yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp
          </Typography>
        </Box> */}

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
                </Box>
              ),
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "3 / 2" }}
        />
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
                </Box>
              ),
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "3 / 2" }}
        />
        <Box>
          <Typography>
            asdjkabsd asjkd gasid gaiud gadu aud aud yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu
            asod asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
            aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad ipad ai
            dad pasd piasd ipasigd aisdig d asd asp yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu
            asod asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
            aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad ipad ai
            dad pasd piasd ipasigd aisdig d asd asp yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu
            asod asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
            aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad ipad ai
            dad pasd piasd ipasigd aisdig d asd asp yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp yasodu
            asod asd asioyd gaod i aiod aid ad ipad ai dad pasd piasd ipasigd
            aisdig d asd asp yasodu asod asd asioyd gaod i aiod aid ad ipad ai
            dad pasd piasd ipasigd aisdig d asd asp yasodu asod asd asioyd gaod
            i aiod aid ad ipad ai dad pasd piasd ipasigd aisdig d asd asp
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
