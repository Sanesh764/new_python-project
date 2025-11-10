
import type { Tone, PlatformConfig } from './types';
import { LinkedInIcon, TwitterIcon, InstagramIcon } from './components/icons';

export const TONES: Tone[] = ['Professional', 'Witty', 'Urgent', 'Casual', 'Inspirational'];

export const PLATFORMS: PlatformConfig[] = [
  {
    name: 'LinkedIn',
    aspectRatio: '4:3',
    logo: LinkedInIcon,
    color: 'border-sky-500'
  },
  {
    name: 'Twitter/X',
    aspectRatio: '16:9',
    logo: TwitterIcon,
    color: 'border-gray-400'
  },
  {
    name: 'Instagram',
    aspectRatio: '1:1',
    logo: InstagramIcon,
    color: 'border-pink-500'
  }
];
