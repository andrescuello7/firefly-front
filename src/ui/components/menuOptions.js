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
                        {/* <img className='mt-2' src='https://app.uaaloo.com/assets/img/logo-lg.svg' /> */}
                        {/* <p className='TituloMenuDate'>Luciernaga</p> */}
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
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </a>
                    <div className={img ? 'd-none' : 'd-block'} >
                        <img className='mt-2' src='https://app.uaaloo.com/assets/img/logo-sm.svg' />
                        {/* <p className='TituloMenuDate'>Luciernaga</p> */}
                    </div>
                </div>
            </div>
            <div className='mt-5'></div>
            <OptionsMenu route={'/'} title={"Inicio"} show={menu} select={true} icon={'https://cdn-icons.flaticon.com/png/512/1531/premium/1531788.png?token=exp=1648591213~hmac=3a8042005b719f9a0d4b8f1c11d5b9e3'} />
            <OptionsMenu route={'/profile'} title={"Perfil"} show={menu} icon={'https://cdn-icons.flaticon.com/png/512/2880/premium/2880701.png?token=exp=1648591048~hmac=9c36c5fb3de46c118bf9734a32d827b6'} />
            <OptionsMenu route={'/time'} title={"Ausencias"} show={menu} icon={'https://cdn-icons.flaticon.com/png/512/1048/premium/1048953.png?token=exp=1648591150~hmac=b8d8ce817b375d56061016352d047d02'} />
            {admin ?
                // <div className="optionsMenuAdmin">
                <OptionsMenu route={'/admin'} title={"Administracion"} show={menu} icon={'https://cdn-icons.flaticon.com/png/512/1180/premium/1180353.png?token=exp=1648591754~hmac=2c39efafeb52f687f7f01ab7ec4a6a46'} />
                // </div>
                :
                <div></div>}
            {/* <OptionsMenu route={'/profile'} title={"Documentos"} show={menu} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>} /> */}
            {/* <OptionsMenu route={'/status'} title={"Comunicacion"} show={menu} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>} /> */}
            <OptionsMenu route={'/login'} title={"Login"} script={handleLogOut} show={menu} icon={'https://cdn-icons-png.flaticon.com/512/1828/1828504.png'} />
            <OptionsMenu route={'/register'} title={"Register"} show={menu} icon={'https://cdn-icons-png.flaticon.com/512/1828/1828466.png'} />
        </div>
    );
}

export default OptionsMenuComponent;