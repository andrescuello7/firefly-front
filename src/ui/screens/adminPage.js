import Controller from '../screen-controller/adminPageController';
import MenuOpcion from '../components/menuOptions';
import { Table, Sonnet, Tabs, Tab } from 'react-bootstrap'
import '../../values/styles/adminPage.css'

const AdminPage = () => {
    const { ProgressMap, ProgressProfileMap } = Controller()
    return (
        <div className='d-flex'>
            <MenuOpcion className="menu" />
            <div className='statusAdmin'>
                <p className='titleProgress'>Progreso Semanal</p>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 tableAdmin">
                    <Tab eventKey="home" title="Datos">
                        <div className='adminForm'>
                            <Table hover size="sm" className='adminFromTableOptions'>
                                <thead>
                                    <tr>
                                        <th className='textAdmin'>Foto</th>
                                        <th className='textAdmin'>Nombre</th>
                                        <th className='textAdmin'>Email</th>
                                        <th className='textAdmin'>Edad</th>
                                        <th className='textAdmin'>Progreso</th>
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
                            <Table hover size="sm" className='adminFromTableOptions'>
                                <thead>
                                    <tr>
                                        <th className='textAdmin'>Foto</th>
                                        <th className='textAdmin'>Nombre</th>
                                        <th className='textAdmin'>Locate</th>
                                        <th className='textAdmin'>Gustos</th>
                                        <th className='textAdmin'>Opciones</th>
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