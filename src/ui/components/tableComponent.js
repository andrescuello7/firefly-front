import { Spinner, Button, ProgressBar } from 'react-bootstrap'

const TableComponent = ({ progress, name, edad, image, gender, description, title, child, inDay, inWeek }) => {
    return (
        <tr className='borderStatus'>
            <td>
                <img
                    className='imageStatus'
                    src={image ? `${image}`
                        :
                        "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg"} />
            </td>
            <td className='textStatus'>{name ? `${name}` : <div></div>}</td>
            <td className='textStatus'>{child ? `${child}` : <div></div>}</td>
            <td className='textStatus'>{gender ? `${gender}` : <div></div>}</td>
            <td className='textStatus'>{edad ? `${edad}` : <div></div>}</td>
            <td className='textStatus'>{title ? `${title}` : <div></div>}</td>
            <td className='textStatus'>{description ? `${description}` : <div></div>}</td>
            <td className='textStatus'>{inDay ? `${inDay}` : <div></div>}</td>
            <td className='textStatus'>{inWeek ? `${inWeek}` : <div></div>}</td>
            <td>
                {progress ? <ProgressBar
                    className="progressBar"
                    variant="success"
                    now={progress}
                    label={`${progress}%`}
                /> : <div></div>}
            </td>
            <td className='textStatus'>{inWeek ?
                <div className='d-flex'>
                    <button className='btn btn-dark'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-warning bi bi-check-all" viewBox="0 0 16 16">
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg>
                    </button>
                    <button className='btn btn-danger'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                    </button>
                </div>
                : <div></div>
            }</td>
        </tr>
    );
}
export default TableComponent;

