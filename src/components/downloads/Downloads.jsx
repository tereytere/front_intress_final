import './downloads.css'
import DownloadPersonal from './DownloadPersonal';
import DownloadWorkshops from './DownloadWorkshops';
import DownloadDocuments from './DownloadDocuments';
import DownloadHolidays from './DownloadHolidays';
import DownloadSignin from './DownloadSignin';
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

