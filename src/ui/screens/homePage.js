import "../../values/styles/homePage.css";
import Controller from '../screen-controller/homePageController';

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
            <div className="text-center d-flex flex-column justify-content-center w-100 mt-5">
                <p className="textHomeInfo">Comunicaciones y avisos</p>
                <p className="descriptionHomeInfo mx-4">
                Bienvenidos a boyscouts, donde enseñamos y aprendemos sobre el compañerismo y trabajo en equipo cimentados en la palabra de Dios
                </p>
            </div>
            <div className="cardImage">
                {photoHomeMap}
            </div>
        </div>
    );
}
export default HomePage