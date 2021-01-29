import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };
  resetForm = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
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
          <p>Thank you {this.state.formData.firstName} for submitting the form </p>
          <button onClick={this.resetForm}>Reset</button>
        </div>
      );
    }
    return (
      <div className="Contact">
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.formData.firstName}
              onChange={this.handleChange}
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.formData.lastName}
              placeholder="Last Name"
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
