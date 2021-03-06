import { Modal } from 'react-bootstrap'
import '../../values/styles/postComponent.css'
import { useState } from 'react';

const PostComponent = ({ image, title, description }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='m-4'>
            <div className="cardPostComponent">
                <img className="imagePostComponent" src={image} onClick={handleShow} />
                <div className='m-4 text-center'>
                    <p className='titlePostComponent'>{title}</p>
                    <p className='descriptionPostComponent'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default PostComponent;