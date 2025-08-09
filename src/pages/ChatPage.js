import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import ChatPerson from '../assets/chat-icon.png';
import UserAvatar from '../assets/chat-user.png'; // Using same image for now
import './ChatPage.css';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: `👋 Hi there, and welcome to PT. Lumipack! 

I'm Lumi 🤖, your friendly AI assistant 🌟

I'm here to help you 24/7 with quick answers about:
• Our products 🛍️
• Services ⚙️
• Specifications 📄
• And more!

Whether you're exploring a partnership 🤝 or preparing for your next order 📦, I've got everything you need!

While I'm fully automated 💡, I can guide you through most FAQs and common topics. If there's something I can't handle just yet, I'll point you to the right resource 🔗 or form ✍️ to keep things moving smoothly.

Let's get started — how can I assist you today? 😊✨`, 
      sender: 'bot', 
      time: '10:00' 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        'Baik, saya akan bantu Anda.',
        'Mohon tunggu sebentar ya...',
        'Saya akan menghubungkan Anda dengan agen kami.',
        'Terima kasih telah menghubungi kami.'
      ];
      const botMessage = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleCloseChat = () => {
    navigate('/contact');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-title">
            <div className="chat-avatar">
              <img src={ChatPerson} alt="Bot" className="bot-avatar" />
            </div>
            <div>
              <h3>Customer Support</h3>
              <p className="status">Online</p>
            </div>
          </div>
          <button className="close-button" onClick={handleCloseChat}>
            <FaTimes />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              <div className="message-avatar">
                {message.sender === 'bot' ? (
                  <img src={ChatPerson} alt="Bot" className="message-avatar-img" />
                ) : (
                  <img src={UserAvatar} alt="User" className="message-avatar-img" />
                )}
              </div>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">{message.time}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="message-input"
          />
          <button type="submit" className="send-button">
            <FaPaperPlane className="send-icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

// Ensure this is the only export in the file
export default ChatPage;
