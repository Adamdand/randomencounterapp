import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export interface ILicense {
  licenses: string;
  repository: string;
  licenseUrl: string;
  parents: string;
}

const SetUpInfo = (props: IProps): JSX.Element => {
  const { open, handleClose } = props;
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
          <Typography variant="bodyBold">SetUp Information</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box>
              <Box sx={{ paddingTop: "16px" }}>
                <Box>
                  <Typography
                    variant="bodyRegular"
                    sx={{
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    Filter By Region - Filter *optional*
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="bodyRegular">
                    Choose which type of region/terrain youd like to find
                    monsters for, and we will try to find a reasonable monster
                    for your team to fight.
                    <p>
                      click the &apos;reset filter&apos; button to go back to
                      having the deault &apos;All&apos; regions selected.
                    </p>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ paddingTop: "16px" }}>
                <Box>
                  <Typography
                    variant="bodyRegular"
                    sx={{
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    Get Monsters - Button
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="bodyRegular">
                    Clicking this button will add a reasonable number of
                    monsters with an ideal challenge ratting for your players to
                    battle. These monsters quantity and chellenge ratting is
                    based on the number of players you have, and their average
                    level.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ paddingTop: "16px" }}>
                <Box>
                  <Typography
                    variant="bodyRegular"
                    sx={{
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    Remove Monsters - Button
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="bodyRegular">
                    Clicking this button will remove all of the monsters in the
                    list. Click this button if you want to choose a new random
                    group of monsters to fight.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ paddingTop: "16px" }}>
                <Box>
                  <Typography
                    variant="bodyRegular"
                    sx={{
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    Order List Based On Initiative - Button
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="bodyRegular">
                    Clicking this button will properly order your list of
                    players and monsters based on their initiative.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SetUpInfo;
