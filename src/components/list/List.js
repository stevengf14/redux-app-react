import { connect } from "react-redux";
import "./List.css";
import { useEffect } from "react";
import axios from "axios";
import { storeAll } from "../../redux/actions/apiActions";
import apiState from "../../redux/reducers/apiReducer";
import Item from "../item/Item";

const List = ({ list, storeAll }) => {
  useEffect(() => {
    axios
      .get("http://dev.contanimacion.com/api_tablon/api/mensajes")
      .then(({ data }) => {
        console.log("Data", data);
        storeAll({
          list: data,
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div className="List">
      <h1>List</h1>
      {list && list.length
        ? list.map((item, index) => {
            return <Item data={item} key={index} />;
          })
        : ""}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.apiState.list,
  };
};
export default connect(mapStateToProps, { storeAll })(List);
