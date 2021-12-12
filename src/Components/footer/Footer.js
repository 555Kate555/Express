import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./Footer.scss";
import logoFooter from '../../images/Logotype.svg';
import DMCA from '../../images/DMCA.png';




export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Container >
                    <Row className="main-container">
                        <Col lg={4} md={6} sm={6} className="footer-rights">
                            <img
                                src={logoFooter}
                                className="footer-rights__logo"
                                alt="logoFooter"
                            />
                            <p className="footer-rights__text">
                                All Rights Reserved to info.com
                            </p>
                            <p className="footer-rights__text">
                                © DDD – Web Marketing
                            </p>
                            <p className="footer-rights__text">
                                Privacy Policy
                            </p>
                            <img
                                src={DMCA}
                                alt="DMCA"
                            />

                        </Col>
                        <Col lg={3} md={6} sm={6} className="footer-contacts">
                            <h2 className="footer__header">
                                CONTACT US
                            </h2>
                            <a className="footer-contacts__link footer-contacts__link--uk1" href="tel:+442020202020">
                                <Row>
                                    <Col lg={2} md={2} sm={2} xs={1}>
                                        UK
                                    </Col>
                                    <Col lg={10} md={10} sm={10} xs={11}>
                                        +44-2020202020
                                    </Col>
                                </Row>
                            </a>
                            <a className="footer-contacts__link footer-contacts__link--uk" href="tel:+442020202020">
                                <Row>
                                    <Col lg={2} md={2} sm={2} xs={1}>
                                    </Col>
                                    <Col lg={10} md={10} sm={10} xs={11}>
                                        +44-2020202020
                                    </Col>
                                </Row>
                            </a>
                            <a className="footer-contacts__link footer-contacts__link--aut" href="tel:+442020202020">
                                <Row>
                                    <Col lg={2} md={2} sm={2} xs={1}>
                                        AUT
                                    </Col>
                                    <Col lg={10} md={10} sm={10} xs={11}>
                                        +44-2020202020
                                    </Col>
                                </Row>
                            </a>
                            <a className="footer-contacts__link footer-contacts__link--aus" href="tel:+442020202020">
                                <Row>
                                    <Col lg={2} md={2} sm={2} xs={1}>
                                        AUS
                                    </Col>
                                    <Col lg={10} md={10} sm={10} xs={11}>
                                        +44-2020202020
                                    </Col>
                                </Row>
                            </a>
                        </Col>
                        <Col lg={3} md={8} sm={8} className="footer-address">
                            <Row>
                                <Col lg={12} md={6} sm={5}>
                                    <h2 className="footer__header">
                                        ADDRESS
                                    </h2>
                                    <p className="footer-address__text">
                                        Lorem ipsum set amet
                                    </p>
                                </Col>
                                <Col lg={12} md={6} sm={7} className="footer-hours">
                                    <h2 className="footer__header">
                                        OUR OFFICE HOURS
                                    </h2>
                                    <p>
                                        Mon-Fr: 8:00-18:00 GMT <br/>
                                        Sat/Su: Closed
                                    </p>
                                </Col>
                            </Row>

                        </Col>
                        <Col lg={2} md={4} sm={4} className="footer-email">
                            <h2 className="footer__header">
                                Email US
                            </h2>
                            <a  href="mailto:info@info.com">
                                info@info.com
                            </a>
                        </Col>
                    </Row>

                </Container>
            </footer>
        )
    }
}