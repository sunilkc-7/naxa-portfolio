import React from "react";
import { Card } from "../components/Card.jsx";
import { CardTwo } from "../components/CardTwo.jsx";

const Home = (props) => {
  const { data, nav, description, keyHighlights } = props;
  function createMarkup() {
    return { __html: description };
  }
  return (
    <div className="flex justify-between flex-wrap mt-[60px] p-[.6125rem]">
      <p
        dangerouslySetInnerHTML={createMarkup()}
        className="mb-[40px] text-[#333132] text-[.785rem] leading-[1.5]"
      ></p>
      {keyHighlights.length > 0 &&
        keyHighlights.map((i, idx) =>
          nav === "Key Highlights" ? (
            <Card
              key={idx}
              startDate={i.startDate}
              endDate={i.endDate}
              clients={i.clients}
              title={i.title}
              img={i.img}
              des={i.des}
            />
          ) : (
            data.map((item) => (
              <CardTwo
                key={idx}
                startDate={item.startDate}
                endDate={item.endDate}
                clients={item.clients}
                title={item.title}
                img={item.img}
                des={item.des}
              />
            ))
          )
        )}
    </div>
  );
};

export default Home;
