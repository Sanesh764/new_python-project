
import React from 'react';

export const LogoIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-500">
    <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'rgb(167, 139, 250)', stopOpacity:1}} />
        <stop offset="100%" style={{stopColor: 'rgb(99, 102, 241)', stopOpacity:1}} />
        </linearGradient>
    </defs>
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12M12 22V12M22 7L12 12M17 4.5L7 9.5" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2v10l10-5-10-5z" fill="rgba(139, 92, 246, 0.3)"/>
    <path d="M12 12v10l10-5-10-5z" fill="rgba(99, 102, 241, 0.3)"/>
    <path d="M12 12v10L2 17l10-5z" fill="rgba(99, 102, 241, 0.4)"/>
    <path d="M12 2v10L2 7l10-5z" fill="rgba(139, 92, 246, 0.4)"/>
  </svg>
);

export const LinkedInIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const TwitterIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
        <path d="M9.29.255a7.48 7.48 0 0 1 2.24 1.255 7.48 7.48 0 0 1 1.26 2.24L16 6.33l-2.07 1.28-2.67 1.64 2.67 1.64L16 12.52l-3.23-2.58-1.26-2.24a7.48 7.48 0 0 1-2.24-1.255 7.48 7.48 0 0 1-1.26-2.24L4.77 1.65l2.07 1.28 2.67 1.64L6.84 3.03 4.77 1.65 6.33 0l2.58 3.23.38.38 2.24 1.26a7.48 7.48 0 0 1 1.255 2.24 7.48 7.48 0 0 1-1.255 2.24L9.29 15.6l-2.58-3.23-.38-.38-2.24-1.26a7.48 7.48 0 0 1-1.255-2.24A7.48 7.48 0 0 1 4.09 6.2L6.84 4.57 0 6.33l3.23 2.58L6.2 12.75a7.48 7.48 0 0 1 2.24 1.255 7.48 7.48 0 0 1 2.24-1.255L12.75 9.8l3.23-2.58-2.58-3.23-.38-.38-1.26-2.24A7.48 7.48 0 0 1 9.29.255Z"/>
    </svg>
);

export const InstagramIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const CopyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
);

export const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export const DownloadIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);
