import React from 'react';
import { motion, PanInfo } from 'framer-motion';
import { DogProfile } from '../../types';
import { Heart, X } from 'lucide-react';

interface DogCardProps {
  profile: DogProfile;
  onSwipe: (direction: 'left' | 'right') => void;
}

export const DogCard: React.FC<DogCardProps> = ({ profile, onSwipe }) => {
  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    if (Math.abs(info.offset.x) > threshold) {
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-white"
    >
      <img
        src={profile.photos[0]?.url}
        alt={profile.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
        <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
        <p className="text-white/90">
          {profile.age} years • {profile.breed}
        </p>
      </div>
      
      <div className="absolute top-4 right-4">
        {profile.verified && (
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
            Verified
          </span>
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          onClick={() => onSwipe('left')}
          className="p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-red-500/20 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <button
          onClick={() => onSwipe('right')}
          className="p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-green-500/20 transition-colors"
        >
          <Heart className="w-8 h-8" />
        </button>
      </div>
    </motion.div>
  );
};