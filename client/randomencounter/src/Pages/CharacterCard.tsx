import {
  Box,
  CardMedia,
  Theme,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import { IPlayer } from "../Context/Types";
import DeathSaves from "./DeathSaves";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";

interface IProps {
  data: IPlayer;
  onClick: (myCharacter: IPlayer) => void;
  succeedADeathSave: (num: number) => void;
  failADeathSave: (num: number) => void;
  removePlayer: (playerToDelete: string) => void;
  isSelected: boolean;
  isHealedOne: boolean;
  isDamagedOne: boolean;
  isHealedTwo: boolean;
  isDamagedTwo: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: "8px",
    width: "100%",
    height: "190px",
    fontColor: theme.palette.primary.main,
    border: "1px solid maroon",
    backgroundColor: "wheat",
    borderRadius: "8px",
    [theme.breakpoints.only("mobile")]: {
      height: "150px",
    },
    "&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: "#FFB8AA",
      color: "white",
    },
  },
  selected: {
    borderColor: theme.palette.primary.main,
    backgroundColor: "maroon",
    color: "white",
  },
  classIcon: {
    width: "50px",
  },
  media: {
    // this is the`className` passed to `CardMedia` later
    height: 100, // as an example I am modifying width and height
    width: "33%",
  },
  deleteIcon: {
    color: "white",
    "&:hover": {
      color: "maroon",
    },
  },
}));

