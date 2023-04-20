import './downloads.css'
import DownloadPersonal from './DownloadPersonal';
import DownloadWorkshops from './DownloadWorkshops';
import DownloadDocuments from './DownloadDocuments';
import DownloadHolidays from './DownloadHolidays';
import DownloadSignin from './DownloadSignin';

function Downloads() {
    return (
        <div className="downloads">
            <DownloadPersonal/>
            <DownloadDocuments/>
            <DownloadWorkshops/>
            <DownloadHolidays/>
            <DownloadSignin/>
        </div>
    );
}

export default Downloads;

