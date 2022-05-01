import React from 'react'

const Button = ({ icon, text, thin }) => {
    return (
        <>
            {
                thin ? <a href="" className='button active-button'>{icon} {text}</a>
                    : <a href="" className='button'>{icon} {text}</a>
            }
        </>

    )
}

export default Button