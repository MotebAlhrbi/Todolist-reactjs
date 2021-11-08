import React from 'react';
import Form from './Form';
import Do from './Do';



function Todo({Inputext,todolist,settodolist , setstat , infilter}){




    return(
<div className="todo-container">
<ul className="todo-list"  >


{infilter.map((todo)=> <Do key={todo.id} todolist={todolist}  settodolist={settodolist} todo={todo}

setstat ={setstat}
infilter ={infilter}
/>)}




</ul>
</div>





    )
}

export default Todo;