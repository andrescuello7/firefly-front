import "../../values/styles/profilePage.css";
import { Form, Button, Modal, Nav, Dropdown, Card, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import ProfilePageController from "../screen-controller/profilePageController";
import FatherProfile from "../screens/profile/fatherProfile";

const ProfilePage = () => {
    const [select, setSelect] = useState(false);
    const [colaborator, setColaborator] = useState("Father");
    const [joven, setJoven] = useState("Father");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState([]);
    const [image, setImage] = useState('');

    const {
        userModel,
        validation,
        onChangeImg,
        HandleChange,
        PutHandleSubmit,
        onChangeImgChild,
        ProgressMapChild,
        postCreateChildProfile,
    } = ProfilePageController();
    useEffect(() => {
        father()
    }, [userModel.length !== 0])
    const father = async () => {
        if (userModel.user.collaborator === true) {
            await setColaborator(true)
            await setJoven("Joven")
            await setImage(userModel.user.photo)
        } else {
            await setColaborator(false)
            await setJoven("Father")
        }
    }
    return (
        <div>
            <div className="bodyProfile">
                <div className="profile">
                    <div className="d-flex flex-column">
                        <div className="titleProfilaDiv">
                            <img className="imgProfile" src={image !== '' ? `${userModel.user.photo}` : "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
                            <p className="titleProfile">{userModel.length !== 0 ? `${userModel.user.user}` : "Mi perfil"}</p>
                        </div>
                        <div>
                            <Nav justify variant="tabs" className="w-100 mt-4" defaultActiveKey="link-1">
                                <Nav.Item>
                                    <Nav.Link eventKey="link-0" onClick={() => setSelect(true)}>{joven}</Nav.Link>
                                </Nav.Item>
                                {colaborator === false ?
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1" onClick={() => setSelect(false)}>Hijos</Nav.Link>
                                    </Nav.Item> : <div></div>}
                            </Nav>
                        </div>
                    </div>
                    {select ?
                        <Form onSubmit={PutHandleSubmit} className="FormProfile">
                            <div className="text-success">
                                <b>Datos Escenciales de Padre</b>
                            </div>
                            <div className="FormProfileBootstrap">
                                <Form.Group controlId="formBasicEmail" autocomplete="off" className="w-100 m-2 ">
                                    <input
                                        className="inputFormProfile"
                                        onChange={(e) => HandleChange(e)}
                                        type="text"
                                        name="user"
                                        placeholder={userModel.length !== 0 ? `${userModel.user.user}` : "Nombre"}
                                    />
                                </Form.Group>
                                <Form.Group
                                    name="collaborator"
                                    onChange={(e) => HandleChange(e)}
                                    controlId="formGridState"
                                    className='w-100 m-2'
                                >
                                    <Form.Control className='inputFormProfile' name="collaborator" as="select" >
                                        <option value={false}>Padre</option>
                                        <option value={true}>Joven</option>
                                    </Form.Control>
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
                                        name="school"
                                        placeholder={"escuela"}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                    <button
                                        name="move"
                                        onChange={(e) => HandleChange(e)}
                                        className="btn btn-outline-success w-100 p-3 inputFormProfile"
                                    >
                                        Tiene Movilidad
                                    </button>
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
                            <Button variant="success" className="buttonProfile" type="submit">
                                <b>Guardar</b>
                            </Button>
                        </Form>
                        :
                        <div>
                            {colaborator === false ?
                                <div className="mt-4">
                                    <div className="w-100 d-flex justify-content-left flex-wrap">
                                        {ProgressMapChild}
                                        <Card variant="top"
                                            className='cardFormHomeAdmin justify-content-center text-center mt-2'
                                            onClick={handleShow}>
                                            <b>+</b>
                                        </Card>
                                    </div>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header>
                                            <p>Crear Usuario de Hijo</p>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3">
                                                    <input
                                                        className="inputFormProfile w-100"
                                                        type="text"
                                                        name="user"
                                                        onChange={(e) => HandleChange(e)}
                                                        placeholder="Nombre y Apellido"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <input
                                                        onChange={(e) => HandleChange(e)}
                                                        className="inputFormProfile w-100"
                                                        type="number"
                                                        name="years"
                                                        placeholder="Edad"
                                                    />
                                                </Form.Group>
                                                <Form.Group
                                                    onChange={(e) => HandleChange(e)}
                                                    name="gender"
                                                    controlId="formGridState"
                                                    className="w-100 mb-3"
                                                >
                                                    <Form.Control
                                                        name="gender"
                                                        as="select"
                                                        className="inputFormProfile"
                                                    >
                                                        <option>Genero</option>
                                                        <option>Varon</option>
                                                        <option>Mujer</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group className="w-100 mb-3">
                                                    <label className="w-100 custom-file-input">
                                                        <input
                                                            id="file-input"
                                                            name="photo"
                                                            accept="image/png, image/jpeg"
                                                            type="file"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                            onChange={onChangeImgChild}
                                                        />
                                                    </label>
                                                </Form.Group>
                                            </Form>
                                            {validation === true ?
                                                <Alert variant="success" className="text-center">
                                                    <p>Operacion Exitosa</p>
                                                    <p>Creo la cuenta correctamente!!!</p>
                                                </Alert>
                                                : validation === false ?
                                                    <Alert variant="danger" className="text-center">
                                                        <p>Error de operacion Operacion</p>
                                                        <p>Revise los datos ingresados</p>
                                                    </Alert>
                                                    :
                                                    <div></div>
                                            }
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="d-flex w-100">
                                                <Button variant="dark" className="w-100" onClick={postCreateChildProfile}>
                                                    <b>Crear usuario</b>
                                                </Button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>
                                </div> : <div></div>}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default ProfilePage