import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import Button from "components/UI/Button/Button";
import NotFound404 from "assets/image/notFound404.png";
import NotFoundSection from "assets/image/notFound.png";
import ContainerCenter from 'components/UI/Layout/ContainerCenter/ContainerCenter';
import Container from "components/UI/Layout/Container/Container";

import "./NotFound.scss";

interface Props {
    page: string;
    linkTitle: string;
    image: string;
    title: string
}

const NotFound: FC<Props> = ({page, linkTitle, image, title}) => {
    const navigate = useNavigate();
    return (
        <Container>
            <ContainerCenter>
                <div className="not-found">
                    <div className={image === "404" ? "not-found__image" : "not-section__image"}>
                        <img src={image === "404" ? NotFound404 : NotFoundSection} alt="NotFound"/>
                    </div>
                    <h1 className="not-found__title">{title}</h1>
                    {linkTitle && <Button onClickButton={() => navigate(`/${page}`)}>{linkTitle}</Button>}
                </div>
            </ContainerCenter>
        </Container>
    );
};

export default NotFound;