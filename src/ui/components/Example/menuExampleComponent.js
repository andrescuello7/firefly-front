import { useState } from 'react'
import { Offcanvas, Button } from 'react-bootstrap'
import '../../values/styles/offCanvas.css'

const MenuExample = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} className="offCanvasMenu" placement={'end'}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
            </Offcanvas>
        </>
    );
}
export default MenuExample