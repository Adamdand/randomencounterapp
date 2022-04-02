import React, { createContext } from "react";
import { IPlayer } from "../Context/Types";

export const defaultUserData = [
  {
    index: 0,
    characterName: "test1",
    characterAC: 2,
    characterInitative: 90,
    characterHealth: 2,
    characterLevel: 3,
  },
  {
    index: 1,
    characterName: "test2",
    characterAC: 2,
    characterInitative: 2,
    characterHealth: 2,
    characterLevel: 2,
  },
  {
    index: 2,
    characterName: "test3",
    characterAC: 3,
    characterInitative: 55,
    characterHealth: 3,
    characterLevel: 3,
  },
] as IPlayer[];
