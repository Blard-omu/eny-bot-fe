// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import ChatMessageInput from "./chatMessageInput";
// import ChatConversationArea from "./chatConversationArea";
// import { ChatBubbleLeftRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import { formatTimestamp } from "../utils/helpers";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import instance from "@/axios.config";
// import { useAuth } from "@/contexts/AuthContext";

// // Suggested questions for the carousel
// const suggestedQuestions = [
//   "What is the CBAP certification?",
//   "How much does the CCBA course cost?",
//   "What are the benefits of Agile Analysis?",
//   "How can I enroll in a course?",
// ];

// // Truncate text for suggestion buttons
// const truncateText = (text: string, maxLength: number) =>
//   text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

// // Slider settings
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   arrows: true,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   centerMode: true,
//   centerPadding: "10px",
//   responsive: [
//     {
//       breakpoint: 640,
//       settings: {
//         slidesToShow: 1,
//         centerPadding: "10px",
//       },
//     },
//   ],
//   className: "eny-carousel",
// };

// const Chatbot = () => {
//   const [messages, setMessages] = useState<{ text: string; type: "sent" | "received" | "error"; timestamp: string }[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hydrated, setHydrated] = useState(false);
//   const [input, setInput] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false); 
//   const { auth } = useAuth()

//   useEffect(() => {
//     setHydrated(true);
//   }, []);

//   const handleSendMessage = async (message: string) => {
//     if (!message.trim()) return;

//     const timestamp = new Date().toISOString();
//     setMessages((prev) => [...prev, { text: message, type: "sent", timestamp }]);
//     setIsLoading(true);

//     try {
//       const response = await instance.post("/chat", {
//         query: message,
//         userId: "guest",
//       });

//       const { answer, confidence } = response.data;
//       const replyTimestamp = new Date().toISOString();

//       if (confidence < 0.7) {
//         await axios.post("http://localhost:5000/api/escalate", {
//           query: message,
//           userEmail: "user@example.com",
//         });
//         setMessages((prev) => [
//           ...prev,
//           {
//             text: `${answer} (This query has been escalated to our support team for further assistance.)`,
//             type: "received",
//             timestamp: replyTimestamp,
//           },
//         ]);
//       } else {
//         setMessages((prev) => [...prev, { text: answer, type: "received", timestamp: replyTimestamp }]);
//         await axios.post("http://localhost:5000/api/chat-history", {
//           userId: "guest",
//           query: message,
//           response: answer,
//           confidence,
//         });
//       }
//     } catch (error) {
//       const errorTimestamp = new Date().toISOString();
//       setMessages((prev) => [
//         ...prev,
//         { text: "Sorry, something went wrong. Please try again.", type: "error", timestamp: errorTimestamp },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSuggestedQuestion = (question: string) => {
//     setInput(question);
//   };

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   return (
//     <>
//       {/* Fixed Chat Button */}
//       <button
//         onClick={toggleModal}
//         className={`fixed  ${isModalOpen ? "hidden" : "block"} bottom-6 right-4 z-50 p-4 bg-blue-900 text-white border border-white shadow-2xl rounded-full  hover:bg-blue-900/80 transition duration-300`}
//         aria-label={isModalOpen ? "Close chat" : "Open chat"}
//       >
//         <ChatBubbleLeftRightIcon className="h-6 w-6" />
//       </button>

//       {/* Chat Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-40 bg-transparent bg-opacity-50 flex items-end justify-end md:items-center md:justify-center rounded-t-lg w-11/12 lg:max-w-1/2 md:h-[800px] mx-auto">
//           <div className="bg-blue-100 w-full h-[80vh] md:h-[65vh] lg:h-[70vh] rounded-t-lg md:rounded-lg shadow-xl flex flex-col">
//             {/* Title */}
//             <div className="rounded-t-lg bg-blue-900 p-2 relative">
//                 <h1 className="font-poppins font-bold text-[20px] md:text-[32px] text-center  text-white">
//                     ENY - AI Assistant
//                 </h1>
//                 <p className="text-white text-sm text-center">Ask me anything about training & services</p>
//                 <button
//                 onClick={toggleModal}
//                 className="p-2 text-white hover:text-gray-400 transition duration-300 absolute top-0 right-0 md:top-6 md:right-6"
//                 aria-label="Close chat modal"
//               >
//                 <XMarkIcon className="h-6 w-6" />
//               </button>
//             </div>

//             {/* Suggested Questions Carousel */}
//             <div className="w-full max-w-7xl mx-auto py-6 mt-6 px-4">
//                 <Slider {...sliderSettings}>
//                     {suggestedQuestions.map((question, index) => (
//                         <div key={index} className="px-2">
//                             <button
//                                 onClick={() => handleSuggestedQuestion(question)}
//                                 className="w-full p-3 h-16 bg-blue-100 text-blue-900 rounded-lg border text-xs md:text-[0.875rem] hover:bg-blue-200/90 transition duration-300"
//                                 aria-label={`Ask: ${question}`}
//                             >
//                                 {truncateText(question, 30)}
//                             </button>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>


//             {/* Conversation Area */}
//             <ChatConversationArea messages={messages} formatTime={formatTimestamp} />

//             {/* Message Input Area */}
//             <ChatMessageInput
//                 onSend={handleSendMessage}
//                 disabled={isLoading}
//                 value={input}
//                 onChange={setInput}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chatbot;


"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import ChatMessageInput from "./chatMessageInput";
import ChatConversationArea from "./chatConversationArea";
import { ChatBubbleLeftRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { formatTimestamp } from "../utils/helpers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import instance from "@/axios.config";
import { useAuth } from "@/contexts/AuthContext";


// Suggested questions for the carousel
const suggestedQuestions = [
  "What is the cost of the paid programs",
  "What is the Business Analysis School located",
  "How does Business Analysis help in career growth?",
  "What are the enrollment requirements?",
];

// Truncate text for suggestion buttons
const truncateText = (text: string, maxLength: number) =>
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: true,
  centerPadding: "10px",
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerPadding: "10px",
      },
    },
  ],
  className: "eny-carousel",
};

