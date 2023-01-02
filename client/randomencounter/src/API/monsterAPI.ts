import axios, { AxiosResponse } from "axios";
import { IMonster, IMonsterDetails } from "../Context/Types";

const monsterAPI = {
  getAllMonsterAxios: async (): Promise<IMonster[]> => {
    return axios
      .get("https://www.dnd5eapi.co/api//monsters")
      .then((response: AxiosResponse) => {
        // console.log("initial call", response.data);
        if (response.data.results.length > 0) {
          return response.data.results as IMonster[];
        }
        return [];

        // return response.data as IMonsterList;
      });
  },
  getSpecificMonsterAxios: async (
    monsterName: string
  ): Promise<IMonsterDetails> => {
    return axios
      .get(`https://www.dnd5eapi.co/api/monsters/${monsterName}`)
      .then((response: AxiosResponse) => {
        console.log("specific monster", response.data);

        return response.data as IMonsterDetails;
      });
  },

  getMonstersWithRating: async (
    monsterRating: number | string
  ): Promise<IMonster[]> => {
    if (monsterRating === "All") {
      return axios
        .get("https://www.dnd5eapi.co/api//monsters")
        .then((response: AxiosResponse) => {
          // console.log("initial call", response.data);
          if (response.data.results.length > 0) {
            return response.data.results as IMonster[];
          }
          return [];

          // return response.data as IMonsterList;
        });
    }
    return axios
      .get(
        `https://www.dnd5eapi.co/api/monsters?challenge_rating=${monsterRating}`
      )
      .then((response: AxiosResponse) => {
        // console.log("monster Rating", response.data.results);
        return response.data.results as IMonster[];
      });
  },

  // getAllMonsters: async () => {
  //   const data = await axios.get("http://localhost:8000/api/monsters");
  //   console.log(data);
  // },

  // getMonster: async () => {
  //   const data = await axios.get("http://localhost:8000/api/monster");
  //   console.log(data);
  // },
};

export default monsterAPI;
