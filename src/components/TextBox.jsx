import React from 'react'

export const TextBox = (props) => {
    const { index } = props
    return <input key={index} type='text' name={`input${index}`}></input>
}
