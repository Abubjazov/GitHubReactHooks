import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = e => {
        if (e.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Enter user details!')
            github.clearUsers()
        }
    }

    return (
        <div className='form-group'>
            <input 
            type='text'
            className='form-control'
            placeholder='Input user Nikname'
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyPress={onSubmit}
            />
        </div>
    )
}
