import { useState } from "react";
//import { Data } from "./Data";
import "./App.css";
import { Data } from "./components/Data";
function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {Data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h4>{item.question}</h4>
              <span>{selected === i ? "-" : "+"}</span>
            </div>

            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
