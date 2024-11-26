import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DogProfile } from '../../types';
import { SwipeCard } from './SwipeCard';
import { EmptyState } from '../ui/EmptyState';

interface CardStackProps {
  profiles: DogProfile[];
  onSwipe: (profileId: string, direction: 'left' | 'right') => void;
}

export const CardStack: React.FC<CardStackProps> = ({ profiles, onSwipe }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentIndex < profiles.length) {
      onSwipe(profiles[currentIndex].id, direction);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (!profiles?.length) {
    return <EmptyState />;
  }

  if (currentIndex >= profiles.length) {
    return <EmptyState type="no-more-profiles" />;
  }

  return (
    <div className="relative h-[600px] w-full max-w-sm mx-auto">
      <AnimatePresence>
        {profiles.slice(currentIndex, currentIndex + 2).map((profile, index) => (
          <SwipeCard
            key={profile.id}
            profile={profile}
            onSwipe={handleSwipe}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};