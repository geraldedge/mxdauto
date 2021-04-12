import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarBtn,SidebarRouter,SidebarWrapper,SidebarLink
,SidebarMenu} from './sidebarElements'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>

                <SidebarMenu>

                    <SidebarLink to="about" > About
                    </SidebarLink>
                    <SidebarLink to="content" > Content
                    </SidebarLink>
                    <SidebarLink to="contact" > Contact
                    </SidebarLink>
                    <SidebarLink to="signup" > Sign Up
                    </SidebarLink>



                </SidebarMenu>
                <SidebarBtn>
                    <SidebarRouter to='/signin'>
                        Sign In
                    </SidebarRouter>

                </SidebarBtn>
            </SidebarWrapper>
        
        </SidebarContainer>
            
        </>
    )
}

export default Sidebar
