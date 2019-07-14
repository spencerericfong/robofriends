import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', borderTop: '5px solid black', borderBottom:'5px solid black', height: '750px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
