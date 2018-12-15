import React from 'react';
import './CountBlock.css';
const CountBlock = (props) => {
    const {title='Test', time = 0 } = props;
    return (
        <article className='CountBlock'>
            <h1 className='CountBlock__time'>{time}</h1>
            <h2 className='CountBlock__title'>{title}</h2>
        </article>
    )
}

export default CountBlock;