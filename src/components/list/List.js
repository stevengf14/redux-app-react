import { connect } from "react-redux";
import "./List.css";
import { useEffect } from "react";
import axios from "axios";
import { fetchData, storeAll } from "../../redux/actions/apiActions";
import apiState from "../../redux/reducers/apiReducer";
import Item from "../item/Item";

const List = ({ list, loading, storeAll, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="List">
      <h1>List</h1>
      {loading ? "Loading data..." : ""}
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
    loading: state.apiState.loading,
  };
};
export default connect(mapStateToProps, { storeAll, fetchData })(List);
