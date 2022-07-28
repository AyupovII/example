import React from 'react';
import './App.css';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home'
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__content'>
        <Home id="home"/>
        <AboutMe id="aboutMe"/>
        <Skills id="skills"/>
      </div>
    </div>
  );
}

export default App;
