// import '../../values/styles/aboutPage.css';
import '../../values/styles/aboutPageTwoVersion.css';
import Controller from '../screen-controller/homePageController';
import MenuExample from '../components/menuExampleComponent'
import { Table, ProgressBar } from 'react-bootstrap';

const aboutPageTwoVersion = () => {
    const { photoContribuitorHomeMap, photoHomeMap, BannerComponent, banner, childProgressViewMap } = Controller();
    return (
        <div className="aboutUs">
            {/* <MenuExample /> */}
            <div className="aboutUsBox">
                <div className="aboutUsBoxLeft">
                    <div className='w-100 pt-4 text-center'>
                        <b>Aprende a Aprender</b>
                    </div>
                    <img className="aboutUsBoxLeftImg" src="https://preview.keenthemes.com/start-react/media/illustrations/terms-2.png" />
                </div>
                <div className="aboutUsBoxRight">
                    <div className="aboutUsBoxRightDirection">
                        <div className='mb-4'>
                            <b>Tabla de Posiciones</b>
                        </div>
                        <div className="aboutUsBoxRightDirectionButtons mb-4">
                            <button className="btn btn-outline-secondary mx-2"><b>Dia</b></button>
                            <button className="btn btn-outline-secondary mx-2"><b>Semana</b></button>
                            <button className="btn btn-outline-secondary mx-2"><b>Mes</b></button>
                        </div>
                    </div>
                    <div className='mx-4 aboutUsBoxRightDirectionTable'>
                        <Table responsive="sm">
                            <tbody>
                                {childProgressViewMap}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <div className="aboutUsBox">
                <div className="aboutUsBoxLeft">
                    <div className='w-100 pt-4 text-center'>
                        <b>Hermanos Mayores</b>
                    </div>
                    <div className="cardImageCollaborador">
                        {photoContribuitorHomeMap}
                    </div>
                </div>
                <div className="aboutUsBoxRightComponents">
                    <div className='aboutPresentComponent'>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
export default aboutPageTwoVersion