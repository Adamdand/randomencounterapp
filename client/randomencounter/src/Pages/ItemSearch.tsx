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
  const [selectedEquipment, setSelectedEquipment] =
    useState<IEquipmentDetails | null>(null);
  const [equipList, setEquipList] = useState<IItem[]>([]);
  const [equipTypeList, setEquipTypeList] = useState<IItem[]>([]);
  const [selectedMagicalItem, setSelectedMagicalItem] = useState<IItem | null>({
    index: "null",
    name: "null",
    url: "null",
  });
  const [itemDetails, setItemDetails] = useState<IItemDetails | null>();
  const [equipDetails, setEquipDetails] = useState<IEquipmentDetails | null>(
    null
  );
  const [basicEquipList, setBasicEquipList] = useState<IItem[]>([]);
  const [selectedBasicItem, setSelectedBasicItem] = useState<IItem | null>({
    index: "null",
    name: "null",
    url: "null",
  });

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

  const getBasicEquipList = async () => {
    let tempEquipList: IItem[];
    try {
      tempEquipList = await itemAPI.getBasicEquipListAxios();
      setBasicEquipList(tempEquipList);
      console.log("equip list :", tempEquipList);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getAllItems();
    getAllItemTypes();
    getBasicEquipList();
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
    console.log("equipName: ", equipName);
    if (equipName !== null) {
      try {
        tempItemDetails = await itemAPI.getEquipDetailsAxios(equipName);

        if (basicEquipList.some((el) => el.index === equipName)) {
          setEquipDetails(tempItemDetails);
          console.log("equip details :", tempItemDetails);
        } else {
          setEquipDetails(null);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleMagicItemChange = (event: any) => {
    const tempSelectedItem = event.target.value;
    console.log("set selected Item", tempSelectedItem);
    setSelectedMagicalItem(event.target.value);
    getItemDetails(tempSelectedItem);
    setEquipDetails(null);
    // setSelectedEquipment(null);
    setSelectedBasicItem(null);
  };

  const handleBasicItemChange = (event: any) => {
    const tempSelectedItem = event.target.value;
    console.log("set selected Item", tempSelectedItem);
    setSelectedBasicItem(tempSelectedItem);
    getEquipDetails(tempSelectedItem);
    setSelectedMagicalItem(null);
    setItemDetails(null);
    // setSelectedEquipment(null);
    // setEquipDetails(null);
  };

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
              value={selectedMagicalItem}
              onChange={handleMagicItemChange}
            >
              {itemList.map((item) => (
                <MenuItem value={item.index}>
                  <Typography>{item.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl sx={{ width: "250px" }}>
            <Typography variant="h3">Basic Items</Typography>
            <Select
              fullWidth={true}
              labelId="item"
              id="item"
              value={selectedBasicItem}
              onChange={handleBasicItemChange}
            >
              {basicEquipList.map((item) => (
                <MenuItem value={item.index}>
                  <Typography>{item.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          {equipDetails !== undefined &&
          equipDetails !== null &&
          equipDetails.name ? (
            <Box className={classes.monsterInfo}>
              <Typography
                variant="h3"
                sx={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  paddingBottom: "8px",
                }}
              >
                Stats
              </Typography>
              <Box
                sx={{
                  textAlign: "left",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
              >
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
              </Box>
            </Box>
          ) : (
            <> </>
          )}
        </Box>
        <Box>
          {itemDetails !== null && itemDetails !== undefined ? (
            <Box className={classes.monsterInfo}>
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
