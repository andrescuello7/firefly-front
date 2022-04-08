import "../../values/styles/profilePage.css";
import { Form, Button, Modal, Nav, Dropdown } from "react-bootstrap";
import { useState } from "react";
import ProfilePageController from "../screen-controller/profilePageController";

const ProfilePage = () => {
    const [select, setSelect] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {
        userModel,
        HandleChange,
        PutHandleSubmit,
        postCreateChildProfile,
        onChangeImgChild,
        ProgressMapChild,
        onChangeImg } = ProfilePageController();
    return (
        <div>
            <div className="bodyProfile">
                <div className="profile">
                    <div className="d-flex flex-column">
                        <div className="titleProfilaDiv">
                            <img className="imgProfile" src={userModel.length !== 0 ? `${userModel.user.photo}` : "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
                            <p className="titleProfile">{userModel.length !== 0 ? `${userModel.user.user}` : "Mi perfil"}</p>
                        </div>
                        <div>
                            <Nav justify variant="tabs" className="w-100 mt-4" defaultActiveKey="link-1">
                                <Nav.Item>
                                    <Nav.Link eventKey="link-0" onClick={() => setSelect(true)}>Padre</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" onClick={() => setSelect(false)}>Hijos</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    {select ?
                        <Form onSubmit={PutHandleSubmit} className="FormProfile">
                            <div className="text-success">
                                <b>Datos Escenciales de Padre</b>
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
                                <Dropdown className='w-100 mt-2'>
                                    <Dropdown.Toggle className='inputFormProfile' variant="outline-success" id="dropdown-basic">
                                        Padre o Colaborador
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='w-100'>
                                        <Dropdown.Item >Padre</Dropdown.Item>
                                        <Dropdown.Item >Colaborador</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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
                        <div className="mt-4">
                            <button className="btn btn-dark w-100 p-2" onClick={handleShow} >
                                <b>Crear Hijo</b>
                            </button>

                            <div>
                                {ProgressMapChild}
                            </div>

                            {/* <Form onSubmit={PutHandleSubmit} className="FormProfile">
                                <div className="text-success">
                                    <b>Datos Escenciales de Hijo</b>
                                </div>
                                <div className="FormProfileBootstrap">
                                    <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                        <input
                                            className="inputFormProfile"
                                            onChange={(e) => HandleChange(e)}
                                            type="text"
                                            name="user"
                                            placeholder='Nombre de hijo'
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                        <Dropdown className='w-100'>
                                            <Dropdown.Toggle
                                                type="text"
                                                name="gender"
                                                onChange={(e) => HandleChange(e)}
                                                className='inputFormProfile'
                                                variant="outline-success"
                                                id="dropdown-basic">
                                                Genero
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className='w-100'>
                                                <Dropdown.Item >Varon</Dropdown.Item>
                                                <Dropdown.Item >Mujer</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
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
                                            placeholder={"Direccion"}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                        <input
                                            className="inputFormProfile"
                                            onChange={(e) => HandleChange(e)}
                                            type="text"
                                            name="school"
                                            placeholder={"Escuela"}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                        <input
                                            className="inputFormProfile"
                                            onChange={(e) => HandleChange(e)}
                                            type="text"
                                            name="health"
                                            placeholder={"Poblemas de salud?"}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="text-success mt-5">
                                    <b>Cuenta Personal</b>
                                </div>
                                <div className="FormProfileBootstrap">
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
                                            type="date"
                                            name="date"
                                        />
                                    </Form.Group>
                                </div>
                                <Button variant="success" className="buttonProfile" type="submit">
                                    <b>Guardar</b>
                                </Button>
                            </Form> */}
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
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
                                                <option>Varon</option>
                                                <option>Mujer</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className="w-100">
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
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="dark" className="w-100" onClick={postCreateChildProfile}>
                                        <b>Crear usuario</b>
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default ProfilePage