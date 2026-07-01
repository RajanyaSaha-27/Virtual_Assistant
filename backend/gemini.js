import axios from "axios"
const geminiResponse = async (command, assistantName, userName) => {
    try {
        const apiUrl = process.env.GEMINI_API_URL
        const prompt = `You are a virtual assistant named ${assistantName} created by ${userName}. 
        You are not Google. You will now behave like a voice-enabled assistant.
        Your task is to understand the user's natural language input and respond with a JSON object like this:
        {
            "type":"general" | "google-search" | "youtube-search" | "youtube-play" | "get-time" | "get-day" | "get-month" | "get-date" |  "calculator-open" | "facebook-open" | "instagram-open" | "linkedin-open" |"weather-show",
            "userInput": "<original user input>" {only your name from userInput if exists} and if someone tells tells you to search something on google or youtube or on any other app,  send the text only which is to be searched ,
            "response" :"<a short spoken response to read out loud to the user>"
        }
            Instructions:
            -"type": determine the intent of the user.
            -"userInput": A short voice-friendly reply, e.g., "Sure, playing it now", "Here's what I found","Today is Tuesday", etc.

            Type meanings:
            -"general":if it is a factual or informational question. and if you know the anser of a ueation asked to you , put that in general category and give a short answer of that question.
            -"google-search": if user want to search something on google.
            -"youtube-search": if user want to search something on Youtube.
            -"youtube-play": if user want to play avideo or song.
            -"calculator-open": if user want to open Calculator.
            -"linkedin-open": if user want to open Linkedin.
            -"instagram-open": if user want to open instagram.
            -"weather-show": if user wants to know he weather.
            -"get-month": if user asks for the current month.
            -"get-date" : if user asks for the today's date.
            -"get-time": if user asks for the current time.

            Important:
            -Use ${userName} if user asks you who made you
            -Only respond with the JSON object, nothing else.

            now your userInput- ${command}
            `
console.log("🔴 GEMINI CALL");
        const result = await axios.post(apiUrl, {
            "contents": [
                {
                    "parts": [
                        {
                            "text": prompt
                        }
                    ]
                }
            ]
        })
        return result.data.candidates[0].content.parts[0].text
    } catch (error) {
        console.log(error);

    }
}

export default geminiResponse