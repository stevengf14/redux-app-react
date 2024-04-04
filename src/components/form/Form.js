import { connect } from "react-redux";
import "./Form.css";

const Form = () => {
  return (
    <div className="Form">
      <h1>New</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(Form);
