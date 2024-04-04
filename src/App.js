import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ButtonBox from "./components/buttonBox/ButtonBox";
import Home from "./components/home/Home";
import List from "./components/list/List";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <ButtonBox />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/new" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
