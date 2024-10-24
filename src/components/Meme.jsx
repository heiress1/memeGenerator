import memesData from '../memesData.jsx';
import React, {useState} from "react";
import ReactDom from "react-dom/client"
import "../App.css";


export default function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getImage(){
        // let x = Math.random();
        const memesArray = allMemeImages.data.memes
        let randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        return setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url}
        })
     }

    return(
        
        <main>

        
            <div className="form">
                {/* 34 28 */}
                    <div>
                        <label for="top"><b>Top Text</b></label><br></br>
                    <input className="text-base" type="text" id="top" />
                    </div>
                  
                    <div>
                        <label  for="bottom"><b>Bottom Text</b></label><br></br>
                    <input className="text-base" type="text" id="bottom" />
                    </div>
                        
                     <button className="button " onClick={getImage}>Get a new meme image 🖼</button>
                
                     
                
        
            </div>
            <div className="imageContainer">

                <img className="memeImage" src={meme.randomImage}/>
            </div>
            
            
        </main>   
    )
}