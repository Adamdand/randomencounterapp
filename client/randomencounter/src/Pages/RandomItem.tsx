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

const RandomItem = (props: IProps) => {
  const { gameType } = props;
  const history = useHistory();
  const classes = useStyle();
  // const { searchemail } = useHomeInspection();
  const { showLoading, hideLoading, loading } = useLoading();
  const { isMobile, isDesktop } = useResponsiveHelper();
  const [itemList, setItemList] = useState<IItem[]>([]);
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

  let tempList: IItem[];
  const getAllMagicItems = async () => {
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
    getAllMagicItems();
    getAllItemTypes();
  }, []);

  const returnRandomItem = (): IItem => {
    const rndInt = Math.floor(Math.random() * itemList.length);
    return itemList[rndInt];
  };

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

  const handleMagicItemChange = () => {
    const tempSelectedItem = returnRandomItem().index;

    getItemDetails(tempSelectedItem);
  };

  const reformatString = (str: string) => {
    const temp = str.replace(/\s+/g, "-").toLowerCase();
    return temp;
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
          Random Item
        </Typography>
      </Box>
      <Box className={classes.root}>
        <Box>
          {/* <FormControl sx={{ width: "250px" }}>
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
          </FormControl> */}
          <Button onClick={handleMagicItemChange}>Random</Button>
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

export default RandomItem;
