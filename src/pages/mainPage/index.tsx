import React, { useState } from "react";
import { Row } from "reactstrap";
import Menu from "../../components/mainPage/menuComponent";
import { DISHES } from "../../common/constants";
import { DishInterface } from "../../common/interfaces";
import MenuDetailsComponent from "../../components/mainPage/menuDetailsComponent";
import MenuCommentsComponent from "../../components/mainPage/menuCommentsComponent";
import Header from "../../components/header";
import Footer from "../../components/footer";

const MainPage: React.FC = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState<DishInterface | null>(null);

  const handleCardClick = (dish: DishInterface) => {
    setSelectedDish(dish);
  };

  return (
    <React.Fragment>
      <Header />
      <Menu dishes={dishes} handleCardClick={handleCardClick} />
      <Row className={"d-flex justify-content-center"}>
        <MenuDetailsComponent dish={selectedDish} />
        <MenuCommentsComponent dish={selectedDish} />
      </Row>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
