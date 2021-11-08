import React from 'react';

import Todo from './Todo';
function Do({todolist,settodolist,todo , setstat,infilter}) {




   let  del =()=>{

   settodolist(todolist.filter((elm)=>elm.id !==todo.id) )

    }

    let complete =() =>{

        settodolist(


            todolist.map(

          (el) =>{ if(el.id ===todo.id){
           return  {...el , completed: !el.completed , };

          }
          return el;
        }


            )
        )
    }
return(



<div className="todo">

    <li className={`todo-item ${todo.completed ? "completed" : ""}` }>{todo.text}</li>

    <button onClick={complete}  className="complete-btn">
 <i className="fas fa-check" ></i>
    </button>
    <button onClick={del} className="trash-btn">

        <i className="fas fa-trash" ></i>
    </button>



</div>


)

}

export default Do;