import React, { Component } from "react";
import EducationForm from "./education-form.js";

class EducationalExperience extends Component {
    constructor(props) {
        super(props);
        this.addExperience = this.addExperience.bind(this);
        this.state = {
          experiencesList : [],
          keyNumber: 0,
          formSubmitted : this.props.formSubmitted,
        };
    }
    
    addExperience = (e) => {
        e.preventDefault();
        this.setState({
            experiencesList: this.state.experiencesList.concat({key: this.state.keyNumber, value: <EducationForm formSubmitted = {this.state.formSubmitted}/>}),
            keyNumber : this.state.keyNumber + 1,
          });
    }
    render(){
            return (
                <div className = "experience">
                    <h2>Educational Experience</h2>
                    <ul className = "list-no-bullets">
                        {this.state.experiencesList.map(({ key, value }) =>
                        <li key = {key}>{value}</li>
                        )}
                    </ul>
                    <button className = "add-button" onClick = {this.addExperience}>Add Experience</button>
                </div>
            );
    }
}

export default EducationalExperience;