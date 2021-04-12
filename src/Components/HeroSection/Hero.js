import React, {useState}from 'react'
import {HeroContainer,Backgroundhero,Videobg,HeroBtnWrapper,ArrowForward,ArrowRight,HeroWrapper,HeroH1,HeroP} from './heroelements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'




export const Hero = () => {
const [hover, setHover] = useState(false)

const onHover=()=>{
   setHover(!hover)
}

    return (
        <HeroContainer id="home">

<Backgroundhero>
                <Videobg autoPlay loop muted src={Video} type='video/mp4'/>
            </Backgroundhero>
            <HeroWrapper>

            <HeroH1>YOU READY? LET'S RIDE</HeroH1>
            <HeroP>Comprehensive write up on anything but i am very sure import PropTypes from 'prop-types'
             will be about cars.</HeroP>
             <HeroBtnWrapper>
    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}  dark="true"  fontBI   smooth={true} duration={500}
    >LET'S RIDE{hover ? <ArrowForward/> : <ArrowRight/>}</Button>

             </HeroBtnWrapper>

             





            </HeroWrapper>
        




        </HeroContainer>



           


       
            
            
       
    )
}
