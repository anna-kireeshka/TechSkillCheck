import React, {FC, memo} from "react";
import Page from "../Layout/Page/Page";
import "./Breadcrumbs.scss";
import {NavLink} from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Icon from "@mui/material/Icon";


interface Props {
    links: {
        link: string;
        name: string;
        isActive: boolean;
    }[];
}

const Breadcrumbs: FC<Props> = memo(({links}) => {
    // const getStylelink = (active: boolean) => {
    //     console.log(active, 'active')
    // console.log(links)
    // const style = cx([
    //     "breadcrumbs__link",
    //     {
    //         active: links[0].isActive,
    //     },
    // ]);
    // // }

    return (
        <Page>
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
        </Page>
    );
});

export default Breadcrumbs;
