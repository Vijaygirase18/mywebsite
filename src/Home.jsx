import React from 'react'
import web from '../src/images/images2.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';


function Home() {
  return (
    <>
           <Common name="Grow your business with " imgsrc={web} visit="/service" btname="Get started " />


    </>
  )
}
export default Home;