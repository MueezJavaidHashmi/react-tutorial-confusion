import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "../../components/mainPage/menuComponent";
import { DISHES } from "../../common/constants";

const MainPage: React.FC = () => {
  const [dishes] = useState(DISHES);

  return (
    <React.Fragment>
      <Navbar dark color={"primary"}>
        <div className={"container-fluid"}>
          <NavbarBrand href={"/"}>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </React.Fragment>
  );
};

export default MainPage;
