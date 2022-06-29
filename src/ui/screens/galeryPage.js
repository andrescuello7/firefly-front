import Controller from '../screen-controller/galeryPageController';
import RequestAccess from '../../data-access/requestAccess';
import '../../values/styles/statusPage.css'
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const GaleryPage = () => {
    //Component for Table
    const [adminDate, setAdminDate] = useState(false);
    const { ProgressMap, JovenesMap, ImagesMap, onChangeImgChild } = Controller();
    const { getUser } = RequestAccess();

    useEffect(() => {
        AdminPageReload()
    }, [])

    const AdminPageReload = async () => {
        const response = await getUser();
        if (response.user.admin === true) {
            await setAdminDate(true)
        } else {
            await setAdminDate(false)
        }
    }
    return (
        <div className='w-100'>
            <p className='titleProgress'>Galeria de fotos</p>
            {adminDate ? <div className='mx-5 mb-5'>
                <b className='w-100'>
                    <label className="w-100 custom-file-input-image">
                        <input
                            id="file-input"
                            name="photo"
                            accept="image/png, image/jpeg"
                            type="file"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onChange={onChangeImgChild}
                        />
                    </label>
                </b>
            </div>: <div></div>}
            <div className='mx-5 w-80 d-flex justify-content-evenly flex-wrap'>
                {ImagesMap}
            </div>
            {/* <hr className='mx-5 mt-5' />
            <div className='mx-5 w-80 d-flex justify-content-evenly flex-wrap'>
                {ProgressMap}
            </div> */}
            {/* <hr className='mx-5 mt-5' />
            <div className='mx-5 w-80 d-flex justify-content-evenly flex-wrap'>
                {JovenesMap}
            </div> */}
        </div>
    );
}
export default GaleryPage