import React, {Component} from "react";
import "./Button.scss";




export default class Button extends Component {
    render() {
        const {name,className} = this.props;
        return (
            <div className="button-container">
                <button className={className}>
                    {name}
                </button>
            </div>
        )
    }
}