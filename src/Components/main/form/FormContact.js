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
                            <Col className="form__column">
                                {/*<fieldset className="form__fieldset">*/}
                                {/*    <legend className="form__legend">First name</legend>*/}
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="First name"
                                    >
                                        <Form.Control className="form__input" type="text" placeholder="First name" size="sm"/>
                                    </FloatingLabel>
                                {/*</fieldset>*/}

                            </Col>
                            <Col className="form__column">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last name"
                                >
                                    <Form.Control className="form__input" type="text" placeholder="Last name" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="form__row">
                            <Col className="form__column">
                                <PhoneInput
                                    className="form__input"
                                />
                            </Col>
                            <Col className="form__column">
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
                        <Row className="justify-content-md-center">
                            <Col className="col-md-auto">
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