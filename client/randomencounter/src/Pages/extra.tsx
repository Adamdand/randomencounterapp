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
import {
  IEquipError,
  IEquipmentDetails,
  IItem,
  IItemDetails,
} from "../Context/Types";
import itemAPI from "../API/itemAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";
import MonsterDetails from "./Common/MonsterDetails";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";
import { allMonstersEnv, monsterRegions } from "../API/monsterSort";
import ItemDetails from "./Common/ItemDetails";

interface IProps {
  gameType: string;
}

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

const extra = (props: IProps) => {
  const { gameType } = props;
  const history = useHistory();
  const classes = useStyle();
  // const { searchemail } = useHomeInspection();
  const { showLoading, hideLoading, loading } = useLoading();
  const { isMobile, isDesktop } = useResponsiveHelper();
  const [itemList, setItemList] = useState<IItem[]>([]);
  // const [monsterRatingList, setMonsterRatingList] = useState<IItem[]>([]);
  const [selectedCR, setSelectedCR] = useState<number | string>("All");
  const [selectedEquipment, setSelectedEquipment] =
    useState<IEquipmentDetails | null>(null);
  const [equipList, setEquipList] = useState<IItem[]>([]);
  const [equipTypeList, setEquipTypeList] = useState<IItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<IItem>({
    index: "null",
    name: "null",
    url: "null",
  });
  const [itemDetails, setItemDetails] = useState<IItemDetails>();
  const [equipDetails, setEquipDetails] = useState<IEquipmentDetails>();

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

  const getAllItemTypes = async () => {
    try {
      tempList = await itemAPI.getAllEquipmentTypesAxios();
    } catch (error) {
      console.log("error: ", error);
    }
    if (tempList.length > 0) {
      setEquipList(tempList);
      // setMonsterRatingList(tempList);
    } else {
      setEquipList([]);
    }
    itemList.map((item) => {
      return console.log("types: ", item.name);
    });
  };

  useEffect(() => {
    getAllItems();
    getAllItemTypes();
  }, []);

  const resetFilters = (): void => {
    // setSelectedCR("All");
    setSelectedEquipment(null);
    setEquipTypeList([]);
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

  const getEquipDetails = async (equipName: string) => {
    let tempItemDetails: IEquipmentDetails;
    if (equipName !== null) {
      try {
        tempItemDetails = await itemAPI.getEquipDetailsAxios(equipName);
        setEquipDetails(tempItemDetails);
        console.log("equip details :", tempItemDetails);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleItemChange = (event: any) => {
    const tempSelectedItem = event.target.value;
    console.log("set selected Item", tempSelectedItem);
    setSelectedItem(event.target.value);
    getItemDetails(tempSelectedItem);
    setSelectedCR("All");
    setSelectedEquipment(null);
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

  const reformatString = (str: string) => {
    const temp = str.replace(/\s+/g, "-").toLowerCase();
    return temp;
  };

  const handleEquipmentTypeChange = async (event: any) => {
    const tempItemType = event.target.value;
    setSelectedEquipment(tempItemType);
    if (tempItemType !== undefined) {
      const formatedType = reformatString(tempItemType);
      console.log("FOTMATED TYPE: ", formatedType);
      const list = itemAPI.getEquipTypeAxios(formatedType);

      setEquipTypeList(await list);
      console.log("itemList with type: ", list);
    }
  };

  // const handleRegionChange = (event: any) => {
  //   const tempRegion = event.target.value;
  //   setSelectedItemType(tempRegion);
  // };

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
            <Typography variant="h3">Magical Items</Typography>
            <Select
              fullWidth={true}
              labelId="item"
              id="item"
              value={selectedItem}
              onChange={handleItemChange}
            >
              {itemList.map((item) => (
                <MenuItem value={item.index}>
                  <Typography>{item.name}</Typography>
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
            <Typography variant="h3">Equipment</Typography>
            <Select
              fullWidth={true}
              labelId="Region"
              id="Region"
              value={selectedEquipment?.name}
              onChange={handleEquipmentTypeChange}
              defaultValue="None"
            >
              {equipList.map((equip) => (
                <MenuItem value={equip.name}>
                  <Typography>{equip.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <Box>
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
            </Box> */}

          {selectedCR && (
            <Box sx={{ width: "100%", paddingTop: "16px" }}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Item type {selectedEquipment} options
              </Typography>

              <Box
                sx={{
                  height: "160px",
                  width: "100%",
                  overflowY: "scroll",
                  backgroundColor: "rgba(0,0,0,.05)",
                }}
                className={classes.scrollBar}
              >
                {equipTypeList.map((list) => {
                  return (
                    <Box>
                      <Button onClick={() => getEquipDetails(list.index)}>
                        <Typography
                          display="flex"
                          flexDirection="row"
                          justifyContent="space-evenly"
                          alignItems="center"
                          style={{ cursor: "pointer" }}
                        >
                          <Box>{list.name}</Box>
                        </Typography>
                      </Button>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
        <Box>
          {equipDetails !== undefined &&
          equipDetails !== null &&
          equipDetails.name ? (
            <Box className={classes.monsterInfo}>
              <Typography
                variant="h3"
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Stats
              </Typography>
              <Box>{equipDetails.name}</Box>
              <Box>Desc: {equipDetails.desc}</Box>

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
              {/* {equipDetails.name !== "" && (
                  <ItemDetails itemData={itemDetails} />
                )}
                {itemDetails.name === "" && (
                  <Typography>No Item Selected</Typography>
                )} */}
            </Box>
          ) : (
            <></>
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

export default extra;
