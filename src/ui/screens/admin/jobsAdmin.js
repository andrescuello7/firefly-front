import Controller from '../../screen-controller/adminPageController';
import { Form, Button, Dropdown } from 'react-bootstrap'

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
                                <option>Milagros</option>
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
                                <option>Ornamentacion</option>
                                <option>Juegos</option>
                                <option>Destreza</option>
                                <option>Desayuno / Merienda</option>
                                <option>Conocimiento</option>
                                <option>Materiales didacticos</option>
                                <option>Premios</option>
                                <option>Anfintrion</option>
                                <option>Deportes</option>
                                <option>Audiovisual</option>
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
                                <option>Compras</option>
                                <option>Premios</option>
                                <option>Redes</option>
                                <option>Ornamentacion</option>
                                <option>Organizar juegos</option>
                                <option>---------</option>
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
                            {/* <option>Alexia</option> */}
                            <option>Caleb Sale</option>
                            <option>Clohe Bazan</option>
                            <option>Damaris Ibanez</option>
                            <option>Elena Lara</option>
                            <option>Facundo Benedek</option>
                            <option>Elena Sale</option>
                            <option>Ignacio Beccari</option>
                            <option>Jeremias Sale</option>
                            <option>Mateo Ibanez</option>
                            <option>Mateo Burgo</option>
                            <option>Micaela Burgo</option>
                            <option>Sol Rodriguez</option>
                            <option>Valentino Robles</option>
                            <option>Nathan Robles</option>
                            <option>Tiziano Robles</option>
                            <option>Axel Robles</option>
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