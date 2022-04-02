import Controller from '../screen-controller/adminPageController';
import MenuOpcion from '../components/menuOptions';
import { Table, Form, Tabs, Tab, Button } from 'react-bootstrap'
import '../../values/styles/adminPage.css'

const AdminPage = () => {
    const { ProgressMap, PostsMap, ProgressProfileMap, HandleChange, PostHandleSubmit, PutBannerSubmit } = Controller()
    return (
        <div className='d-flex'>
            <MenuOpcion className="menu" />
            <div className='statusAdmin'>
                <div className='stateOfMenu'>
                    <p className='titleProgress'>Progreso Semanal</p>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tableAdmin">
                        <Tab eventKey="home" title="A">
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
                        <Tab eventKey="profile" title="B">
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
                        <Tab eventKey="images" title="C">
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
                                            placeholder="Titulo de Posteo"
                                        />
                                        <input
                                            className="inputFormRegister"
                                            onChange={(e) => HandleChange(e)}
                                            type="text"
                                            name="description"
                                            placeholder="Descripcion de Posteo"
                                        />
                                        <label className="custom-file mt-2">
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
                        <Tab eventKey="banner" title="D">
                            <div className='adminForm'>
                                <Form
                                    className="FormRegister"
                                >
                                    <Form.Group controlId="formBasicEmail" className="formInput">
                                        <input
                                            className="inputFormRegister"
                                            onChange={(e) => HandleChange(e)}
                                            type="text"
                                            name="title"
                                            placeholder="Titulo de Banner"
                                        />
                                        <input
                                            className="inputFormRegister"
                                            onChange={(e) => HandleChange(e)}
                                            type="text"
                                            name="description"
                                            placeholder="Descripcion de Banner"
                                        />
                                        <label className="custom-file mt-2">
                                            <input
                                                id="file-input"
                                                name="photo"
                                                accept="image/png, image/jpeg"
                                                type="file"
                                                onChange={PutBannerSubmit}
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
                        <Tab eventKey="post" title="E">
                            <div className='adminForm'>
                                <Table hover size="sm" className='adminFromTableOptions'>
                                    <thead>
                                        <tr>
                                            <th className='textAdmin'>Foto</th>
                                            <th className='textAdmin'>Titulo</th>
                                            <th className='textAdmin'>Descripcion</th>
                                            <th className='textAdmin'>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {PostsMap}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
export default AdminPage