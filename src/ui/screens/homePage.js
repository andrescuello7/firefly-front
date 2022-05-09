import "../../values/styles/homePage.css";
import Controller from '../screen-controller/homePageController';
import AboutPage from './about/aboutPageExtencion';
import FutterComponent from '../components/futterHomeComponent';

const HomePage = () => {
    const { BannerComponent, banner } = Controller();
    return (
        <div className='bodyhome'>
            <div className="bannerWhite">
                <div className='homePage'>
                    <BannerComponent
                        title={banner.length !== 0 ? banner[0].title : 'Bienvenidos Nuevamente'}
                        description={banner.length !== 0 ? banner[0].description : ''}
                    />
                    <div className="displayButtonBanner">
                        <button className="buttonBanner">Login</button>
                        <button className="buttonBannerVideo">Perfil</button>
                    </div>
                </div>
            </div>
            <AboutPage />
            <FutterComponent />
        </div>
    );
}
export default HomePage