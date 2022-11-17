import React from 'react';
import Header from './Components/Header';
import './App.css';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import { section2const , sectionConst} from './Components/Constant/section2img';

function App() {
  return (
    <>
  

    <div className='landingPage'> 
      <div className='landingPageDesign'> 
      <Header />
      <Section1 />
      </div>
    </div>
    <Section2 
      h1="MEASUREMENT"
      h12="TO OUR SUCSESS"
      subheading="our process driven approach keep us going"
      mapingVar={section2const}
      headingColor='#00FF00'
      smallHeading='#FFFFFF'
      contentColor='white'
      bgColor='black'
    />
       <Section2 
      h1="WE ARE WORKING"
      h12="WITH THESE INDUSTRIES"
      mapingVar={sectionConst}
      headingColor='#09090A'
      smallHeading='#FFFFFF'
      contentColor='black'
      bgColor='#EDEDED'
    />
    </>
 
    
  );
}

export default App;
