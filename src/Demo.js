import React from 'react'
import { useParams } from 'react-router-dom'

const Demo = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            
        </div>
    )
}

export default Demo
