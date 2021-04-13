import styled from 'styled-components'

import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'


export const HeroContainer= styled.div`

display:flex;
justify-content:center;
padding:0 30px;
align-items:center;
height:800px;
padding:0 30px;
position:relative;
z-index:1;
background:yellow;


@media screen and (max-width:375px){
    height:650px;
}


@media screen and (max-width:375px){
    height:650px;
}


`


export const Backgroundhero = styled.div`
top:0;
right:0;
bottom:0;
left:0;
position:absolute;
width:100%;
width:100%;
overflow:hidden;
`

export const Videobg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background: #1c2129;


`

export const HeroWrapper= styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding: 58px 24px;
display:flex;
flex-direction:column;
align-items:center;


margin-bottom:120px;


@media screen and (max-width:375px){
    margin-bottom:70px;
}

`

export const HeroH1= styled.h1`
color:red;
font-size:48px;
text-align:center;

@media screen and (max-width:768px) {

    font-size:44px;
    
}
@media screen and (max-width:480px) {

font-size:32px;

}
`

export const HeroP = styled.p`
color:whitesmoke;
margin-top:24px;
font-size:25px;
text-align:center;
max-width :600px;

@media screen and (max-width:768px) {

font-size:25px;

}

@media screen and (max-width:480px) {

font-size:19px;

}
`
export const HeroBtnWrapper = styled.div`

margin-top: 32px;
display:flex;
flex-direction:column;
align-items:center;


`
export const ArrowForward = styled(MdArrowForward)`

margin-left:8px;
font-size:20px;
transition:0.2s ease-in-out;

`

export const ArrowRight = styled(MdKeyboardArrowRight)`

margin-left:8px;
font-size:20px;
transition:0.2s ease-in-out;


`