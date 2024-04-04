import { connect } from "react-redux";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(Home);
