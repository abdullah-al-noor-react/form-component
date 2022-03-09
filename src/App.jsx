import { useState } from 'react'

import './App.css'


function App() {
  const formObject = {
    name:'',
    email:'',
    profession:'',
    gender:'male'
  }
  const errorObject = {
    ename:'',
    eemail:'',
    eprofession:'',
    egender:'male'
  }
  const [formData, setFormData] = useState(formObject)

  const [errorInfo, setErrorInfo] = useState(errorObject)

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const  setFormError = () => {
    let obj = {};
    for (const [key, value] of Object.entries(formData)) {
      // console.log(`${key}: ${value}`);
      if(value === ""){
        obj['e'+key] =`${key} is required..`;
      }
    }
    console.log(obj);
        setErrorInfo({
          ...obj,
        })
  }
  function submitForm(e){
    e.preventDefault()
    // console.log(e.target);
   
    // console.log(formData);
    setFormError()
    console.log(errorInfo);
  }

  const {name,email,profession,gender} = formData
  const {ename,eemail,eprofession,egender} = errorInfo
  return (
    <div className='container'>
          
      <div className="row justify-content-center">
        <form onSubmit={submitForm}>
        <div className="col-12 my-3">
            <label htmlFor='name'>Name :</label>
            <input type="text" className='form-control'
             name='name' id='name'
             value={name}
             onChange={handleChange}
             />
            {ename &&  <span className='text-danger'>
               {ename}
             </span>}
         
        </div>
        <div className="col-12 my-3">
            <label htmlFor='email'>Email :</label>
            <input type="text" className='form-control' name='email' id='email'
          value={email}
          onChange={handleChange}
            />
              {eemail &&  <span className='text-danger'>
               {eemail}
             </span>}
        </div>
        <div className="col-12 my-3">
            <label htmlFor='profession'>Profession :</label>
            <select className='form-control' name='profession' id='profession'
                value={profession}
                onChange={handleChange}
            >
              <option value="">Select One</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="coder">Coder</option>
            </select>
            {eprofession &&  <span className='text-danger'>
               {eprofession}
             </span>}
        </div>
        <div className="col-12 my-3">
            <label htmlFor='gender'>Gender :  </label>
            Male : <input type="radio" className='mx-2' value="male"  name='gender' 
              checked={gender === 'male'} onChange={handleChange} />
             Female :  <input type="radio" className='mx-2'    value="female"  name='gender' 
              checked={gender === 'female'}  onChange={handleChange} />
               {!gender && egender &&  <span className='text-danger'>
               {egender}
             </span>}
        </div>
        <div className="col-12 my-3">
           <button className='btn btn-primary text-white' type='submit'>Submit Form</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default App
