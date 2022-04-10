import Controller from '../../screen-controller/adminPageController';
import { Form, Alert, Button, Modal, Dropdown } from 'react-bootstrap'
import { useState } from 'react';

const ImageAdmin = () => {
    const {
        validation,
        setValidation,
        HandleChange,
        postAdminPhotoController
    } = Controller()
    return (
        <div className='adminForm'>
            <Form
                className="FormAdmin"
            >
                <Form.Group controlId="formBasicEmail" className="formInput">
                    <input
                        className="inputFormAdmin"
                        onChange={(e) => HandleChange(e)}
                        type="text"
                        name="title"
                        placeholder="Titulo de Posteo"
                    />
                    <textarea
                        cols="47"
                        rows="10"
                        className="form-control"
                        onChange={(e) => HandleChange(e)}
                        type="text"
                        maxLength={250}
                        name="description"
                        placeholder="Descripcion de Posteo"
                    />
                    <label className="custom-file mt-2">
                        <input
                            id="file-input"
                            name="photo"
                            accept="image/png, image/jpeg"
                            type="file"
                            onChange={postAdminPhotoController}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        />
                    </label>
                    {validation === true ?
                        <Alert show={validation} className='w-100 mt-2' variant="success">
                            <Alert.Heading>Archivo Publicado!</Alert.Heading>
                            <p>
                                Su archivo se subio correctamente.
                            </p>
                        </Alert>
                        : validation === false ?
                            <Alert show={validation} className='w-100 mt-2' variant="danger">
                                <Alert.Heading>Archivo no se Publico!</Alert.Heading>
                                <p>
                                    Su archivo no se subio correctamente.
                                </p>
                            </Alert> :
                            <div></div>
                    }
                    <Button variant="success" className="w-100 mt-2" type="button">
                        <b>Publicar</b>
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}
export default ImageAdmin