import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ButtonBox.css";
import { navClick } from "../../redux/actions/navActions";
import Home from "../home/Home";
import List from "../list/List";
import Form from "../form/Form";

const ButtonBox = ({ title, navClick, match: { params } }) => {
  const buttonClick = (_title) => {
    navClick({
      title: _title,
    });
  };

  const renderSection = () => {
    switch (params.section) {
      case "home":
        return <Home />;
      case "list":
        return <List />;
      case "new":
        return <Form />;
      default:
        return;
    }
  };

  return (
    <div className="ButtonBox">
      <header className="App-header">
        <div>
          <h1>{title}</h1>
          <ul>
            <Link onClick={() => buttonClick("Home")}>Home</Link>
            <Link onClick={() => buttonClick("List")}>List</Link>
            <Link onClick={() => buttonClick("New")}>New</Link>
          </ul>
        </div>
      </header>
      {renderSection()}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.navState.title,
    section: ownProps.section,
  };
};

export default connect(mapStateToProps, { navClick })(ButtonBox);
