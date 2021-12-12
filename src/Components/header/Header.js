import {Navbar, NavDropdown, Container, Nav,Row,Col} from "react-bootstrap";
import React, {Component} from "react";
import logo from '../../images/logo.svg';
import "./Header.scss";
import Button from "../buttons/Button";


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerToggle: false,
        };

        this.addActiveClass= this.addActiveClass.bind(this);
    }

    addActiveClass(status) {
        this.setState({ headerToggle: status });
    };

    render() {
        return (
            <header  className={`header ${this.state.headerToggle ? "header__menu--mobile" : ""}`}>
                <Container>
                    <Row>
                        <Col lg={2} md={2} sm={6} xs={6}>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    className="header__logo"
                                    alt="logo"
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col className="header__menu" lg={10} md={10} sm={6} xs={6}>
                            <Navbar collapseOnSelect expand="md" onToggle={(status) => this.addActiveClass(status)}>
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