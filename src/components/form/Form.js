import { connect } from "react-redux";
import "./Form.css";
import { reduxForm, Field } from "redux-form";

const validate = (values) => {
  const errors = {};

  return errors;
};

const renderField = ({ label, input, type }) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <input
        {...input}
        type={type}
        className="form-control"
        placeholder="label"
      />
    </div>
  </div>
);

let Form = ({}) => {
  return (
    <div className="Form">
      <h3>Add new message</h3>
      <form>
        <div>
          <Field
            name="subject"
            label="subject"
            type="text"
            component={renderField}
          />
        </div>
      </form>
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
    </div>
  );
};

Form = reduxForm({
  form: "new",
  validate,
})(Form);
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(Form);
