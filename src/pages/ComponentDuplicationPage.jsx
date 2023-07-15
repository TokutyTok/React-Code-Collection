import React from 'react'
import { TextBox } from '../components/TextBox'

export const ComponentDuplication = () => {
    let textBoxes = []

    for (let i = 0; i < 4; i++) {
        textBoxes.push(<TextBox key={i} index={i} />)
    }

    return (
        <>
            <h1>Component Duplication</h1>
            <div>{textBoxes}</div>
            <div>
                <input type='text' name='input01'></input>
                <input type='text' name='input02'></input>
                <input type='text' name='input03'></input>
                <input type='text' name='input04'></input>
            </div>
        </>
    )
}
