import Controller from '../../screen-controller/adminPageController';
import { Nav } from "react-bootstrap";
import { useState } from 'react'

const FatherProfile = () => {
    const [select, setSelect] = useState(false);
    const {
        userModel,
    } = Controller()
    return (
        <div className="d-flex flex-column">
            <div className="titleProfilaDiv">
                <img className="imgProfile" src={userModel.length !== 0 ? `${userModel.user.photo}` : "https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg"} />
                <p className="titleProfile">{userModel.length !== 0 ? `${userModel.user.user}` : "Mi perfil"}</p>
            </div>
            <div>
                <Nav justify variant="tabs" className="w-100 mt-4" defaultActiveKey="link-1">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => setSelect(true)}>{userModel.length !== 0 ? "Padre" : "Joven"}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => setSelect(false)}>Hijos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}
export default FatherProfile