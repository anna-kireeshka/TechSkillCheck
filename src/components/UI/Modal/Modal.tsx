import React, { FC, ReactNode } from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton"

import "./Modal.scss";

interface Props {
  children: ReactNode;
  isShow: boolean;
}

const Modal: FC<Props> = ({ children, isShow }) => {
  if (isShow) {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <IconButton>
              <CloseIcon />
            </IconButton>
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
