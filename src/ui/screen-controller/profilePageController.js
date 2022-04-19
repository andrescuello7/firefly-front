import { Form, Dropdown, Spinner, Modal, Button, ProgressBar, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import RecuestAccess from '../../data-access/requestAccess';
import UserModel from '../../models/userModel';


const ProfilePageController = () => {
    const [imageChild, setImageChild] = useState('');
    const [input, setInput] = useState({});
    const [validation, setValidation] = useState(null);
    const [child, setChild] = useState([]);
    const { putUser, getUser, postChildProfile, postImage, postImageAdmin, getChildInProfile } = RecuestAccess();
    const { userModel, setUserModel } = UserModel();

    useEffect(async () => {
        let response = await getUser()
        setUserModel(response)
        getReadUserController()
    }, [userModel.length === 0])

    const getReadUserController = async (e) => {
        try {
            let responseChild = await getChildInProfile();
            setChild(responseChild.data)
        } catch (error) {
            console.log(error);
        }
    };
    const onChangeImg = async (e) => {
        e.preventDefault()
        try {
            const { user } = await getUser();
            const { data } = await postImage(e, user);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const PutHandleSubmit = async (e) => {
        e.preventDefault()
        try {
            let { user } = await getUser();
            const response = await putUser(user._id, input);
            console.log(response);
            window.location.href = "/profile";
        } catch (error) {
            console.log(error);
        }
    };
    
    const onChangeImgChild = async (e) => {
        e.preventDefault()
        try {
            const response = await postImageAdmin(e);
            setImageChild(response);
        } catch (error) {
            console.log(error);
        }
    }
    const postCreateChildProfile = async (e) => {
        e.preventDefault()
        try {
            let child = { ...input, photo: imageChild, progress: 0 }
            const response = await postChildProfile(child);
            console.log(response);
            setValidation(true)
            window.location.href = "/profile";
        } catch (error) {
            setValidation(false)
            console.log(error);
        }
    };

    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = {
            ...input,
            [name]: value
        };
        setInput(changedInput);
    };

    //Component for Table

    const ProgressCard = ({ progress, name, edad, image, gender, createBy }) => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
            <>
                {createBy === userModel.user._id ?
                    <>
                        <Card className='cardFormHomeAdmin' onClick={handleShow}>
                            <Card.Img variant="top" className='imageAdmin' src={image ? `${image}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                            <Card.Body>
                                <Card.Text className='textAdmin'>Nombre: {name}</Card.Text>
                                <Card.Text className='textAdmin'>Edad: {edad}</Card.Text>
                                <Card.Text className='textAdmin'>Genero: {gender}</Card.Text>
                                <ProgressBar
                                    className="progressBar"
                                    striped variant="success"
                                    animated now={progress}
                                />
                            </Card.Body>
                        </Card>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body>
                                <Form onSubmit={PutHandleSubmit} className="FormProfile mt-2">
                                    <div className="text-success">
                                        <b>Datos Escenciales de Hijo</b>
                                    </div>
                                    <div className="FormProfileBootstrap">
                                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                            <input
                                                className="inputFormProfile"
                                                onChange={(e) => HandleChange(e)}
                                                type="text"
                                                name="user"
                                                placeholder='Nombre de hijo'
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                            <Dropdown className='w-100'>
                                                <Dropdown.Toggle
                                                    type="text"
                                                    name="gender"
                                                    onChange={(e) => HandleChange(e)}
                                                    className='inputFormProfile'
                                                    variant="outline-success"
                                                    id="dropdown-basic">
                                                    Genero
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className='w-100'>
                                                    <Dropdown.Item >Varon</Dropdown.Item>
                                                    <Dropdown.Item >Mujer</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>
                                    </div>
                                    <div className="text-success mt-5">
                                        <b>Datos Adicionales</b>
                                    </div>
                                    <div className="FormProfileBootstrap">
                                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                            <input
                                                className="inputFormProfile"
                                                onChange={(e) => HandleChange(e)}
                                                type="text"
                                                name="school"
                                                placeholder={"Escuela"}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                            <input
                                                className="inputFormProfile"
                                                onChange={(e) => HandleChange(e)}
                                                type="text"
                                                name="health"
                                                placeholder={"Poblemas de salud?"}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="text-success mt-5">
                                        <b>Cuenta Personal</b>
                                    </div>
                                    <div className="FormProfileBootstrap">
                                        <Form.Group controlId="formBasicEmail" className="w-100 m-2 ">
                                            <input
                                                className="inputFormProfile"
                                                onChange={(e) => HandleChange(e)}
                                                type="text"
                                                name="locate"
                                                placeholder={"Direccion"}
                                            />
                                        </Form.Group>
                                    </div>
                                </Form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" className="buttonProfile" type="submit">
                                    <b>Guardar</b>
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    :
                    <div></div>
                }
            </>
        );
    }
    const ProgressMapChild =
        child.map((data, i) =>
            <ProgressCard
                progress={data.progress}
                createBy={data.createBy}
                name={data.user}
                edad={data.years}
                gender={data.gender}
                image={data.photo}
                key={i}
            />
        );
    return {
        userModel,
        validation,
        onChangeImg,
        HandleChange,
        setValidation,
        PutHandleSubmit,
        onChangeImgChild,
        ProgressMapChild,
        postCreateChildProfile
    };
}
export default ProfilePageController