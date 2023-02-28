import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import './App.css'
const datas =[
    {
      img: 'https://tekup.vn/wp-content/uploads/2022/09/image-1.png',
      title: 'TOI 3D Customize E-commerce'
    },
    {
      img: 'https://tekup.vn/wp-content/uploads/2022/09/image.png',
      title: 'E-learning – Internal training platform'
    },
    {
      img: 'https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png',
      title: 'Summer 21 Cosmetic E-commerce Platform'
    },
    {
      img: 'https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png',
      title: 'TOI 3D Customize E-commerc'
    },
    {
      img: 'https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png',
      title: 'Boxgo – Professional Warehouse Management'
    }
  
  ]
export default function SectionProduct() {
  return (
   <div className="container">
        {datas.map((values,index) => {
            return (
                <div className="wrapper">
                    <div className="image"> <img src={values.img} alt="Logo" /> </div>
                    <div className="btn">
                      <span className="title">{values.title}</span>
                      <AiOutlineRight/>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
