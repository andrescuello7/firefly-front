import '../../values/styles/aboutPage.css';
import Controller from '../screen-controller/homePageController';

const AboutPage = () => {
    const { photoContribuitorHomeMap, photoHomeMap, BannerComponent, banner } = Controller();
    return (
        <div>
            <div className='aboutBodyText'>
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
                    <div className='textAboutUs'>Nosotros somos | About Us</div>
                    <div className='w-50 mb-4 border-bottom border-3 border-success'></div>
                </div>
                <div className='aboutPresent'>
                    <div className='titleAbout mx-4'>Nosotros Somos</div>
                    <div className='borderAbout'></div>
                    <div className='descriptionAbout mx-4'>Jovenes que desarrollan un programa educativo no formal para niños en edad escolar entre los 4 a los 12 años, orientado a desarrollar un sistema de valores que permita a los niños la construccion de tareas en equipo considerando habilidades, aptitudes y competencias.</div>
                </div>
                <div className='aboutPresent2'>
                    <div className='titleAbout mx-4'>Como lo hacemos</div>
                    <div className='borderAbout'></div>
                    <div className='descriptionAbout mx-4'>Proveyendo principios espirituales no religiosos tales como libertad, verdad, misericordia, generosidad, perdon, compañerismo y amor, vitales para el desarrollo de la vida en comunidad, amando a Dios, a su projimo y al entorno que los rodea.</div>
                </div>
                <div className="aboutPresent3">
                    <div className="textAboutUs">Equipantes</div>
                    <div className='w-50 mb-4 border-bottom border-3 border-success'></div>
                    <div className="descriptionAbout">
                        Somos un grupo de jovenes comprometidos con la obra que el señor quiere comenzar con los niños proyectando a Cristo mediante el servicio genuino de llevar su proposito eterno.
                    </div>
                </div>
                <div className="cardImageCollaborador">
                    {photoContribuitorHomeMap}
                </div>
            </div>
        </div>
    );
}
export default AboutPage