import React from 'react';
import { DogIcon, SearchX } from 'lucide-react';

interface EmptyStateProps {
  type?: 'loading' | 'no-profiles' | 'no-more-profiles';
}

export const EmptyState: React.FC<EmptyStateProps> = ({ type = 'no-profiles' }) => {
  const content = {
    loading: {
      icon: DogIcon,
      title: 'Loading profiles...',
      description: 'Finding pawfect matches for you',
    },
    'no-profiles': {
      icon: SearchX,
      title: 'No profiles found',
      description: 'Try adjusting your search preferences',
    },
    'no-more-profiles': {
      icon: DogIcon,
      title: "That's all for now!",
      description: 'Check back later for more potential matches',
    },
  }[type];

  const Icon = content.icon;

  return (
    <div className="h-[600px] w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center">
      <Icon className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {content.title}
      </h3>
      <p className="text-gray-500">{content.description}</p>
    </div>
  );
};