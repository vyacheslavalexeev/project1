import React from "react";

export class ClicksCounter extends React.Component{
    // constructor(p) {
    //     super(p);
    //     this.state = {
    //         clicksQty:10
    //     }
    state={
        clicksQty:this.props.initValue?this.props.initValue:0,
        textColor:'red'
    }


    render() {
        const {clicksQty, textColor} = this.state;
        return (
            <div>
                <p style={{color:textColor}}>{clicksQty}</p>
                <button onClick={this.btnHandler}>btn</button>
                <button onClick={this.btn2Handler}>btn</button>

            </div>
        );
    };
    btnHandler=()=>{
        const {clicksQty} = this.state;

        // this.setState({clicksQty :clicksQty+1})
        this.setState((state,props)=>{
            return{clicksQty:state.clicksQty+1}
        })

    }
    btn2Handler=()=>{
        const {clicksQty} = this.state;

        this.setState({
            textColor:'blue'
            }
        )

    }


}