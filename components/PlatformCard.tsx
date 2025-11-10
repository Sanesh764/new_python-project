
import React, { useState } from 'react';
import type { PostResult, PlatformConfig } from '../types';
import { CopyIcon, CheckIcon, DownloadIcon } from './icons';

interface PlatformCardProps {
  result: PostResult;
  platformConfig: PlatformConfig;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ result, platformConfig }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = result.imageUrl;
    link.download = `${result.platform.toLowerCase().replace('/','-')}-image.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { logo: Logo, color, name } = platformConfig;

  return (
    <div className={`bg-gray-800/70 rounded-2xl overflow-hidden shadow-2xl border ${color} flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-3">
            <Logo className="w-7 h-7" />
            <h3 className="text-xl font-bold text-gray-200">{name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleCopy} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Copy Text">
            {isCopied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <CopyIcon className="w-5 h-5 text-gray-400" />}
          </button>
          <button onClick={handleDownload} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Download Image">
            <DownloadIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col gap-4">
        <div className="w-full">
            <img src={result.imageUrl} alt={`Generated for ${name}`} className="rounded-lg object-cover w-full" />
        </div>
        <p className="text-gray-300 whitespace-pre-wrap text-sm flex-grow">
          {result.text}
        </p>
      </div>
    </div>
  );
};

export default PlatformCard;
