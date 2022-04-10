import Controller from '../../screen-controller/adminPageController';
import { Form, Table, Button, Modal, Dropdown } from 'react-bootstrap'

const ChildAdmin = () => {
    const {
        ProgressMapChild,
    } = Controller()
    return (
        <div className='adminForm'>
            <div className='tableStatus'>
                <Table hover size="sm" className="w-100">
                    <tbody>
                        {ProgressMapChild}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default ChildAdmin