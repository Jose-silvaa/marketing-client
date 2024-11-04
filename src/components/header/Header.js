"use client"

import "../header/Header.css"
import { useState} from "react";
import useWindowSize from "../../hooks/useWindowSize"
import List from "../list/List";
import Image from 'next/image'
import Logo from "../logo/Logo";

const Header = () =>{

    const [initialArray, setInitialArray] = useState([{label : 'Inbox', url : '/about' }, {label : "Campaigns", url : '/campaigns'}])
 
    const [isOpen, setIsOpen] = useState(false)
    const { width, height } = useWindowSize();

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">
            <section>
                <Logo color="#ffff"/>
            </section>
            <nav>
                {(isOpen || width > 600) && (
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