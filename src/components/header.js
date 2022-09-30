import React, { Component } from "react";

class Header extends Component {
    render(){
        if(!this.props.formSubmitted){
            return (
                <h1 className = "header">
                    Create your CV
                </h1>
            );
        }
    }
}

export default Header;