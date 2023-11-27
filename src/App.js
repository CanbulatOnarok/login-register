import { useState } from 'react';
import Login from './Login/Login'
import Register from './register/Register'
import './app.css'

function App() {
  const [currentForm,setCurrentForm]= useState('login')

  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  return (
    <div className='App'>
    {
     currentForm === "login" ?  <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />

    }
    </div>
  );
}

export default App;
