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
import React, { useLayoutEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IParallaxImages } from "../../../context/Types";

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

const ZoomParalax: React.FC<IProps> = (props: IProps) => {
  const { title, subText, buttonFunction, buttonText, imageList } = props;
  const classes = useStyle();
  const theme = useTheme();
  const preScroll = useRef<any>();
  const elemRef = useRef(null);
  const [scale, setScale] = useState(1.05);

  useLayoutEffect(() => {
    const botPos = (element: any) => element.getBoundingClientRect().bottom;
    const onScroll = () => {
      const divBotPos = botPos(elemRef.current);
      const scrollPos = preScroll.current > window.scrollY;
      preScroll.current = window.scrollY;
      if (scrollPos && divBotPos > window.innerHeight) {
        setScale(1);
        return;
      }
      if (divBotPos < window.innerHeight) {
        setScale(2);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={elemRef}
        style={{ width: 600, height: 600, overflow: "hidden" }}
      >
        <img
          alt="error"
          src="https://i.ytimg.com/vi/W-eT_EaB-R4/maxresdefault.jpg"
          style={{
            transition: "transform 1000ms ease-in-out",
            transform: `scale(${scale})`,
          }}
        />
      </div>
    </>
  );
};

export default ZoomParalax;
