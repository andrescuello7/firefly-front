import "../../values/styles/navbarComponent.css";
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
import Variables from '../../values/api';
import Controller from '../../ui/screen-controller/homePageController';
import UserModel from '../../models/userModel';

const NavbarComponent = () => {
    const { token, admin } = Variables();
    const { menu, img, burgerButton, handleLogOut } = Controller();
    const { userModel } = UserModel(); 

    return (
        <Navbar expand="lg" className="navbarBody">
            <Container>
                <Navbar.Brand href="/">
                    <img className="imagenLogoNavbar" src={require('../../values/icons/firefly.png')} />
                    <b>Luciernaga</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light text-success" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbarItems">
                        <Nav.Link>
                            <Link className="btn btn-light" to="/profile">
                                Perfil
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="btn btn-light" to="/status">
                                Estado
                            </Link>
                        </Nav.Link>
                        {admin !== null ?
                            <Nav.Link>
                                <Link className="btn btn-light" to="/admin">
                                    Administrador
                                </Link>
                            </Nav.Link>
                            :
                            <div></div>
                        }
                        <Nav.Link>
                            <Link onClick={handleLogOut} className="btn btn-success w-100" to="/login">
                                Cerrar Sesion
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;