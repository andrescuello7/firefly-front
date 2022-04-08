import { useEffect, useState } from 'react';
import RecuestAccess from "../../data-access/requestAccess";
import UsersModel from '../../models/usersModel';
import { Spinner, Button, Card, ProgressBar } from 'react-bootstrap'

const AdminPageController = () => {
    const [input, setInput] = useState({});
    const [usersModel, setUsersModel] = useState([]);
    const [child, setChild] = useState([]);
    const [jobs, setJobs] = useState([]);
    // const { setUsersModel, usersModel } = UsersModel();
    const [images, setImages] = useState([]);
    const {
        getPhoto,
        getReadUser,
        getJobInAdmin,
        postJobInAdmin,
        postPhotoInAdmin,
        getChildInProfile,
        deletePostInAdmin,
        putBannerInAdminText,
    } = RecuestAccess();
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
            let responseUsers = await getReadUser();
            let responseChild = await getChildInProfile();
            let responseJobs = await getJobInAdmin();
            setUsersModel(responseUsers)
            setChild(responseChild.data)
            setJobs(responseJobs.data)
        } catch (error) {
            console.log(error);
        }
    };
    const postAdminJobController = async (e) => {
        e.preventDefault()
        try {
            const response = await postJobInAdmin(input);
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    };
    const postAdminPhotoController = async (e) => {
        e.preventDefault()
        try {
            const response = await postPhotoInAdmin(e, input);
            console.log(response)
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
    const ProgressMapChild =
        (child.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || child.map((data, i) =>
            <ProgressOfChild
                progress={data.progress}
                name={data.user}
                edad={data.years}
                gender={data.gender}
                image={data.photo}
                key={i}
            />
        );



    //Component for Table
    const JobsComponent = ({ title, name, description, inDay, inWeek }) => {
        return (
            <tr>
                <td className='textAdmin text-center'>{title}</td>
                <td className='textAdmin text-center'>{name}</td>
                <td className='textAdmin text-center'>{description}</td>
                <td className='textAdmin text-center'>{inDay}</td>
                <td className='textAdmin text-center'>{inWeek}</td>
            </tr>
        );
    }
    const JobsComponentMap =
        (jobs.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || jobs.map((data, i) =>
            <JobsComponent
                title={data.title}
                name={data.user}
                description={data.description}
                inDay={data.inDay}
                inWeek={data.inWeek}
                key={i}
            />
        );

    return {
        JobsComponentMap,
        postAdminPhotoController,
        postAdminJobController,
        ProgressMapChild,
        ProgressProfileMap,
        PutBannerSubmit,
        ProgressProfile,
        GetPostsImages,
        ProgressCard,
        HandleChange,
        ProgressMap,
        usersModel,
        PostsMap,
        Progress
    };
}
export default AdminPageController