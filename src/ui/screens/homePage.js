// import { Button } from "react-bootstrapp";
import "../../values/styles/homePage.css";
import Controller from '../screen-controller/homePageController';
import MenuOpcion from '../components/menuOptions';
import NavbarOpcion from '../components/navbarComponent';

const HomePage = () => {
    const { photoHomeMap, BannerComponent, bannerHomeMap } = Controller();
    return (
        <div className='bodyhome'>
            <div className="bannerWhite">
                <div className='homePage'>
                    <BannerComponent description={'Bienvenidos a los boyscouts, donde ensenamos y aprendemos sobre el compañerismo y trabajo en equipo simentados en la palabra de Dios.'} title={'Somos la luz de este mundo.'} />
                    <div className="displayButtonBanner">
                        <button className="buttonBanner">Login</button>
                        <button className="buttonBannerVideo">Watch Video</button>
                    </div>
                </div>
            </div>
            <div className="cardImage">
                <div className="mx-4 w-100 d-flex justify-content-around flex-wrap">
                    {photoHomeMap}
                </div>
            </div>
        </div>
    );
}
export default HomePage