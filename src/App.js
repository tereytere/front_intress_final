import './App.css';
import Holidays from './components/holidays/Holidays';
import Signin from './components/signin/Signin';

function App() {
  return (
    <div className="App">
      <Signin />
      <Holidays/>
    </div>
  );
}

export default App;
