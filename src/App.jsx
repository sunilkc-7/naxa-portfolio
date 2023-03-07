import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/reducer/getReducer.js";
import Header from "./components/Header";
import NavBar from "./pages/NavBar";

import Home from "./pages/Home.jsx";
import "./App.css";

const App = () => {
  const [nav, setNav] = React.useState("Key Highlights");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const Apidata = useSelector((state) => state.data.data);
  const cardData = Apidata.map((i) => ({
    id: i.id,
    startDate: i.start_date,
    endDate: i.end_date,
    clients: i.clients,
    title: i.title,
    img: i.photo,
    des: i.subtitle,
    description: i.category_description.toString(),
    category: i.category_title,
    key: i.is_key_highlight,
  }));
  const keyHighlights = cardData.filter((i) => i.key === true);
  const dataBynav = cardData.filter((i) => i.category.includes(nav));
  const description = dataBynav.length > 0 ? dataBynav[0].description : "";

  return (
    <div className="w-full h-screen flex ">
      <div className="w-[80%] mx-auto items-center flex flex-col ">
        <div className="w-full py-8 flex justify-between">
          <NavBar />
        </div>
        <Header nav={nav} setNav={setNav} />
        <Home
          data={dataBynav}
          keyHighlights={keyHighlights}
          nav={nav}
          description={description}
        />
      </div>
    </div>
  );
};

export default App;
