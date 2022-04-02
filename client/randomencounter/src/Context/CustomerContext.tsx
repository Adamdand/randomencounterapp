import React, { createContext, useState } from "react";
import { defaultUserData } from "../API/DummyData";
import { IPlayer, IUserData } from "./Types";

interface IProps {
  children?: React.ReactNode;
}

interface ICustomerAction {
  setUserData: React.Dispatch<React.SetStateAction<IPlayer[]>>;
}

const CustomerDataContext = createContext<IPlayer[]>([] as IPlayer[]);
const CustomerActionContext = createContext<ICustomerAction>({
  setUserData: React.useState,
} as ICustomerAction);

const CustomerProvider: React.FC<IProps> = (props: IProps) => {
  const [userData, setUserData] = React.useState<IPlayer[]>(defaultUserData);
  return (
    <CustomerDataContext.Provider value={userData}>
      <CustomerActionContext.Provider value={{ setUserData }}>
        {props.children}
      </CustomerActionContext.Provider>
    </CustomerDataContext.Provider>
  );
};

export { CustomerActionContext, CustomerDataContext };

export default CustomerProvider;
