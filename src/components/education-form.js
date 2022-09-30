import React, { Component } from "react";

class EducationForm extends Component {
    constructor(props) {
        super(props);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.state = {
          displayForm : true,
          formSubmitted: this.props.formSubmitted,
        };
    }

    changeDisplay = (e) => {
        e.preventDefault();
        this.setState({
            displayForm: false,
          });
    }

    render(){
        const displayForm = this.state.displayForm;
        if(displayForm){
            if(this.props.formSubmitted){

            }
            else{
                return (
                    <div>
                        <form className = "education-form">
                            <div>
                                <input className = "form-section" type = "text" placeholder = "School/University Name"></input>
                            </div>
                            <div className = "form-section">
                                <input type = "text" placeholder = "Degree"></input>
                                <input type = "text" placeholder = "Major of Study"></input>
                            </div>
                            <div className = "form-section">
                                <input type = "text" placeholder = "From"></input>
                                <input type = "text" placeholder = "To"></input>
                            </div>
                            <button onClick = {this.changeDisplay} className = "delete-button">Delete</button>
                        </form>
                    </div>
                );
            }
        }
    }
}

export default EducationForm;