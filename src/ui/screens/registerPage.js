import "../../values/styles/registerPage.css";
import { Form, Button } from "react-bootstrap";
import Controller from "../screen-controller/registerPageController";

const RegisterPage = () => {
    const { validation, HandleSubmit, HandleChange } = Controller();

    return (
        <div className="bodyRegister">
            <div className="register">
                <div className="text-center w-100">
                    <div className='d-flex justify-content-center'>
                        <p className='titleRegister text-warning'>L</p>
                        <p className='titleRegister text-danger'>u</p>
                        <p className='titleRegister text-primary'>c</p>
                        <p className='titleRegister text-success'>i</p>
                        <p className='titleRegister text-warning'>e</p>
                        <p className='titleRegister text-danger'>r</p>
                        <p className='titleRegister text-primary'>n</p>
                        <p className='titleRegister text-success'>a</p>
                        <p className='titleRegister text-warning'>g</p>
                        <p className='titleRegister text-danger'>a</p>
                    </div>
                    <div>
                        <i className="descriptionRegister">Luces de la tierra puestas a servicio</i>
                    </div>
                </div>
                <Form onSubmit={HandleSubmit} className="FormRegister">
                    <Form.Group controlId="formBasicEmail" className="formInput">
                        <input
                            className="inputFormRegister"
                            onChange={(e) => HandleChange(e)}
                            type="text"
                            name="user"
                            placeholder="Nombre y Apellido"
                        />
                        <input
                            className="inputFormRegister"
                            onChange={(e) => HandleChange(e)}
                            type="number"
                            name="years"
                            placeholder="Edad"
                        />
                        <input
                            className="inputFormRegister"
                            onChange={(e) => HandleChange(e)}
                            type="text"
                            name="locate"
                            placeholder="Direccion"
                        />
                        <input
                            className="inputFormRegister"
                            onChange={(e) => HandleChange(e)}
                            type="text"
                            name="likes"
                            placeholder="Gustos o pasatiempos"
                        />
                        <input
                            className="inputFormRegister"
                            onChange={(e) => HandleChange(e)}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            className="inputFormRegister"
                            onChange={(e) => HandleChange(e)}
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                    {validation === true && (
                        <div className="ml-2 text-danger">
                            <p>No se puede iniciar sesion, intenta nuevamente!</p>
                        </div>
                    )}
                    <div className="mt-5 buttonRegister">
                        <Button variant="outline-primary" className="w-100" type="submit">
                            <b>Registrarte</b>
                        </Button>
                    </div>
                    <div className="mt-2"></div>
                    <div className="text-left">
                        <a className="border-0" href="/login">ya tienes cuenta?</a>
                    </div>
                </Form>
            </div>
        </div>
    );
};
export default RegisterPage;