import { ProgressBar } from 'react-bootstrap'
import RecuestAccess from '../../data-access/requestAccess'
import '../../values/styles/tableComponent.css'

const TableComponent = ({ progress, name, edad, image, gender, description, title, child, inDay, inWeek, id }) => {
    const {
        deleteJobInAdmin
    } = RecuestAccess();
    const DeleteMethod = async (e) => {
        e.preventDefault()
        try {
            const response = await deleteJobInAdmin(id);
            window.location.href = "/profile";
        } catch (error) {
            console.log(error);
        }
    };
    const CheckMethod = async () => {
        // const method = { admin: !admin };
        // try {
        //     const response = await putUser(id, method);
        //     console.log(response);
        // } catch (error) {
        //     console.log(error)
        // }
    }
    return (
        <div className='cardTableView'>
            <div className='w-100 d-flex justify-content-center'>
                <img
                    className='imageTable'
                    src={image ? `${image}`
                        :
                        "https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg"} />
            </div>
            <div className='tableButton'>
                <div className='textTable text-center pt-2'>{name ? <div><b>{name}</b></div> : <div></div>}</div>
                <div className='d-flex w-100'>
                    <div className='textTable'>{inWeek ? <div><b>Tareas: </b>{inWeek}</div> : <div></div>}</div>
                    <div className='textTable'>{inDay ? <div><b>/ </b>{inDay}</div> : <div></div>}</div>
                </div>
                <div className='textTable'>{child ? <div><b>Chico: </b>{child}</div> : <div></div>}</div>
                <div className='textTable'>{edad ? <div><b>Edad: </b>{edad}</div> : <div></div>}</div>
                <div className='textTable'>{gender ? <div><b>Genero: </b>{gender}</div> : <div></div>}</div>
                <div className='textTable'>{title ? <div><b>Titulo: </b>{title}</div> : <div></div>}</div>
                <div className='textTable'>{description ? <div><b>Instruccion: </b>{description}</div> : <div></div>}</div>
                <div>
                    {progress >= 0 ?
                        <ProgressBar
                            className="progressBar m-2"
                            variant="success"
                            now={progress}
                            animated
                        /> :
                        <div>
                        </div>
                    }
                </div>
                <div className='w-100'>{inWeek ?
                    <div className='d-flex'>
                        <button className='btn btn-warning buttonJob' onClick={DeleteMethod}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="text-light bi bi-check-all" viewBox="0 0 16 16">
                                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                            </svg>
                        </button>
                        <button className='btn btn-danger buttonJob' onClick={CheckMethod}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </button>
                    </div>
                    : <div></div>
                }</div>
            </div>
        </div>
    );

}
export default TableComponent;

