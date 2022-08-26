


import  { useState } from "react";
import { appStoreDropdown, companyDropdown, extraToolsDropdown, resourcesDropdown, } from "./NavbarItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        { resourcesDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}


function Dropdown1() {
    const [dropdown, setDropdown] = useState(false);
  
    return (
      <>
        <ul
          className={dropdown ? "services-submenu clicked" : "services-submenu"}
          onClick={() => setDropdown(!dropdown)}
        >
          {companyDropdown.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={item.cName}
                  onClick={() => setDropdown(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  function Dropdown2() {
    const [dropdown, setDropdown] = useState(false);
  
    return (
      <>
        <ul
          className={dropdown ? "services-submenu clicked" : "services-submenu"}
          onClick={() => setDropdown(!dropdown)}
        >
          {appStoreDropdown.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={item.cName}
                  onClick={() => setDropdown(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }


  function Dropdown3() {
    const [dropdown, setDropdown] = useState(false);
  
    return (
      <>
        <ul
          className={dropdown ? "services-submenu clicked" : "services-submenu"}
          onClick={() => setDropdown(!dropdown)}
        >
          {extraToolsDropdown.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={item.cName}
                  onClick={() => setDropdown(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }



export  {Dropdown,Dropdown1,Dropdown2,Dropdown3};