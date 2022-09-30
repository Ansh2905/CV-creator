import React, { Component } from "react";
import PersonalInfo from "./components/personal-info";
import Header from "./components/header";
import "./styles/style.css";
import EducationalExperience from "./components/educational-experience";
import WorkExperience from "./components/work-experience";


class App extends Component {
  constructor() {
    super();
    this.changeFormStatus = this.changeFormStatus.bind(this);
    this.state = {
      formSubmitted : false,
    };
  }

  changeFormStatus = (e) => {
    e.preventDefault();
    this.setState({
        formSubmitted: !this.state.formSubmitted,
      });
}

  render() {
    return (
      <div className = "main">
        <Header formSubmitted = {this.state.formSubmitted}/>
        <div className = "container">
          <PersonalInfo formSubmitted = {this.state.formSubmitted}/>
          <EducationalExperience formSubmitted = {this.state.formSubmitted}/>
          <WorkExperience formSubmitted = {this.state.formSubmitted}/>
          <button onClick = {this.changeFormStatus} className = "change-cv-button">Convert to CV</button>   
        </div>     
      </div>
    );
  }
}

export default App;
