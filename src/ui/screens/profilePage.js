import "../../values/styles/profilePage.css";
import { Form, Button, Placeholder } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import MenuOpcion from '../components/menuOptions';
import FutterComponent from '../components/futterComponent';

const ProfilePage = () => {
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
        <div className='body'>
            <MenuOpcion />
            <div className="bodyProfile">
                <div className="profile">
                    <div className="text-center w-100">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex w-100 align-items-center">
                                <img className="imgProfile" src="https://ca.slack-edge.com/TAY2BPG0M-U02JQP4C9RC-8fd520f75ca8-48" />
                                <p className="titleProfile">Mi perfil</p>
                            </div>
                        </div>
                    </div>
                    <Form onSubmit={HandleSubmit} className="FormProfile">
                        <div className="text-primary">
                            <b>Datos Escenciales</b>
                        </div>
                        <div className="FormProfileBootstrap">

                            <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                <input
                                    className="w-100 inputFormProfile"
                                    onChange={(e) => HandleChange(e)}
                                    type="text"
                                    name="user"
                                    placeholder="Nombre y Apellido"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                <input
                                    className="w-100 inputFormProfile"
                                    onChange={(e) => HandleChange(e)}
                                    type="date"
                                    name="date"
                                    placeholder="Fecha de Nacimiento"
                                />
                            </Form.Group>
                        </div>
                        <div className="text-primary mt-5">
                            <b>Datos Adicionales</b>
                        </div>
                        <div className="FormProfileBootstrap">
                            <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                <input
                                    className="w-100 inputFormProfile"
                                    onChange={(e) => HandleChange(e)}
                                    type="text"
                                    name="locate"
                                    placeholder="Direccion de casa"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                <input
                                    className="w-100 inputFormProfile"
                                    onChange={(e) => HandleChange(e)}
                                    type="text"
                                    name="school"
                                    placeholder="Colegio"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                <input
                                    className="w-100 inputFormProfile"
                                    onChange={(e) => HandleChange(e)}
                                    type="text"
                                    name="health"
                                    placeholder="Algun problema de salud"
                                />
                            </Form.Group>
                        </div>
                        <div className="text-primary mt-5">
                            <b>Cuenta Personal</b>
                        </div>
                        <div className="FormProfileBootstrap">
                            <Form.Group controlId="formBasicEmail" className="m-2 w-100">
                                <input
                                    className="w-100 inputFormProfile"
                                    onChange={(e) => HandleChange(e)}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                <input
                                    className="w-100 inputFormProfile"
                                    onChange={(e) => HandleChange(e)}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                        </div>

                        {validation === true && (
                            <div className="ml-2 text-danger">
                                <p>No se puede iniciar sesion, intenta nuevamente!</p>
                            </div>
                        )}
                    </Form>
                    <div className="text-center">
                        <Button variant="primary" className="buttonProfile" type="submit">
                            <b>Guardar</b>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfilePage