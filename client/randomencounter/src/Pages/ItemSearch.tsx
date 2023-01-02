import {
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import { IItem, IItemDetails } from "../Context/Types";
import itemAPI from "../API/itemAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";
import MonsterDetails from "./Common/MonsterDetails";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";
import { allMonstersEnv, monsterRegions } from "../API/monsterSort";
import ItemDetails from "./Common/ItemDetails";

interface IProps {
  gameType: string;
}

const monsterRatings = [
  "All",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
];

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "40px",

    flexDirection: "column",
    alignItems: "center",
    spacing: "8px",
    flexBasis: "72%",
  },
  innerInput: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "21.79px",
    maxLength: 13,
    minLength: 13,
  },
  scrollBar: {
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  monsterInfo: {
    paddingTop: "16px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyConent: "center",
    width: "100%",
  },
}));

const ItemSearch = (props: IProps) => {
  const { gameType } = props;
  const history = useHistory();
  const classes = useStyle();
  // const { searchemail } = useHomeInspection();
  const { showLoading, hideLoading, loading } = useLoading();
  const { isMobile, isDesktop } = useResponsiveHelper();
  const [itemList, setItemList] = useState<IItem[]>([]);
  // const [monsterRatingList, setMonsterRatingList] = useState<IItem[]>([]);
  const [selectedCR, setSelectedCR] = useState<number | string>("All");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<IItem>({
    index: "null",
    name: "null",
    url: "null",
  });
  const [itemDetails, setItemDetails] = useState<IItemDetails>();

  let tempList: IItem[];
  const getAllItems = async () => {
    try {
      tempList = await itemAPI.getAllItemsAxios();
    } catch (error) {
      console.log("error: ", error);
    }
    if (tempList.length > 0) {
      setItemList(tempList);
      // setMonsterRatingList(tempList);
    } else {
      setItemList([]);
    }
    itemList.map((item) => {
      return console.log("name: ", item.name);
    });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const resetFilters = (): void => {
    setSelectedCR("All");
    setSelectedRegion("All");
    // setMonsterRatingList(itemList);
  };

  const getItemDetails = async (itemName: string) => {
    let tempItemDetails: IItemDetails;
    if (itemName !== null) {
      try {
        tempItemDetails = await itemAPI.getSpecificItemAxios(itemName);
        setItemDetails(tempItemDetails);
        console.log("item details :", tempItemDetails);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleMonsterChange = (event: any) => {
    const tempSelectedItem = event.target.value;
    console.log("set selected Monster", tempSelectedItem);
    setSelectedItem(event.target.value);
    getItemDetails(tempSelectedItem);
    setSelectedCR("All");
    setSelectedRegion("All");
  };

  // const getMonsterWithRating = async (monsterRating: number | string) => {
  //   let monstersWithCR: IItem[];
  //   monstersWithCR = [];
  //   try {
  //     monstersWithCR = await itemAPI.getMonstersWithRating(monsterRating);
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  //   if (monstersWithCR.length > 0) {
  //     setMonsterRatingList(monstersWithCR);
  //   }
  // };

  // const handleRatingChange = (event: any) => {
  //   const tempMonsterRating = event.target.value;
  //   setSelectedCR(tempMonsterRating);
  //   if (tempMonsterRating !== undefined) {
  //     const monstersWithCR = getMonsterWithRating(tempMonsterRating);
  //     console.log("itemList with CR: ", monstersWithCR);
  //   }
  // };

  const handleRegionChange = (event: any) => {
    const tempRegion = event.target.value;
    setSelectedRegion(tempRegion);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            backgroundColor: "black",
            paddingBottom: "24px",
            paddingTop: "24px",
          }}
        >
          Item Search
        </Typography>
      </Box>
      <Box className={classes.root}>
        <Box>
          <FormControl sx={{ width: "250px" }}>
            <Typography variant="h3">Search By Item Name</Typography>
            <Select
              fullWidth={true}
              labelId="monster"
              id="monster"
              value={selectedItem}
              onChange={handleMonsterChange}
            >
              {itemList.map((monster) => (
                <MenuItem value={monster.index}>
                  <Typography>{monster.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ paddingTop: "16px" }}>
          {/* <FormControl sx={{ width: "250px" }}>
            <Typography variant="h3">Filter By CR</Typography>
            <Select
              fullWidth={true}
              labelId="CR"
              id="CR"
              value={selectedCR}
              defaultValue="All"
              onChange={handleRatingChange}
            >
              {monsterRatings.map((rating) => (
                <MenuItem value={rating}>
                  <Typography>{rating}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
          <FormControl sx={{ width: "250px" }}>
            <Typography variant="h3">Filter By Region</Typography>
            <Select
              fullWidth={true}
              labelId="Region"
              id="Region"
              value={selectedRegion}
              onChange={handleRegionChange}
              defaultValue="All"
            >
              {monsterRegions.map((region) => (
                <MenuItem value={region}>
                  <Typography>{region}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box>
            <Button
              sx={{
                "&:hover": {
                  borderColor: "black",
                  backgroundColor: "maroon",
                  color: "white",
                },
              }}
              onClick={() => resetFilters()}
            >
              Reset Filters
            </Button>
          </Box>

          {selectedCR && (
            <Box sx={{ width: "100%", paddingTop: "16px" }}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Item Options with CR {selectedCR} & Region {selectedRegion}
              </Typography>

              {/* <Box
                sx={{
                  height: "160px",
                  width: "100%",
                  overflowY: "scroll",
                  backgroundColor: "rgba(0,0,0,.05)",
                }}
                className={classes.scrollBar}
              >
                {monsterRatingList.map((monstersWithRating) => {
                  if (
                    allMonstersEnv.find((element) => {
                      return (
                        element.name === monstersWithRating.name &&
                        element.environments.indexOf(selectedRegion) > -1
                      );
                    })
                  ) {
                    return (
                      <Box>
                        <Button
                        // onClick={() =>
                        //   getMonsterDetails(monstersWithRating.index)
                        // }
                        >
                          <Typography
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                            style={{ cursor: "pointer" }}
                          >
                            <Box>{monstersWithRating.name}</Box>
                          </Typography>
                        </Button>
                      </Box>
                    );
                  }
                  return <></>;
                })}
              </Box> */}
            </Box>
          )}
        </Box>
        <Box>
          {itemDetails !== undefined ? (
            <Box className={classes.monsterInfo}>
              <Typography
                variant="h3"
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Stats
              </Typography>
              {itemDetails.name !== "" && (
                <ItemDetails itemData={itemDetails} />
              )}
              {itemDetails.name === "" && (
                <Typography>No Item Selected</Typography>
              )}
            </Box>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemSearch;
