
import React from 'react';
import {RiDeleteBinLine} from 'react-icons/ri'
import {GrEdit} from 'react-icons/gr'


const Todolist = ({list,deleteFn,editFn}) => {

  
    return(
        <section>
                    {list.map(n=>{return( 
                                          <div key={n.id} className='list_container'>
                                                <p>{n.todo}</p> 
                                                 <span className='icon_list'>
                                                    
                                                   <RiDeleteBinLine  onClick={()=>deleteFn(n.id)}  color='red' size={20} />
                                                    <GrEdit onClick={()=>editFn(n)} color='green' size={20} />
                                                 </span>
                                                            
                                             </div>
                                              
                               )})}           
                      
                </section>

    );
}

export default Todolist;
