import React, { useState, useEffect, useRef } from 'react';
import { getChatbotResponse } from '../chatbotService';
import persona from '../Persona';  // Import persona data
import '../styles/Bot.css';
import { TbMessageChatbotFilled } from "react-icons/tb";

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: persona.introduction },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatboxBodyRef = useRef(null);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const lowerInput = userInput.toLowerCase().trim();

    setMessages((prevMessages) => [
      ...prevMessages,
      { from: 'user', text: userInput },
    ]);

    // Check for greeting
    let botResponse = persona.defaultResponse;
    if (["hi", "hello", "hey"].includes(lowerInput)) {
      botResponse = "Hey there! 👋 I'm AnkiBot, your smart assistant. How can I help you today?";
    } else if (lowerInput.includes('skills')) {
      botResponse = `I know these skills: ${persona.skills.join(", ")}.`;
    } else if (lowerInput.includes('education')) {
      botResponse = persona.education;
    } else if (lowerInput.includes('projects')) {
      botResponse = `Some of my projects include: ${persona.projects.join(", ")}.`;
    } else if (lowerInput.includes('values')) {
      botResponse = `My core values are: ${persona.values.join(", ")}.`;
    } else if (lowerInput.includes('experience')) {
      botResponse = persona.experience;
    }

    setIsTyping(true);
    const response = await getChatbotResponse(userInput);
    setIsTyping(false);

    setMessages((prevMessages) => [
      ...prevMessages,
      { from: 'bot', text: response[0]?.generated_text || botResponse },
    ]);

    setUserInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  useEffect(() => {
    if (chatboxBodyRef.current) {
      chatboxBodyRef.current.scrollTop = chatboxBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      <button onClick={toggleChatbox} className="chatbot-button">
        {isOpen ? 'Close Chat' :  <TbMessageChatbotFilled size={24} />}
      </button>

      <div className={`chatbox ${isOpen ? 'open' : 'closed'}`}>
        <div className="chatbox-header">
          <h3>AnkiBot <TbMessageChatbotFilled  size={24}/></h3>
          <button onClick={toggleChatbox}>X</button>
        </div>
        <div className="chatbox-body" ref={chatboxBodyRef}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.from === 'user' ? 'user' : 'bot'}`}
            >
              <p dangerouslySetInnerHTML={{ __html: msg.text }} />
            </div>
          ))}
          {isTyping && (
            <div className="message bot typing-indicator">
              <p>Typing...</p>
            </div>
          )}
        </div>
        <div className="chatbox-footer">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Bot;
