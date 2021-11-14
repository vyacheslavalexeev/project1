import React from "react";

export class ClicksCounter extends React.Component{
    constructor(p) {
        super(p);
        this.state = {
            clicksQty:10
        }
    }
    render() {
        const {clicksQty} = this.state;
        return (
            <div>
                <p>{clicksQty}</p>
                <button onClick={this.btnHandler}>btn</button>
            </div>
        );
    };
    btnHandler=()=>{
        this.setState({clicksQty:50})
    }


}