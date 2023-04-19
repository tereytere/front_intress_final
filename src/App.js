import './App.css';
import Holidays from './components/holidays/Holidays';
import Signin from './components/signin/Signin';
import NavbarMaster from './components/header/NavbarMaster';
import Personal from './components/personal/Personal';

function App() {
  return (
    <div className="App">
      <NavbarMaster />
      <Personal />
      <Signin/>
      <Holidays/>
    </div>
  );
}

export default App;
