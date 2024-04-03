import { connect } from "react-redux";
import "./ButtonBox.css";
import navState from "../../redux/reducers/navReducer";
import navClick from "../../redux/actions/navActions";

const ButtonBox = (_title) => {
  const buttonClick = () => {
    navClick({
      title: _title,
    });
  };
  return (
    <div className="ButtonBox">
      <header className="App-header">
        <div>
          <h1>Title</h1>
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
