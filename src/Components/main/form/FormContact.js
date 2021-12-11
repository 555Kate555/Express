import React, {Component} from "react";
import {Form, Col, Row, FloatingLabel} from "react-bootstrap";
import "./FormContact.scss";
import Button from "../../buttons/Button";





export default class FormContact extends Component {
    render() {
        return (
            <div className="form-block">
                <Form className="main-container">
                    <h2 className="form__title"><span className="form__title--blue">Contact</span> Us</h2>
                        <Row>
                            <Col className="d-grid gap-2">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="First name"
                                >
                                    <Form.Control type="text" placeholder="First name" />
                                </FloatingLabel>
                            </Col>
                            <Col className="d-grid gap-2">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last name"
                                >
                                    <Form.Control type="text" placeholder="Last name" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Enter email"
                                >
                                    <Form.Control type="email" placeholder="Enter email" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Tell Us What Happened"
                                >
                                    <Form.Control
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