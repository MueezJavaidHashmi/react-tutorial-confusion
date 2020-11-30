import React, { useState } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import PropTypes from "prop-types";
import { DishInterface } from "../../common/interfaces";

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
      <div key={dish.id} className={"col-12 col-md-5 m-1"}>
        <Card onClick={() => handleCardClick(dish)}>
          <CardImg src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  const renderSelectedDish = (dish: DishInterface | null) => {
    if (dish !== null) {
      return (
        <Card>
          <CardImg width={"100%"} src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  };

  return (
    <div className={"container"}>
      <div className={"row"}>{menu}</div>
      <div className={"row"}>{renderSelectedDish(selectedDish)}</div>
    </div>
  );
};

Menu.propTypes = {
  dishes: PropTypes.any.isRequired,
};

export default Menu;
