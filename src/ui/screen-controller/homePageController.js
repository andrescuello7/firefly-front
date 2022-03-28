import { useEffect, useState } from 'react';
import RecuestAccess from '../../data-access/requestAccess';
import UserModel from '../../models/userModel';

const HomePageController = () => {
    const { getUser } = RecuestAccess();
    const { setUserModel, userModel } = UserModel();

    const [menu, setMenu] = useState(false);
    const [img, setImg] = useState(false);

    const handleLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        window.location.href = "/login";
    };

    useEffect(() => {
        getUserMethod()
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

    const burgerButton = () => {
        setMenu(!menu)
        setImg(!img)
    }
    
    return {
        handleLogOut,
        burgerButton,
        menu,
        img,
    };
}
export default HomePageController