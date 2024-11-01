"use client"


import "../header/Header.css"
import { TbTargetArrow } from "react-icons/tb";
import { useState} from "react";
import useWindowSize from "../../hooks/useWindowSize"
import List from "../list/List";



const Header = () =>{

    const [initialArray, setInitialArray] = useState([{label : 'Inbox', url : '/about' }, {label : "Campaigns", url : '/campaigns'}])
 
    const [isOpen, setIsOpen] = useState(false)
    const { width, height } = useWindowSize();

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">
            <section className="header__logo">
                <h2>Flow Target</h2>
                <TbTargetArrow size={30}/>
            </section>
            <nav>
                {(isOpen || innerWidth > 600) && (
                  <List items={initialArray} />
                )}
            </nav>
            <div className="mobile__menu" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          
        </header>
    )
}


export default Header;