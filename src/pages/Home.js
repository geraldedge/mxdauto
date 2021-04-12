import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import { Hero } from '../Components/HeroSection/Hero'

import '../App.css'
import InfoS from '../Components/InfoSectin/InfoS'
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/InfoSectin/Data'
export const Home = () => {

    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <Hero/>
        <InfoS {...homeObjOne}/>
        <InfoS {...homeObjTwo}/>
        <InfoS {...homeObjThree}/>
      
            
        </>
    )
}
