import React, { Component } from "react";

class WorkForm extends Component {
    constructor(props) {
        super(props);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.changeInfo = this.changeInfo.bind(this);
        this.state = {
            displayForm : true,
            company: "",
            position: "",
            from: "",
            to: "",
            description: "",
            formSubmitted: this.props.formSubmitted,
        };
    }

    changeDisplay = (e) => {
        e.preventDefault();
        this.setState({
            displayForm: false,
          });
    }

    changeInfo = (e) => {
        var newState = {};
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.formSubmitted !== this.props.formSubmitted) {
          this.setState({formSubmitted: this.props.formSubmitted});
        }
        console.log(this.state.formSubmitted);
    }

    render(){
        const displayForm = this.state.displayForm;
        console.log(this.state.formSubmitted);
        if(displayForm){
            if(this.state.formSubmitted)
            {
                return(
                    <div key={this.state.formSubmitted}>hello</div>
                );
            }
            else{
                return (
                    <div key={this.state.formSubmitted}>
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
        }
    }
}

export default WorkForm;