import axios, { AxiosResponse } from "axios";
import { IMonsterDetails, IMonsterList } from "../Context/Types";

const monsterAPI = {
  getAllMonsterAxios: async (): Promise<IMonsterList> => {
    return axios
      .get<IMonsterList>("https://www.dnd5eapi.co/api//monsters")
      .then((response: AxiosResponse) => {
        console.log(response.data);
        return response.data as IMonsterList;
      });
  },
  getSpecificMonsterAxios: async (
    monsterName: string
  ): Promise<IMonsterDetails> => {
    return axios
      .get<IMonsterDetails>(
        `https://www.dnd5eapi.co/api//monsters/${monsterName}`
      )
      .then((response: AxiosResponse) => {
        console.log(response.data);
        return response.data as IMonsterDetails;
      });
  },

  getAllMonsters: async () => {
    const data = await axios.get("http://localhost:8000/api/monsters");
    console.log(data);
  },

  getMonster: async () => {
    const data = await axios.get("http://localhost:8000/api/monster");
    console.log(data);
  },
};

export default monsterAPI;
