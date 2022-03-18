import React from 'react'
import "./TrackerApp.css"
import Photo1 from "../../Rectangle 193.png"
import Photo2 from "../../Rectangle 194.png"
import Photo3 from "../../Rectangle 197.png"
import Photo4 from "../../Rectangle 198.png"
const TrackerApp = () => {
  return (
    <>
    <div className='TrackerApp'>
      <div className='Headerp'>
        Track your mood
      </div>
      <div className='Para1'>
      All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. 

      </div>
      <button className='ButtonSec'><div className='ButtonText'>Track you mood on the app</div></button>
    </div>
    <img src={Photo1} alt = "" className='Photo1'></img>
    <img src={Photo2} alt = "" className='Photo2'></img>
    <img src={Photo3} alt = "" className='Photo3'></img>
    <img src={Photo4} alt = "" className='Photo4'></img>
    </>
  )
}

export default TrackerApp