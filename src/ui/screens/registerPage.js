import "../../values/styles/registerPage.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Controller from "../screen-controller/loginPageController";

const RegisterPage = () => {
    const [input, setInput] = useState({});
    const [validation, setValidation] = useState(false);

    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();
        window.location.href = "/login";
        // try {
        //   const { data } = await axios.post("auth", input);
        //   localStorage.setItem("token", data);
        //   window.location.href = "/";
        // } catch (error) {
        //   console.log(error);
        //   setValidation(true);
        // }
    };

    return (
        <div className="bodyRegister">
            {/* <div class="background">
                <svg id="clouds" xmlns="http://www.w3.org/2000/svg" width="2611.084" height="485.677"
                    viewBox="0 0 2611.084 485.677">
                    <path id="Path_39" data-name="Path 39"
                        d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z"
                        transform="translate(142.69 -634.312)" fill="#eee" />
                </svg>
            </div> */}
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
                                    name="name"
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
                                    name="jobs"
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
                </Form>
            </div>
        </div>
    );
};
export default RegisterPage;