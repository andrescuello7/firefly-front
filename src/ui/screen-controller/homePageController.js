import { useEffect, useState } from 'react';
import RecuestAccess from '../../data-access/requestAccess';
import UserModel from '../../models/userModel';
import { Spinner, ProgressBar } from 'react-bootstrap'
import PostComponent from '../components/postComponent';
import JovenComponent from '../components/postJovenComponent';

const HomePageController = () => {
    const { getUser, getPhoto, getBanner, getReadUser, getChildInProfile } = RecuestAccess();
    const { setUserModel, userModel } = UserModel();

    const [menu, setMenu] = useState(true);
    const [img, setImg] = useState(true);
    const [images, setImages] = useState([]);
    const [banner, setBanner] = useState([]);
    const [child, setChild] = useState([]);
    const [users, setUsers] = useState([]);

    const handleLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        window.location.href = "/login";
    };

    useEffect(() => {
        getUserMethod()
        getChildInHome()
        getBannerMethod()
        getPhotoController()
        getBannerUserMethod()
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

    const getPhotoController = async (e) => {
        try {
            let response = await getPhoto();
            setImages(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getBannerMethod = async (e) => {
        try {
            let response = await getBanner();
            setBanner(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getChildInHome = async (e) => {
        try {
            let response = await getChildInProfile();
            setChild(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const getBannerUserMethod = async (e) => {
        try {
            let response = await getReadUser();
            setUsers(response);
        } catch (error) {
            console.log(error);
        }
    };

    const burgerButton = () => {
        setMenu(!menu)
        setImg(!img)
    }


    const ChildsView = ({ name, progress, image }) => {
        return (
            <tr>
                <td className='p-3'><img className='aboutUsBoxRightDirectionTableImage' src={image ? `${image}` : 'https://preview.keenthemes.com/start-react/media/svg/logo/colored/kanba.svg'} /></td>
                <td className='p-3'>{name ? `${name}` : 'Nombre'}</td>
                <td className='w-25 p-3'>{progress ? <ProgressBar now={progress} /> : <ProgressBar now={5} />}</td>
            </tr>
        )
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

    const photoContribuitorHomeMap =
        (users.length === 0 && (
            <div>
                <Spinner animation="grow" />
            </div>
        )) || users.map((data, i) =>
            <JovenComponent
                key={i}
                image={data.photo}
                joven={data.collaborator}
                name={data.user}
                id={data._id}
                likes={data.likes}
                dateTime={data.CreateAdd}
            />
        );

    const childProgressViewMap =
        (child.length === 0 && (
            <div>
                <Spinner animation="grow" />
            </div>
        )) ||
        child.map((data, i) =>
            <ChildsView
                key={i}
                image={data.photo}
                name={data.user}
                progress={data.progress}
            />
        );

    const BannerComponent = ({ title, description, image }) => {
        return (
            <div className="homePageAbout">
                <div className="w-100 d-flex flex-column mx-2">
                    {title !== null ?
                        <b className="titleHomeAbout">
                            {title}
                        </b>
                        :
                        <p className="titleHomeAbout">
                            Desarrolle más rápidamente.
                            Desarrolle de forma más inteligente.
                        </p>}
                    {description !== null ?
                        <p className="descriptionHomeAbout">
                            {description}
                        </p>
                        :
                        <p className="descriptionHomeAbout">
                            Lleve sus ideas al mercado más rápidamente con una plataforma de datos para aplicaciones basada en la base de datos moderna líder. Admita casos de uso transaccionales, de búsqueda, analíticos y móviles mientras utiliza una interfaz de consulta común y el modelo de datos que encanta a los desarrolladores.
                        </p>}
                </div>
                <img className="imagesHomeAbout" src={image !== null ? image : "https://animationexplainers.com/wp-content/uploads/2021/07/p10-bg2.png"} />
            </div>)
    }
    return {
        photoContribuitorHomeMap,
        childProgressViewMap,
        getPhotoController,
        BannerComponent,
        getBannerMethod,
        photoHomeMap,
        handleLogOut,
        burgerButton,
        banner,
        menu,
        img,
    };
}
export default HomePageController