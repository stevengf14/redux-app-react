import { connect } from "react-redux";
import "./List.css";

const List = () => {
  return (
    <div className="List">
      <h1>List</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(List);
