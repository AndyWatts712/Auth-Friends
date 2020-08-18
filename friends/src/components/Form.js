import React, { useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export function Form() {

    const [form, setForm] = useState([])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        axiosWithAuth()
        .post('api/friends', form)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    />
                <input
                    type='text'
                    name='age'
                    value={form.value}
                    onChange={handleChange}
                    />
                <input
                    type='text'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    />
                <button>Submit</button>
            </form>
        </div>
    )
}