
import React from 'react';
import './styles.css'
import { useState} from 'react';

import Header from './components/header';
import Todolist from './components/todolist';
import Todoinput from './components/todoinput';
import Footer from './components/footer';


function App() {

  /**********************  STATES HERE    *******************/

  const [input,setInput]=useState('')

  const [editEvent,setEditEvent]=useState(false) ;

  const[list,setList]=React.useState([])
  



/********************  INPUT CHANGE FUNCTION HERE   *****************/

  
function handleChange(event)
  {
    setInput(event.target.value)
    setEditEvent(true);
    
  }

  /********************  ADD FUNCTION HERE   *****************/

  function handleAdd()
  {
            
            setList(prevList=>([...prevList,{todo:input,id:Date.now()}]))
            setInput('')
  }

  /********************  DELETE FUNCTION HERE   *****************/

  function handleDelete(id)
  {

    const updated=list.filter((n)=>{ return n.id!==id})
    setList(updated)
    }
    
/********************  EDIT FUNCTION HERE   *****************/

    function handleEdit(removedObj)
    {
      
     const updated2=list.filter((n)=>{return n.id!==removedObj.id})
     setList(updated2)
     setInput(removedObj.todo)
    
    }
  
/********************  CLEAR FUNCTION HERE   *****************/

function handleClear()
{
  setList([])
}


  return (
            <div className="container">
              <Header />
              <Todoinput input={input}  changeFn={handleChange} addFn={handleAdd} editEvent={editEvent}/>
              <Todolist list={list} setList={setList} deleteFn={handleDelete} editFn={handleEdit} />
              <Footer clearFn={handleClear}/>
            </div>
          );
        }

export default App;