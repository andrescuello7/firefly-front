import Controller from '../screen-controller/adminPageController';
import MenuOpcion from '../components/menuOptions';
import { Table, Form, Tabs, Tab, Button } from 'react-bootstrap'
import '../../values/styles/adminPage.css'

const AdminPage = () => {
    const { ProgressMap, ProgressCard, PostsMap, ProgressProfileMap, HandleChange, PostHandleSubmit, PutBannerSubmit } = Controller()
    return (
        <div className='statusAdmin'>
            <div className='stateOfMenu'>
                <p className='titleProgress'>Progreso Semanal</p>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tableAdmin">
                    <Tab eventKey="home" title="Home">
                        <div className='d-flex w-100 justify-content-around flex-wrap'>
                            {/* <Table hover size="sm" className='w-100 d-flex'> */}
                            {/* <thead>
                                    <tr>
                                        <th className='textAdmin'>Foto</th>
                                        <th className='textAdmin'>Nombre</th>
                                        <th className='textAdmin'>Email</th>
                                        <th className='textAdmin'>Edad</th>
                                        <th className='textAdmin'>Progreso</th>
                                    </tr>
                                </thead> */}
                            {ProgressMap}
                            {/* </Table> */}
                        </div>
                    </Tab>
                    {/* <Tab eventKey="profile" title="Date">
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
                    </Tab> */}
                    <Tab eventKey="images" title="Image">
                        <div className='adminForm'>
                            <Form
                                // onSubmit={PostHandleSubmit}
                                className="FormAdmin"
                            >
                                <Form.Group controlId="formBasicEmail" className="formInput">
                                    <input
                                        className="inputFormAdmin"
                                        onChange={(e) => HandleChange(e)}
                                        type="text"
                                        name="title"
                                        placeholder="Titulo de Posteo"
                                    />
                                    <input
                                        className="inputFormAdmin"
                                        onChange={(e) => HandleChange(e)}
                                        type="text"
                                        maxLength={250}
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
                                    <Button variant="success" className="w-100" type="submit">
                                        <b>Publicar</b>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>
                    <Tab eventKey="banner" title="Banner">
                        <div className='adminForm'>
                            <Form
                                className="FormAdmin"
                            >
                                <Form.Group controlId="formBasicEmail" className="formInput">
                                    <input
                                        className="inputFormAdmin"
                                        onChange={(e) => HandleChange(e)}
                                        type="text"
                                        name="title"
                                        placeholder="Titulo de Banner"
                                    />
                                    <input
                                        className="inputFormAdmin"
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
                                    <Button variant="success" className="w-100" type="submit">
                                        <b>Actualizar</b>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>
                    <Tab eventKey="post" title="Posteos">
                        <div className='d-flex w-100 justify-content-around flex-wrap'>
                            {PostsMap}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
export default AdminPage