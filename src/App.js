import React, {useState} from "react";
import './App.css';
import MainLayout from "./components/Layout/MainLayout";

function App() {
   const [state, setState] = useState(["todo1", "todo2", "todo3"]);
   const [todo, setTodo] = useState('');

   const handleChange = (e) => {
      setTodo(e.target.value);
   }
   const handleSubmit = () => {
      setState([...state, todo]);
      setTodo('');
   }

   return (
      <div className="App">
         {state.map(el =>
            <h2>{el}</h2>
         )}
         <input type="text" onChange={handleChange} placeholder={"add todo"} value={todo}/>
         <button onClick={handleSubmit}>submit</button>
         {/*<MainLayout state={state} setState={setState} />*/}
      </div>
   );
}

export default App;
