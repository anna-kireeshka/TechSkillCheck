import { FC, memo } from "react";
import Page from "../UI/Layout/Page/Page"
import CardList from "../UI/CardList/CardList"
import { DirectionsDTO } from "../../shared/types/types";
import "./Directions.scss";

interface Props {
  directions: DirectionsDTO;
  title: string;
}

const Directions: FC<Props> = memo(({ directions, title }) => {
  return (
    <Page>
      <div className="direction">
        <div className="direction_column">
          <h2 className="direction_sub_heading">{title}</h2>
          <CardList directionList={directions} page={"directions"} />
        </div>
      </div>
    </Page>
  );
});

export default Directions;
