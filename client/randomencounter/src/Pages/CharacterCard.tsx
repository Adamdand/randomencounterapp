import { Box, Theme, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
import { IPlayer } from "../Context/Types";

interface IProps {
  data: IPlayer;
  onClick: (myCharacter: IPlayer) => void;
  isSelected: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: "8px",
    width: "100%",
    height: "100%",
    fontColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    border: "1px solid #DDDDDD",
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    [theme.breakpoints.only("mobile")]: { marginRight: "0px" },
    "&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primaryHover,
      color: theme.palette.primary.main,
    },
  },
  selected: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primaryHover,
    color: theme.palette.primary.main,
  },
  classIcon: {
    width: "50px",
  },
}));

const CharacterCard: React.FC<IProps> = (props: IProps) => {
  const { data, isSelected, onClick } = props;
  const classes = useStyles();
  const theme = useTheme();

  const getHealthPercent = (): string => {
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

  return (
    <Box
      className={classes.root}
      style={{
        cursor: "pointer",
        borderColor: isSelected
          ? theme.palette.primary.main
          : data.characterHealth !== null && data.characterHealth <= 0
          ? "red"
          : "",
        backgroundColor: isSelected ? theme.palette.primaryHover : "",
        color: isSelected ? theme.palette.primary.main : "",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        style={{ cursor: "pointer" }}
        onClick={() => onClick(data)}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{ width: "145px", wordWrap: "break-word", textAlign: "left" }}
          >
            <Typography>Name</Typography>
            <Typography>AC</Typography>
            <Typography>HP</Typography>
            <Typography>Lvl</Typography>
            <Typography>Initiative</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{ width: "145px", wordWrap: "break-word", textAlign: "left" }}
          >
            <Typography
              sx={{ fontWeight: "bolder", textDecoration: "underline" }}
            >
              {data.characterName}
            </Typography>
            <Typography>{data.characterAC}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ color: getHealthPercent }}>
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
      </Box>
    </Box>
  );
};

export default CharacterCard;
