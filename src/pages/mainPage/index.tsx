import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "../../components/mainPage/menuComponent";

const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar dark color={"primary"}>
        <div className={"container-fluid"}>
          <NavbarBrand href={"/"}>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </React.Fragment>
  );
};

export default MainPage;
