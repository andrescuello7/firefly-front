import "../../values/styles/loginPage.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import ControllerVariables from "../../values/api";
import Controller from "../screen-controller/loginPageController";

const LoginPage = () => {
    const { HandleChange, HandleSubmit, validation } = Controller();

    return (
        <div>
            <div className="FondoDeForm">
                <div className="login">
                    <Form onSubmit={HandleSubmit} className="FormLogin card">
                        <div className="w-100">
                            <p className="text-center PortadaTituloForm">
                                <b>
                                    Luciernagas
                                </b>
                            </p>
                        </div>
                        <hr className="bg-light" />
                        <div className="mt-5"></div>

                        <Form.Group controlId="formBasicEmail">
                            <div className="d-flex">
                                <div className="text-dark mt-2 mx-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-person-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                                    </svg>
                                </div>
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
                        <div className="mt-2"></div>
                        <div className="mt-2"></div>
                        <div className="mt-2"></div>

                        <Form.Group controlId="formBasicPassword">
                            <div className="d-flex">
                                <div className="text-dark mx-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-lock-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                    </svg>
                                </div>
                                <div className="mt-5"></div>
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
                        <div className="mt-2"></div>
                        <div className="w-100 d-flex justify-content-center">
                            <Button variant="primary" className="buttonLogin" type="submit">
                                <b>Sing In</b>
                            </Button>
                        </div>
                        <div className="mt-2"></div>
                        <div className="text-center">
                            <a style={{ border: 'none' }} href="/register">No tienes cuenta?, create una cuenta</a>
                        </div>
                    </Form>
                    <div className="About">
                        <div className="AboutImgen">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;