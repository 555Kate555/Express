import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import decorationLine from "../../../images/Decor.svg";
import Button from "../../buttons/Button";
import "./Consultation.scss";


export default class Consultation extends Component {
    render() {
        return (
           <div className="consultation-container justify-content-md-center">
               <Row>
                   <Col className="mx-auto" lg={6}>
                       <h1 className="consultation__title ">
                           Lorem ipsum set ammet test-test
                       </h1>
                   </Col>
               </Row>
               <Row>
                   <Col>
                       <h2 className="consultation__subtitle">
                           LET US HELP YOU GET IT ALL BACK!
                       </h2>
                   </Col>
               </Row>
               <Row className="justify-content-md-center">
                   <Col className="col-md-auto">
                       <img
                           src={decorationLine}
                           className="consultation__img"
                           alt="decoration-line"
                       />
                   </Col>
               </Row>
               <Row className="justify-content-md-center">
                   <Col className="col-md-auto">
                       <p className="consultation__text">
                           We currently take cases<br/>
                           that are $10,000 US and up
                       </p>
                       <Button
                           name="Get a free consultation"
                           className="button button-main"
                       />
                   </Col>
               </Row>
           </div>
        )
    }
}