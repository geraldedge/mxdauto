import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components';
import Sidebar from './Components/Sidebar/Sidebar';
import { Home } from './pages/Home';
function App() {
  return (
<>

<Router>
<Home/>
</Router>


    </>
  )
}

export default App;
