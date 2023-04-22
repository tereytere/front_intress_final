import './App.css';
import Holidays from './components/holidays/Holidays';
import Signin from './components/signin/Signin';
import NavbarAdmin from './components/header/NavbarAdmin'; 
import Personal from './components/personal/Personal';
import Browser from './components/browser/Browser';

function App() {
  return (
    <div className="App">
      <NavbarAdmin />
      <Browser />
      <Personal />
      <Signin/>
      <Holidays/>
    </div>
  );
}

export default App;