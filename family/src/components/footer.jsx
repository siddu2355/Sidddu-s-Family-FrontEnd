import React from 'react';
import {MdOutlineFamilyRestroom} from "react-icons/md"

const Footer = () => {
    return ( 
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top' style={{backgroundColor:"#000"}}>
            <div className='col-md-4 d-flex align-items-center'>
                <a href="#" className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>

                </a>
                <span
                 style={{
                    height:50,
                    width:50,
                    borderRadius:25, 
                    backgroundColor:"#fff",
                    padding:10,
                    marginRight:5
            }}
            >
                <MdOutlineFamilyRestroom size={30}/></span>
                <span className='text-muted'>&copy; copy right 2022 This is Siddu's Family</span>
            </div>
        </footer>
     );
}
 
export default Footer;