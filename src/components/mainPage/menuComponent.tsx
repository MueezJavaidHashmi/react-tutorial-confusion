import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Container, Row } from "reactstrap";
import PropTypes from "prop-types";
import { DishInterface } from "../../common/interfaces";

interface Props {
  dishes: Array<DishInterface>;
  handleCardClick: (dish: DishInterface) => void;
}

const Menu: React.FC<Props> = ({ dishes, handleCardClick }) => {
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
    </Container>
  );
};

Menu.propTypes = {
  dishes: PropTypes.any.isRequired,
  handleCardClick: PropTypes.any.isRequired,
};

export default Menu;
