import React from 'react'

const Card = (props) => {
    return (
        <div {...props} className="m-4">
            <div className="p-4 text-2xl rounded-2xl hover:shadow-xl	" style={{ background: '#e2f1f9' }}>
                <div className="p-2 text-center">
                    {props.name}
                </div>
                <div className="p-2">
                    {props.spe}
                </div>
                <div className="p-2">
                    Date : {props.date}
                </div>
                <div className="p-2">
                    Status : {props.status}
                </div>
            </div>
        </div>
    )
}

export default Card
