import React, { useContext, useRef, useState } from 'react'
import UserContext, { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import aiImg from "../assets/ai.gif"
import userImg from "../assets/user.gif"
import { CgMenuRight } from "react-icons/cg"
import { RxCross1 } from "react-icons/rx"
//import geminiResponse from '../../../backend/gemini'

function Home() {
  const { userData, serverUrl, setUserData, GeminiResponse } = useContext(userDataContext)
  const navigate = useNavigate()
  const [listening, setListening] = useState(false)
  const [userText, setUserText] = useState("")
  const [aiText, setAiText] = useState("")
  const [showHistory, setShowHistory] = useState(false)
  const isSpeakingRef = useRef(false)
  const recognitionRef = useRef(null)
  const [ham, setHam] = useState(false)
  const isRecognizingRef = useRef(false)
  const synth = window.speechSynthesis
  const handleLogOut = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/auth/logout`,
        { withCredentials: true })
      setUserData(null)
      navigate("/signin")
    } catch (error) {
      setUserData(null)
      console.log(error);

    }
  }
  const startRecognition = () => {
    try {
      recognitionRef.current?.start()
      setListening(true)

    } catch (error) {
      if (!error.message.includes("start")) {
        console.log("Recognition error :", error)
      }
    }
  }
  const speak = (text) => {
    const utterence = new SpeechSynthesisUtterance(text)
    utterence.lang = 'en-US'
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      utterence.voice = voices[0]
    }
    // const hindiVoice = voices.find(v => v.lang === 'en-US')
    // if (hindiVoice)
    //   utterence.voice = hindiVoice

    isSpeakingRef.current = true
    utterence.onend = () => {
      setAiText("")
      isSpeakingRef.current = false
      startRecognition()
    }
    synth.speak(utterence)
  }

  const handleCommand = (data) => {
    const { type, userInput, response } = data
    speak(response)

    if (type === 'google-search') {
      const query = encodeURIComponent(userInput);
      window.open(`http://www.google.com/search?q=${query}`, '_blank')
    }
    if (type === 'calculator-open') {
      window.open(`http://www.google.com/search?q=calculator`, '_blank')
    }
    if (type === 'instagram-open') {
      window.open(`http://www.instagram.com/`, '_blank')
    }
    if (type === 'facebook-open') {
      window.open(`http://www.facebook.com/`, '_blank')
    }
    if (type === 'weather-show') {
      const query = encodeURIComponent(userInput);
      window.open(`http://www.google.com/search?q=weather`, '_blank')
    }
    if (type === 'linkedin-open') {
      const query = encodeURIComponent(userInput);
      window.open(`http://www.linkedin.com/`, '_blank')
    }
    if (type === 'youtube-search' || type === 'youtube-play') {
      const query = encodeURIComponent(userInput);
      window.open(`http://www.youtube.com/results?search_query=${query}`, '_blank')
    }
  }

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.lang = 'en-US'
    recognition.interimResults = false
    // recognition.maxAlternatives = 1

    recognitionRef.current = recognition

    const safeRecognition = () => {
      if (!isSpeakingRef.current && !isRecognizingRef.current) {
        try {
          recognition.start()
          console.log("Recognition requested to start");
        } catch (error) {
          if (error.name !== "InvalidStateError") {
            console.error("Start error :", error)
          }
        }
      }
    }

    recognition.onstart = () => {
      // console.log("Recognition stared")
      isRecognizingRef.current = true
      setListening(true)
    }

    recognition.onend = () => {
      // console.log("Recognition ended")
      isRecognizingRef.current = false
      setListening(false)
      if (!isSpeakingRef.current) {
        setTimeout(() => {
          safeRecognition()
        }, 1000);
      }
    }

    recognition.onerror = (event) => {
      console.warn("Recognition error :", event.error)
      isRecognizingRef.current = false
      setListening(false)
      if (event.error === "no-speech") return
      if (event.error !== "aborted" && !isSpeakingRef.current) {
        setTimeout(() => {
          safeRecognition()
        }, 1500);
      }
    }

    recognition.onresult = async (e) => {
      const transcript = e.results[e.results.length - 1][0].transcript.trim()
      console.log("Heard:", transcript)
      if (transcript.toLowerCase().includes(userData.assistantName.toLowerCase())) {
        setAiText("")
        setUserText(transcript)
        recognition.stop()
        isRecognizingRef.current = false
        setListening(false)

        //addedclaude
        try {
           console.log("🟡 frontEND HIT");
          const result = await axios.post(
            `${serverUrl}/api/user/asktoassistant`,
            { command: transcript },
            { withCredentials: true }
          )
          const data = result.data
          handleCommand(data)
          setAiText(data.response)
          setUserText("")
        } catch (error) {
          console.error("Assistant error:", error)
        }
      }

    }
    // console.log(data)
    // speak(data.response) 
    // 
    // const result = await axios.post(`${serverUrl}/api/user/asktoassistant`,
    //   { command: transcript },
    //   { withCredentials: true }
    // )

    // const data = result.data
    // console.log(data)
    // 
    //         try {

    //   const result = await axios.post(
    //     `${serverUrl}/api/user/asktoassistant`,
    //     { command: transcript },
    //     { withCredentials: true }
    //   )

    //   console.log("SERVER RESPONSE:", result)

    //   const data = result.data
    //   console.log("PARSED DATA:", data)

    //   handleCommand(data)

    // } catch (error) {
    //   console.error("AXIOS ERROR:", error)
    // }

    // window.speechSynthesis.onvoicecanged=()=>{
    const greeting = new SpeechSynthesisUtterance(`Hello ${userData.name}, How can I help you Today?`)
    greeting.lang = 'en-IN'
    isSpeakingRef.current = true
    greeting.onend = () => {
      isSpeakingRef.current = false
      safeRecognition()
      // window.speechSynthesis.speak(greeting)
    }
    synth.speak(greeting)
    // }

    const fallback = setInterval(() => {
      if (!isSpeakingRef.current && !isRecognizingRef.current) {
        safeRecognition()
      }
    }, 10000)
    safeRecognition()
    return () => {
      recognition.stop()
      setListening(false)
      isRecognizingRef.current = false
      clearInterval(fallback)
    }

  }, [])


  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#020353] flex justify-center items-center flex-col gap-[15px] overflow-hidden pt-[10px]'>
      <CgMenuRight className='lg:hidden text-white absolute top-[20px] right-[30px] w-[20px] h-[25px]' onClick={() => setHam(true)} />
      <div className={`fixed lg:hidden top-0 h-full w-full  bg-[#00000053] backdrop-blur-lg p-[20px] flex flex-col gap-[20px] items-start ${ham ? "translate-x-0" : "translate-x-full"} transition-transform`}>
        <RxCross1 className='text-white absolute top-[20px] right-[30px] w-[20px] h-[25px]' onClick={() => setHam(false)} />
        <button className='min-w-[150px] h-[60px] bg-white text-black font-semibold text-[19px] rounded-full  cursor-pointer' onClick={handleLogOut}>Log Out</button>
        <button className='min-w-[150px] h-[60px] bg-white text-black font-semibold text-[19px] rounded-full px-[20px] py-[10px] cursor-pointer' onClick={() => navigate("/customize")}>Customize Your Assistant</button>
        <div className='w-full h-[2px] bg-gray-400'></div>
        <h1 className='text-white font-semibold text-[19px]'>History</h1>
        <div className='w-full h-[400px] gap-[20px] overflow-y-auto flex flex-col'>
          {userData.history?.map((his, index) => (
            <span key={index} className='text-gray-200 text-[18px] truncate'>{his}</span>
          ))}
        </div>
      </div>
      <button className='min-w-[150px] h-[60px] bg-white text-black font-semibold absolute hidden lg:block top-[20px] right-[20px] text-[19px] rounded-full mt-[30px] cursor-pointer' onClick={handleLogOut}>Log Out</button>
      <button className='min-w-[150px] h-[60px] bg-white text-black font-semibold absolute hidden lg:block top-[100px] right-[20px] text-[19px] rounded-full mt-[30px] px-[20px] py-[10px] cursor-pointer' onClick={() => navigate("/customize")}>Customize Your Assistant</button>
