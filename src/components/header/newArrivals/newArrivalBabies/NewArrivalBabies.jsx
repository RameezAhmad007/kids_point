import React from "react";

const newArrivalBabiesData = [
  { id: "0", category: "BLANKETS" },
  { id: "1", category: "2 PIECE SUIT" },
  { id: "2", category: "ROMPER" },
  { id: "3", category: "ACCESSORIES" },
];

function NewArrivalBabies() {
  return (
    <ul className="nababies_ul_main">
      {newArrivalBabiesData.map((res, index) => {
        return (
          <li
            key={res.id}
            className={`nababies_li_main nababies_li_main${res.id}`}
          >
            <a href="#" className={`nababies_a_main nababies_a_main${res.id}`}>
              {res.category}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NewArrivalBabies;
