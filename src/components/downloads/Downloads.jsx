import './downloads.css'
import DownloadPersonal from './PDF/DownloadPersonal';
import DownloadWorkshops from './PDF/DownloadWorkshops';
import DownloadDocuments from './PDF/DownloadDocuments';
import DownloadHolidays from './PDF/DownloadHolidays';
import DownloadSignin from './PDF/DownloadSignin';
import ExcelWorkshops from './Excel/ExcelWorkshops';
import ExcelPersonal from './Excel/ExcelPersonal';
import ExcelDocuments from './Excel/ExcelDocuments';
import ExcelHolidays from './Excel/ExcelHolidays';
import ExcelSignin from './Excel/ExcelSignin';

function Downloads() {
    return (
        <div className="downloads" id='downloads'>
            <DownloadPersonal/>
            <ExcelPersonal/>
            <DownloadDocuments/>
            <ExcelDocuments/>
            <DownloadWorkshops/>
            <ExcelWorkshops/>
            <DownloadHolidays/>
            <ExcelHolidays/>
            <DownloadSignin/>
            <ExcelSignin/>
        </div>
    );
}

export default Downloads;

