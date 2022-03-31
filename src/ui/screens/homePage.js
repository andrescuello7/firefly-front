import "../../values/styles/homePage.css";
import Controller from '../screen-controller/homePageController';
import MenuOpcion from '../components/menuOptions';

const HomePage = () => {
    const { photoHomeMap } = Controller()
    return (
        <div className='body'>
            <MenuOpcion />
            <div className='homePage'>
                <div className="homePageAbout">
                    <div className="w-100 d-flex flex-column mx-2">
                        <p className="titleHomeAbout">
                            Desarrolle más rápidamente.
                            Desarrolle de forma más inteligente.
                        </p>
                        <p className="descriptionHomeAbout">
                            Lleve sus ideas al mercado más rápidamente con una plataforma de datos para aplicaciones basada en la base de datos moderna líder. Admita casos de uso transaccionales, de búsqueda, analíticos y móviles mientras utiliza una interfaz de consulta común y el modelo de datos que encanta a los desarrolladores.
                        </p>
                    </div>
                    <img className="imagesHomeAbout" src="https://animationexplainers.com/wp-content/uploads/2021/07/p10-bg2.png" />
                </div>
                <div className="cardImage">
                    <div className="w-100 d-flex justify-content-around flex-wrap">
                        {photoHomeMap}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage