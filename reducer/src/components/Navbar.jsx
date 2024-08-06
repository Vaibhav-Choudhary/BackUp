import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"



function Navbar(){

    const {cart}=useSelector((state)=>state);

    

    return (
    <div >
        <nav className="flex justify-between flex-row items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
            <div>
                <img src={logo} className="h-14"></img>
            </div>    
        </NavLink>
        <div className="flex  items-center gap-x-2 relative font-medium text-slate-100 mr-5">
            <NavLink to="/"><p>Home</p></NavLink>
            
            <NavLink to="/cart">
            <FaShoppingCart className="text-xl"/>
            {cart.length>0 ? (<div className="absolute -top-1.5 -right-3 bg-green-600 text-xs w-5 h-5 flex justify-center items-center rounded-full text-white animate-bounce">{cart.length}</div>):(<div className="h-0 w-0"></div>)}
            </NavLink>
            
        </div>
        </nav>
    </div>
    

    )

}

export default Navbar;