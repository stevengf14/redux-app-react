import { connect } from "react-redux";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="Item">
      <h3>{data.asunto}</h3>
      <p>{data.mensaje}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(Item);
