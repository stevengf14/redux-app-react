import { createBrowserRouter, Routes, RouterProvider } from "react-router-dom";

import "./App.css";
import ButtonBox from "./components/buttonBox/ButtonBox";
import Home from "./components/home/Home";
import List from "./components/list/List";
import Form from "./components/form/Form";

const router = createBrowserRouter([
  { index: true, element: <Home /> },
  { path: "list", element: <List /> },
  { path: "new", element: <Form /> },
]);

function App() {
  return (
    <div className="App">
      <ButtonBox />
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
    </div>
  );
}

export default App;
