import React from 'react'
import Vector from "G:\\projects\\dyeus_project\\test\\src\\Vector.png"
import Group from "G:\\projects\\dyeus_project\\test\\src\\Group.png"
import Phone from "G:\\projects\\dyeus_project\\test\\src\\phone-call@2x.png"
import 'G:\\projects\\dyeus_project\\test\\src\\pages\\About\\About.css';
const about = () => {
  return (

    <div className='about_page'>
      <div className='header'>
        About Diana
      </div>
      <div className='head_desc'>A platform that looks out for you</div>
      <div className='para1'>Diana empowers you to understand how your body works so you can look and feel your best. </div>
      <div className='line'></div>
      <div className='header2'>Our Philosophy</div>
      <div className='sub_header'>Sustainable wellness is a big-picture, inside out approach</div>
      <div className='para2'>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.<br />
        That’s why we’ve created an integrated ecosystem of:
      </div>
      <img src={Vector} alt="group" className='img_sub' />
      <div className='box_1'>
        <p className='box_para'>Consciously formulated products that deliver feel-good results fast</p>
        <div className='img_box_1' ><img src={Group} alt="vector" /></div>
        <p className='box_para'>In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</p>
        <div className='img_box_2'><img src={Phone} alt="phone" style={{ Width: "70px", height: "70px" }} /></div>
        <p className='box_para'>In-app consultation portals that connect you with compassionate wellness experts</p>
      </div>
      <div className='para_3'>
        Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
      </div>
    </div>
  )
}

export default about