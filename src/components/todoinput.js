import React from 'react';

const Todoinput = ({input,changeFn,addFn}) => {
    return (
        <div className='input_container'>          

                 <input type='text'
                        placeholder='Enter a to do..' 
                        className='input_box'
                        value={input}
                        onChange={changeFn}
                                        
                  />
                  <button  onClick={addFn} className='btn'>Add</button>

           
        </div>
    );
}

export default Todoinput;
