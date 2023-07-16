import React from 'react'
import { TextBox } from '../components/TextBox'

export const ComponentDuplication = () => {
    let data = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
    ]

    return (
        <>
            <h1>Component Duplication</h1>
            {data.map((value, index) => {
                return (
                    <div key={index}>
                        {data[index].map((value, index) => {
                            return <TextBox key={value} index={index} />
                        })}
                    </div>
                )
            })}
        </>
    )
}
