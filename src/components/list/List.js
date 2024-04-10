import { connect } from "react-redux";
import "./List.css";
import { useEffect } from "react";
import { fetchData, storeAll } from "../../redux/actions/apiActions";
import Item from "../item/Item";

const List = ({ list, loading, error, storeAll, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="List">
      <h1>List</h1>
      {loading ? "Loading data..." : ""}
      {error ? "Error: " + error : ""}
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
    error: state.apiState.error,
  };
};
export default connect(mapStateToProps, { storeAll, fetchData })(List);
