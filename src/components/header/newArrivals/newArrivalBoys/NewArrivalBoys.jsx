import React from "react";

const newArrivalBoysData = [
  { id: "0", category: "TEES" },
  { id: "1", category: "POLO" },
  { id: "2", category: "SHIRTS" },
  { id: "3", category: "JEANS" },
  { id: "4", category: "TROUSERS" },
  { id: "5", category: "SHORT" },
  { id: "6", category: "SHOES" },
];

function NewArrivalBoys() {
  return (
    <ul className="naboys_ul_main">
      {newArrivalBoysData.map((res, index) => {
        return (
          <li key={res.id} className={`naboys_li_main naboys_li_main${res.id}`}>
            <a href="#" className={`naboys_a_main naboys_a_main${res.id}`}>
              {res.category}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NewArrivalBoys;
