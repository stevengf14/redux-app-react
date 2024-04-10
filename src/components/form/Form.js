import { connect } from "react-redux";
import "./Form.css";
import { reduxForm } from "redux-form";

const validate = values => {
  const errors = {};

  return errors;
}

let Form = ({}) => {
  return (
    <div className="Form">
      <h1>New</h1>
    </div>
  );
};

Form = reduxForm(
  {
    form: "new",
    validate
  }
)
(Form)
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(Form);
