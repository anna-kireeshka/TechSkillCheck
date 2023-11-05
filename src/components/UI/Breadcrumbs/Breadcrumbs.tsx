import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Icon from "@mui/material/Icon";
import "./Breadcrumbs.scss";

interface Props {
    links: {
        link: string;
        name: string;
        isActive: boolean;
    }[];
}

const Breadcrumbs: FC<Props> = memo(({links}) => {

    return (
        <div className="breadcrumbs">
            {
                links.map((el: any, index: number) => (
                    <NavLink to={el.link}
                             key={index}
                             className="breadcrumbs__link"
                             style={({isActive}) =>
                                 isActive
                                     ? {
                                         pointerEvents: "none",
                                         fontWeight: 600,
                                         textDecoration: "none"
                                     }
                                     : {cursor: "pointer"}
                             }>
                        {el.name}
                        {
                            el.isActive && (
                                <Icon>
                                    <KeyboardArrowRightIcon/>
                                </Icon>
                            )
                        }

                    </NavLink>
                ))
            }
        </div>
    );
});

export default Breadcrumbs;
