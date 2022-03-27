import "../../values/styles/registerPage.css";
import { Form, Button } from "react-bootstrap";
import Controller from "../screen-controller/registerPageController";

const RegisterPage = () => {
    const { validation, HandleSubmit, HandleChange } = Controller();

    return (
        <div className="bodyRegister">
            <div className="register">
                <div className="text-center w-100">
                    <div>
                        <p className="titleRegister">Luciernagas</p>
                    </div>
                    <div>
                        <i className="descriptionRegister">Luces de la tierra puestas a servicio</i>
                    </div>
                    <hr />
                </div>
                <Form onSubmit={HandleSubmit} className="FormRegister">
                    <Form.Group controlId="formBasicEmail" className="formInput">
                        <div className="w-100">
                            <div>
                                <input
                                    className="form-control"
                                    onChange={(e) => HandleChange(e)}
                                    type="text"
                                    name="user"
                                    placeholder="Nombre y Apellido"
                                />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="formInput">
                        <div className="w-100">
                            <div>
                                <input
                                    className="form-control"
                                    onChange={(e) => HandleChange(e)}
                                    type="number"
                                    name="years"
                                    placeholder="Edad"
                                />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="formInput">
                        <div className="w-100">
                            <div>
                                <input
                                    className="form-control"
                                    onChange={(e) => HandleChange(e)}
                                    type="text"
                                    name="locate"
                                    placeholder="Direccion"
                                />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="formInput">
                        <div className="w-100">
                            <div>
                                <input
                                    className="form-control"
                                    onChange={(e) => HandleChange(e)}
                                    type="text"
                                    name="likes"
                                    placeholder="Gustos o pasatiempos"
                                />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="formInput">
                        <div className="w-100">
                            <div>
                                <input
                                    className="form-control"
                                    onChange={(e) => HandleChange(e)}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="formInput">
                        <div className="w-100">
                            <div>
                                <input
                                    className="form-control"
                                    onChange={(e) => HandleChange(e)}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                    </Form.Group>
                    {validation === true && (
                        <div className="ml-2 text-danger">
                            <p>No se puede iniciar sesion, intenta nuevamente!</p>
                        </div>
                    )}
                    <div className="mt-5 buttonRegister">
                        <Button variant="primary" className="w-100" type="submit">
                            <b>Sing Up</b>
                        </Button>
                    </div>
                    <div className="mt-2"></div>
                    <div className="text-center">
                        <a style={{ border: 'none' }} href="/login">Ya tienes cuenta?, inicia session</a>
                    </div>
                </Form>
            </div>
        </div>
    );
};
export default RegisterPage;