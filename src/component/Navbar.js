import React from 'react'

function Navbar() {
  return (
        <header className="nav-main">
            <img className='header--image' src={process.env.PUBLIC_URL+"TrollFace.png"} />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
            <h4 className='header--project'>About us</h4>
        </header>
  )
}
export default Navbar

// import React from 'react'

// function Navbar() {
//   const [thingsArray , setThingsArray] =  React.useState(["Thing 1"])

//   function addItems(){
//     setThingsArray(prevState => {
//       return [...prevState, `Thing ${prevState.length + 1}`]
//     })
//   }


//   const thingElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//   return (
//     <div>
//       <button onClick={addItems}>Add Item</button>
//       {thingElements}
//     </div>
//   )
// }

// export default Navbar

