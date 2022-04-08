import { Spinner, ProgressBar, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import RecuestAccess from '../../data-access/requestAccess';
import UserModel from '../../models/userModel';


const ProfilePageController = () => {
    const [imageChild, setImageChild] = useState('');
    const [input, setInput] = useState({});
    const [child, setChild] = useState([]);
    const [validation, setValidation] = useState(false);
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
    console.log(input)
    const postCreateChildProfile = async (e) => {
        e.preventDefault()
        try {
            let child = { ...input, photo: imageChild, progress: 0 }
            console.log(imageChild)
            console.log(child)
            const response = await postChildProfile(child);
            console.log(response);
        } catch (error) {
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
    const ProgressOfChild = ({ progress, name, edad, image, gender }) => {
        return (
            <tr>
                <td className='text-center'>
                    <img
                        className='imageStatus'
                        src={image ? `${image}`
                            :
                            "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
                </td>
                <td className='textAdmin text-center'>{name}</td>
                <td className='textAdmin text-center'>{edad}</td>
                <td className='textAdmin text-center'>{gender}</td>
                <td>
                    <ProgressBar
                        className="progressBar"
                        striped variant="success"
                        animated now={progress} />
                </td>
            </tr>
        );
    }

    const ProgressCard = ({ progress, name, edad, image, gender, createBy }) => {
        return (
            <div>
                {createBy === userModel.user._id ? <Card className='cardFormHomeAdmin'>
                    <Card.Img variant="top" className='imageAdmin' src={image ? `${image}` : "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
                    <Card.Body>
                        <Card.Text className='textAdmin'>Nombre: {name}</Card.Text>
                        <Card.Text className='textAdmin'>Edad: {edad}</Card.Text>
                        <Card.Text className='textAdmin'>Email: {gender}</Card.Text>
                        <ProgressBar
                            className="progressBar"
                            striped variant="success"
                            animated now={progress}
                        />
                    </Card.Body>
                </Card>
                    :
                    <div></div>
                }
            </div>
        );
    }
    const ProgressMapChild =
        (child.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || child.map((data, i) =>
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