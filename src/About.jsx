import React from 'react'
import web from '../src/images/images5.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';


function About() {
  return (
    <>
      <Common name="Welcome to About page " imgsrc={web} visit="/contact" btname="Contact Now" />

    </>
  )
}
export default About;