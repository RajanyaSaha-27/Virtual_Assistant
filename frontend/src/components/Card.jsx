import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

function Card({image}) {
    const { serverUrl, userData, setUserData, backendImage, setBackendImage, frontendImage, setFrontendImage, selectedImage, setSelectedImage } = useContext(userDataContext)
  return (
    <div className={`w-[150px] h-[250px] sm:w-[130px] sm:h-[210px] lg:w-[150px] lg:h-[250px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-400 cursor-pointer hover:border-4 hover:border-white ${selectedImage==image?"border-4 border-white shadow-2xl shadow-blue-400" : null}`} onClick={()=>{
      setSelectedImage(image)
      setBackendImage(null)
      setFrontendImage(null)
      }}>
<img src={image} className='h-full object-cover' />
    </div>
  )
}

export default Card