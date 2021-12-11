import {Navbar, NavDropdown, Container, Nav,Row,Col} from "react-bootstrap";
import React, {Component} from "react";
import logo from '../../images/logo.svg';
import "./Header.scss";
import Button from "../buttons/Button";




export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <Container>
                    <Row>
                        <Col lg={2} md={2} sm={6}>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    className="header__logo"
                                    alt="logo"
                                />
                            </Navbar.Brand>

                        </Col>
                        <Col lg={10} md={10} sm={6}>
                            <Navbar collapseOnSelect expand="md">


                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mx-auto">
                                        <Nav.Link bsPrefix="header__link nav-link" href="#home">Home</Nav.Link>
                                        <Nav.Link bsPrefix="header__link nav-link" href="#about">About us</Nav.Link>
                                        <NavDropdown title="Our services" bsPrefix="header__link header__link-dropdown nav-link">
                                            <NavDropdown.Item bsPrefix="header__link--sub" href="#">Lorem ipsum</NavDropdown.Item>
                                            <NavDropdown.Item bsPrefix="header__link--sub" href="#">Lorem ipsum</NavDropdown.Item>
                                            <NavDropdown.Item bsPrefix="header__link--sub" href="#">Lorem ipsum</NavDropdown.Item>
                                            <NavDropdown.Item bsPrefix="header__link--sub" href="#">Lorem ipsum</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link bsPrefix="header__link nav-link" href="#contact">Contact us</Nav.Link>

                                    </Nav>
                                </Navbar.Collapse>
                                <Button
                                name="Call us"
                                className="button button-header"
                            />
                            </Navbar>

                        </Col>
                    </Row>
                </Container>

            </header>

        )
    }

}