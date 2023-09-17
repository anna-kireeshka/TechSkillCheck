import React, {FC, ReactNode} from 'react';
import {useTranslation} from "react-i18next";
import Button from "../Button/Button";
import {useNavigate, useRoutes} from "react-router-dom";
import "./NotFound.scss";

interface  Props {
    page: string;
    linkTitle: string;
    image: string;
    title: string
}
const NotFound: FC<Props> = ({ page, linkTitle, image, title}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <div className="not-found">
            <h1 className="not-found__title">{title}</h1>
            <div className="not-found__image">
                <img src={image} width={860} height={440} alt={t("buttonTitle")}/>
            </div>
            <Button onClickButton={() => navigate(`/${page}`)}>{ linkTitle }</Button>
        </div>
    );
};

export default NotFound;