import "../../values/styles/homePage.css";
import Controller from '../screen-controller/homePageController';
import AboutPage from '../screens/aboutPage';

const HomePage = () => {
    const { photoHomeMap, BannerComponent, banner } = Controller();
    return (
        <div className='bodyhome'>
            <div className="bannerWhite">
                <div className='homePage'>
                    <BannerComponent
                        title={banner.length !== 0 ? banner[0].title : 'Somos la luz de este mundo.'}
                        description={banner.length !== 0 ? banner[0].description : 'Bienvenidos a los boyscouts, donde ensenamos y aprendemos sobre el compañerismo y trabajo en equipo simentados en la palabra de Dios.'}
                    />
                    <div className="displayButtonBanner">
                        <button className="buttonBanner">Login</button>
                        <button className="buttonBannerVideo">Watch Video</button>
                    </div>
                </div>
            </div>
            <AboutPage />
        </div>
    );
}
export default HomePage