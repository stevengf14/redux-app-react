import { connect } from "react-redux";
import "./Form.css";
import { reduxForm, Field } from "redux-form";
import { sendNew } from "../../redux/actions/apiActions";

const validate = (values) => {
  const errors = {};
  if (!values.subject) {
    errors.subject = "Required";
  } else if (values.subject.length < 6) {
    errors.subject = "Al least 2 more characters";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 6) {
    errors.message = "Al least 2 more characters";
  }
  return errors;
};

const renderField = ({
  label,
  input,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <input
        {...input}
        type={type}
        className="form-control"
        placeholder="label"
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-warning">{warning}</span>))}
    </div>
  </div>
);

let Form = ({ responseOk, loading, sendNew, handleSubmit }) => {
  const beforeSubmit = (values) => {
    values.user_id = 13;
    sendNew(values);
  };
  return (
    <div className="Form">
      <h3>Add new message</h3>
      <form onSubmit={handleSubmit(beforeSubmit)}>
        <div>
          <Field
            name="subject"
            label="subject"
            type="text"
            component={renderField}
          />
        </div>

        <div>
          <Field
            name="message"
            label="message"
            type="text"
            component={renderField}
          />
        </div>
        <div>
          <input type="submit" value="Send" className="send" />
        </div>
      </form>
      {loading ? "Loading data..." : ""}
      {responseOk ? "Data sended successfuly..." : ""}
    </div>
  );
};

Form = reduxForm({
  form: "new",
  validate,
})(Form);
const mapStateToProps = (state) => {
  return {
    responseOk: state.apiState.ok,
    loading: state.apiState.loading,
  };
};
export default connect(mapStateToProps, { sendNew })(Form);
