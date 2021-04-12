import styled from 'styled-components'
import {Link as linkR} from 'react-router-dom'
import {Link as linkS} from 'react-scroll'


export const Nav = styled.nav`
background: black;
height : 80px;

display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`


export const NavbarContainer = styled.div`
display:flex;
justify-content : space-between;
height : 80px;
z-index:1;
width:100%;
padding: 0 24px;
max-width:1100px;
cursor: pointer;




`

export const Navlogo = styled(linkR)`

color:red;
justify-self :flex-start;
cursor: pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
text-decoration : none;
font-weight:400px;

@media screen and (max-width:768px){
 
    width:100%;
    display:flex;
    justify-content:center;

    margin-right:20px;


}




`


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width:768px){
    display: block;
    color:red;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;





}



`


export const NavMenu = styled.ul`

    display: flex;
    align-items: center;
    justify-content:space-between;
    
    width:750px;
   
    list-style: none;
    text-align: center;
    margin-right: -22px;
  
    @media screen and (max-width:768px){

        display: none;


    }


`

export const NavItem = styled.li`

height: 80px;
display:inherit;

@media screen  and (max-width : 1000px){
    display:flex;
   
    justify-content:center;
    flex:1;

    
}


`

export const NavLinks = styled(linkS)`



color:red;
display: flex;
align-items: center;
text-decoration: none;

padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    border-bottom: 3px solid #01bf71;
}


`

export const NavBtn = styled.nav`
display:flex;
align-items:center;
margin-left:20px;

@media screen and (max-width:768px){
display:none;



}


@media screen  and (max-width : 1000px){

    width:14vh;
}


`

export const NavBtnLink = styled(linkR)`
border-radius:50px;

white-space:nowrap;
padding:10px 22px;
color:red;
font-size:16px;
border: solid red 1px;
cursor: pointer;
transition : all 0.2s ease-in-out;
text-decoration:none;
cursor: pointer;

&:hover{
    transition: all 0.2s ease-in-out;
    color: #010606;
    background: #fff;

}


`