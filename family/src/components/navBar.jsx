import React from 'react';
import { Link } from 'react-router-dom';
import {MdOutlineFamilyRestroom} from "react-icons/md"
import {FaUserAltSlash, FaUserAlt} from "react-icons/fa"

const NavBar = ({user}) => {
    return ( 
        <nav className='navbar navbar-light bg-light' style={{flexGrow:1, backgroundColor:"#6e6e6f", paddingRight:10,paddingBottom:0}}>
            <p className='navbar-brand' style={{fontWeight:"500", fontStyle:"revert",fontSize:30,color:"#0e387a", cursor:"pointer"}}>
                <MdOutlineFamilyRestroom style={{marginRight:7}} size={25} color="grey"/>
                Family
                </p>
            <div className='navbar'>
            {user && <React.Fragment>
            <Link className='nav-link nav-item' to="/images" style={{color:"#e98074", fontWeight:"400"}}>Album</Link>
            <Link to="/logout" className='nav-link nav-item' style={{color:"#e98074", fontWeight:"400"}}>Log out</Link>
            <Link to="/profile" className='nav-link nav-item' style={{color:"#e98074", fontWeight:"400"}}>{user.name}</Link>
            <Link to="/profile"><FaUserAlt size={30} style={{color:"ThreeDShadow", cursor:"pointer"}} /></Link>
            </React.Fragment>
            }
            {!user &&
            <React.Fragment>
                <Link className='nav-link nav-item' to="/login">Login</Link>
                <Link className='nav-link nav-item' to="/register">Register</Link>
                <Link to="/login"><FaUserAltSlash size={30} style={{color:"ThreeDShadow", cursor:"pointer"}} /></Link>
            </React.Fragment>
            }
            </div>
        </nav>
     );
}
 
export default NavBar;