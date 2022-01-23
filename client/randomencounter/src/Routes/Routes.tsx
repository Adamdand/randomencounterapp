import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import useLoading from "../Hooks/useLoading";
// import MyAccount from 'Pages/MyAccount';
import MainPage from "../Pages/MainPage";
// import LogOutPage from '../Pages/LogOutPage';
// import NewAccount from '../Pages/NewAccount';
// import CreateNewCharacter from '../Pages/NewCharacter/CreateNewCharacter';

const Routes: React.FC = () => {
  // const { signInAnon } = useFirebaseAuth();
  const [hasSignedIn, setHasSignedIn] = React.useState<boolean>(false);
  const { loading, showLoading, hideLoading } = useLoading();

  const renderRoutes = (signedIn: boolean): JSX.Element | null => {
    let component = loading;

    if (signedIn) {
      if (loading === null) {
        component = (
          <Box display="flex" flexDirection="column">
            <Route component={Routes} />
          </Box>
        );
      }
    }
    return component;
  };

  return (
    <Switch>
      <Route exact={true} path="/" component={MainPage} />
      {/* <Route exact={true} path="/dnd/logout" component={LogOutPage} />
            <Route exact={true} path="/dnd/new-account" component={NewAccount} />
            <Route exact={true} path="/dnd/myaccount" component={MyAccount} />
            <Route exact={true} path="/dnd/myaccount-createnewcharacter" component={CreateNewCharacter} /> */}
    </Switch>
  );
};

export default Routes;
