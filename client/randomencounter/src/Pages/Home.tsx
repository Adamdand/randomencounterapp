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
    paddingTop: "100px",
    backgroundColor: "black",
    width: "100%",
    height: "10000px",
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
      {/* <Box>
      <SpinningObj />
    </Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          top: "50%",
          right: "50%",
          contentAlign: "center",
          alignText: "center",
          color: "white",
        }}
      >
        <ParallaxBanner
          layers={[
            {
              image: "/photo/photo_1.jpg",
              speed: -20,
            },
            {
              children: (
                <Typography variant="h1" sx={{ color: "white" }}>
                  My Headline
                </Typography>
              ),
              speed: -10,
            },
            {
              children: (
                <Box sx={{ backgroundColor: "transparent" }}>
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
              speed: -10,
            },
          ]}
          style={{ aspectRatio: "2 / 1" }}
        />
        <Typography variant="h1" sx={{ color: "white" }}>
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
        </Box>
        <ParallaxBanner
          layers={[
            {
              image: "/photo/photo_2.jpg",
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "2 / 1" }}
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
        <ParallaxBanner
          layers={[
            {
              image: "/photo/photo_3.jpg",
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "2 / 1" }}
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
