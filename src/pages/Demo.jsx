import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {} from '../css/demo.css'

export const Demo = () => {
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
                <Outlet />
            </div>
        </div>
    )
}
