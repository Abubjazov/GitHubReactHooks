import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Search = () => {
    const {show} = useContext(AlertContext)
    const onSubmit = e => {
        if (e.key === 'Enter') {
            show('This is ALERT!!!')
        }
    }

    return (
        <div className='form-group'>
            <input 
            type='text'
            className='form-control'
            placeholder='Input user Nikname'
            onKeyPress={onSubmit}
            />
        </div>
    )
}
