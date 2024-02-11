import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { db } from './firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function App() {

const [input, setInput] = useState(""); 

const inputHandler = (e) =>
{
  setInput(e.target.value);
}


const submitHandler = async (e) =>
{
  e.preventDefault();

  if(input)
  {
    await addDoc(collection(db, "emails"),
      {
        email: input,
        timestamp: serverTimestamp(),
      })
      setInput("");
  }
}


  return (
    <div className="emails">
      <form onSubmit={submitHandler} className="form">
        <p>Register to attend a session wit a Cypress representative</p>
        <input className="email-input" onChange={inputHandler} placeholder="Email" type="email" value={input}></input>
        <button className="email-button">Count me in!</button>
      </form>
    </div>
  );
}

export default App;
