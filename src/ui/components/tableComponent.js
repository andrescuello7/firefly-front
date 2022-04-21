import { ProgressBar } from 'react-bootstrap'
import RecuestAccess from '../../data-access/requestAccess'
import '../../values/styles/tableComponent.css'

const TableComponent = ({ response, progress, name, edad, image, gender, description, title, child, inDay, inWeek, id }) => {
    const {
        deleteJobInAdmin
    } = RecuestAccess();
    const DeleteMethod = async (e) => {
        e.preventDefault()
        try {
            await deleteJobInAdmin(id);
            window.location.reload();
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
    const progressDate = (progressNumber) => {
        const star =
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-2 text-warning bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>;

        return star;
    }
    return (
        <div className='cardTableView mt-3'>
            <div className='w-100 d-flex justify-content-center'>
                <img
                    className='imageTable'
                    src={image ? `${image}`
                        :
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
            </div>
            <div className='tableButton'>
                <div className='textTable text-center pt-2'>{name ? <div><b>{name}</b> | {child}</div> : <div></div>}</div>
                <div className='textTable'>{inWeek ? <div><b>Tareas de Semana: </b>{inWeek}</div> : <div></div>}</div>
                <div className='textTable'>{inDay ? <div><b>Tareas de Sabado: </b>{inDay}</div> : <div></div>}</div>
                <div className='textTable'>{edad ? <div><b>Edad: </b>{edad}</div> : <div></div>}</div>
                <div className='textTable'>{gender ? <div><b>Genero: </b>{gender}</div> : <div></div>}</div>
                <div className='textTable'>{title ? <div><b>Especificacion: </b>{title}</div> : <div></div>}</div>
                <div className='textTable'>{description ? <div><b>Descripcion: </b>{description}</div> : <div></div>}</div>
                {progress ? <div>
                    {progressDate(progress)}
                </div> :
                    <div>
                    </div>
                }
                <div className='w-100'>{inWeek ?
                    <div className='d-flex'>
                        <button className='btn btn-outline-success border-2 border-success buttonJob' onClick={CheckMethod}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="text-dark bi bi-check-all" viewBox="0 0 16 16">
                                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                            </svg>
                        </button>
                        <button className='btn btn-success buttonJob' onClick={DeleteMethod}>
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

