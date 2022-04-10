import Controller from '../../screen-controller/adminPageController';

const UsersAdmin = () => {
    const {
        ProgressMap,
    } = Controller()
    return (
        <div className='d-flex w-100 justify-content-evenly flex-wrap'>
            {ProgressMap}
        </div>
    );
}
export default UsersAdmin