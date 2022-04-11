import { useEffect } from 'react';
import RecuestAccess from "../../data-access/requestAccess";
import UsersModel from '../../models/usersModel';
import TableComponent from '../../ui/components/tableComponent';
import { Spinner, ProgressBar } from 'react-bootstrap'

const StatusPageController = () => {
    const { setUsersModel, usersModel } = UsersModel();
    const { getChildInProfile } = RecuestAccess();

    useEffect(() => {
        getReadUserController()
    }, [usersModel.length === 0])

    const getReadUserController = async (e) => {
        try {
            let { data } = await getChildInProfile();
            setUsersModel(data)
        } catch (error) {
            console.log(error);
        }
    };
    //Component for Table
    const Progress = ({ progress, name, edad, image }) => {
        return (
            <tr>
                <td className='text-center'>
                    <img
                        className='imageStatus'
                        src={image ? `${image}`
                            :
                            "https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg"} />
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
            <TableComponent
                progress={data.progress}
                name={data.user}
                edad={data.years}
                gender={data.gender}
                image={data.photo}
                key={i}
            />
        );

    return {
        ProgressMap
    };
}
export default StatusPageController;