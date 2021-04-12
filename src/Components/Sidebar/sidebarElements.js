import styled from 'styled-components'
import {Link as linkS} from 'react-scroll'
import {Link as linkR} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'


export const SidebarContainer = styled.aside`

display:none;

 
 @media screen and (max-width : 768px) {

    position:fixed;
background:black;
z-index:999;
width:100%;
height:100%;

display:grid;
align-items:center;
top:0;
transition :   0.3s ease-in-out;

opacity: ${({isOpen})=>(isOpen ? '100%' : '0')

};
top: ${({isOpen})=>(isOpen ? '0' : '-100%')

 }
  

};











`

export const CloseIcon = styled(FaTimes)`color: red;`


export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.2rem;
background:transparent;
font-size:2rem;
cursor: pointer;
outline:none;
-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

`;

export const SidebarWrapper = styled.div`
height:100;
color:red;`


export const SidebarLink = styled(linkS)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
   transition : all  0.2s ease-in-out;

   cursor: pointer;

color:red;


height:-10vh;


&:hover{
    color: lightcyan;
    transition : all  0.2s ease-in-out;
    

}
`
export const SidebarMenu=styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows: repeat(6,60px);
text-align:center;



@media screen and (max-width : 768px) {

    grid-template-rows: repeat(6,60px);
    

}
`


export const SidebarBtn =styled.div`
display:flex;
justify-content:center;
`
export const SidebarRouter = styled(linkR)`
border-radius: 50px;
white-space:nowrap;
background: black;
padding: 16px 74px;
color:red;
border:solid 2px red;
font-size:16px;
outline:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    color:whitesmoke;
    background:black;
    transition : all  0.2s ease-in-out;

}

`