<button className='min-w-[150px] h-[60px] bg-white text-black font-semibold absolute hidden lg:block top-[180px] right-[20px] text-[19px] rounded-full mt-[30px] cursor-pointer' onClick={() => setShowHistory(!showHistory)}>
  {showHistory ? "Close History" : "History"}
</button>

{showHistory && (
  <div className='hidden lg:flex flex-col gap-[10px] absolute top-[260px] right-[20px] w-[220px] max-h-[50vh] overflow-y-auto bg-[#ffffff10] backdrop-blur-md rounded-xl p-[12px]'>
    {userData.history?.length > 0
      ? userData.history.map((his, index) => (
        <span key={index} className='text-gray-300 text-[13px] truncate border-b border-gray-700 pb-[8px]'>{his}</span>
      ))
      : <span className='text-gray-500 text-[13px]'>No history yet</span>
    }
  </div>
)}
      <div className='w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] lg:w-[300px] lg:h-[400px] flex justify-center items-center overflow-hidden rounded-4xl shadow-lg gap-[15px]'>
        <img src={userData?.assistantImage} alt='' className='h-full object-cover  rounded-4xl shadow-lg' /></div>
      <h1 className='text-white text-[18px] font-semibold'>I'm {userData?.assistantName}</h1>
      {!aiText && <img src={userImg} className='w-[200px]' />}
      {aiText && <img src={aiImg} className='w-[200px]' />}

      <h1 className='text-white text-[18px] font-semibold text-wrap'>{userText ? userText : aiText ? aiText : null}</h1>
    </div>
  )
}

export default Home