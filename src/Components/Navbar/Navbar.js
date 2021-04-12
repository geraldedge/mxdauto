import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,Navlogo,MobileIcon,NavMenu,NavLinks,NavItem,NavBtn,NavBtnLink} from './navelements'


const Navbar = ({toggle}) => {
    return (
     <>
     <Nav>


         <NavbarContainer >
             <Navlogo to='/love'>edge</Navlogo>
       


         <MobileIcon onClick={toggle} >
             <FaBars/>
         </MobileIcon>

         <NavMenu>

             <NavItem>
                 <NavLinks to ='discover'>About</NavLinks>
                 <NavLinks to ='content'>Content</NavLinks>
                 <NavLinks to ='contact'>Contact</NavLinks>
                 <NavLinks to ='services'>Services</NavLinks>
                 <NavLinks to ='signup'>Sign Up</NavLinks>


             </NavItem>
             <NavBtn>
             <NavBtnLink to ='/signin'>Sign In</NavBtnLink>

             </NavBtn>


         </NavMenu>

         </NavbarContainer>




     </Nav>

     </>
    )
}

export default Navbar
