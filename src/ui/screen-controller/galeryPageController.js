import { useEffect, useState, Button } from 'react';
import RecuestAccess from "../../data-access/requestAccess";
import TableComponent from '../../ui/components/tableComponent';
import { Spinner, Modal } from 'react-bootstrap';
import axios from "axios";
import ControllerVariables from "../../values/api";

const GaleryPageController = () => {
    const [users, setUsers] = useState([]);
    const [childs, setChilds] = useState([]);
    const [images, setImages] = useState([]);
    const { getChildInProfile, getReadUser, getImagesGalery, postImagesGalery } = RecuestAccess();
    const { api, headers, admin } = ControllerVariables();

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
        const DeleteMethod = async (e) => {
            e.preventDefault()
            try {
                await axios.delete(api + `home/images/${data._id}`, {
                    headers,
                });
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        };
        console.log(admin);
        return (
            <div>
                <div className='m-2'>
                    <button className={admin === 'true' ? "btn btn-danger w-100 d-block" : "d-none"} onClick={DeleteMethod}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                    </button>
                    <img className='imagePostComponents' onClick={handleShow} src={data.photo} />
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