import React from "react"

export default function Meme(){
    return(
        <div>
            <form className="form">
                {/* 34 28 */}
                    <div>
                        <label for="top"><b>Top Text</b></label><br></br>
                    <input type="text" id="top" />
                    </div>
                    
                

                    <div>
                        <label for="bottom"><b>Bottom Text</b></label><br></br>
                    <input type="text" id="bottom" />
                    </div>
                    
                
                
                
                     <button>Get a new meme image 🖼</button>
                
               

               

            </form>

            {/* <button>Get a new meme image 🖼</button> */}
            {/* <form className="submit">
                <input type="submit" value="Get a new meme image"/>
            </form > */}

            {/* <form>
                <label for="bottom">Bottom Text</label><br></br>
                <input type="text" id="bottom" />
            </form> */}
        </div>
    )
}