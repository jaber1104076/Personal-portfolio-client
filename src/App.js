import './App.css';
import Contact from './components/Contack/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='bg-[#121519]'>
      <Header></Header>
      <Home></Home>
      <Contact></Contact>
    </div>
  );
}

export default App;
