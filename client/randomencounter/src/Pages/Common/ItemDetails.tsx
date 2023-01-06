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
import { IItemDetails, IMonsterDetails } from "../../Context/Types";

interface IProps {
  itemData: IItemDetails;
}

const useStyle = makeStyles((theme) => ({
  root: {},
}));

const ItemDetails: React.FC<IProps> = (props: IProps) => {
  const { itemData } = props;
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
      {itemData.name !== "" && (
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
            {itemData.name}
          </Typography>
          <Box
            sx={{
              width: "50%",
              paddingLeft: "25%",
            }}
          >
            {/* <Card
              sx={{
                margin: "8px",
              }}
            >
              <CardMedia
                component="img"
                height="max"
                // image={`https://www.dnd5eapi.co${itemData.}`}
                alt="no image at this time"
              />
              <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              monster picture
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              data
                            </Typography>
                          </CardContent>
            </Card> */}
          </Box>
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Typography>
              Category: {itemData.equipment_category.name}
            </Typography>
            <Typography>Rarity: {itemData.rarity.name}</Typography>
            {itemData.variants.map((variant) => {
              return (
                <Box>
                  <Typography>Variant Name: {variant}</Typography>
                  <Divider />
                </Box>
              );
            })}
            <Typography>
              Desc:
              {itemData.desc.map((txt) => {
                return (
                  <Box>
                    <Typography>{txt}</Typography>
                  </Box>
                );
              })}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ItemDetails;
