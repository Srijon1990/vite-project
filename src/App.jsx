import React, {useState, useEffect} from 'react';





function App() {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input , setInput] = useState('');
 
  const addTodo = () => {
  
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input
    }
    setTodos([todo, ...todos]);
  }
  const addToProgress = (id) => {
    const item = todos.find(x => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterarray = todos.filter(x => x.id !== id);
    setTodos(filterarray);
  }
  const deleteTodo = (id) => {
    const filterarray = todos.filter(x => x.id !== id);
    setTodos(filterarray);
  }
  const addtoCompleted = (id) => {
    const item = inprogress.find(x => x.id === id);
    setCompleted([item, ...completed]);
    const filterarray = inprogress.filter(x => x.id !== id);
    setInprogress(filterarray);
  }
  useEffect(() => {

  }, [todos, inprogress])

  return (
    <div className="App">
      <div className="container">
        <h3 className="title">What ToDo</h3>
        <form className="form_todo">
          <input type="text"  className="form-control" onChange={(e) => setInput(e.target.value)} placeholder="Enter Your Todo" name="text"/>
          <button type="button" className="btn" onClick={() => addTodo()}>Add</button>
        </form>
        <div className="todos_wrapper">
         <div className="todos_list">
           <h3 className="todo_title">Task List</h3>
           {todos.map((item, index) => 
            <div className="todo_card" key={item.id}>
              <p className="card_text">{item.text}</p>
              <button onClick={() => addToProgress(item.id)} className="check-todo">Cpomplete</button>
              <button onClick={() => deleteTodo(item.id)} className="trash-todo">Delete</button>
            </div>
           )}
         </div>
         <div className="todos_list">
           <h3 className="todo_title">CompleteTask</h3>
           {inprogress.map((item, index) =>
            <div className="complete_card" key={item.key}>
              <p className="card_text">{item.text}</p>
              <button onClick={() => addtoCompleted(item.id)} className="complete-todo">Clear</button>
            </div>
           )}
         </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
