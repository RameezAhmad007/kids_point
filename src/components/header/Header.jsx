import React from "react";
import Boys from "./boys/Boys";
import Girls from "./girls/Girls";
import NewArrivals from "./newArrivals/NewArrivals";
import NewbornBabies from "./newbornBabies/NewbornBabies";

const headerData = [
  { id: "0", category: "NEW ARRIVALS", component: <NewArrivals /> },
  { id: "1", category: "BOYS", component: <Boys /> },
  { id: "2", category: "GIRLS", component: <Girls /> },
  { id: "3", category: "NEWBORN BABIES", component: <NewbornBabies /> },
];

function Header() {
  return (
    <header className="header_container">
      <div className="header_logo">Kids Point</div>
      <nav className="header_nav">
        <ul className="header_ul_main">
          {headerData.map((res, index) => {
            return (
              <li
                key={res.id}
                className={`header_li_main header_li_main${res.id}`}
              >
                <a className={`header_a_main header_a_main${res.id}`} href="#">
                  {res.category}
                </a>
                {res.component}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
