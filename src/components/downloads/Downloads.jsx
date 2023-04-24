import './downloads.css'
import DownloadPersonal from './DownloadPersonal';
import DownloadWorkshops from './DownloadWorkshops';
import DownloadDocuments from './DownloadDocuments';
import DownloadHolidays from './DownloadHolidays';
import DownloadSignin from './DownloadSignin';
import DocumentsEscel from '../exceldownloadbutton/DocumentsEscel'
import ExcelHolidays from '../exceldownloadbutton/ExcelHolidays'
import WorkshopsEscel from '../exceldownloadbutton/WorkshopsEscel';

function Downloads() {
    return (
        <div className="downloads" id='downloads'>
            <DownloadPersonal/>
            <DownloadDocuments/>
            <DownloadWorkshops/>
            <DownloadHolidays/>
            <DownloadSignin/>
            <DocumentsEscel />
            <ExcelHolidays />
            <WorkshopsEscel />
        </div>
    );
}

export default Downloads;

