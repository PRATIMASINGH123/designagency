import React from 'react';
import '../styles/header.css'

function Header(){

  return (  
    <div className='headerContainer'>
            
            <div className='leftContent'>

                <div className='logo'>
                    <div className='top'>DESIGN</div>
                    <div className='bottom'>AGENCY</div>
                </div>

                <div className='navLinks'>
                    <h3>Specialize in</h3>
                    <h3>Case Study</h3>
                    <h3>Process</h3>
                    <h3>Industries</h3>
                </div>

            </div>

           

            <div className='headerButtons'>
                <button className='b1'>Schedule A call</button>
                <button className='b2'>We are Hiring</button>
            </div>
    </div>
  );

}

export default Header;