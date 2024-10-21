import {useState} from "react";

export default function Todo(){
    const[todo,setTodo]=useState("h");
    return <div>
        
        <form>
            <input onChange={(e)=>setTodo(e.target.value)} type={todo} />
            <button type="submit" >Add</button>
        </form>
        </div>
}