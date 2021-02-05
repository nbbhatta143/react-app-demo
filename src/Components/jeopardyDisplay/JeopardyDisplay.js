import React from "react";

function JeopardyDisplay(props) {
  console.log(props);
  return (
    <div className="JeopardyDisplay">
      <h1>Jeopardy</h1>

      <table>
        <tbody>
          <tr>
            <td>Question</td>
            <td>Category</td>
            <td>Point Value</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{props.data.question}</td>
            <td>{props.data.category && props.data.category.title}</td>
            <td>{props.data.value}</td>
          </tr>
        </tbody>
      </table>
      <div className="Contact">
        <form onSubmit={props.handleSubmit}>
          <div>
            <input
              type="text"
              name="answer"
              value={props.answer}
              placeholder="Your Answer"
              onChange={props.handleChange}
              autoFocus
            />
          </div>
          <div>
            <button>Submit Answer</button>
          </div>
        </form>
      </div>
      <h5>Your Score: {props.score}</h5>
    </div>
  );
}
export default JeopardyDisplay;
