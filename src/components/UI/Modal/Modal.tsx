import React, {FC, ReactNode, useContext, useMemo} from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import {getDialogStyle} from "shared/mui-theme";
import {ThemeContext} from "contexts/theme-context";

import "./Modal.scss";

interface Props {
    children: ReactNode;
    isShow: boolean;
    closeModal: () => void;
}

const Modal: FC<Props> = ({children, isShow, closeModal}) => {
    const {theme} = useContext(ThemeContext);
    const CssDialog = useMemo(
        () => styled(Dialog)(getDialogStyle(theme)),
        [theme]
    );

    return (
        <CssDialog
            open={isShow}
            onClose={closeModal}
            maxWidth="xs"
            fullWidth={true}
            PaperProps={{sx: {borderRadius: "17px"}}}
        >
            <IconButton
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                }}
                onClick={closeModal}
                color="primary"
                size="small"
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
            <DialogContent sx={{paddingTop: 6, borderRadius: 17}}>
                {children}
            </DialogContent>
        </CssDialog>
    );
};

export default Modal;
