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
                <img className="imagePostComponent mt-2" src={image} onClick={handleShow} />
                <b className='titlePostComponent mt-2'>{title}</b>
            </div>
            <Modal className='modalPostComponent' show={show} onHide={handleClose}>
                <Modal.Body>
                    <img className='imageModalPostComponent' src={image} />
                </Modal.Body>
                <Modal.Header className='modalHeaderPostComponent'>
                    <div className='mx-2 d-flex'>
                        <div>
                            <b className='titlePostComponent'>{title}</b>
                            <p className='descriptionPostComponent'>{description}</p>
                        </div>
                    </div>
                </Modal.Header>
            </Modal>
        </div>
    );
}

export default PostComponent;