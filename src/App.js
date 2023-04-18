import './App.css';
import Holidays from './components/holidays/Holidays';
import Signin from './components/signin/Signin';
import Login from './pages/login/Login';
import NewUser from './components/create/NewUser';
import NewWorkshop from './components/create/NewWorkshop';

function App() {
  return (
    <div className="App">
      <NewUser />
      <NewWorkshop />

      <Signin />
      <Holidays/>
    </div>
  );
}

export default App;
