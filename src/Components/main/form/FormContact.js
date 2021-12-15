import React, {Component} from "react";
import {Form, Col, Row, FloatingLabel} from "react-bootstrap";
import "./FormContact.scss";
import Button from "../../buttons/Button";
import PhoneInput from "./PhoneInput";





export default class FormContact extends Component {
    render() {
        return (
            <div className="main-container form-container">
                <Form className="form-block mx-auto ">
                    <h2 className="form__title"><span className="form__title--blue">Contact</span> Us</h2>
                        <Row className="form__row">
                            <Col className="form__column" lg={6} md={6} sm={12}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="First name"
                                    >
                                        <Form.Control className="form__input" type="text" placeholder="First name" size="sm"/>
                                    </FloatingLabel>
                            </Col>
                            <Col className="form__column" lg={6} md={6} sm={12}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last name"
                                >
                                    <Form.Control className="form__input" type="text" placeholder="Last name" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="form__row">
                            <Col className="form__column" lg={6} md={6} sm={12}>
                                <PhoneInput
                                    className="form__input"
                                />
                            </Col>
                            <Col className="form__column" lg={6} md={6} sm={12}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Enter email"
                                >
                                    <Form.Control className="form__input" type="email" placeholder="Enter email" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form__column-textarea">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Tell Us What Happened"
                                >
                                    <Form.Control
                                        className="form__textarea"
                                        as="textarea"
                                        placeholder="Tell Us What Happened"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col className="col-auto">
                                <Button
                                    type="submit"
                                    name="Send"
                                    className="button button-main button-send "
                                />
                            </Col>
                        </Row>
                </Form>
            </div>
        )
    }
}