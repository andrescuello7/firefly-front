import Controller from '../screen-controller/adminPageController';
import MenuOpcion from '../components/menuOptions';
import { Table, Form, Tabs, Tab, Button } from 'react-bootstrap'
import '../../values/styles/adminPage.css'

const AdminPage = () => {
    const { ProgressMap, ProgressProfileMap, HandleChange, PostHandleSubmit } = Controller()
    return (
        <div className='d-flex'>
            <MenuOpcion className="menu" />
            <div className='statusAdmin'>
                <div className='stateOfMenu'>
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
                        <Tab eventKey="images" title="Imagenes">
                            <div className='adminForm'>
                                <Form
                                    // onSubmit={PostHandleSubmit}
                                    className="FormRegister"
                                >
                                    <Form.Group controlId="formBasicEmail" className="formInput">
                                        <input
                                            className="inputFormRegister"
                                            onChange={(e) => HandleChange(e)}
                                            type="text"
                                            name="title"
                                            placeholder="Titulo"
                                        />
                                        <input
                                            className="inputFormRegister"
                                            onChange={(e) => HandleChange(e)}
                                            type="text"
                                            name="description"
                                            placeholder="Descripcion"
                                        />
                                        <label class="custom-file mt-2">
                                            <input
                                                id="file-input"
                                                name="photo"
                                                accept="image/png, image/jpeg"
                                                type="file"
                                                onChange={PostHandleSubmit}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            />
                                        </label>
                                    </Form.Group>
                                    <div className="mt-5 buttonRegister">
                                        <Button variant="outline-primary" className="w-100" type="submit">
                                            <b>Guardar</b>
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
export default AdminPage