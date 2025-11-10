
import React from 'react';
import type { PostResult } from '../types';
import { PLATFORMS } from '../constants';
import PlatformCard from './PlatformCard';

interface ResultsSectionProps {
  isLoading: boolean;
  results: PostResult[] | null;
}

const LoadingSkeleton: React.FC = () => {
    return (
        <div className="animate-pulse bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
            <div className="p-4 flex items-center gap-3 border-b border-gray-700">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="h-6 bg-gray-700 rounded w-1/3"></div>
            </div>
            <div className="p-4 space-y-4">
                <div className="aspect-video bg-gray-700 rounded-lg"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
            </div>
        </div>
    );
};

const ResultsSection: React.FC<ResultsSectionProps> = ({ isLoading, results }) => {
  if (isLoading) {
    return (
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    );
  }

  if (!results) {
    return null;
  }

  return (
    <div className="mt-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Your Content is Ready!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PLATFORMS.map((platform) => {
                const result = results.find(r => r.platform === platform.name);
                if (!result) return null;
                return <PlatformCard key={platform.name} result={result} platformConfig={platform} />;
            })}
        </div>
    </div>
  );
};

export default ResultsSection;
