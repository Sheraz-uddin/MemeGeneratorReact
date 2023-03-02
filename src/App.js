import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import MemeGenerator from './component/MemeGenerator'
import WindowTracker from './WindowTracker';
function App() {
    // const [show, setShow] = React.useState(true)

    // function toggleShow(){
    //   setShow(prevShow => !prevShow)
    // }
  return (
    <div className="App">  
      {/* <button onClick={toggleShow}>Toggle Window Tracker</button>
     {show &&  <WindowTracker  />} */}
        <Navbar />
        <MemeGenerator />
    </div>
  );
}

export default App;



























// const [starWarsData ,setStarWarsData] = React.useState({})
  // const [count , setCount] = React.useState()
 
  //  React.useEffect(function(){
  // console.log("Effect ran")
  // fetch(`https://swapi.dev/api/people/${count}`)
  // .then(res => res.json())
  // .then(data => setStarWarsData(data))
  // },[count])
   {/* <h2>The count is {count}</h2>
        <button>Get Next Character</button>
        <pre>{JSON.stringify(starWarsData,null, 2)}</pre> */}























// const [formData, setFormData] = React.useState(
//   { 
//     firstName:"",
//     lastName:"",
//     email:"",
//     comments:"",
//     isFriendly: true,
//     employment:"",
//     favColor:""
//   }
// )
// console.log(formData.favColor)

// function handleChange(event){
//   const {name,value, type, checked} = event.target
//   setFormData(prevFormData => {
//      return {
//       ...prevFormData,
//       [name]: type === "checkbox" ? checked : value
//      }
//   })
// }
// function handleSubmit(event){
//   event.preventDefault()
//   console.log(formData)
// }




// <form onSubmit={handleSubmit}>
// <input type="text" onChange={handleChange}  
//  name='firstName' placeholder='First Name' 
// value={formData.firstName}/>
// <br /><br/>
// <input type="text" onChange={handleChange} 
//  name='lastName' placeholder='Last Name' 
// value={formData.lastName}/>
// <br /><br/>
// <input type="email" onChange={handleChange}  
//  name='email' placeholder='Email' 
// value={formData.email}/>
// <br /><br/>
// <textarea onChange={handleChange}   name='comments'   placeholder='Comments'/>
// <br /><br/>
// <input type="checkbox" 
// checked={formData.isFriendly}
// id="isFriendly" 
// onChange={handleChange}
// name="isFriendly"/>
// <label htmlFor="isFriendly"> Are you Ready?</label>
// <br/>
// <br/>
// <fieldset>
//   <legend>Current employment status</legend>
//   <input type="radio" value="unemployed" id="unemployed" name='employment' 
//   onChange={handleChange} checked={formData.employment === "unemployed"}/>
  
//   <label htmlFor="unemployed">Unemployed</label>
//   <br />
//   <input type="radio" id="part-time" value="part-time"  name='employment' 
//   onChange={handleChange} checked={formData.employment === "part-time"}/>
  
//   <label htmlFor="part-time">part-time</label>
//   <br />
//   <input type="radio" value="full-time" id="full-time" name='employment' 
//   onChange={handleChange} checked={formData.employment === "full-time"}/>
 
//   <label htmlFor="full-time">full-time</label>
//   <br />
// </fieldset>
// <select id="favColor" value={formData.favColor}
//  onChange={handleChange} name="favColor">
//     <option value="">-- Choose --</option>
//     <option value="red">Red</option>
//     <option value="orange">Orange</option>
//     <option value="yellow">Yellow</option>
//     <option value="green">Green</option>
//     <option value="blue">Blue</option>
//     <option value="indigo">Indigo</option>
//     <option value="violet">Violet</option>
//   </select> 
//   <br /><br />
//   <button>Submit</button>
// </form>
