import Controller from '../screen-controller/adminPageController';
import MenuOpcion from '../components/menuOptions';
import { Table, Sonnet, Tabs, Tab } from 'react-bootstrap'
import '../../values/styles/adminPage.css'

const AdminPage = () => {
    const { ProgressMap, ProgressProfileMap } = Controller()
    return (
        <div>
            <MenuOpcion className="menu" />
            <p className='titleProgress'>Progreso Semanal</p>
            <div className='statusAdmin'>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Datos">
                        <div className='adminForm'>
                            <Table hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Foto</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Edad</th>
                                        <th>Progreso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ProgressMap}
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Personal">
                        <div className='adminForm'>
                            <Table hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Foto</th>
                                        <th>Nombre</th>
                                        <th>Locate</th>
                                        <th>Gustos</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ProgressProfileMap}
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
export default AdminPage