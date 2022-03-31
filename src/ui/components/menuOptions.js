import Controller from '../../ui/screen-controller/homePageController';
import { Link } from "react-router-dom";
import "../../values/styles/menuComponents.css";
import Variables from '../../values/api';
import UserModel from '../../models/userModel';

const OptionsMenuComponent = () => {
    const { token, admin } = Variables();
    const { menu, img, burgerButton, handleLogOut } = Controller();
    const { userModel } = UserModel();

    const OptionsMenu = ({ icon, title, show, route, script }) => {
        return (
            <Link to={route} className='menuOpcion' onClick={script}>
                <div className={show ? 'w-100 d-flex justify-content-left mx-2 p-2' : 'w-100 d-flex justify-content-center p-2'}>
                    <div>
                        <img className='imagenLogo' src={icon} />
                    </div>
                    <div className={show == false ? 'mx-2 px-2 d-none' : 'mx-2 px-2 d-block'}>
                        {title}
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <div className={menu ? "menuTrue" : "menuFalse"}>
            <div className='w-100 text-center'>
                <div className={img ? 'mt-2 w-100  text-center d-flex justify-content-around' : 'mt-2 w-100 d-flex justify-content-between flex-column'}>
                    <div className={img ? 'd-block' : 'd-none'} >
                        <div className='d-flex'>
                            <p className='TituloMenuDate text-warning'>L</p>
                            <p className='TituloMenuDate text-danger'>u</p>
                            <p className='TituloMenuDate text-primary'>c</p>
                            <p className='TituloMenuDate text-success'>i</p>
                            <p className='TituloMenuDate text-warning'>e</p>
                            <p className='TituloMenuDate text-danger'>r</p>
                            <p className='TituloMenuDate text-primary'>n</p>
                            <p className='TituloMenuDate text-success'>a</p>
                            <p className='TituloMenuDate text-warning'>g</p>
                            <p className='TituloMenuDate text-danger'>a</p>
                        </div>
                    </div>
                    <a className='mt-2' onClick={() => burgerButton()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </a>
                    <div className={img ? 'd-none' : 'd-block'} >
                        <img className='mt-2' src='https://app.uaaloo.com/assets/img/logo-sm.svg' />
                        {/* <p className='TituloMenuDate'>Luciernaga</p> */}
                    </div>
                </div>
            </div>
            <div className='mt-5'></div>
            {admin ?
                <OptionsMenu route={'/admin'} title={"Admin"} show={menu} icon={require('../../values/icons/admin.png')} />
                :
                <div></div>
            }
            <OptionsMenu route={'/'} title={"Inicio"} show={menu} select={true} icon={require('../../values/icons/home.png')} />
            <OptionsMenu route={'/status'} title={"Ranking"} show={menu} icon={require('../../values/icons/ranking2.png')} />
            <OptionsMenu route={'/profile'} title={"Perfil"} show={menu} icon={require('../../values/icons/profile2.png')} />
            <OptionsMenu route={'/time'} title={"Caledario"} show={menu} icon={require('../../values/icons/calentar.png')} />
            {token === null ?
                <OptionsMenu route={'/register'} title={"Register"} show={menu} icon={require('../../values/icons/register.png')} />
                :
                <div></div>
            }
            <OptionsMenu route={'/login'} title={"Salir"} script={handleLogOut} show={menu} icon={require('../../values/icons/login.png')} />
        </div>
    );
}

export default OptionsMenuComponent;