import { Modal } from 'react-bootstrap'
import '../../values/styles/postComponent.css'
import { useState } from 'react';

const JovenComponent = ({ image, joven, name, id, likes, dateTime }) => {
    return (
        <div>
            {joven ?
                <div className='m-4'>
                    <div className="cardCollaborador">
                        <div className="d-flex">
                            <img className="cardPostUsersComponent" src={image} />
                            <div className='ml-3 mt-4'>
                                <p className='mx-3'>{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    );
}

export default JovenComponent;