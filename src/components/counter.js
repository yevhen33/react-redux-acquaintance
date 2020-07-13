import React from 'react';

const Counter = ({counter, inc, dec, res}) => {
    return (
        <div className="content">
            <div className="counter_wraper">
                <h1>{counter}</h1>
            </div>
            <div className="btn-block">
                <button onClick={inc} className="btn btn-inc">
                    <img src="icons/Plus.svg" alt="plus"/>
                </button>
                <button onClick={dec} className='btn btn-dec'>
                    <img src="icons/Minus.svg" alt="minus"/>
                </button>
                <button onClick={res} className='btn btn-res'>
                    <img src="icons/Reset.svg" alt="reset"/>
                </button>
            </div>
        </div>
    )
}

export default Counter;