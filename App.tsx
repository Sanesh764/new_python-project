
import React, { useState, useCallback } from 'react';
import type { PostResult, Tone } from './types';
import { TONES, PLATFORMS } from './constants';
import { generateSocialPosts } from './services/geminiService';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';
import { LogoIcon } from './components/icons';

const App: React.FC = () => {
  const [idea, setIdea] = useState<string>('');
  const [tone, setTone] = useState<Tone>(TONES[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<PostResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!idea.trim()) {
      setError('Please enter an idea.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const generatedPosts = await generateSocialPosts(idea, tone);
      setResults(generatedPosts);
    } catch (err) {
      console.error(err);
      // Fix: Updated error message to be more generic and not mention API keys, as per coding guidelines.
      setError('An error occurred while generating content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [idea, tone]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <LogoIcon />
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              Social Sphere
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            AI-Powered Content Generation for a Multi-Platform World
          </p>
        </header>

        <main>
          <InputSection
            idea={idea}
            setIdea={setIdea}
            tone={tone}
            setTone={setTone}
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />
          
          {error && (
            <div className="mt-6 text-center bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg" role="alert">
              <p>{error}</p>
            </div>
          )}

          <ResultsSection isLoading={isLoading} results={results} />
        </main>
      </div>
    </div>
  );
};

export default App;