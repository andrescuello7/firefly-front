import Controller from '../screen-controller/adminPageController';
import { Form, Button, Modal } from 'react-bootstrap'
import '../../values/styles/adminPage.css'
import { useState } from 'react'

const AdminPage = () => {
    const [menuAdmin, setMenuAdmin] = useState(0)
    const OptionsMenu = ({ icon, title, show, route, script }) => {
        return (
            <div to={route} className='menuOpcionAdmin' onClick={() => setMenuAdmin(script)}>
                <div className='w-100 d-flex justify-content-left mx-2 p-2' >
                    <div>
                        {icon}
                    </div>
                    <div className='titleOptionMenuAdmin mx-2 px-2'>
                        {title}
                    </div>
                </div>
            </div>
        );
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { ProgressMap,
        PostsMap,
        HandleChange,
        postAdminPhotoController,
        PutBannerSubmit } = Controller()
    return (
        <div className='statusAdmin'>
            <div className='menuAdmin'>
                <div className='w-100 text-center'>
                    <a className='btn d-flex mx-4 mt-2' href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-clipboard-pulse text-light" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Zm6.979 3.856a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.895-.133L4.232 10H3.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .416-.223l1.41-2.115 1.195 3.982a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h1.5a.5.5 0 0 0 0-1h-1.128L9.979 5.356Z" />
                        </svg>
                        <p className='mx-3 TituloMenuDate'>Admin</p>
                    </a>
                </div>
                <div className='w-100 border border-bottom-0 mb-5'>
                </div>
                <div className=''>
                    <OptionsMenu script={0} title={"Usuarios"} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                    } />
                    <OptionsMenu script={1} title={"Imagenes"} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                        </svg>
                    } />
                    <OptionsMenu script={2} title={"Banner"} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-terminal-plus" viewBox="0 0 16 16">
                            <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" />
                            <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                    } />
                    <OptionsMenu script={3} title={"Eliminar"} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    } />
                    <div className='w-100 border border-bottom-0 mb-5'>
                    </div>
                </div>
            </div>
            <div className='stateOfMenu'>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body className='bg-dark d-flex justify-content-center flex-column'>
                        <a href='/' className='w-100 p-3 btn btn-outline-light d-flex justify-content-center'>
                            <b>Inicio</b>
                        </a>
                        <OptionsMenu script={0} title={"Usuarios"} icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                            </svg>
                        } />
                        <OptionsMenu script={1} title={"Imagenes"} icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                            </svg>
                        } />
                        <OptionsMenu script={2} title={"Banner"} icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-terminal-plus" viewBox="0 0 16 16">
                                <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" />
                                <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        } />
                        <OptionsMenu script={3} title={"Eliminar"} icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        } />
                    </Modal.Body>
                </Modal>
                {menuAdmin === 0 ?
                    <div>
                        <div className='w-100'>
                            <p className='titleAdmin' onClick={handleShow}>Usuarios Totales</p>
                        </div>
                        <div className='d-flex w-100 justify-content-evenly flex-wrap'>
                            {ProgressMap}
                        </div>
                    </div>
                    : menuAdmin === 1 ?
                        <div>
                            <div className='w-100'>
                                <p className='titleAdmin' onClick={handleShow}>Publicar Noticias y hacer posteos</p>
                            </div>
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
                        </div>
                        : menuAdmin === 2 ?
                            <div>
                                <div className='w-100'>
                                    <p className='titleAdmin' onClick={handleShow}>Actualizar el banner</p>
                                </div>
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
                            </div>
                            : menuAdmin === 3 ?
                                <div>
                                    <div className='w-100'>
                                        <p className='titleAdmin' onClick={handleShow}>Eliminar posteos</p>
                                    </div>
                                    <div className='d-flex w-100 flex-wrap'>
                                        {PostsMap}
                                    </div>
                                </div>
                                : <div></div>}
            </div>
        </div>
    );
}
export default AdminPage