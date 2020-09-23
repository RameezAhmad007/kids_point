import React from "react";
import NewArrivalBabies from "./newArrivalBabies/NewArrivalBabies";
import NewArrivalBoys from "./newArrivalBoys/NewArrivalBoys";
import NewArrivalGirls from "./newArrivalGirls/NewArrivalGirls";

const newArrivalsData = [
  { id: "0", category: "BOYS", component: <NewArrivalBoys /> },
  { id: "1", category: "GIRLS", component: <NewArrivalGirls /> },
  { id: "2", category: "NEWBORN BABIES", component: <NewArrivalBabies /> },
];

function NewArrivals() {
  return (
    <ul className="na_ul_main">
      {newArrivalsData.map((res, index) => {
        return (
          <li key={res.id} className={`na_li_main na_li_main${res.id}`}>
            <a href="#" className={`na_a_main na_a_main${res.id}`}>
              {res.category}
            </a>
            {res.component}
          </li>
        );
      })}
    </ul>
  );
}

export default NewArrivals;
