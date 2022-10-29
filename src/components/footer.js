import React from 'react';

const Footer = ({clearFn}) => {
    return (
        <div>
             <button className='clear_btn' onClick={clearFn} >Clear All </button>
        </div>
    );
}

export default Footer;
