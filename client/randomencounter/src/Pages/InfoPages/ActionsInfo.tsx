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

const ActionsInfo = (props: IProps): JSX.Element => {
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
          <Typography variant="bodyBold">Action Information</Typography>
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
                    Value Input Field
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="bodyRegular">
                    Input any numerical value here. This number will later be
                    used to increase/decrease a player/monsters health using the
                    other buttons.
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
                    Damage - Button
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="bodyRegular">
                    Clicking this button will lower the player/monsters health
                    by the number placed in the input field.
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
                    Heal - Button
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="bodyRegular">
                    Clicking this button will increase the player/monsters
                    health by the number placed in the input field.
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
                    Next Turn - Button
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="bodyRegular">
                    Clicking this button will end the current player/monsters
                    turn, moving them to the bottom of the initiative order and
                    allowing the next player/monster to move to the top of the
                    initiative order.
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

export default ActionsInfo;
