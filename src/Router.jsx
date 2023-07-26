import { createBrowserRouter } from 'react-router-dom'
import { Demo } from '../src/pages/Demo'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Demo />,
        errorElement: <div>error</div>,
        children: [
            {
                path: 'demo',
                element: <div>demo</div>,
            },
            {
                path: 'demo/:id',
                element: <div>demo1</div>,
            },
        ],
    },
])
