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
                    <b className=''>Datos de Facturacion</b>
                    <Form.Group controlId="formBasicEmail" className="formInput">
                        <div className="d-flex w-100">
                            <div className="w-100">
                                <p>Numero de tarjeta</p>
                                <input
                                    className="form-control"
                                    // onChange={(e) => HandleChange(e)}
                                    type="number"
                                    name=""
                                    placeholder=""
                                />
                            </div>
                            <div className="m-2"></div>
                            <div className="w-100">
                                <p>Fecha de vencimiento</p>
                                <input
                                    className="form-control"
                                    // onChange={(e) => HandleChange(e)}
                                    type="date"
                                    name=""
                                />
                            </div>
                        </div>
                        <div className="mt-4 d-flex w-100">
                            <div className="w-100">
                                <p>Nombre de titular</p>
                                <input
                                    className="form-control"
                                    // onChange={(e) => HandleChange(e)}
                                    type="text"
                                    name=""
                                    placeholder=""
                                />
                            </div>
                            <div className="m-2"></div>
                            <div className="w-100">
                                <p>Codigo de Seguridad</p>
                                <input
                                    className="form-control"
                                    // onChange={(e) => HandleChange(e)}
                                    type="number"
                                    name=""
                                    placeholder="CVV"
                                />
                            </div>
                        </div>
                        <button className="w-100 mt-5 btn btn-success" type="submit">
                            <b>Pagar</b>
                        </button>
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