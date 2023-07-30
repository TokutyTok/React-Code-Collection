import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Demo } from '../src/pages/Demo'
import { UserDetail } from './components/UserDetail'
import { usersData, userData } from './Data'
import { action } from './Action'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<Demo />} errorElement={<div>error</div>} action={action}>
            <Route path={'users'} element={<UserDetail />} loader={usersData} />
            <Route path={'users/:id'} element={<UserDetail />} loader={userData} />
            <Route path={'demo'} element={<div>demo</div>} />
            <Route path={'demo/:id'} element={<div>demo1</div>} />
        </Route>
    )
)
