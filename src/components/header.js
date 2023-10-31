import React from 'react'

function header({handleDarkMode}) {
  return (
    <div className="header">
        <h1>Notes</h1>
        <button className='save' onClick={()=>handleDarkMode((previousdarkmode)=>!previousdarkmode)}>Toggle Mode</button>
    </div>
  )
}

export default header