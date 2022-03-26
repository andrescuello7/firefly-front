import Controller from '../screen-controller/defaultPageController';
import MenuOpcion from '../components/menuOptions';

const DefaultPage = () => {
    const { home } = Controller();
    return (
        <div>
        <MenuOpcion className="menu" />
        <div className='homePage'>hola mundo</div>
        </div>
    );
}
export default DefaultPage