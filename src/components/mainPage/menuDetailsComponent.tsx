import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { DishInterface } from "../../common/interfaces";

interface Props {
  dish: DishInterface | null;
}

const MenuDetailsComponent: React.FC<Props> = ({ dish }) => {
  const renderCard = () => {
    if (dish) {
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

  return <div className={"col-12 col-md-4 m-1"}>{renderCard()}</div>;
};

MenuDetailsComponent.propTypes = {
  dish: PropTypes.any.isRequired,
};

export default MenuDetailsComponent;
