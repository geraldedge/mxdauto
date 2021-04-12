import styled from 'styled-components'

import {Link}  from 'react-scroll'


export const Button = styled(Link)`

-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
border-radius:50px;

background : ${({primary})=>(
    primary ? 'red' :'transparent'
)};
white-space:none;
padding: ${({big})=>(
big ? '14px 48px' : '12px 30px'

)};


color : ${({dark})=>(
    dark ? 'red' : 'red'
)};



font-size : ${({fontBI})=>(
    fontBI ? '20px' : '2px'
)};

outline:none;
border: solid 2px red;
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.3s ease-out;
   
background : ${({primary})=>(
    primary ? '#fff' :'white'
)};
color:black;
}
`