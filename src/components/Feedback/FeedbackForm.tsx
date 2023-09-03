import React, {FC} from "react";
import { Modal } from "../UI/index"

interface Props {
    isShow: boolean;
}
export const FeedbackForm:FC<Props> = ({isShow}) => {

    return (
        <Modal isShow={isShow}>
        </Modal>
    )
}

