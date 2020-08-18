import React, { useState} from 'react'

export function Form() {

    const [form, setForm] = useState([])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <form>
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