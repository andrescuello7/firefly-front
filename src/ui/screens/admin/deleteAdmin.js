import Controller from '../../screen-controller/adminPageController';
import { Form, Table, Button, Modal, Dropdown } from 'react-bootstrap'

const DeleteAdmin = () => {
    const {
        PostsMap,
    } = Controller()
    return (
        <div className='d-flex w-100 flex-wrap'>
            {PostsMap}
        </div>
    );
}
export default DeleteAdmin