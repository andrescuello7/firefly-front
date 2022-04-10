import Controller from '../../screen-controller/adminPageController';
import { Form, Alert, Button, Modal, Dropdown } from 'react-bootstrap'

const BannerAdmin = () => {
    const {
        HandleChange,
        PutBannerSubmit,
        validation
    } = Controller()
    return (
        <div className='adminForm'>
            <Form
                className="FormAdmin"
            >
                <Form.Group
                    controlId="formBasicEmail"
                    className="formInput"
                >
                    <input
                        className="inputFormAdmin"
                        onChange={(e) => HandleChange(e)}
                        type="text"
                        name="title"
                        placeholder="Titulo de Banner"
                    />
                    <textarea
                        cols="47"
                        rows="10"
                        className="form-control"
                        onChange={(e) => HandleChange(e)}
                        type="text"
                        name="description"
                        maxLength={250}
                        placeholder="Descripcion de Banner"
                    />
                    {validation === true ?
                        <Alert show={validation} className='w-100 mt-2' variant="success">
                            <Alert.Heading>Banner Publicado!</Alert.Heading>
                            <p>
                                Su Banner se subio correctamente.
                            </p>
                        </Alert>
                        : validation === false ?
                            <Alert show={validation} className='w-100 mt-2' variant="danger">
                                <Alert.Heading>Banner no se Publico!</Alert.Heading>
                                <p>
                                    Su Banner no se subio correctamente.
                                </p>
                            </Alert> :
                            <div></div>
                    }
                    <Button
                        variant="success"
                        onClick={PutBannerSubmit}
                        className="w-100 mt-2"
                    >
                        <b>Actualizar</b>
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}
export default BannerAdmin