import { useEffect, useState } from 'react';
import RecuestAccess from "../../data-access/requestAccess";
import UsersModel from '../../models/usersModel';
import { Spinner, Button, ProgressBar } from 'react-bootstrap'

const AdminPageController = () => {
    const [input, setInput] = useState({});
    const { setUsersModel, usersModel } = UsersModel()
    const { getReadUser, getUser, PostAdminPhoto, putUserPhoto } = RecuestAccess();

    useEffect(() => {
        getAdminDateOfUsers()
    }, [usersModel.length === 0])

    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };

    const getAdminDateOfUsers = async (e) => {
        try {
            let response = await getReadUser();
            setUsersModel(response)
        } catch (error) {
            console.log(error);
        }
    };

    const PostHandleSubmit = async (e) => {
        e.preventDefault()
        try {
            await PostAdminPhoto(e, input);
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
                <td><ProgressBar className="progressBar" animated now={progress} /></td>
            </tr>
        );
    }

    const ProgressMap =
        (usersModel.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || usersModel.map((data, i) =>
            <Progress progress={usersModel[i].years} name={usersModel[i].user} image={usersModel[i].photo} edad={usersModel[i].years} email={usersModel[i].email} key={i} />
        );

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
                        <Button className='btn btn-success buttonAdmin'>
                            info
                        </Button>
                        <Button className='btn btn-primary buttonAdmin'>
                            editar
                        </Button>
                    </td>
                </td>
            </tr>
        );
    }

    const ProgressProfileMap =
        (usersModel.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || usersModel.map((data, i) =>
            <ProgressProfile image={usersModel[i].photo} name={usersModel[i].user} locate={usersModel[i].locate} gustos={usersModel[i].likes} key={i} />
        );

    return {
        HandleChange,
        PostHandleSubmit,
        ProgressProfileMap,
        ProgressProfile,
        ProgressMap,
        usersModel,
        Progress
    };
}
export default AdminPageController