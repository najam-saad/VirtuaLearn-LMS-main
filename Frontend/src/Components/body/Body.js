import Courses from "./courses/Courses";
import "./Body.scss";

function AppBody() {
  const mystyle = {
    marginLeft: "45%",
    paddingTop: "10%",
    fontFamily: "inherit",
    fontSize: "40px",
    fontWeight: 400,
    lineHeight: 1.5,
  };
  return (
    <div id="app-body">
        {/* <h1 class="heading-big">Our Courses</h1> */}
      <h1 style={mystyle}>Our Courses</h1>
      <Courses />
    </div>
  );
}

export default AppBody;
