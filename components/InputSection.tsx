
import React from 'react';
import type { Tone } from '../types';
import { TONES } from '../constants';
import LoadingSpinner from './LoadingSpinner';

interface InputSectionProps {
  idea: string;
  setIdea: (idea: string) => void;
  tone: Tone;
  setTone: (tone: Tone) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({ idea, setIdea, tone, setTone, onGenerate, isLoading }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">
            1. What's your content idea?
          </label>
          <textarea
            id="idea"
            rows={4}
            className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 placeholder-gray-500"
            placeholder="e.g., The launch of our new productivity app..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            2. Choose a tone
          </label>
          <div className="flex flex-wrap gap-2">
            {TONES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTone(t)}
                disabled={isLoading}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ease-in-out ${
                  tone === t
                    ? 'bg-indigo-500 text-white font-semibold shadow-md'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={onGenerate}
          disabled={isLoading || !idea.trim()}
          className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:saturate-50"
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              Generating...
            </>
          ) : (
            'Generate Content'
          )}
        </button>
      </div>
    </div>
  );
};

export default InputSection;
