import '../../../values/styles/aboutPageExtencion.css';
import Controller from '../../screen-controller/homePageController';
import { Table } from 'react-bootstrap';

const aboutPageExtencion = () => {
    const { photoHomeMap, childProgressViewMap } = Controller();
    return (
        <div className="aboutUs">
        <div className="aboutUsBox">
            <div className="aboutUsBoxRight">
                <div className="aboutUsBoxRightDirection">
                    <div className='mb-4'>
                        <b>Tabla de Posiciones</b>
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
                <div className="aboutUsBoxRight">
                    <div className="aboutUsBoxRightDirection">
                        <div className='mb-4 w-100 d-flex justify-content-center'>
                            <b>Cuaderno de comunicaciones</b>
                        </div>
                    </div>
                    <div className='mx-4 aboutUsBoxRightDirectionTable'>
                        <Table responsive="sm">
                            <tbody>
                                {photoHomeMap}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <div className="aboutUsBox">
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
export default aboutPageExtencion