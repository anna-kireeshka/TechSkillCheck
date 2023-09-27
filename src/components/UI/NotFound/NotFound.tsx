import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";
import Page from "../Layout/Page/Page";
import Container from "../Layout/Container/Container";
import "./NotFound.scss";

interface Props {
    page: string;
    linkTitle: string;
    image: string;
    title: string
}

const NotFound: FC<Props> = ({page, linkTitle, image, title}) => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    return (
        <Page>
            <Container>
                <div className="not-found">
                    <h1 className="not-found__title">{title}</h1>
                    <div className="not-found__image">
                        <img src={image} width={860} height={440} alt={t("buttonTitle")}/>
                    </div>
                    {linkTitle && <Button onClickButton={() => navigate(`/${page}`)}>{linkTitle}</Button>}
                </div>
            </Container>
        </Page>
    );
};

export default NotFound;