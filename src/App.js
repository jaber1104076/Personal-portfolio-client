import { Toaster } from 'react-hot-toast';
import './App.css';
import Contact from './components/Contack/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import picture from './assets/images/contack.jpg'
import picture2 from './assets/images/cover.jpg'
import picture3 from './assets/images/19366.jpg'
import SocialShare from './components/SocialShare/SocialShare';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div >
      <div style={{
        backgroundImage: `url(${picture2})`
      }}>
        <Header></Header>
        <Home></Home>
      </div>
      <SocialShare></SocialShare>
      <div style={{
        backgroundImage: `url(${picture3})`
      }}>
        <Skills></Skills>
      </div>
      <div>
        <Portfolio></Portfolio>
      </div>
      <div style={{
        backgroundImage: `url(${picture})`
      }}>
        <Contact></Contact>
      </div>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
