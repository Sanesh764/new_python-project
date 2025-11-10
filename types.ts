
import React from 'react';

export type Tone = 'Professional' | 'Witty' | 'Urgent' | 'Casual' | 'Inspirational';

export type AspectRatio = '1:1' | '16:9' | '4:3' | '3:4' | '4:5' | '9:16';

export interface PlatformConfig {
  name: 'LinkedIn' | 'Twitter/X' | 'Instagram';
  aspectRatio: AspectRatio;
  logo: React.FC<{ className?: string }>;
  color: string;
}

export interface PostResult {
  platform: PlatformConfig['name'];
  text: string;
  imageUrl: string;
}