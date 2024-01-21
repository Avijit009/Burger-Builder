import React from "react";
import "./Header.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

// import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="Navigation">
      <Navbar style={{
        backgroundColor: "#D70F64",
        height: '70px'
      }}>
        <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
          {/* Using logo from public/assets */}
          <img src='assets/logo.png' alt="Logo" width={80}/>
          {/* Using logo from src/assets [Need to import this logo before using] */}
          {/* <img src={Logo} alt="Logo" width={80}/> */}
        </NavbarBrand>
        <Nav className="mr-md-5">
          <NavItem>
            <NavLink href="#" className="NavLink">Something</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
