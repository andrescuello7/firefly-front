import Controller from '../screen-controller/statusPageController';
import '../../values/styles/pagosPage.css'
import { Form, Button } from 'react-bootstrap'

const PagosPage = () => {
    //Component for Table
    // const { ProgressMap } = Controller();
    return (
        <div className='w-100'>
            <p className='titleProgress'>Pagos y Facturas</p>
            <div className="pagosPageCss">
                <Form className="FormPageCss">
                    <p className='titleRegister'>Datos de Facturacion</p>
                    <Form.Group controlId="formBasicEmail" className="formInput">
                        <div className="d-flex w-100">
                            <input
                                className="inputFormRegister"
                                // onChange={(e) => HandleChange(e)}
                                type="number"
                                name="user"
                                placeholder="Numero de tarjeta"
                            />
                            <div className="m-2"></div>
                            <input
                                className="inputFormRegister"
                                // onChange={(e) => HandleChange(e)}
                                type="number"
                                name="password"
                                placeholder="Codigo de seguridad"
                            />
                        </div>
                        <input
                            className="inputFormRegister"
                            // onChange={(e) => HandleChange(e)}
                            type="email"
                            name="email"
                            placeholder="Nombre de titular"
                        />
                        <Button className="w-100 mt-5 btn btn-success" type="submit">
                            <b>Pagar</b>
                        </Button>
                    </Form.Group>
                    {/* {validation === true && (
                        <div className="ml-2 text-danger">
                            <p>No se puede iniciar sesion, intenta nuevamente!</p>
                        </div>
                    )} */}
                </Form>
            </div>
        </div>
    );
}
export default PagosPage