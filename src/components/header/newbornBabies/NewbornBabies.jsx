import React from "react";

const newbornBabiesData = [
  { id: "0", category: "BLANKETS" },
  { id: "1", category: "2 PIECE SUIT" },
  { id: "2", category: "ROMPER" },
  { id: "3", category: "ACCESSORIES" },
];

function NewbornBabies() {
  return (
    <ul className="nbbabies_ul_main">
      {newbornBabiesData.map((res, index) => {
        return (
          <li key={res.id} className={`nbbabies_li_main nbbabies_li_main${res.id}`}>
            <a href="#" className={`nbbabies_a_main nbbabies_a_main${res.id}`}>
              {res.category}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NewbornBabies;
