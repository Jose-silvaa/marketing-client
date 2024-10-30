import "../header/Header.css"
import { TbTargetArrow } from "react-icons/tb";


const Header = () =>{

    return (
        <header className="header">
            <section className="header__logo">
                <h2>Flow Target</h2>
                <TbTargetArrow size={30}/>
            </section>
            
        </header>
    )
}


export default Header;