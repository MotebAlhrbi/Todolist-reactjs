import React, { Component } from 'react';

import App from '../App';

function Form({setInputext , Inputext , settodolist , todolist,setstat , setfilter}) {


 let onchangehandler = (i) => {

    return (

        setInputext(i.target.value)


    );


 }

 

 let statehandler =(y) =>{

  setstat(y.target.value);
  }


 let sumhandler = (x) =>{

x.preventDefault();

settodolist( [...todolist , {text:Inputext , completed:false , id: Math.random()*10000}])

setInputext("")

 }



        return (
<div>
        <form>
      <input value={Inputext} onChange={onchangehandler} className="todo-input" />
      <button onClick={sumhandler }>
      +
      </button>
      <div className="select">
        <select onChange={statehandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>


</div>



        )
    }


export default Form;