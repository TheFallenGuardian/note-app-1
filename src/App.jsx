// src/App.jsx
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState({
    saas: [],
    websites: [],
    general: [],
  });
  const [activeTab, setActiveTab] = useState("saas");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (!title || !content) return;
    const newNote = { title, content, date: new Date().toLocaleString() };
    setNotes((prev) => ({
      ...prev,
      [activeTab]: [newNote, ...prev[activeTab]],
    }));
    setTitle("");
    setContent("");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📝 My Notes</h1>
      <div className="mb-4">
        <button onClick={() => setActiveTab("saas")}>SaaS Ideas</button>
        <button onClick={() => setActiveTab("websites")}>Website Ideas</button>
        <button onClick={() => setActiveTab("general")}>General Notes</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>

      <div className="mt-4">
        {notes[activeTab].map((note, idx) => (
          <div key={idx} className="mb-2 p-4 border border-gray-300">
            <h3 className="font-bold">{note.title}</h3>
            <p className="text-gray-500">{note.date}</p>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
