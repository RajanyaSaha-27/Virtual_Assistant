import React, { useContext, useRef, useState } from 'react'
import Card from '../components/card'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.jpeg"
import { IoMdArrowRoundBack } from "react-icons/io"
import { RiImageAddFill } from "react-icons/ri";
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

function Customize() {
  const { serverUrl, userData, setUserData, backendImage, setBackendImage, frontendImage, setFrontendImage, selectedImage, setSelectedImage } = useContext(userDataContext)
  const inputImage = useRef()
  const handleImage = (e) => {
    const file = e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
  }
  const navigate = useNavigate()
  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-t from-[black] to-[#020353] flex justify-start items-center flex-col py-[60px] px-[16px]'>
      <h1 className='text-white mb-[30px] text-[30px] text-center'>Select your <span className='text-blue-300'>Assistant Image</span></h1>
      <div className='w-full  flex justify-center items-center flex-wrap gap-[20px]'>
        <IoMdArrowRoundBack className='absolute top-[30px] left-[30px] text-white w-[25px] h-[25px] cursor-pointer' onClick={() =>
          navigate("/")
        } />
        <Card image={image1} selectedImage={selectedImage}/>
        <Card image={image3} selectedImage={selectedImage}/>
        <Card image={image2} selectedImage={selectedImage}/>
        <Card image={image4} selectedImage={selectedImage}/>
        <Card image={image5} selectedImage={selectedImage}/>
        <Card image={image6} selectedImage={selectedImage}/>
        <Card image={image7} selectedImage={selectedImage}/>
        <div className={`w-[150px] h-[250px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-400 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ${selectedImage == "input" ? "border-4 border-white shadow-2xl shadow-blue-400" : null}`} onClick={() => {
          inputImage.current.click()
          setSelectedImage("input")
        }}>
          {!frontendImage && <RiImageAddFill className='text-white w-[25px] h-[25px]' />}
          {frontendImage && <img src={frontendImage} className='h-full object-cover'></img>}

        </div>
        <input type='file' accept='image/*' ref={inputImage} hidden onChange={handleImage} />
      </div>
      {selectedImage && <button className='min-w-[150px] h-[60px] bg-white text-black font-semibold text-[19px] mt-7 rounded-full cursor-pointer' onClick={() => navigate("/customize2")}>Next</button>}

    </div>
  )
}

export default Customize