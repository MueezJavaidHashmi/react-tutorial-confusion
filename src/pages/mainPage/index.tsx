import React, { useState } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import Menu from "../../components/mainPage/menuComponent";
import { DISHES } from "../../common/constants";

const MainPage: React.FC = () => {
  const [dishes] = useState(DISHES);

  return (
    <React.Fragment>
      <Navbar dark color={"primary"}>
        <Container fluid={true}>
          <NavbarBrand href={"/"}>Ristorante Con Fusion</NavbarBrand>
        </Container>
      </Navbar>
      <Menu dishes={dishes} />
    </React.Fragment>
  );
};

export default MainPage;
