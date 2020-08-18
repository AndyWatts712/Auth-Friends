import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Form } from './Form'

export function FriendList() {

    const initFriends = {
        name: '',
        age: null,
        email: ''
    }
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then((res) => {
            setFriends(res.data)

        })}, [friends])
    
    return (
        <div>
            <Form />
            {friends.map((item) => {
                return(
                <div key={item.id}>
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                    <p>email: {item.email}</p>
                </div>)
                
            })}
        </div>
    )
}