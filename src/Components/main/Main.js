import React, {Component} from "react";
import {Container} from "react-bootstrap";
import Consultation from "./consultation/Consultation";
import FormContact from "./form/FormContact";


export default class Main extends Component {
    render() {
        return (
            <main>
                <section className="consultation">
                    <Container>
                        <Consultation/>
                        <FormContact/>
                    </Container>
                </section>
            </main>
        )
    }
}