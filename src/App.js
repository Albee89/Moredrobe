import React from 'react';
import NavBar from './Components/NavBar';
import UploadYourDrobe from './Components/UploadYourDrobe';
import Closet from './Closet';
import VintageShop from './Components/VintageShop';
import About from './Components/About';
import SipAndSwap from './Components/SipAndSwap';
import Contact from './Components/Contact';


const App = () => {
  return (
    <div>
      <NavBar />
    <div>   
    <Closet />
    </div>

      <UploadYourDrobe />
   
      <VintageShop />
      <About />
      <SipAndSwap />
      <Contact />
    </div>
  );
};

export default App;
