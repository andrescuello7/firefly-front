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
                <img className="imgProfile" src={userModel.length !== 0 ? `${userModel.user.photo}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
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