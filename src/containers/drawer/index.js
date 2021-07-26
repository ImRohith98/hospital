import React from 'react'

const Drawer = (props) => {

    const onButtonClick = () => {
        props.onChange("ia testing")
    }

    return (
        <div className="z-20 rounded-lg shadow-2xl"
            style={{
                position: "fixed",
                bottom: 0,
                right: 0,
                width: 'calc(80% - 56px)',
                height: 'calc(100% - 48px)',
                background: 'lightgray',
            }}
        >
            <div
                className="flex justify-end p-4 text-xl"
                onClick={() => onButtonClick()}>
                Close
            </div>
            {props.children}
        </div>
    )
}

export default Drawer
