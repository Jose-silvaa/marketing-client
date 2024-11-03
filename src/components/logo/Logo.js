import "../logo/logo.css";
import { TbTargetArrow } from "react-icons/tb";

const Logo = ({color})=>{
   
    return (
        <>
         <TbTargetArrow size={40} style={{color : color}}/>
         <h1 style={{color : color}}>Flow Target</h1>
        </>
    )
}

Logo.defaultProps = {
    color : 'white',
}

export default Logo;