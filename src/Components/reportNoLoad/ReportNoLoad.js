import { useLocation } from "react-router-dom";

function ReportNoLoad(props) {
  let location = useLocation();
  return (
    <div>
      <div>
        <h1>404 ☹</h1>
        <p>
          It's worst then you think, "<code>{location.pathname}" is missing!</code>
        </p>
      </div>
    </div>
  );
}
export default ReportNoLoad;
