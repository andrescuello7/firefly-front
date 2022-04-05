import "../../values/styles/profilePage.css";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import MenuOpcion from '../components/menuOptions';
import ProfilePageController from "../screen-controller/profilePageController";

const ProfilePage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {
        userModel,
        HandleChange,
        PutHandleSubmit,
        onChangeImg } = ProfilePageController();
    return (
        <div className="bodyProfile">
            <div className="profile">
                <div className="titleProfilaDiv">
                    <img className="imgProfile" src={userModel.length !== 0 ? `${userModel.user.photo}` : "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
                    <p className="titleProfile">{userModel.length !== 0 ? `${userModel.user.user}` : "Mi perfil"}</p>
                </div>
                <Form onSubmit={PutHandleSubmit} className="FormProfile">
                    <div className="text-success">
                        <b>Datos Escenciales</b>
                    </div>
                    <div className="FormProfileBootstrap">
                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                            <input
                                className="inputFormProfile"
                                onChange={(e) => HandleChange(e)}
                                type="text"
                                name="user"
                                placeholder={userModel.length !== 0 ? `${userModel.user.user}` : "Nombre"}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                            <input
                                className="inputFormProfile"
                                onChange={(e) => HandleChange(e)}
                                type="date"
                                name="date"
                            />
                        </Form.Group>
                    </div>
                    <div className="text-success mt-5">
                        <b>Datos Adicionales</b>
                    </div>
                    <div className="FormProfileBootstrap">
                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                            <input
                                className="inputFormProfile"
                                onChange={(e) => HandleChange(e)}
                                type="text"
                                name="locate"
                                placeholder={"direccion"}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                            <input
                                className="inputFormProfile"
                                onChange={(e) => HandleChange(e)}
                                type="text"
                                name="school"
                                placeholder={"escuela"}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                            <input
                                className="inputFormProfile"
                                onChange={(e) => HandleChange(e)}
                                type="text"
                                name="health"
                                placeholder={"poblema de salud"}
                            />
                        </Form.Group>
                    </div>
                    <div className="text-success mt-5">
                        <b>Cuenta Personal</b>
                    </div>
                    <div className="FormProfileBootstrap">
                        <Form.Group controlId="formBasicEmail" className="m-2 w-100">
                            <input
                                className="inputFormProfile"
                                onChange={(e) => HandleChange(e)}
                                type="email"
                                name="email"
                                placeholder={userModel.length !== 0 ? `${userModel.user.email}` : "escuela"}
                            />
                        </Form.Group>
                        <label className="custom-file-input m-2">
                            <input
                                id="file-input"
                                name="photo"
                                accept="image/png, image/jpeg"
                                type="file"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onChange={onChangeImg}
                            />
                        </label>

                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                            <input
                                className="inputFormProfile"
                                onChange={(e) => HandleChange(e)}
                                type="password"
                                // name="password"
                                placeholder="contrasena"
                            />
                        </Form.Group>
                    </div>
                    <Button variant="success" className="buttonProfile" onClick={handleShow} type="submit">
                        <b>Guardar</b>
                    </Button>
                    <Modal className="modalProfileBody" show={show} onHide={handleClose}>
                        <Modal.Header className="modalProfile" closeButton>
                            <i className="mt-2">Perfecto se actualizaron sus datos!</i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                            </svg>
                        </Modal.Header>
                    </Modal>
                </Form>
            </div>
        </div>
    );
}
export default ProfilePage