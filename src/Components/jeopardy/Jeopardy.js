import React, { Component } from "react";

//import or service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from "../jeopardyDisplay/JeopardyDisplay";
class Jeopardy extends Component {
  //set initial state and set up service as this.client and this component
  constructor(props) {
    super(props);

    this.client = new JeopardyService();

    this.state = {
      data: {},
      score: 0,
      answer: "",
    };
  }

  async getNewQuestion() {
    const result = await this.client.getQuestion();
    this.setState({
      data: result.data[0],
    });
  }

  //When the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const questionValue = this.state.data.value;

    if (this.state.answer.toLowerCase() === this.state.data.answer.toLowerCase()) {
      this.setState((state, props) => ({
        score: state.score + questionValue,
        answer: "",
      }));
    } else {
      this.setState((state, props) => ({
        score: state.score - questionValue,
        answer: "",
      }));
    }
    this.getNewQuestion();
  };

  //display the results on the screen
  render() {
    console.log(this.state.data.answer);
    console.log(this.state.data);
    if (!this.state.data.id) {
      return <div>Please Wait!</div>;
    }

    return (
      <div className="Jeopardy">
        <JeopardyDisplay
          {...this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Jeopardy;
