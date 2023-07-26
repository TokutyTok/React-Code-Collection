import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Demo } from '../src/pages/Demo'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<Demo />} errorElement={<div>error</div>}>
            <Route path={'demo'} element={<div>demo</div>} />
            <Route path={'demo/:id'} element={<div>demo1</div>} />
        </Route>
    )
)
