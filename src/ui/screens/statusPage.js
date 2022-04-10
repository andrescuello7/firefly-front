import Controller from '../screen-controller/statusPageController';
import '../../values/styles/statusPage.css'
import { Table } from 'react-bootstrap'

const StatusPage = () => {
    //Component for Table
    const { ProgressMap } = Controller();
    return (
        <div className='w-100'>
            <p className='titleProgress'>Progreso Semanal</p>
            <div className='rankingPage'>
                <Table size="sm" className="tableStatus" striped hover>
                    <tbody>
                        {ProgressMap}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default StatusPage