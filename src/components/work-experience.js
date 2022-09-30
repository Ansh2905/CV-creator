import React, { Component } from "react";
import WorkForm from "./work-form";

class WorkExperience extends Component {
    constructor(props) {
        super(props);
        this.addExperience = this.addExperience.bind(this);
        this.state = {
          experiencesList : [],
          keyNumber: 0,
          formSubmitted: this.props.formSubmitted,
          experienceInfo: [],
        };
    }
    
    addExperience = (e) => {
        e.preventDefault();
        this.setState({
            experiencesList: this.state.experiencesList.concat({key: this.state.keyNumber, value: <WorkForm formSubmitted = {this.props.formSubmitted}/>}),
            keyNumber : this.state.keyNumber + 1,
        });
    }

    componentDidUpdate(prevProps) {
        if(prevProps.formSubmitted !== this.props.formSubmitted) {
          this.setState({formSubmitted: this.props.formSubmitted});
        }
        console.log(this.state.formSubmitted);
      }

    createWorkExperience = () => {
        return (
            <div>
                <form className = "education-form">
                    <div className = "form-section">
                        <input type = "text" id = "company" placeholder = "Company Name" onBlur = {this.changeInfo}></input>
                        <input type = "text" id = "position" placeholder = "Position/Role" onBlur = {this.changeInfo}></input>
                    </div>
                    <div className = "form-section">
                        <input type = "text" id = "from" placeholder = "From" onBlur = {this.changeInfo}></input>
                        <input type = "text" id = "to" placeholder = "To" onBlur = {this.changeInfo}></input>
                    </div>
                    <div className = "form-section">
                        <textarea placeholder = 'Description of tasks(Separate using "Enter" key)' id = "description" className = "width-100" rows = "3" onBlur = {this.changeInfo}></textarea>
                    </div> 
                    <button onClick = {this.changeDisplay} className = "delete-button">Delete</button>
                </form>
            </div>
        );
    }

    render(){
        
            return (
                <div className = "experience" key={this.state.formSubmitted}>
                    <h2>Work Experience</h2>
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

export default WorkExperience;