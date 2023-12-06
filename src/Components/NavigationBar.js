import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* <Navbar color="dark" dark expand="md" style={{ height: "50px" }}>
        <NavbarBrand href="/">ABC-TECH</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/services" style={{ color: "white" }}>
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <br></br> */}

      <Navbar color="dark" dark expand="md" style={{ height: "50px" }}>
        <NavbarBrand href="/">ABC-TECH</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/services" style={{ color: "white" }}>
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" style={{ color: "white" }}>
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" style={{ color: "white" }}>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" style={{ color: "white" }}>
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
