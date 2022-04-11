import Controller from '../screen-controller/statusPageController';
import '../../values/styles/statusPage.css'
import { Table } from 'react-bootstrap'

const StatusPage = () => {
    //Component for Table
    const { ProgressMap } = Controller();
    return (
        <div className='w-100'>
            <p className='titleProgress'>Progreso Semanal</p>
            <div className='w-100 d-flex justify-content-evenly flex-wrap'>
                        {ProgressMap}
            </div>
        </div>
    );
}
export default StatusPage