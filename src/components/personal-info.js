import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor() {
        super();
        this.changeInfo = this.changeInfo.bind(this);
        this.state = {
          name : "",
          emailAddress: "",
          phoneNumber: "",
          linkedIn: "",
        };
    }

    changeInfo = (e) => {
        var newState = {};
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }

    render(){
        if(this.props.formSubmitted){
            return (
                <div className = "personal-info-cv">
                    <p>{this.state.name}</p>
                    <p>{this.state.emailAddress}</p>
                    <p>{this.state.phoneNumber}</p>
                    <p>{this.state.linkedIn}</p>
                </div>
            );
        }
        else{
            return (
            <div>
                <form className = "personal-info-form">
                    <input type = "text" id = "name" placeholder = "Name" onBlur = {this.changeInfo}></input>
                    <input type = "text" id = "emailAddress" placeholder = "Email Address" onBlur = {this.changeInfo}></input>
                    <input type = "text" id = "phoneNumber" placeholder = "Phone Number" onBlur = {this.changeInfo}></input>
                    <input type = "text" id = "linkedIn" placeholder = "LinkedIn" onBlur = {this.changeInfo}></input>
                </form>
            </div>
            );
        }
    }
}

export default PersonalInfo;

