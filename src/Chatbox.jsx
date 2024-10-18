import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./Chatbox.css";

export default function Chatbox() {
    const location = useLocation(); 
    const { username } = location.state || { username: "Guest" }; 
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]); 
    const [conversations, setConversations] = useState([{}]); 
    const [selectedConversation, setSelectedConversation] = useState(null);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setChat([...chat, { user: username, text: message, timestamp: new Date().toLocaleTimeString() }]);
            setMessage("");
        }
    };

    const addConversation = () => {
        const newName = prompt("Enter the new contact or group name:");
        if (newName) {
            setConversations([...conversations, { name: newName, lastMessage: "No messages yet", timestamp: "" }]);
        }
    };

    return (
        <div className="chat-app">
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>{username}</h2>
                    <button onClick={addConversation}>+</button>
                </div>
                <div className="conversation-list">
                    {conversations.map((conversation, index) => (
                        <div
                            key={index}
                            className="conversation"
                            onClick={() => setSelectedConversation(conversation)}>
                            <h4>{conversation.name}</h4>
                            <p>{conversation.lastMessage}</p>
                            <span>{conversation.timestamp}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="chat-area">
                
                <div className="chat-header">
                    <h2>{selectedConversation ? selectedConversation.name : "Select a conversation"}</h2>
                </div>

                <div className="chat-content">
                    {chat.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.user === username ? "sent" : "received"}`}>
                            <p>{msg.text}</p>
                            <span>{msg.timestamp}</span>
                        </div>
                    ))}
                </div>

                <div className="chat-input">
                    <form onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Send a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
