import { Modal, Card } from 'react-bootstrap'
import '../../values/styles/postComponent.css'
import { useState } from 'react';

const PostComponent = ({ image, title, description }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='mx-2'>
            <div className="cardPostComponent">
                <div className='mx-2 d-flex'>
                    <div>
                        <img className="imagePostComponent" src={image} onClick={handleShow} />
                    </div>
                    <div className='mx-2'>
                        <b className='titlePostComponent'>{title}</b>
                        <p className='descriptionPostComponent'>{description}</p>
                    </div>
                </div>
            </div>
            <Modal className='modalPostComponent' show={show} onHide={handleClose}>
                <Modal.Header className='modalHeaderPostComponent'>
                    <img className='imageModalPostComponent' src={image} />
                </Modal.Header>
            </Modal>
        </div>
    );
}

export default PostComponent;