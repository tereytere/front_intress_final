import './downloads.css'
import DownloadPersonal from './PDF/DownloadPersonal';
import DownloadWorkshops from './PDF/DownloadWorkshops';
import DownloadDocuments from './PDF/DownloadDocuments';
import DownloadHolidays from './PDF/DownloadHolidays';
import DownloadSignin from './PDF/DownloadSignin';
import ExcelPersonal from './Excel/ExcelPersonal'

function Downloads() {
    return (
        <div className="downloads">
            <DownloadPersonal/>
            <ExcelPersonal/>
            <DownloadDocuments/>
            <DownloadWorkshops/>
            <DownloadHolidays/>
            <DownloadSignin/>
        </div>
    );
}

export default Downloads;

