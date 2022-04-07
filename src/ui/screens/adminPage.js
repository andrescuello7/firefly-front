import Controller from '../screen-controller/adminPageController';
import { Table, Form, Tabs, Tab, Button } from 'react-bootstrap'
import '../../values/styles/adminPage.css'

const AdminPage = () => {
    const { ProgressMap,
        PostsMap,
        HandleChange,
        ProgressCard,
        postAdminPhotoController,
        ProgressProfileMap,
        PutBannerSubmit } = Controller()
    return (
        <div className='statusAdmin'>
            <div className='stateOfMenu'>
                <p className='titleProgress'>Progreso Semanal</p>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tableAdmin">
                    <Tab eventKey="home" title="Home">
                        <div className='d-flex w-100 justify-content-evenly flex-wrap'>
                            {ProgressMap}
                        </div>
                    </Tab>
                    <Tab eventKey="images" title="Image">
                        <div className='adminForm'>
                            <Form
                                // onSubmit={postAdminPhotoController}
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
                                    <textarea
                                        cols="47"
                                        rows="10"
                                        className="form-control"
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
                                            onChange={postAdminPhotoController}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        />
                                    </label>
                                </Form.Group>
                                <div className="mt-2">
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
                                <Form.Group
                                    controlId="formBasicEmail"
                                    className="formInput"
                                >
                                    <input
                                        className="inputFormAdmin"
                                        onChange={(e) => HandleChange(e)}
                                        type="text"
                                        name="title"
                                        placeholder="Titulo de Banner"
                                    />
                                    <textarea
                                        cols="47"
                                        rows="10"
                                        className="form-control"
                                        onChange={(e) => HandleChange(e)}
                                        type="text"
                                        name="description"
                                        maxLength={250}
                                        placeholder="Descripcion de Banner"
                                    />
                                    {/* <label className="custom-file mt-2">
                                        <input
                                            id="file-input"
                                            name="photo"
                                            accept="image/png, image/jpeg"
                                            type="file"
                                            onChange={PutBannerSubmit}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        />
                                    </label> */}
                                </Form.Group>
                                <div className="mt-2">
                                    <Button
                                        variant="success"
                                        onClick={PutBannerSubmit}
                                        className="w-100"
                                    >
                                        <b>Actualizar</b>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>
                    <Tab eventKey="post" title="Posteos">
                        <div className='d-flex w-100 flex-wrap'>
                            {PostsMap}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
export default AdminPage