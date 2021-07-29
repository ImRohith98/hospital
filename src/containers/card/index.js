import React from 'react'
import moment from 'moment'

const Card = (props) => {
    return (
        <div {...props} className="m-4 hover:shadow-xl cursor-pointer" style={{ minWidth: '350px', minHeight: '269px', maxWidth: '350px', maxHeight: '315px', overflow: 'hidden' }}>
            <div className="p-4 text-2xl rounded-2xl 	" style={{ background: '#e2f1f9' }}>
                <div className="p-2 text-center">
                    Dr.{props.name}
                </div>
                <div className="p-2">
                    {props.spe}
                </div>
                <div className="p-2">
                    Patient: {props.firstName}
                </div>
                <div className="p-2">
                    Date : {moment(props.date).format('YYYY-MM-DD HH:mm')}
                </div>
                <div className="p-2" title={props.status} style={{ width: '300px', height: '45px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Description : {props.status}
                </div>
            </div>
        </div>
    )
}

export default Card
