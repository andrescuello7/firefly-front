import { useEffect, useState } from 'react';

const HomePageController = () => {
    const [menu, setMenu] = useState(false);
    const [img, setImg] = useState(false);
    const burgerButton = () => {
        setMenu(!menu)
        setImg(!img)
    }
    return {
        burgerButton,
        menu,
        img,
    };
}
export default HomePageController