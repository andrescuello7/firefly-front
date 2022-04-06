import "../../values/styles/registerPage.css";
import { Form, Button } from "react-bootstrap";
import Controller from "../screen-controller/registerPageController";

const RegisterPage = () => {
    const { validation, HandleSubmit, HandleChange } = Controller();

    return (
        <div className="bodyRegister">
            <div className="register">
                <Form onSubmit={HandleSubmit} className="FormRegister">
                    <p className='titleRegister'>Create new account</p>
                    <Form.Group controlId="formBasicEmail" className="formInput">
                        <div className="d-flex w-100">
                            <input
                                className="inputFormRegister"
                                onChange={(e) => HandleChange(e)}
                                type="text"
                                name="user"
                                placeholder="Usuario"
                            />
                            <div className="m-2"></div>
                            <input
                                className="inputFormRegister"
                                onChange={(e) => HandleChange(e)}
                                type="password"
                                name="password"
                                placeholder="Contrasena"
                            />
                        </div>
                        <input
                            className="inputFormRegister"
                            onChange={(e) => HandleChange(e)}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <Button className="w-100 inputFormButton" type="submit">
                            <b>Registrarte</b>
                        </Button>
                    </Form.Group>
                    {validation === true && (
                        <div className="ml-2 text-danger">
                            <p>No se puede iniciar sesion, intenta nuevamente!</p>
                        </div>
                    )}
                    <div className="mt-2"></div>
                    <div className="text-left w-100">
                        <a className="text-success" href="/login">tienes cuenta? click inicar sesion</a>
                    </div>
                </Form>
            </div>
        </div>
    );
};
export default RegisterPage;