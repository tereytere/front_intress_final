import './App.css';
import DocumentsEscel from './components/exceldownloadbutton/DocumentsEscel';
import ExcelDownloadButton from './components/exceldownloadbutton/ExcelDownloadButton';
import ExcelHolidays from './components/exceldownloadbutton/ExcelHolidays';
import WorkshopsEscel from './components/exceldownloadbutton/WorkshopsEscel';
function App() {
return (
<div className="App">
<ExcelDownloadButton />
<ExcelHolidays />
<DocumentsEscel />
<WorkshopsEscel />
</div>
);
}

export default App;
