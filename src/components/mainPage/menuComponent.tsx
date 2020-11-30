import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Container, Row } from "reactstrap";
import PropTypes from "prop-types";
import { DishInterface } from "../../common/interfaces";
import MenuDetailsComponent from "./menuDetailsComponent";
import MenuCommentsComponent from "./menuCommentsComponent";

interface Props {
  dishes: Array<DishInterface>;
}

const Menu: React.FC<Props> = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState<DishInterface | null>(null);

  const handleCardClick = (dish: DishInterface) => {
    setSelectedDish(dish);
  };

  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className={"col-12 col-md-4 m-1"}>
        <Card onClick={() => handleCardClick(dish)}>
          <CardImg src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <Container fluid={true}>
      <Row className={"d-flex align-items-center justify-content-center"}>{menu}</Row>
      <Row className={"d-flex justify-content-center"}>
        <MenuDetailsComponent dish={selectedDish} />
        <MenuCommentsComponent dish={selectedDish} />
      </Row>
    </Container>
  );
};

Menu.propTypes = {
  dishes: PropTypes.any.isRequired,
};

export default Menu;
