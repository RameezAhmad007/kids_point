import React from "react";

const boysData = [
  { id: "0", category: "TEES" },
  { id: "1", category: "POLO" },
  { id: "2", category: "SHIRTS" },
  { id: "3", category: "JEANS" },
  { id: "4", category: "TROUSERS" },
  { id: "5", category: "SHORT" },
  { id: "6", category: "SHOES" },
];

function Boys() {
  return (
    <ul className="boys_ul_main">
      {boysData.map((res, index) => {
        return (
          <li key={res.id} className={`boys_li_main boys_li_main${res.id}`}>
            <a href="#" className={`boys_a_main boys_a_main${res.id}`}>
              {res.category}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Boys;
