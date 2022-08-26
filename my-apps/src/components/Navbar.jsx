import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css"
import { navItems } from "./NavbarItems";
import Button from "./Button";
import {Dropdown,Dropdown1, Dropdown2, Dropdown3} from "./Dropdown";
import { useState } from "react";

function Navbar(){
    const [dropdown,setDropdown]=useState(false);
    const [dropdown1,setDropdown1]=useState(false);
    const [dropdown2,setDropdown2]=useState(false)
    const [dropdown3,setDropdown3]=useState(false)

    return (
        <>

      <nav className="navbar">
        <Link to="/" className="navbar-logo">
        <img src="https://cdn.semrush.com/__static__/semrush-logo-700.jpg" alt=""  />
          SEMRUSH
          
        </Link>

        <ul className="nav-items">
          {navItems.map((item) => {

            if (item.title === "Resources") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                </li>
                );
            }

            if (item.title === "Company") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown1(true)}
                    onMouseLeave={() => setDropdown1(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown1 && <Dropdown1 />}
                </li>
                );
            }

            if (item.title === "App store") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown2(true)}
                    onMouseLeave={() => setDropdown2(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown2 && <Dropdown2 />}
                </li>
                );
            }

            if (item.title === "Extra tools") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown3(true)}
                    onMouseLeave={() => setDropdown3(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown3 && <Dropdown3 />}
                </li>
                );
            }


            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button/>
        {/* <Button element="hhh"/> */}

        </nav>
        {/* <Dropdown/> */}

       


        </>
    )
}

export default Navbar