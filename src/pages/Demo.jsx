import React from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import {} from '../css/demo.css'

export const Demo = () => {
    const { users } = useLoaderData()
    return (
        <div className='main'>
            <div className='side'>
                <div className='link'>
                    <Link to={`demo`}>demo</Link>
                </div>
                <div className='link'>
                    <Link to={`demo/1`}>demo1</Link>
                </div>
            </div>
            <div className='content'>
                {users.map((value) => {
                    return (
                        <div key={value.id}>
                            id:{value.id} name:{value.name}
                        </div>
                    )
                })}
                <Outlet />
            </div>
        </div>
    )
}
