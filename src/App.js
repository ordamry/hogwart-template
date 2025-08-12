import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { CATEGORIES, CHARMS_DATA, POTIONS_DATA } from './Constants';
import HogwartNavbar from './components/Header/HogwartNavbar';
import Entities from './components/Entities/Entities';
import EntityDescription from './components/Entities/EntityDescription';
import About from './components/About';

const App = (props) => {
  const [categories, setCategories] = useState(CATEGORIES);
  const [potions, setPotions] = useState(POTIONS_DATA);
  const [charms, setCharms] = useState(CHARMS_DATA);

  const STATE_MAP = {
    potions: potions,
    charms: charms
  };

  const getCategoryData = (category) => {
    return STATE_MAP[category];
  };

  return (
    <div>
      <div className="App">
        <HogwartNavbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/about" element={<About />} />
          <Route path="/wiki/:category" element={<Entities getCategoryData={getCategoryData} />} />
          <Route path="/wiki/:category/:itemName" element={<EntityDescription getCategoryData={getCategoryData} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
