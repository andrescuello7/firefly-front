import "../../values/styles/homePage.css";
import Controller from '../screen-controller/homePageController';
import MenuOpcion from '../components/menuOptions';

const HomePage = () => {
    const { photoHomeMap, bannerHomeMap } = Controller()
    return (
        <div className='body'>
            <MenuOpcion />
            <div className='homePage'>
                {bannerHomeMap}
                <div className="cardImage">
                    <div className="w-100 d-flex justify-content-around flex-wrap">
                        {photoHomeMap}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage