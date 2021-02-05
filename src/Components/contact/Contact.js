import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      formData: {
        answer: "",
        correctAnswer: this.props.answer,
      },
    };
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData.answer = event.target.value;

    this.setState({ formData });
  };
  resetForm = (event) => {
    this.setState({
      submitted: false,
      formData: {
        answer: "",
      },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>Thank you! The Correct answer is {this.props.answer} </p>
          <button onClick={this.resetForm}>Reset</button>
        </div>
      );
    }

    return (
      <div className="Contact">
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="answer"
              value={this.state.formData.answer}
              placeholder="Your Answer"
              onChange={this.handleChange}
            />
          </div>
          <button>Submit Form</button>
        </form>
      </div>
    );
  }
}
export default Contact;
