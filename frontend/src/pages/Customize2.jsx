import React, { useContext, useState } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { IoMdArrowRoundBack } from "react-icons/io";
function Customize2() {
    const { userData,backendImage,selectedImage,serverUrl,setUserData} =useContext(userDataContext)
    const navigate = useNavigate()
    const [assistantName,setAssistantName]=useState(userData?.assistantName || "")
    const[loading,setLoading]=useState(false)
    const handleUpdateAssistant=async ()=>{
        setLoading(true)
        try {
            let formData=new FormData()
            formData.append("assistantName",assistantName)
            if(backendImage){
                formData.append("assistantImage",backendImage)
            }
            else{
                formData.append("imageUrl",selectedImage)
            }
            const result = await axios.post(`${serverUrl}/api/user/update`,formData,{withCredentials:true})
            setLoading(false)
            console.log(result.data);
            setUserData(result.data)
            navigate("/")
            
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#020353] flex justify-center items-center flex-col'>
        <IoMdArrowRoundBack className='absolute top-[30px] left-[30px] text-white w-[25px] h-[25px] cursor-pointer' onClick={()=>
            navigate("/customize")
        } />
        <h1 className='text-white mb-[30px] text-[30px] text-center'>Enter Your <span className='text-blue-300'>Assistant Name</span></h1>
        <input type="text" placeholder='e.g., Shifra' className='w-full max-w-[600px] h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' required onChange={(e)=>setAssistantName(e.target.value)} value={assistantName}></input>
        {assistantName && <button className='min-w-[200px] h-[60px] bg-white text-black font-semibold text-[19px] mt-7 rounded-full cursor-pointer' disabled={loading} onClick={() => {
            handleUpdateAssistant()
            }}>{!loading?"Create Assistant":"Loading.."}</button>}
         
    </div>
  )
}

export default Customize2