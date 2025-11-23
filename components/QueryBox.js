"use client";

import { useState } from "react";
import { Search, Send } from "lucide-react";

export default function QueryBox({ onSearch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) onSearch(text);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <textarea
          className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 bg-white min-h-[140px] resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
          placeholder="Describe the job role, required skills, or specific competencies you need to assess...
          
Examples:
• Senior software engineer with Python and cloud experience
• Sales manager with team leadership skills  
• Data analyst with SQL and visualization expertise"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <button
          type="submit"
          disabled={!text.trim()}
          className="absolute bottom-4 right-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm text-gray-500">
          {text.length}/500 characters
        </span>
        <button
          type="submit"
          disabled={!text.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
        >
          Generate Recommendations
        </button>
      </div>
    </form>
  );
}