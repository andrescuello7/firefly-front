import { useEffect, useState } from 'react';
import RecuestAccess from "../../data-access/requestAccess";
import UsersModel from '../../models/usersModel';
import { Spinner, Button, ProgressBar } from 'react-bootstrap'

const StatusPageController = () => {
    const { setUsersModel, usersModel } = UsersModel();
    const { getReadUser, getPhoto, PostAdminPhoto, putUserPhoto } = RecuestAccess();

    useEffect(() => {
        getAdminDateOfUsers()
    }, [usersModel.length === 0])

    const getAdminDateOfUsers = async (e) => {
        try {
            let response = await getReadUser();
            setUsersModel(response)
        } catch (error) {
            console.log(error);
        }
    };
    //Component for Table
    const Progress = ({ progress, name, edad, email, image }) => {
        return (
            <tr>
                <td>
                    <img
                        className='imageAdmin'
                        src={image ? `${image}`
                            :
                            "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
                </td>
                <td className='textAdmin'>{name}</td>
                <td>
                    <ProgressBar
                        className="progressBar"
                        animated now={progress} />
                </td>
            </tr>
        );
    }

    const ProgressMap =
        (usersModel.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || usersModel.map((data, i) =>
            <Progress
                progress={data.years}
                name={data.user}
                image={data.photo}
                key={i}
            />
        );

    return {
        ProgressMap
    };
}
export default StatusPageController;