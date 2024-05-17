
import React from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import Header from './Components/Header/Header.js';
import CodingProfiles from './Components/CodingProfiles/CodingProfiles.js';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <CodingProfiles />
      <Services />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
