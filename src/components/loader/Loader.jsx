import React, {useState, useEffect} from 'react'
import './loader.css'
const Loader = () => {

    const [fadeOut, setFadeOut] = useState(false);
    useEffect(()=>{
        setTimeout(()=>setFadeOut(true),10000)
    })
    return (
        <>
        <div className={fadeOut?'hide-loader':'main-loader'}>
            <div className="loader">

            
<div className="bar">
  <div className="circle"></div>
  <p>Kikitech</p>
</div>
</div>
</div>
      </>
    )
}

export default Loader
