import React, {FC, ReactNode} from "react";

interface Props {
    children: ReactNode;
    isShow: boolean;
}

const Modal:FC<Props> = ({children, isShow}) => {
    if (isShow) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <button>x</button>
                    </div>
                    <div className="modal-body">
                        { children }
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default Modal