import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Icon from "@mui/material/Icon";
import styles from "./Breadcrumbs.module.scss";

interface Props {
    links: {
        link: string;
        name: string;
        isActive: boolean;
    }[];
}

const Breadcrumbs: FC<Props> = ({links}) => {

    return (
        <div className={styles.breadcrumbs}>
            {
                links.map((el: any, index: number) => (
                    <NavLink to={el.link}
                             key={index}
                             className={styles.breadcrumbsLink}
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
};

export default Breadcrumbs;