const CharacterCard: React.FC<IProps> = (props: IProps) => {
  const {
    data,
    isSelected,
    onClick,
    succeedADeathSave,
    failADeathSave,
    removePlayer,
    isHealedOne,
    isDamagedOne,
    isHealedTwo,
    isDamagedTwo,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { isMobile, isTablet } = useResponsiveHelper();

  const playerDead = (): boolean => {
    if (data.characterHealth !== null && data.characterMaxHealth !== null) {
      if ((data.characterHealth / data.characterMaxHealth) * 100 <= 0) {
        return true;
      }
      return false;
    }
    return false;
  };

  const getHealthColours = (): string => {
    if (data.characterHealth !== null && data.characterMaxHealth !== null) {
      if ((data.characterHealth / data.characterMaxHealth) * 100 > 100) {
        return "blue";
      }
      if ((data.characterHealth / data.characterMaxHealth) * 100 > 50) {
        return "green";
      }
      if ((data.characterHealth / data.characterMaxHealth) * 100 > 25) {
        return "orange";
      }
      if ((data.characterHealth / data.characterMaxHealth) * 100 <= 25) {
        return "red";
      }
    }
    return "black";
  };

  const shortenName = (longName: string): string => {
    const allowedLength = isMobile ? 8 : isTablet ? 11 : 15;
    let shortenedName = longName;
    if (longName.length > 8) {
      shortenedName = `${longName.substring(0, allowedLength)}...`;
    }
    return shortenedName;
  };

  return (
    <Box
      className={classes.root}
      boxShadow={8}
      style={{
        cursor: "pointer",
        borderColor: isSelected
          ? theme.palette.primary.main
          : data.characterHealth !== null && data.characterHealth <= 0
          ? "red"
          : "",
        // backgroundColor: isSelected ? "maroon" : "",
        // color: isSelected ? "white" : "",
      }}
    >
      {isSelected && (
        <>
          <Box
            sx={{
              position: "relative",
              zindex: 60,
              height: "0px",
              width: "100%",
            }}
          >
            <CardMedia
              component="img"
              image="borders/desktopBorder.png"
              sx={{
                objectFit: "fill",
                color: "white",
                fontSize: "24px",
                height: isMobile ? "150px" : "190px",
              }}
            >
              {}
            </CardMedia>
          </Box>
          <Box
            sx={{
              position: "relative",
              zindex: 60,
              height: "0px",
              width: "100%",
            }}
          >
            <CardMedia
              component="img"
              image="borders/topRightBorder.png"
              sx={{
                objectFit: "fill",
                color: "white",
                fontSize: "24px",
                height: isMobile ? "150px" : "190px",
              }}
            >
              {}
            </CardMedia>
          </Box>
        </>
      )}
      {isHealedOne && isSelected && (
        <Box
          sx={{
            position: "relative",
            zindex: 30,
            height: "0px",
            width: "100%",
          }}
        >
          <CardMedia
            image="damageAndHealingPics/heal1.png"
            sx={{
              color: "white",
              fontSize: "24px",
              height: isMobile ? "140px" : "190px",
            }}
          >
            {}
          </CardMedia>
        </Box>
      )}
      {isHealedTwo && isSelected && (
        <Box
          sx={{
            position: "relative",
            zindex: 30,
            height: "0px",
            width: "100%",
          }}
        >
          <CardMedia
            image="damageAndHealingPics/heal2.png"
            sx={{
              color: "white",
              fontSize: "24px",
              height: isMobile ? "140px" : "190px",
            }}
          >
            {}
          </CardMedia>
        </Box>
      )}
      {isDamagedOne && isSelected && (
        <Box
          sx={{
            position: "relative",
            zindex: 30,
            height: "0px",
            width: "100%",
          }}
        >
          <CardMedia
            image="damageAndHealingPics/damage1.png"
            sx={{
              color: "white",
              fontSize: "24px",
              height: isMobile ? "140px" : "190px",
            }}
          >
            {}
          </CardMedia>
        </Box>
      )}
      {isDamagedTwo && isSelected && (
        <Box
          sx={{
            position: "relative",
            zindex: 30,
            height: "0px",
            width: "100%",
          }}
        >
          <CardMedia
            image="damageAndHealingPics/damage2.png"
            sx={{
              color: "white",
              fontSize: "24px",
              height: isMobile ? "140px" : "190px",
            }}
          >
            {}
          </CardMedia>
        </Box>
      )}
      <Box>
        <Tooltip title="delete" placement="top">
          <Box
            sx={{
              height: "24px",
              width: "24px",
              borderRadius: "16px",
              backgroundColor: "black",
              position: "relative",
              left: 0,
              top: -4,
              zIndex: 70,
            }}
            onClick={() => removePlayer(data.characterName)}
          >
            <ClearIcon className={classes.deleteIcon} />
          </Box>
        </Tooltip>
        <Box
          display="flex"
          flexDirection="row"
          paddingTop={playerDead() ? (isMobile ? "0px" : "12px") : "0px"}
          justifyContent="space-evenly"
          alignItems="center"
          style={{ cursor: "pointer" }}
          onClick={() => onClick(data)}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "80px",
              zindex: 10,
              paddingLeft: "8px",
            }}
          >
            <Box
              sx={{
                wordWrap: "break-word",
                textAlign: "left",
              }}
            >
              <Typography>Name</Typography>
              <Typography>AC</Typography>
              <Typography>HP</Typography>
              <Typography>Lvl</Typography>
              <Typography>{`${isMobile ? "Init" : "Initiative"}`}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "150px",
              paddingLeft: "4px",
            }}
          >
            <Box sx={{ wordWrap: "break-word", textAlign: "left" }}>
              <Tooltip title={`${data.characterName}`} placement="top">
                <Typography
                  sx={{ fontWeight: "bolder", textDecoration: "underline" }}
                >
                  {shortenName(data.characterName)}
                </Typography>
              </Tooltip>
              <Typography>{data.characterAC}</Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ color: getHealthColours, fontWeight: "bold" }}
                >
                  {data.characterHealth}
                </Typography>
                <Typography sx={{ paddingLeft: "4px" }}>
                  / {data.characterMaxHealth}
                </Typography>
              </Box>
              <Typography>{data.characterLevel}</Typography>
              <Typography>{data.characterInitative}</Typography>
            </Box>
          </Box>
          <Box sx={{ width: "180px" }}>
            {playerDead() && (
              <DeathSaves
                isDead={true}
                successSaves={data.successSaves}
                failSaves={data.failSaves}
                succeedADeathSave={succeedADeathSave}
                failADeathSave={failADeathSave}
              />
            )}
            {(getHealthColours() === "green" ||
              getHealthColours() === "blue") && (
              <Box sx={{ width: isMobile ? "120px" : "170px" }}>
                <CardMedia
                  component="img"
                  image={
                    data.type === "human"
                      ? "smilePics/happy.png"
                      : "smilePics/happyMonster.png"
                  }
                  alt="monster image"
                />
              </Box>
            )}
            {getHealthColours() === "orange" && (
              <Box sx={{ width: isMobile ? "120px" : "170px" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={
                    data.type === "human"
                      ? "smilePics/medium.png"
                      : "smilePics/mediumMonster.png"
                  }
                  alt="monster image"
                />
              </Box>
            )}
            {getHealthColours() === "red" && playerDead() === false && (
              <Box sx={{ width: isMobile ? "120px" : "170px" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={
                    data.type === "human"
                      ? "smilePics/sad.png"
                      : "smilePics/sadMonster.png"
                  }
                  alt="monster image"
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CharacterCard;
