import '../../values/styles/aboutPage.css';
import Controller from '../screen-controller/homePageController';

const AboutPage = () => {
    const { photoContribuitorHomeMap, photoHomeMap, BannerComponent, banner } = Controller();
    return (
        <div>
            <div className='aboutBodyText'>
                {/* <div className="aboutPresent3">
                    <div className='textAboutUs'>Nosotros somos | About Us</div>
                    <div className='w-50 mb-4 border-bottom border-3 border-success'></div>
                </div>
                <div className='aboutPresent'>
                    <div className='titleAbout mx-4'>Let's go beyond hosting</div>
                    <div className='borderAbout'></div>
                    <div className='descriptionAbout mx-4'>Clever Cloud is a Platform as a Service, aiming at helping companies to ship way faster their web services in the cloud, with a pay-as-you-go pricing model. No infrastructure to manage, no system to update and no orchestrator to troubleshoot.</div>
                </div>
                <div className='aboutPresent2'>
                    <div className='titleAbout mx-4'>Let's go beyond hosting</div>
                    <div className='borderAbout'></div>
                    <div className='descriptionAbout mx-4'>Clever Cloud is a Platform as a Service, aiming at helping companies to ship way faster their web services in the cloud, with a pay-as-you-go pricing model. No infrastructure to manage, no system to update and no orchestrator to troubleshoot.</div>
                </div> */}
                <div className="aboutPresent3">
                    <div className="textAboutUs">Comunicaciones y avisos</div>
                    <div className='w-50 mb-4 border-bottom border-3 border-success'></div>
                    <div className="descriptionAbout">
                    En esta parte se va a mostrar las comunicaciones o notificaciones para que los padres tengan en cuenta.
                    </div>
                </div>
                <div className="cardImage">
                    {photoHomeMap}
                </div>
                <div className="aboutPresent3">
                    <div className="textAboutUs">Contribuidores</div>
                    <div className='w-50 mb-4 border-bottom border-3 border-success'></div>
                    <div className="descriptionAbout">
                    Clever Cloud is a Platform as a Service, aiming at helping companies to ship way faster their web services in the cloud, with a pay-as-you-go pricing model. No infrastructure to manage, no system to update and no orchestrator to troubleshoot.
                    </div>
                </div>
                <div className="cardImage">
                    {photoContribuitorHomeMap}
                </div>
            </div>
        </div>
    );
}
export default AboutPage