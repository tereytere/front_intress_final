import './App.css';
import Doc from './components/documents/Doc';
import Downloads from './components/downloads/Downloads';
import SelecUsuario from './components/selecusuario/SelecUsuario';

function App() {
    return (
        <div className="App">
            <Downloads/>
            <Doc/>
            <SelecUsuario />
        </div>
    );
}

export default App;
