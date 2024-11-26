import React, { useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { DogProfile } from '../../types';
import { Heart, X, MapPin, Activity } from 'lucide-react';
import { CardInfo } from './CardInfo';

interface SwipeCardProps {
  profile: DogProfile;
  onSwipe: (direction: 'left' | 'right') => void;
  index: number;
}

export const SwipeCard: React.FC<SwipeCardProps> = ({ profile, onSwipe, index }) => {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    if (Math.abs(info.offset.x) > threshold) {
      setExitX(info.offset.x > 0 ? 200 : -200);
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity,
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ x: exitX }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className={`cursor-grab active:cursor-grabbing ${index === 0 ? 'z-20' : 'z-10'}`}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white">
        <div className="absolute inset-0">
          <img
            src={profile.photos[0]?.url}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />

        <CardInfo profile={profile} />

        <div className="absolute top-4 right-4 flex gap-2">
          {profile.verified && (
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              Verified
            </span>
          )}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6">
          <button
            onClick={() => onSwipe('left')}
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-red-500/20 transition-colors shadow-lg"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={() => onSwipe('right')}
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-green-500/20 transition-colors shadow-lg"
          >
            <Heart className="w-8 h-8" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};