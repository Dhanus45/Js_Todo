import {useState} from "react";
import Todoitem from "./Todoitem";

export default function Form(){
    const[todos,setTodos]=useState([]);
    const[todo,setTodo]=useState("");


    function handelSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
}
    return (<form  onSubmit={handelSubmit}>
        <input onChange={(e)=>setTodo(e.target.value)} value={todo} type="text" />
        <button type="submit" >Add</button>
    </form>

    );
}