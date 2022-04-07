import { useEffect, useState } from 'react';
import RecuestAccess from "../../data-access/requestAccess";
import UsersModel from '../../models/usersModel';
import { Spinner, Button, Card, ProgressBar } from 'react-bootstrap'

const AdminPageController = () => {
    const [input, setInput] = useState({});
    const { setUsersModel, usersModel } = UsersModel();
    const [images, setImages] = useState([]);
    const {
        getPhoto,
        getReadUser,
        postPhotoInAdmin,
        deletePostInAdmin,
        putBannerInAdminText, } = RecuestAccess();

    useEffect(() => {
        getReadUserController()
        getPhotoController()
    }, [usersModel.length === 0])
    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };
    const getReadUserController = async (e) => {
        try {
            let response = await getReadUser();
            setUsersModel(response)
        } catch (error) {
            console.log(error);
        }
    };
    const postAdminPhotoController = async (e) => {
        e.preventDefault()
        try {
            await postPhotoInAdmin(e, input);
        } catch (error) {
            console.log(error);
        }
    };
    //UPDATE WHIT PHOTO
    const PutBannerSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await putBannerInAdminText(e, input);
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    };
    const getPhotoController = async (e) => {
        try {
            let response = await getPhoto();
            setImages(response);
        } catch (error) {
            console.log(error);
        }
    };


    //Component for Table
    const Progress = ({ progress, name, edad, email, image }) => {
        return (
            <tr>
                <td><img className='imageAdmin' src={image ? `${image}` : "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} /></td>
                <td className='textAdmin'>{name}</td>
                <td className='textAdmin'>{email}</td>
                <td className='textAdmin'>{edad} años</td>
                <td>
                    <ProgressBar
                        className="progressBar"
                        striped variant="success"
                        animated now={progress} />
                </td>
            </tr>
        );
    }
    const ProgressCard = ({ progress, name, edad, email, image }) => {
        return (
            <Card className='cardFormHomeAdmin'>
                <Card.Img variant="top" className='imageAdmin' src={image ? `${image}` : "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
                <Card.Body>
                    <Card.Text className='textAdmin'>Nombre: {name}</Card.Text>
                    <Card.Text className='textAdmin'>Edad: {edad}</Card.Text>
                    <Card.Text className='textAdmin'>Email: {email}</Card.Text>
                    <ProgressBar
                        className="progressBar"
                        striped variant="success"
                        animated now={progress}
                    />
                </Card.Body>
            </Card>
        );
    }
    //Component for Table Profile
    const ProgressProfile = ({ image, name, locate, gustos }) => {
        return (
            <tr>
                <td><img className='imageAdmin' src={image ? `${image}` : "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} /></td>
                <td className='textAdmin'>{name}</td>
                <td className='textAdmin'>{locate} años</td>
                <td className='textAdmin'>{gustos}</td>
                <td className='textAdmin'>
                    <td className='d-flex justify-content-around'>
                        <Button variant='outline-info' className='buttonAdmin'>
                            info
                        </Button>
                        <Button variant='outline-success' className='buttonAdmin'>
                            editar
                        </Button>
                    </td>
                </td>
            </tr>
        );
    }
    //Component for Table Images and Post
    const GetPostsImages = ({ image, title, id }) => {
        const DeleteSubmit = async (e) => {
            e.preventDefault()
            try {
                await deletePostInAdmin(id);
            } catch (error) {
                console.log(error);
            }
        };
        return (
            <div className='m-2 d-flex flex-column card'>
                <img variant="top" className='imageDelete' src={image ? `${image}` : "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
                <Button variant='danger' onClick={DeleteSubmit} className='w-100'>
                    Eliminar
                </Button>
            </div>
        );
    }
    const PostsMap =
        (usersModel.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || images.map((data, i) =>
            <GetPostsImages
                id={data._id}
                image={data.photo}
                description={data.description}
                title={data.title}
                key={i}
            />
        );
    const ProgressProfileMap =
        (usersModel.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || usersModel.map((data, i) =>
            <ProgressProfile image={usersModel[i].photo} name={usersModel[i].user} locate={usersModel[i].locate} gustos={usersModel[i].likes} key={i} />
        );
    const ProgressMap =
        (usersModel.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || usersModel.map((data, i) =>
            <ProgressCard progress={usersModel[i].years} name={usersModel[i].user} image={usersModel[i].photo} edad={usersModel[i].years} email={usersModel[i].email} key={i} />
        );


    return {
        HandleChange,
        postAdminPhotoController,
        ProgressProfileMap,
        ProgressCard,
        PutBannerSubmit,
        GetPostsImages,
        ProgressProfile,
        ProgressMap,
        usersModel,
        PostsMap,
        Progress
    };
}
export default AdminPageController