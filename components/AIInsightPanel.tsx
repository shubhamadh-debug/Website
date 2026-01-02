
import React, { useState } from 'react';
import { Project, AIInsight } from '../types';
import { generateProjectInsight } from '../services/geminiService';

interface AIInsightPanelProps {
  project: Project;
}

const AIInsightPanel: React.FC<AIInsightPanelProps> = ({ project }) => {
  const [insight, setInsight] = useState<AIInsight | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchInsight = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateProjectInsight(project);
      setInsight(result);
    } catch (err) {
      setError("Failed to generate AI insight. Please check your API key.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 pt-12 border-t border-neutral-200">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-md">
          <h2 className="text-2xl font-serif mb-4 italic">Design Analysis</h2>
          <p className="text-neutral-600 mb-6">
            Generate an AI-powered architectural critique and theoretical analysis of the design logic behind {project.title}.
          </p>
          <button
            onClick={handleFetchInsight}
            disabled={loading}
            className="px-6 py-3 bg-neutral-900 text-white text-xs uppercase tracking-widest hover:bg-neutral-800 disabled:bg-neutral-400 transition-colors"
          >
            {loading ? 'Analyzing Design...' : 'Request AI Critique'}
          </button>
        </div>

        <div className="flex-1 w-full">
          {insight ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-3 text-neutral-400">Architectural Narrative</h4>
                <p className="text-lg leading-relaxed text-neutral-800">{insight.narrative}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-3 text-neutral-400">Design Logic</h4>
                  <p className="text-sm leading-relaxed text-neutral-600">{insight.logic}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-3 text-neutral-400">Sustainability & Impact</h4>
                  <p className="text-sm leading-relaxed text-neutral-600">{insight.environmentalImpact}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-48 border border-dashed border-neutral-200 flex items-center justify-center text-neutral-300 italic">
              {error || 'No analysis requested yet.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInsightPanel;
