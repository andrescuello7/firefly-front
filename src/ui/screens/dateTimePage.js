import '../../values/styles/dateTimePage.css';
import Controller from '../screen-controller/datePageController';
import MenuOpcion from '../components/menuOptions';

import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';


const DateTimePage = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <div className='body'>
            <MenuOpcion className="menu" />
            <div className='dateTime'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className='dateTimePicker' >
                        <label className='titleDate'>Fecha y Hora</label>
                        <DateTimePicker className='mt-2' value={selectedDate} onChange={handleDateChange} />
                    </div>
                </MuiPickersUtilsProvider>
            </div>
        </div>
    );
}
export default DateTimePage;