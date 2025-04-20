// src/components/Bot.jsx
import React, { useState, useEffect, useRef } from 'react';
import persona from '../Persona';
import '../styles/Bot.css';
import { TbMessageChatbotFilled } from 'react-icons/tb';

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: persona.greetings[
        Math.floor(Math.random() * persona.greetings.length)
      ] + ` ${persona.introduction}`,
    },
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

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const lowerInput = userInput.toLowerCase().trim();

    setMessages((prev) => [...prev, { from: 'user', text: userInput }]);

    let botResponse = '';

    if (['hi', 'hello', 'hey'].includes(lowerInput)) {
      botResponse =
        persona.greetings[
          Math.floor(Math.random() * persona.greetings.length)
        ];
    } else if (lowerInput.includes('skills')) {
      botResponse = `Here are some of my skills: <br />${persona.skills.join(', ')}.`;
    } else if (lowerInput.includes('education')) {
      botResponse = persona.education;
    } else if (lowerInput.includes('projects')) {
      botResponse = `Some of my projects include: <br />${persona.projects.join(', ')}.`;
    } else if (lowerInput.includes('experience')) {
      botResponse = persona.experience;
    } else if (lowerInput.includes('values')) {
      botResponse = `Core values that I live by: ${persona.values.join(', ')}.`;
    } else if (lowerInput.includes('resume')) {
      botResponse = `Sure! You can view it <a href="${persona.contact.resume}">here</a>.`;
    } else if (lowerInput.includes('contact')) {
      botResponse = `You can reach out via <a href="${persona.contact.contactForm}">this form</a> or drop an email at <a href="${persona.contact.email}">Ankita</a>.`;
    } else {
      botResponse = persona.defaultResponse;
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 500);

    setIsTyping(true);
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
        {isOpen ? 'Close Chat' : <TbMessageChatbotFilled size={24} />}
      </button>

      <div className={`chatbox ${isOpen ? 'open' : 'closed'}`}>
        <div className="chatbox-header">
          <h3>
            AnkiBot <TbMessageChatbotFilled size={24} />
          </h3>
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
