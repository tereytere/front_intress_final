import './App.css';
import SelecAdmin from './components/selecusuario/selecAdmin/SelecAdmin';
import ExcelDownloadButton from './components/exceldownloadbutton/ExcelDownloadButton';
function App() {
return (
<div className="App">
<ExcelDownloadButton />
<SelecAdmin />
</div>
);
}

export default App;
