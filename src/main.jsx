import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import Map from "./components/Map";
import Form from "./pages/Form.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<Form />} />
          <Route path="/map" element={<Map />} />
        </>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
