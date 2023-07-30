import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const UserDetail = () => {
    const { user, users } = useLoaderData()
    return (
        <div>
            {users && showUsers(users)}
            {user && showUsers(user)}
        </div>
    )
}

const showUsers = (params) => {
    return params.map((value) => {
        return (
            <div key={value.id}>
                id:{value.id} name:{value.name}
            </div>
        )
    })
}
