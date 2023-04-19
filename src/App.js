import './App.css';
import Holidays from './components/holidays/Holidays';
import Signin from './components/signin/Signin';
import Vacation from './components/vacations/Vacation';
// import Login from './pages/master/Master.jsx'
function App() {
  return (
    <div className="App">
      <Signin/>
      <Holidays/>
      <Vacation />
      {/* <Login /> */}
    </div>
  );
}

export default App;
