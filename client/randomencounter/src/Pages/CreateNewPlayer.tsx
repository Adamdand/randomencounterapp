import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { CustomerDataContext } from "../Context/CustomerContext";
import { IPlayer } from "../Context/Types";

interface IProps {
  open: boolean;
  handleClose: () => void;
  addPlayer: (newPlayerData: IPlayer) => void;
}

const CreateNewPlayer = (props: IProps): JSX.Element => {
  const { open, handleClose, addPlayer } = props;
  const userData = useContext(CustomerDataContext);
  const [newPlayer, setNewPlayer] = useState<IPlayer>({
    index: 0,
    characterName: "",
    characterAC: null,
    characterInitative: 0,
    characterHealth: null,
    characterMaxHealth: null,
    characterLevel: null,
    type: "human",
    successSaves: 0,
    failSaves: 0,
  });

  const addCharacterToList = (completedNewPlayer: IPlayer): void => {
    userData.push(completedNewPlayer);
  };

  const onChangeName = (nameChoice: string): void => {
    const characterObject = {
      ...newPlayer,
      characterName: nameChoice,
      type: "human",
    } as IPlayer;
    setNewPlayer(characterObject);
  };
  const onChangeInitiative = (initiative: number): void => {
    const characterObject = {
      ...newPlayer,
      characterInitative: initiative,
    } as IPlayer;
    setNewPlayer(characterObject);
  };
  const onChangeAC = (ac: number): void => {
    const characterObject = {
      ...newPlayer,
      characterAC: ac,
    } as IPlayer;
    setNewPlayer(characterObject);
  };
  const onChangeLevel = (level: number): void => {
    const characterObject = {
      ...newPlayer,
      characterLevel: level,
    } as IPlayer;
    setNewPlayer(characterObject);
  };
  const onChangeHealth = (health: number): void => {
    const characterObject = {
      ...newPlayer,
      characterHealth: health,
      characterMaxHealth: health,
    } as IPlayer;
    setNewPlayer(characterObject);
  };

  return (
    <Box sx={{ width: "800px" }}>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h3">Add Another Player</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box>
              {" "}
              <Box>Name</Box>
              <TextField
                placeholder="Character Name"
                variant="outlined"
                name="Name"
                value={newPlayer?.characterName}
                // error={checkIfNameTaken(newCharacter?.Name)}
                fullWidth
                onChange={(
                  event: React.ChangeEvent<
                    HTMLTextAreaElement | HTMLInputElement
                  >
                ) => {
                  onChangeName(event.target.value);
                  console.log("change");
                }}
              />
            </Box>
            <Box>
              {" "}
              <Box>AC</Box>
              <TextField
                placeholder="Character Armor Class"
                type="number"
                variant="outlined"
                name="AC"
                value={Number(newPlayer?.characterAC).toString()}
                // error={checkIfNameTaken(newCharacter?.Name)}
                fullWidth
                onChange={(
                  event: React.ChangeEvent<
                    HTMLTextAreaElement | HTMLInputElement
                  >
                ) => {
                  onChangeAC(Number(event.target.value));
                  console.log("change");
                }}
              />
            </Box>

            <Box>
              {" "}
              <Box>Health</Box>
              <TextField
                placeholder="Character Health"
                type="number"
                variant="outlined"
                name="Health"
                value={Number(newPlayer?.characterHealth).toString()}
                // error={checkIfNameTaken(newCharacter?.Name)}
                fullWidth
                onChange={(
                  event: React.ChangeEvent<
                    HTMLTextAreaElement | HTMLInputElement
                  >
                ) => {
                  onChangeHealth(Number(event.target.value));
                  console.log("change");
                }}
              />
            </Box>
            <Box>
              {" "}
              <Box>Level</Box>
              <TextField
                placeholder="Character Level"
                type="number"
                variant="outlined"
                name="Level"
                value={Number(newPlayer?.characterLevel).toString()}
                // error={checkIfNameTaken(newCharacter?.Name)}
                fullWidth
                onChange={(
                  event: React.ChangeEvent<
                    HTMLTextAreaElement | HTMLInputElement
                  >
                ) => {
                  onChangeLevel(Number(event.target.value));
                  console.log("change");
                }}
              />
            </Box>
            <Box>
              {" "}
              <Box>Initiative</Box>
              <TextField
                placeholder="Character Initiative"
                type="number"
                variant="outlined"
                name="Initiative"
                value={Number(newPlayer?.characterInitative).toString()}
                // error={checkIfNameTaken(newCharacter?.Name)}
                fullWidth
                onChange={(
                  event: React.ChangeEvent<
                    HTMLTextAreaElement | HTMLInputElement
                  >
                ) => {
                  onChangeInitiative(Number(event.target.value));
                  console.log("change");
                }}
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              // addCharacterToList(newPlayer);
              addPlayer(newPlayer);
              handleClose();
            }}
          >
            Create
          </Button>
          <Button variant="contained" onClick={handleClose}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateNewPlayer;
