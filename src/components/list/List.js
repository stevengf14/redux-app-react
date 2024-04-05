import { connect } from "react-redux";
import "./List.css";
import { useEffect } from "react";
import axios from "axiosS";

const List = () => {
  useEffect(() => {
    axios
      .get("http://dev.contanimacion.com/api_tablon/api/mensajes")
      .then(({ data }) => {
        console.log("Data", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

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
