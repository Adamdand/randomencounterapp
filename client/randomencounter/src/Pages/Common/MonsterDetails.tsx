import {
  Box,
  Card,
  CardMedia,
  Typography,
  useTheme,
  Divider,
} from "@mui/material";
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
      {monsterData.name !== "" && (
        <Box
          sx={{
            width: "100%",
            paddingTop: "8px",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
              // textShadow: "-1px -1px 0 #ffffff, 1px -1px 0 #ffffff",
            }}
          >
            Name = {monsterData.name}
          </Typography>
          <Box
            sx={{
              width: "50%",
              paddingLeft: "25%",
            }}
          >
            <Card
              sx={{
                margin: "8px",
              }}
            >
              <CardMedia
                component="img"
                height="max"
                image={`https://www.dnd5eapi.co${monsterData.image}`}
                alt="no image at this time"
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
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Typography>
              Challenge Rating = {monsterData.challenge_rating}
            </Typography>
            <Typography>AC = {monsterData.armor_class}</Typography>
            <Typography>HitPoints = {monsterData.hit_points}</Typography>
            {monsterData.alignment !== "" && (
              <Typography>Alignment = {monsterData.alignment}</Typography>
            )}

            {monsterData.speed.walk !== "" &&
              monsterData.speed.walk !== undefined && (
                <Typography>
                  Speed-walkwalk = {monsterData.speed.walk}
                </Typography>
              )}
            {monsterData.speed.swim !== "" &&
              monsterData.speed.swim !== undefined && (
                <Typography>Speed-swim= {monsterData.speed.swim}</Typography>
              )}
            {monsterData.size !== "" && (
              <Typography>Size = {monsterData.size}</Typography>
            )}
            <Typography>Kill XP = {monsterData.xp}</Typography>
            {monsterData.actions.length > 0 && (
              <Box sx={{ paddingTop: "8px" }}>
                <Typography variant="h6">Actions:</Typography>
                <Divider />
              </Box>
            )}
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
                    {action.name !== "" && (
                      <Typography>Action Name = {action.name}</Typography>
                    )}
                    {action.desc !== "" && (
                      <Typography>Action Desc = {action.desc}</Typography>
                    )}
                    <Divider />
                  </Box>
                );
              }
            )}

            {monsterData.damage_immunities.length > 0 && (
              <Typography>
                Damage Resistances = {monsterData.damage_immunities}
              </Typography>
            )}
            {monsterData.damage_resistances.length > 0 && (
              <Typography>
                Damage Resistances = {monsterData.damage_resistances}
              </Typography>
            )}
            {monsterData.damage_vulnerabilities.length > 0 && (
              <Typography>
                Damage Vulnerabilities ={monsterData.damage_vulnerabilities}
              </Typography>
            )}
          </Box>
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
