import Controller from '../../screen-controller/adminPageController';
import { Form, Table, Button, Modal, Dropdown } from 'react-bootstrap'

const JobsAdmin = () => {
    const {
        postAdminJobController,
        HandleChange,
    } = Controller()
    return (
        <div className='adminForm'>
            <Form
                className="FormAdmin"
            >
                <Form.Group controlId="formBasicEmail" className="formInput">
                    <Dropdown className='w-100 mx-4'>
                        <Form.Group
                            name="user"
                            onChange={(e) => HandleChange(e)}
                            controlId="formGridState"
                            className="w-100"
                        >
                            <Form.Control className='inputFormAdmin' name="user" as="select" >
                                <option>Persona</option>
                                <option>Andres</option>
                                <option>Aryana</option>
                                <option>Elias</option>
                                <option>Fererico H</option>
                                <option>Fererico V</option>
                                <option>Jennifer</option>
                                <option>Luciana</option>
                                <option>Nicol</option>
                                <option>Silvina</option>
                                <option>Priscila</option>
                                <option>Varela</option>
                                <option>Viviana</option>
                            </Form.Control>
                        </Form.Group>
                    </Dropdown>
                    <div className='d-flex justify-content-between w-100'>
                        <Form.Group
                            name="inDay"
                            onChange={(e) => HandleChange(e)}
                            controlId="formGridState"
                            className="w-100"
                        >
                            <Form.Control className='inputFormAdmin' name="inDay" as="select" >
                                <option>Tarea de Sabado</option>
                                <option>Coordinador</option>
                                <option>Destreza</option>
                                <option>Juegos</option>
                                <option>Conocimiento</option>
                                <option>Recreacion</option>
                            </Form.Control>
                        </Form.Group>
                        <div className='mx-2'></div>
                        <Form.Group
                            name="inWeek"
                            onChange={(e) => HandleChange(e)}
                            controlId="formGridState"
                            className="w-100"
                        >
                            <Form.Control className='inputFormAdmin' name="inWeek" as="select">
                                <option>Tarea de Semana</option>
                                <option>Merchandising</option>
                                <option>Compras</option>
                                <option>Coordinador</option>
                                <option>Scroum Master</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <Form.Group
                        name="child"
                        onChange={(e) => HandleChange(e)}
                        controlId="formGridState"
                        className="w-100"
                    >
                        <Form.Control className='inputFormAdmin' name="child" as="select" >
                            <option>Nino Encargado</option>
                            <option>Alexia</option>
                            <option>Caleb Sale</option>
                            <option>Clohe</option>
                            <option>Damaris</option>
                            <option>Elena</option>
                            <option>Elena Sale</option>
                            <option>Facundo</option>
                            <option>Ignacio</option>
                            <option>Jeremias Sale</option>
                            <option>Mateo Rubio</option>
                            <option>Mateo Burgo</option>
                            <option>Micaela Burgo</option>
                            <option>Sol Rodriguez</option>
                        </Form.Control>
                    </Form.Group>
                    <input
                        className="inputFormAdmin"
                        onChange={(e) => HandleChange(e)}
                        type="text"
                        name="title"
                        placeholder="Tarea"
                    />
                    <input
                        className="inputFormAdmin"
                        onChange={(e) => HandleChange(e)}
                        type="text"
                        name="description"
                        placeholder="Descripcion"
                    />
                </Form.Group>
                <div className="mt-4">
                    <Button variant="success" onClick={postAdminJobController} className="w-100" type="submit">
                        <b>Guardar Tarea</b>
                    </Button>
                </div>
            </Form>
        </div>
    );
}
export default JobsAdmin