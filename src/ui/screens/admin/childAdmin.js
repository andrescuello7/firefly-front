import Controller from '../../screen-controller/adminPageController';

const ChildAdmin = () => {
    const {
        ProgressMapChild,
    } = Controller()
    return (
        <div className='adminForm'>
            <div className='d-flex justify-content-evenly flex-wrap w-100'>
                {ProgressMapChild}
            </div>
        </div>
    );
}
export default ChildAdmin