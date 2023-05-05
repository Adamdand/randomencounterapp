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
import {
  IEquipmentDetails,
  IItemDetails,
  IMonsterDetails,
} from "../../../context/Types";

interface IProps {
  equipDetails: IEquipmentDetails;
}

const useStyle = makeStyles((theme) => ({
  root: {},
}));

const MagicItemDetails: React.FC<IProps> = (props: IProps) => {
  const { equipDetails } = props;
  const classes = useStyle();
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ textDecoration: "underline", fontWeight: "bold" }}
      >
        Stats
      </Typography>
      <Box sx={{ width: "100%", paddingTop: "8px" }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          {equipDetails.name}
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "left",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Box>Category: {equipDetails.equipment_category}</Box>
        <Box>
          Desc: <Box>{equipDetails.desc}</Box>
        </Box>

        <Box>
          Cost: {equipDetails.cost.quantity}
          {equipDetails.cost.unit}
        </Box>
        <Box>Weight: {equipDetails.weight}</Box>

        <Box>Damage: {equipDetails.damage}</Box>
        <Box>Props: {equipDetails.properties}</Box>

        <Box>Range: {equipDetails.range}</Box>
        <Box>Wep Range: {equipDetails.weapon_range}</Box>
        <Box>Special: {equipDetails.special}</Box>
        <Box>Category: {equipDetails.equipment_category.name}</Box>
      </Box>
    </Box>
  );
};

export default MagicItemDetails;
