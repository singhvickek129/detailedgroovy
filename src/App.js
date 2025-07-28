import React from 'react';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import SideMenuFlow from './components/SideMenuFlow';
import SideMenuInfographic from './components/SideMenuInfographic';
import HeroInfographic from './components/HeroInfographic';
import NewArrivalsInfographic from './components/NewArrivalsInfographic';
import NewArrivalsComponentInfographic from './components/NewArrivalsComponentInfographic';
import MernFeaturesInfographic from './components/MernFeaturesInfographic';
function App() {
  return (<><Navbar />
  <main>
    <MernFeaturesInfographic />
    <AppFooter />
    <SideMenuFlow />
    <SideMenuInfographic />
    <HeroInfographic />
    <NewArrivalsComponentInfographic />
    <NewArrivalsInfographic />
  </main>
  </>);
}
export default App;