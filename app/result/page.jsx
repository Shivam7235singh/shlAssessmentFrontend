"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const params = useSearchParams();
  const raw = params.get("data");

  if (!raw) return <div className="p-10 text-center">No result found</div>;

  const data = JSON.parse(raw);

  // Parse the AI recommendation text into structured data
  const parseAIRecommendation = (text) => {
    if (!text) return null;
    
    const sections = text.split('###').filter(section => section.trim());
    const result = {};
    
    sections.forEach(section => {
      const lines = section.split('\n').filter(line => line.trim());
      const title = lines[0]?.trim();
      
      if (title === 'Requirements Summary') {
        result.requirementsSummary = lines.slice(1).join(' ').trim();
      } else if (title === 'Recommended Assessments') {
        result.assessments = parseAssessments(section);
      }
    });
    
    return result;
  };

  const parseAssessments = (section) => {
    const assessments = [];
    const lines = section.split('\n').filter(line => line.trim());
    
    let currentAssessment = null;
    
    lines.forEach(line => {
      if (line.startsWith('- ') && line.includes('+')) {
        if (currentAssessment) assessments.push(currentAssessment);
        currentAssessment = { name: line.replace('- ', '').trim() };
      } else if (line.startsWith('- Why this fits:')) {
        if (currentAssessment) currentAssessment.whyFits = line.replace('- Why this fits:', '').trim();
      } else if (line.startsWith('- Key skills measured:')) {
        if (currentAssessment) currentAssessment.skills = [];
      } else if (line.startsWith('    *   ') && currentAssessment?.skills) {
        currentAssessment.skills.push(line.replace('    *   ', '').trim());
      } else if (line.startsWith('- Duration:')) {
        if (currentAssessment) currentAssessment.duration = line.replace('- Duration:', '').trim();
      } else if (line.startsWith('- Match Score:')) {
        if (currentAssessment) currentAssessment.matchScore = line.replace('- Match Score:', '').trim();
      }
    });
    
    if (currentAssessment) assessments.push(currentAssessment);
    return assessments;
  };

  const aiData = parseAIRecommendation(data.recommendation);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Assessment Recommendations
          </h1>
          <p className="text-gray-600">
            AI-powered suggestions based on your hiring requirements
          </p>
          <div className="mt-2 text-sm text-gray-500">
            Generated in {data.processing_ms}ms
          </div>
        </div>

        {/* AI Recommendations Section */}
        {aiData && (
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-6 bg-blue-600 rounded"></div>
              <h2 className="text-xl font-semibold text-gray-900">AI Analysis & Recommendations</h2>
            </div>

            {/* Requirements Summary */}
            {aiData.requirementsSummary && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">📋 Job Requirements Summary</h3>
                <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg">
                  {aiData.requirementsSummary}
                </p>
              </div>
            )}

            {/* Recommended Assessments */}
            {aiData.assessments && aiData.assessments.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">🏆 Recommended Assessments</h3>
                <div className="space-y-4">
                  {aiData.assessments.map((assessment, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-900 text-lg">{assessment.name}</h4>
                        {assessment.matchScore && (
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {assessment.matchScore} Match
                          </span>
                        )}
                      </div>
                      
                      {assessment.whyFits && (
                        <p className="text-gray-700 mb-3">
                          <span className="font-medium">Why this fits:</span> {assessment.whyFits}
                        </p>
                      )}
                      
                      {assessment.skills && assessment.skills.length > 0 && (
                        <div className="mb-3">
                          <span className="font-medium text-gray-800">Key skills measured:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {assessment.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {assessment.duration && (
                        <p className="text-gray-600 text-sm">
                          <span className="font-medium">Duration:</span> {assessment.duration}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Matched Assessments Section */}
        {data.results && data.results.length > 0 && (
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-6 bg-green-600 rounded"></div>
              <h2 className="text-xl font-semibold text-gray-900">All Matched Assessments</h2>
            </div>
            
            <div className="space-y-4">
              {data.results.map((assessment, index) => (
                <div key={assessment.id || index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{assessment.name}</h3>
                      <p className="text-gray-600 text-sm">{assessment.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-1">
                        {assessment.score}% Match
                      </div>
                      <div className="text-xs text-gray-500">
                        {assessment.duration_minutes} min
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{assessment.description}</p>
                  
                  {assessment.skills_measured && assessment.skills_measured.length > 0 && (
                    <div className="mb-3">
                      <span className="font-medium text-gray-800 text-sm">Skills:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {assessment.skills_measured.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>ID: {assessment.id}</span>
                    <div className="flex gap-4">
                      <span>Remote: {assessment.remote_testing}</span>
                      <span>Types: {assessment.test_types?.join(', ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}