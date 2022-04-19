import { useEffect, useState } from 'react';
import RecuestAccess from "../../data-access/requestAccess";
import { Spinner, Button, Card, ProgressBar } from 'react-bootstrap'
import TableComponent from '../../ui/components/tableComponent';

const AdminPageController = () => {
    const [input, setInput] = useState({});
    const [usersModel, setUsersModel] = useState([]);
    const [child, setChild] = useState([]);
    const [validation, setValidation] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [images, setImages] = useState([]);
    const {
        putUser,
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
            setValidation(true)
        } catch (error) {
            setValidation(false)
            console.log(error);
        }
    };
    const postAdminPhotoController = async (e) => {
        e.preventDefault()
        try {
            const response = await postPhotoInAdmin(e, input);
            console.log(response)
            setValidation(true)
        } catch (error) {
            setValidation(false)
            console.log(error);
        }
    };
    //UPDATE WHIT PHOTO
    const PutBannerSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await putBannerInAdminText(e, input);
            console.log(response)
            setValidation(true)
        } catch (error) {
            setValidation(false)
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
                <td><img className='imageAdmin' src={image ? `${image}` : "https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg"} /></td>
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
    const ProgressCard = ({ progress, name, admin, edad, email, image, id, collaborator }) => {
        const adminPutMethod = async () => {
            const method = { admin: !admin };
            try {
                const response = await putUser(id, method);
                console.log(response);
            } catch (error) {
                console.log(error)
            }
        }
        const fatherPutMethod = async () => {
            const method = { collaborator: !collaborator };
            try {
                const response = await putUser(id, method);
                console.log(response);
            } catch (error) {
                console.log(error)
            }
        }
        return (
            <Card className='cardFormHomeAdmin'>
                <Card.Img variant="top" className='imageAdmin m-2' src={image ? `${image}` : "https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg"} />
                <Card.Body>
                    <Card.Text className='textAdmin text-center'>{name}</Card.Text>
                    <ProgressBar
                        className="progressBar"
                        striped variant="success"
                        animated now={100}
                    />
                    <div className='mb-2 mt-2 border-top border-dark'></div>
                    <div className='d-flex w-100'>
                        {admin ?
                            <button onClick={adminPutMethod} className='btn btn-warning w-100'>Admin</button> :
                            <button onClick={adminPutMethod} className='btn btn-outline-warning w-100'>Admin</button>
                        }
                        {collaborator ?
                            <button onClick={fatherPutMethod} className='btn btn-success w-100'>Joven</button> :
                            <button onClick={fatherPutMethod} className='btn btn-danger w-100'>Padre</button>
                        }
                    </div>
                </Card.Body>
            </Card>
        );
    }
    //Component for Table Profile
    const ProgressProfile = ({ image, name, locate, gustos }) => {
        return (
            <tr>
                <td><img className='imageAdmin' src={image ? `${image}` : "https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg"} /></td>
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
            <div className='m-2 d-flex flex-column card bg-dark'>
                <img variant="top" className='imageDelete' src={image ? `${image}` : "https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg"} />
                <button onClick={DeleteSubmit} className='btn btn-outline-dark text-light w-100'>
                    Eliminar
                </button>
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
            <ProgressCard
                progress={usersModel[i].years}
                name={usersModel[i].user}
                image={usersModel[i].photo}
                collaborator={usersModel[i].collaborator}
                id={usersModel[i]._id}
                edad={usersModel[i].years}
                admin={usersModel[i].admin}
                email={usersModel[i].email}
                key={i}
            />
        );

    const ProgressMapChild =
        (child.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || child.map((data, i) =>
            <TableComponent
                id={data._id}
                progress={data.progress}
                name={data.user}
                edad={data.years}
                gender={data.gender}
                image={data.photo}
                key={i}
            />
        );



    //Component for Table
    const JobsComponentMap =
        (jobs.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || jobs.map((data, i) =>
            <TableComponent
                id={data._id}
                title={data.title}
                name={data.user}
                child={data.child}
                description={data.description}
                inDay={data.inDay}
                inWeek={data.inWeek}
                key={i}
            />
        );

    return {
        validation,
        setValidation,
        JobsComponentMap,
        ProgressProfileMap,
        postAdminPhotoController,
        postAdminJobController,
        ProgressMapChild,
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