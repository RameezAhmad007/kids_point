import React from "react";

const girlsData = [
  { id: "0", category: "TEES" },
  { id: "1", category: "Tops" },
  { id: "2", category: "FROCKS" },
  { id: "3", category: "FENCY FROCKS" },
  { id: "4", category: "COTTON FROCKS" },
  { id: "5", category: "JEANS" },
  { id: "6", category: "TIGHTS" },
  { id: "7", category: "SHOES" },
];

function Girls() {
  return (
    <ul className="girls_ul_main">
      {girlsData.map((res, index) => {
        return (
          <li key={res.id} className={`girls_li_main girls_li_main${res.id}`}>
            <a href="#" className={`girls_a_main girls_a_main${res.id}`}>
              {res.category}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Girls;
