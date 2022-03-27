import Controller from '../screen-controller/adminPageController';
import MenuOpcion from '../components/menuOptions';
import { Table, Button, ProgressBar } from 'react-bootstrap'
import '../../values/styles/adminPage.css'

const AdminPage = () => {
    const { ProgressMap, Progress } = Controller()
    return (
        <div>
            <MenuOpcion className="menu" />
            <p className='titleProgress'>Progreso Semanal</p>
            <div className='statusAdmin'>
                <div className='adminForm'>
                    <Table hover size="sm">
                        <thead>
                            <tr>
                                <th>Foto</th>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Pasatiempo</th>
                                <th>Progreso</th>
                                <th className=''>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProgressMap}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
export default AdminPage