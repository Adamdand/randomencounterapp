import { Box, Card, CardMedia, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { IMonsterDetails } from "../../Context/Types";

interface IProps {
  monsterData: IMonsterDetails;
}

const useStyle = makeStyles((theme) => ({
  root: {},
}));

const MonsterDetails: React.FC<IProps> = (props: IProps) => {
  const { monsterData } = props;
  const classes = useStyle();
  const theme = useTheme();

  return (
    <Box
      className={classes.root}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      {" "}
      {monsterData.name !== "" && (
        <Box
          sx={{
            width: "100%",
            paddingTop: "16px",
          }}
        >
          <Typography>Name = {monsterData.name}</Typography>
          <Box
            sx={{
              width: "50%",
              paddingLeft: "25%",
            }}
          >
            <Card
              sx={{
                margin: "32px",
              }}
            >
              <CardMedia
                component="img"
                height="max"
                image={`dndMonsterPics/${monsterData.index}.jpeg`}
                alt="monster image"
              />
              {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              monster picture
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              data
                            </Typography>
                          </CardContent> */}
            </Card>
          </Box>
          <Typography>
            Challenge Rating = {monsterData.challenge_rating}
          </Typography>
          <Typography>AC = {monsterData.armor_class}</Typography>
          <Typography>HitPoints = {monsterData.hit_points}</Typography>
          <Typography>Alignment = {monsterData.alignment}</Typography>

          <Typography>Speed-walkwalk = {monsterData.speed.walk}</Typography>
          <Typography>Speed-swim= {monsterData.speed.swim}</Typography>

          <Typography>Size = {monsterData.size}</Typography>

          {monsterData.actions.map(
            (action: {
              name:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              desc:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => {
              return (
                <Box>
                  <Typography>Action Name = {action.name}</Typography>
                  <Typography>Action Desc = {action.desc}</Typography>
                </Box>
              );
            }
          )}

          <Typography>
            Damage Resistances = {monsterData.damage_immunities}
          </Typography>
          <Typography>
            Damage Resistances = {monsterData.damage_resistances}
          </Typography>
          <Typography>
            Damage Vulnerabilities ={monsterData.damage_vulnerabilities}
          </Typography>
        </Box>
      )}
      {monsterData.name === "" && (
        <Box
          sx={{
            width: "100%",
            paddingTop: "16px",
          }}
        >
          <Typography>No Monster Selected</Typography>
        </Box>
      )}
    </Box>
  );
};

export default MonsterDetails;
