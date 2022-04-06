import "../../values/styles/loginPage.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import ControllerVariables from "../../values/api";
import Controller from "../screen-controller/loginPageController";

const LoginPage = () => {
    const { HandleChange, HandleSubmit, validation } = Controller();

    return (
        <div className="FondoDeForm">
            <Form onSubmit={HandleSubmit} className="login">
                <Form.Group controlId="formBasicEmail" className="FormLogin">
                    <p className='titleLogin'>Sing In</p>
                    <input
                        className="inputFormLogin"
                        onChange={(e) => HandleChange(e)}
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        className="inputFormLogin"
                        onChange={(e) => HandleChange(e)}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <Button className="w-100 inputFormButton" type="submit">
                        <b>iniciar sesion</b>
                    </Button>
                </Form.Group>
                {validation === true && (
                    <div className="ml-2 text-danger">
                        <p>No se puede iniciar sesion, intenta nuevamente!</p>
                    </div>
                )}
                <div className="w-100 text-center">
                    <a className="text-success" style={{ border: 'none' }} href="/register">No tienes cuenta?, create una cuenta</a>
                </div>
            </Form>
        </div>
    );
};
export default LoginPage;