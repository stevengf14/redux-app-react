import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ButtonBox.css";
import { navClick } from "../../redux/actions/navActions";

const ButtonBox = ({ title, navClick }) => {
  const buttonClick = (_title) => {
    navClick({
      title: _title,
    });
  };
  return (
    <div className="ButtonBox">
      <header className="App-header">
        <div>
          <h1>{title}</h1>
          <ul>
            <li onClick={() => buttonClick("Home")}>Home</li>
            <li onClick={() => buttonClick("List")}>List</li>
            <li onClick={() => buttonClick("New")}>New</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.navState.title,
  };
};

export default connect(mapStateToProps, { navClick })(ButtonBox);
