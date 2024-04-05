import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import ButtonBox from "./components/buttonBox/ButtonBox";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:section" component={ButtonBox} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
