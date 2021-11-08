import './App.css';
import React ,{useState , useEffect} from 'react';
import Form from './Compo/Form';
import Todo from './Compo/Todo';


function App() {

  const [ Inputext , setInputext ] = useState('');
  const [todolist , settodolist] = useState([]);
  const [ instat , setstat] = useState(['all']);
  const [infilter , setfilter] = useState([]);




  useEffect(()=>{
    get();}, []);



  useEffect(()=> filterhandler(), [instat,todolist]);



  let filterhandler = () =>{

    switch(instat){

      case 'completed' :
    setfilter(todolist.filter((todolist)=> todolist.completed === true ) )
  break;

  case 'uncompleted' :

    setfilter(todolist.filter((todolist)=> todolist.completed === false ) )

    break;

    default:

      setfilter(todolist);
      break;
    }
   }


   const save = () =>{

    localStorage.setItem('todo' , JSON.stringify(todolist));
   };

   const get = () =>{

    if(localStorage.getItem('todolist')===null){
     localStorage.setItem('todolist' , JSON.stringify([]));


    }

    else {

      let todos = JSON.parse(localStorage.getItem('todolist'))


      setfilter(todos);
    }
   };

  return (

    <div>
    <header>
      <h1>
        Todo list
      </h1>

    </header>
    <Form  settodolist={settodolist}
    todolist ={todolist}
    Inputext ={Inputext}
    setInputext ={setInputext}
    setstat={setstat}
    setfilter ={setfilter}
    />

    <Todo Inputext = {Inputext} todolist={todolist} settodolist={settodolist} setstat={setstat} infilter={infilter} />

    </div>


  )
}

export default App;
