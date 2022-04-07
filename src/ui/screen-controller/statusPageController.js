import { useEffect, useState } from 'react';
import RecuestAccess from "../../data-access/requestAccess";
import UsersModel from '../../models/usersModel';
import { Spinner, Button, ProgressBar } from 'react-bootstrap'

const StatusPageController = () => {
    const { setUsersModel, usersModel } = UsersModel();
    const { getReadUser } = RecuestAccess();

    useEffect(() => {
        getReadUserController()
    }, [usersModel.length === 0])

    const getReadUserController = async (e) => {
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
                <td className='text-center'>
                    <img
                        className='imageStatus'
                        src={image ? `${image}`
                            :
                            "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
                </td>
                <td className='textAdmin text-center'>{name}</td>
                <td className='textAdmin text-center'>{edad}</td>
                <td>
                    <ProgressBar
                        className="progressBar"
                        striped variant="success"
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
                edad={data.years}
                image={data.photo}
                key={i}
            />
        );

    return {
        ProgressMap
    };
}
export default StatusPageController;