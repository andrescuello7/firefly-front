import { useEffect, useState } from 'react';
import RecuestAccess from '../../data-access/requestAccess';
import UserModel from '../../models/userModel';
import { Spinner, Card } from 'react-bootstrap'
import PostComponent from '../components/postComponent';

const HomePageController = () => {
    const { getUser, getPhoto } = RecuestAccess();
    const { setUserModel, userModel } = UserModel();

    const [menu, setMenu] = useState(false);
    const [img, setImg] = useState(false);
    const [images, setImages] = useState([]);

    const handleLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        window.location.href = "/login";
    };

    useEffect(() => {
        getUserMethod()
        getPhotoMethod()
    }, [userModel.length === 0])

    const getUserMethod = async (e) => {
        try {
            let response = await getUser();
            setUserModel(response)
            if (response.user.admin != null) {
                localStorage.setItem("admin", response.user.admin);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getPhotoMethod = async (e) => {
        try {
            let response = await getPhoto();
            setImages(response);
        } catch (error) {
            console.log(error);
        }
    };

    const burgerButton = () => {
        setMenu(!menu)
        setImg(!img)
    }

    const photoHomeMap =
        (images.length === 0 && (
            <div>
                <Spinner animation="grow" />
            </div>
        )) || images.map((data, i) =>
            <PostComponent
                key={i}
                image={data.photo}
                title={data.title}
                description={data.description}
            />
        );


    return {
        photoHomeMap,
        getPhotoMethod,
        handleLogOut,
        burgerButton,
        menu,
        img,
    };
}
export default HomePageController