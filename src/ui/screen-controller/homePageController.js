import { useEffect, useState } from 'react';
import RecuestAccess from '../../data-access/requestAccess';

const HomePageController = () => {
    const { getReadUser } = RecuestAccess();
    const [menu, setMenu] = useState(false);
    const [img, setImg] = useState(false);
    const handleLogOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async (e) => {
        try {
            let response = await getReadUser();
            // console.log(response)
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