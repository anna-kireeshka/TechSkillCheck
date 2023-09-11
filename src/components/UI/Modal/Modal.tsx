import React, { FC, ReactNode, useMemo, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { getDesignTokens } from "../../../shared/mui-theme";
import { ThemeContext } from "../../../contexts/theme-context";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./Modal.scss";

interface Props {
  children: ReactNode;
  isShow: boolean;
  closeModal: () => void;
}

const Modal: FC<Props> = ({ children, isShow, closeModal }) => {
  const theme = useContext(ThemeContext);
  const muiTheme = useMemo(
    () => createTheme(getDesignTokens(theme.theme)),
    [theme.theme]
  );
  if (isShow) {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <ThemeProvider theme={muiTheme}>
              <IconButton onClick={closeModal} color="primary">
                <CloseIcon />
              </IconButton>
            </ThemeProvider>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
