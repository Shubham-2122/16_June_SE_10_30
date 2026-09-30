import React from 'react'
import "./style.css"

function Demo() {

    let htmlcss = {
        background : "blue",
        color : "white"
    }

  return (
    <div>
        {/* 1) inline css : as object  */}
        <h1 style={{background:"red",color:"white",padding:"20px"}}>Hello inline css</h1>

        {/* 2) intaernal css : not use in react*/}
        <h1 style={htmlcss}>internal css</h1>

        {/* 3) external css */}
        
        <h1 className='ab'>Hello this External css</h1>

    </div>
  )
}

export default Demo