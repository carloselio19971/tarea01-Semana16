import { useState } from "react";

export const UserNameForm = ({onSubmitUserName}) => {
    const [error,setError]=useState(null);
    const [username, setUserName]=useState('')
    const handelSubmit = (e) =>{
        e.preventDefault();
        const valueTarget=e.target[0].value;
        const valueElementTarget=e.target.elements.userNameInput.value;
        console.log(valueTarget);
        console.log(valueElementTarget);
        onSubmitUserName(valueElementTarget);
    }
    const handleChange = (e) =>{
        const {value}=e.target;
          console.log(value);
        const isLowerCase= value===value.toLowerCase();
        setError(isLowerCase ? null : "Debe ser en minusucula");
        
        console.log(isLowerCase); 
    }
    return (
    <div>
       <form  onSubmit={handelSubmit}>
        <div>
          <label htmlFor="usermane">username</label>
          <input onChange={handleChange} type="text" id="userNameInput"/>
        </div>
        <div>
          <p style={{color:'red'}}>{error}</p>
        </div>
        <div>
          <input disabled={co || username} type="submit" value="Enviar"/>
        </div>
  </form>
    </div>
  )
}
