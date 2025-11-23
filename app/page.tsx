"use client";

import { useRouter } from "next/navigation";
import QueryBox from "../components/QueryBox";
import { getRecommendation } from "../lib/api";
import { useState } from "react";
import { Loader2, Star, Shield, Users } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const result = await getRecommendation(query);
      router.push(`/result?data=${encodeURIComponent(JSON.stringify(result))}`);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SHL Assessment AI
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get intelligent assessment recommendations powered by AI. 
            Describe your hiring needs and receive tailored SHL assessment suggestions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Star className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600 text-sm">
              Advanced RAG system analyzes your requirements and suggests the best assessments
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Role-Specific</h3>
            <p className="text-gray-600 text-sm">
              Tailored recommendations for different job roles and seniority levels
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Comprehensive</h3>
            <p className="text-gray-600 text-sm">
              Covers technical skills, cognitive abilities, and behavioral competencies
            </p>
          </div>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Find the Right Assessments
            </h2>
            <p className="text-gray-600">
              Describe the job role, required skills, or specific competencies you need to assess
            </p>
          </div>

          <QueryBox onSearch={handleSearch} />

          {loading && (
            <div className="flex justify-center items-center gap-3 mt-6 text-blue-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="font-medium">Analyzing requirements and generating recommendations...</span>
            </div>
          )}

          {/* Example Queries */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3 text-center">Try these examples:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Senior software engineer with Python expertise",
                "Sales manager with leadership skills", 
                "Data analyst with SQL and visualization skills",
                "Customer service representative"
              ].map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(example)}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}