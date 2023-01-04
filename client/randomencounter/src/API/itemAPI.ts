import axios, { AxiosResponse } from "axios";
import { IEquipmentDetails, IItem, IItemDetails } from "../Context/Types";

const monsterAPI = {
  getAllItemsAxios: async (): Promise<IItem[]> => {
    return axios
      .get("https://www.dnd5eapi.co/api/magic-items")
      .then((response: AxiosResponse) => {
        console.log("initial call", response.data);
        if (response.data.results.length > 0) {
          return response.data.results as IItem[];
        }
        return [];

        // return response.data as IMonsterList;
      });
  },
  getSpecificItemAxios: async (itemName: string): Promise<IItemDetails> => {
    return axios
      .get(`https://www.dnd5eapi.co/api/magic-items/${itemName}`)
      .then((response: AxiosResponse) => {
        console.log("specific monster", response.data);

        return response.data as IItemDetails;
      });
  },
  getAllEquipmentTypesAxios: async (): Promise<IItem[]> => {
    return axios
      .get(`https://www.dnd5eapi.co/api/equipment-categories/`)
      .then((response: AxiosResponse) => {
        console.log("initial call", response.data);
        if (response.data.results.length > 0) {
          return response.data.results as IItem[];
        }
        return [];
      });
  },

  getEquipTypeAxios: async (itemType: string): Promise<IItem[]> => {
    return axios
      .get(`https://www.dnd5eapi.co/api/equipment-categories/${itemType}`)
      .then((response: AxiosResponse) => {
        console.log("initial call", response.data);
        if (response.data.equipment.length > 0) {
          return response.data.equipment as IItem[];
        }
        return [];
      });
  },

  getEquipDetailsAxios: async (
    itemType: string
  ): Promise<IEquipmentDetails> => {
    return axios
      .get(`https://www.dnd5eapi.co/api/equipment/${itemType}`)
      .then((response: AxiosResponse) => {
        console.log("initial call", response.data);

        return response.data as IEquipmentDetails;
      });
  },

  getBasicEquipListAxios: async (): Promise<IItem[]> => {
    return axios
      .get(`https://www.dnd5eapi.co/api/equipment/`)
      .then((response: AxiosResponse) => {
        console.log("initial call", response.data);
        if (response.data.results.length > 0) {
          return response.data.results as IItem[];
        }
        return [];
      });
  },

  // getMonstersWithRating: async (
  //   monsterRating: number | string
  // ): Promise<IMonster[]> => {
  //   if (monsterRating === "All") {
  //     return axios
  //       .get("https://www.dnd5eapi.co/api//monsters")
  //       .then((response: AxiosResponse) => {
  //         console.log("initial call", response.data);
  //         if (response.data.results.length > 0) {
  //           return response.data.results as IMonster[];
  //         }
  //         return [];

  //         // return response.data as IMonsterList;
  //       });
  //   }
  //   return axios
  //     .get(
  //       `https://www.dnd5eapi.co/api/monsters?challenge_rating=${monsterRating}`
  //     )
  //     .then((response: AxiosResponse) => {
  //       console.log("monster Rating", response.data.results);
  //       return response.data.results as IMonster[];
  //     });
  // },
};

export default monsterAPI;
