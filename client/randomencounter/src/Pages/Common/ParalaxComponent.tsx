import {
  Box,
  Card,
  CardMedia,
  Typography,
  useTheme,
  Divider,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IParallaxImages } from "../../Context/Types";

interface IProps {
  title: string;
  subText: string[];
  buttonFunction: () => void;
  buttonText: string;
  imageList: IParallaxImages[];
}

const useStyle = makeStyles((theme) => ({
  root: {},
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

const ParalaxComponent: React.FC<IProps> = (props: IProps) => {
  const { title, subText, buttonFunction, buttonText, imageList } = props;
  const classes = useStyle();
  const theme = useTheme();

  return (
    <Box sx={{ height: "100%" }}>
      <Box
        sx={{
          position: "relative",

          height: "100vh",
          perspective: "1px",
          overflow: "hidden",
        }}
      >
        {imageList.map((paralaxData: IParallaxImages) => {
          return (
            <Parallax speed={paralaxData.speed}>
              <Box
                sx={{
                  display: "block",
                  width: paralaxData.width,
                  height: "100%",
                  position: "absolute",
                  top: paralaxData.top,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <CardMedia component="img" src={paralaxData.url} alt="404" />
              </Box>
            </Parallax>
          );
        })}
        <Parallax speed={0}>
          <Box
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <Box className={classes.childTitle}>
              <Typography
                variant="h1"
                sx={{ color: "white", textShadow: "1px 1px 2px black" }}
              >
                {title}
              </Typography>
            </Box>

            <Box className={classes.childText}>
              <Typography
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  textShadow: "1px 1px 2px black",
                }}
              >
                {subText.map((text: string) => {
                  return <Box> {text}</Box>;
                })}
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
                onClick={buttonFunction}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "white", textShadow: "1px 1px 2px black" }}
                >
                  {buttonText}
                </Typography>

                <ArrowForwardIcon
                  sx={{
                    paddingLeft: "8px",
                    color: "white",
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Parallax>
      </Box>
    </Box>
  );
};

export default ParalaxComponent;
