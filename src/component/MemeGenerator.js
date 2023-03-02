import React,{useState} from 'react'
 


function MemeGenerator() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage:"https://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = useState([])

  React.useEffect( ()=>{
    async function getMemes(){
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await  res.json()
      setAllMemes(data.data.memes)
    } 
    getMemes()
  } , [])
 

  function getMemeImage(){
    const randonNumber = Math.floor(Math.random() * allMemes.length)
    const url =allMemes[randonNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage:url
    }))
  }
  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  return (
    <main>
        <div className='form'>
            <input type="text" name='topText' value={meme.topText}
            className='form--input'placeholder='Top text'
            onChange={handleChange}/>
            <input type="text" name='bottomText' value={meme.bottomText}
            className='form--input' placeholder='Bottom text'
            onChange={handleChange}/>
            <button className='form--button' 
            onClick={getMemeImage}
            >Get a new meme image</button>
        </div>
        <div className='meme'>
            <img className='meme--image' src={meme.randomImage} alt="" />
            <h2 className='meme--text top'>{meme.topText}</h2>
            <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default MemeGenerator
