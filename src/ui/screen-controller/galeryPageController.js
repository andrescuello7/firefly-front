import { useEffect, useState } from 'react';
import RecuestAccess from "../../data-access/requestAccess";
import UsersModel from '../../models/usersModel';
import TableComponent from '../../ui/components/tableComponent';
import { Spinner, Modal } from 'react-bootstrap'

const GaleryPageController = () => {
    const [users, setUsers] = useState([]);
    const [childs, setChilds] = useState([]);
    const [images, setImages] = useState([]);
    const { getChildInProfile, getReadUser, getImagesGalery, postImagesGalery } = RecuestAccess();

    useEffect(() => {
        getReadUserController()
        getReadChildController()
        getReadImagesController()
    }, [childs.length === 0])

    const getReadUserController = async (e) => {
        try {
            let data = await getReadUser();
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    };

    const getReadChildController = async (e) => {
        try {
            let { data } = await getChildInProfile();
            setChilds(data)
        } catch (error) {
            console.log(error);
        }
    };

    const getReadImagesController = async (e) => {
        try {
            let data = await getImagesGalery();
            setImages(data)
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeImgChild = async (e) => {
        e.preventDefault()
        try {
            const response = await postImagesGalery(e);
            window.location.href = "/status";
        } catch (error) {
            console.log(error);
        }
    }

    const ProgressMap =
        (childs.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || childs.map((data, i) =>
            <TableComponent
                response={data}
                progress={data.progress}
                name={data.user}
                edad={data.years}
                gender={data.gender}
                image={data.photo}
                key={i}
            />
        );

    const ImagePostComponent = ({ data }) => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
            <div>
                <div className='m-2' onClick={handleShow}>
                    <img className='imagePostComponents' src={data.photo} />
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <img className='w-100' src={data.photo} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

    const ImagesMap =
        (images.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || images.map((data, i) =>
            <ImagePostComponent data={data} />
        );

    const JovenesMap =
        (users.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="grow" />
            </div>
        )) || users.map((data, i) =>
            <TableComponent
                response={data}
                progress={data.progress}
                name={data.user}
                edad={data.years}
                gender={data.gender}
                image={data.photo}
                key={i}
            />
        );

    return {
        images,
        ImagesMap,
        JovenesMap,
        ProgressMap,
        onChangeImgChild,
    };
}
export default GaleryPageController;