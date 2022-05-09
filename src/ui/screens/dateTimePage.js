import '../../values/styles/dateTimePage.css';
import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';


const DateTimePage = () => {
    //Component for Table
    const CardFecha = ({ mes, dia }) => {
        return (
            <div className='cardDate'>
                <div className='w-100 d-flex justify-content-center'>
                    <img className='imageCardDate' src={require('../../values/images/fecha.jpg')} />
                </div>
                <div className='cardFechaButton'>
                    <div className='mesCardFecha'>{mes}</div>
                    <div className='diaCardFecha'>{dia}</div>
                </div>
            </div>
        );
    }
    return (
        <div className='d-flex flex-column w-100'>
            <div>
                <p className='titleProgress'>Fechas y Calendario</p>
            </div>
            <div className='cardViewPage'>
                <CardFecha dia={23} mes={'Abril'} />
                <CardFecha dia={7} mes={'Mayo'} />
                <CardFecha dia={21} mes={'Mayo'} />
                <CardFecha dia={11} mes={'Junio'} />
                <CardFecha dia={25} mes={'Junio'} />
                <CardFecha dia={9} mes={'Julio'} />
                <CardFecha dia={30} mes={'Julio'} />
                <CardFecha dia={13} mes={'Agosto'} />
                <CardFecha dia={27} mes={'Agosto'} />
                <CardFecha dia={10} mes={'Septiembre'} />
                <CardFecha dia={1} mes={'Octubre'} />
                <CardFecha dia={22} mes={'Octubre'} />
                <CardFecha dia={5} mes={'Noviembre'} />
                <CardFecha dia={19} mes={'Noviembre'} />
                <CardFecha dia={3} mes={'Diciembre'} />
            </div>
        </div>
    );
}
export default DateTimePage;