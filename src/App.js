import './App.css';
import Holidays from './components/holidays/Holidays';
import Signin from './components/signin/Signin';
import Login from './pages/login/Login';
import NewUser from './components/create/NewUser';
import NewWorkshop from './components/create/NewWorkshop';
import Router from './router/Router';


function App() {
  return (
    <div className="App">
     <Router/>
    </div>
  );
}

export default App;