const Chatbot = () => {
  const [messages, setMessages] = useState<
    { text: string; type: "sent" | "received" | "error" | "escalated"; timestamp: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { auth } = useAuth();
  

  useEffect(() => {
    setHydrated(true);
    // Check backend health
    // instance
    //   .get("/health")
    //   .catch((error) => {
    //     console.error("Backend health check failed:", error.message);
    //     setMessages((prev) => [
    //       ...prev,
    //       {
    //         text: "Unable to connect to the AI service. Please try again later.",
    //         type: "error",
    //         timestamp: new Date().toISOString(),
    //       },
    //     ]);
    //   });
  }, []);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;
  
    const timestamp = new Date().toISOString();
    setMessages((prev) => [...prev, { text: message, type: "sent", timestamp }]);
    setIsLoading(true);
  
    try {
      // ✅ Send only `message` as backend expects
      const response = await instance.post("/chat", { message });
  
      const { answer, confidence, escalated, escalationId } = response.data.data;
      const replyTimestamp = new Date().toISOString();
  
     // ✅ Always render backend answer
    setMessages((prev) => [
      ...prev,
      {
        text: answer || "No response received from the AI.",
        type: escalated ? "escalated" : "received",
        timestamp: replyTimestamp,
      },
    ]);
    } catch (error: any) {
      const errorTimestamp = new Date().toISOString();
      let errorMessage = "Sorry, something went wrong. Please try again.";
  
      if (error.response?.status === 429) {
        errorMessage = "Rate limit exceeded. Please try again later.";
      } else if (error.response?.status === 503) {
        errorMessage = "AI service is temporarily unavailable. Try again soon.";
      } else if (error.response?.status === 400) {
        errorMessage = "Invalid request. Please check your input.";
      }
  
      setMessages((prev) => [
        ...prev,
        { text: errorMessage, type: "error", timestamp: errorTimestamp },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // console.log("AI", messages);
  
  return (
    <>
      {/* Fixed Chat Button */}
      <button
        onClick={toggleModal}
        className={`fixed ${
          isModalOpen ? "hidden" : "block"
        } bottom-6 right-4 z-50 p-4 bg-blue-900 text-white border border-white shadow-2xl rounded-full hover:bg-blue-900/80 transition duration-300`}
        aria-label={isModalOpen ? "Close chat" : "Open chat"}
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </button>

      {/* Chat Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 bg-transparent bg-opacity-50 flex items-end justify-end md:items-center md:justify-center rounded-t-lg w-11/12 lg:max-w-1/2 md:h-[800px] mx-auto">
          <div className="bg-blue-100 w-full h-[80vh] md:h-[65vh] lg:h-[70vh] rounded-t-lg md:rounded-lg shadow-xl flex flex-col">
            {/* Title */}
            <div className="rounded-t-lg bg-blue-900 p-2 relative">
              <h1 className="font-poppins font-bold text-[20px] md:text-[32px] text-center text-white">
                ENY - AI Assistant
              </h1>
              <p className="text-white text-sm text-center">
                Ask me anything about training & services
              </p>
              <button
                onClick={toggleModal}
                className="p-2 text-white hover:text-gray-400 transition duration-300 absolute top-0 right-0 md:top-6 md:right-6"
                aria-label="Close chat modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Suggested Questions Carousel */}
            <div className="w-full max-w-7xl mx-auto py-6 mt-6 px-4">
              <Slider {...sliderSettings}>
                {suggestedQuestions.map((question, index) => (
                  <div key={index} className="px-2">
                    <button
                      onClick={() => handleSuggestedQuestion(question)}
                      className="w-full p-3 h-16 bg-blue-100 text-blue-900 rounded-lg border text-xs md:text-[0.875rem] hover:bg-blue-200/90 transition duration-300"
                      aria-label={`Paste: ${question}`}
                      title={question}
                    >
                      {truncateText(question, 30)}
                    </button>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Conversation Area */}
            <ChatConversationArea messages={messages} formatTime={formatTimestamp} isLoading={isLoading} />

            {/* Message Input Area */}
            <ChatMessageInput
              onSend={handleSendMessage}
              disabled={isLoading}
              value={input}
              onChange={setInput}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;