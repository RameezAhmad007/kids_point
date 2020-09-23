import React from "react";

const newArrivalGirlsData = [
  { id: "0", category: "TEES" },
  { id: "1", category: "Tops" },
  { id: "2", category: "FROCKS" },
  { id: "3", category: "FENCY FROCKS" },
  { id: "4", category: "COTTON FROCKS" },
  { id: "5", category: "JEANS" },
  { id: "6", category: "TIGHTS" },
  { id: "7", category: "SHOES" },
];

function NewArrivalGirls() {
  return (
    <ul className="nagirls_ul_main">
      {newArrivalGirlsData.map((res, index) => {
        return (
          <li key={res.id} className={`nagirls_li_main nagirls_li_main${res.id}`}>
            <a href="#" className={`nagirls_a_main nagirls_a_main${res.id}`}>
              {res.category}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NewArrivalGirls;
