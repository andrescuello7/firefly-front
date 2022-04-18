import "../../values/styles/navbarComponent.css";
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
import Variables from '../../values/api';
import Controller from '../../ui/screen-controller/homePageController';
import RequestAccess from '../../data-access/requestAccess';
import { useState, useEffect } from "react";

const NavbarComponent = () => {
    const [adminDate, setAdminDate] = useState(false);
    const { token, admin } = Variables();
    const { handleLogOut, userModel } = Controller();
    const { getUser } = RequestAccess();

    useEffect(() => {
        AdminPageReload()
    }, [userModel !== null])
    
    const AdminPageReload = async () => {
        const response = await getUser();
        if (response.user.admin === true) {
            await setAdminDate(true)
        } else {
            await setAdminDate(false)
        }
    }
    return (
        <Navbar expand="lg" className="navbarBody sticky-top">
            <Container>
                <Navbar.Brand>
                    <Link className="btn btn-light navbarFont" to="/">
                        <img className="imagenLogoNavbar" src={require('../../values/icons/firefly.png')} />
                        <b>Luciernaga</b>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light text-success" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbarItems">
                        <Nav.Link>
                            <Link className="btn btn-light navbarFont" to="/profile">
                                Perfil
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="btn btn-light navbarFont" to="/status">
                                Estado
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="btn btn-light navbarFont" to="/pagos">
                                Pagos
                            </Link>
                        </Nav.Link>
                        {adminDate !== false ?
                            <Nav.Link>
                                <Link className="btn btn-light navbarFont" to="/admin">
                                    Administrador
                                </Link>
                            </Nav.Link>
                            :
                            <div></div>
                        }
                        {token !== null ?
                            <Nav.Link>
                                <Link onClick={handleLogOut} className="navbarFont btn btn-success w-100" to="/login">
                                    Cerrar Sesion
                                </Link>
                            </Nav.Link>
                            :
                            <div></div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;