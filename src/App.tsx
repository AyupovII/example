import './App.css';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Contacts } from './components/contacts/Contacts';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home'
import { Portfolio } from './components/portfolio/Portfolio';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__content'>
        <Home id="home" />
        <AboutMe id="aboutMe" />
        <Skills id="skills" />
        <Portfolio id="portfolio" />
        <Contacts id="contacts" />
      </div>
    </div>
  );
}

export default App;
