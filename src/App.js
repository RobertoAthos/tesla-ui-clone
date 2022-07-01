import React from "react";
import Header from "./components/Header/Header";
import Acessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Items from "./components/Items/Items";


function App() {
  return (
      <>
        <Header/>
        <div className="app-itemsContainer">
             <Items
              title='Model S'
              desc = '$69,420 '
              backgroundImg = {ModelS}
              first
            />
             <Items
              title='Model 3'
              desc = '$69,420 '
              backgroundImg = {Model3}
            />
               <Items
              title='Model X'
              desc = '$69,420 '
              backgroundImg = {ModelX}

            />
               <Items
              title='Model Y'
              desc = '$69,420 '
              backgroundImg = {ModelY}
            />
               <Items
              title='Solar for New Roofs'
              desc = '$69,420 '
              backgroundImg = {SolarRoof}
            />
            <Items
              title='Lowest Cost Solar Panels in America'
              desc = 'Money-back guarantee'
              backgroundImg = {SolarPanels}
            />
            <Items
              title='Accessories'
              desc = 'Money-back guarantee'
              backgroundImg = {Acessories}
            />
        </div>

      </>
  );
}

export default App;
