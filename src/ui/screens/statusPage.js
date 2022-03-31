import Controller from '../screen-controller/statusPageController';
import MenuOpcion from '../components/menuOptions';
import '../../values/styles/statusPage.css'
import { ProgressBar, Table } from 'react-bootstrap'

const StatusPage = () => {
    //Component for Table
    const { ProgressMap } = Controller();
    return (
        <div>
            <MenuOpcion className="menu" />
            <p className='titleProgress'>Progreso Semanal</p>
            <div className='rankingPage'>
                <Table hover size="sm" className=" tableAdmin">
                    <thead>
                        <tr>
                            <th className='textAdmin'>Foto</th>
                            <th className='textAdmin'>Nombre</th>
                            <th className='textAdmin'>Progreso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ProgressMap}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default StatusPage