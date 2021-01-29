import React from "react";

function Welcome(props) {
  let name;
  name = (props.match && props.match.params.name) || props.name;
  return <div className="Welcome">Welcome, {name}</div>;
}
export default Welcome;
