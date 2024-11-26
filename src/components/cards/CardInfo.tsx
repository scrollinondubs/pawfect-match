import React from 'react';
import { DogProfile } from '../../types';
import { MapPin, Activity } from 'lucide-react';

interface CardInfoProps {
  profile: DogProfile;
}

export const CardInfo: React.FC<CardInfoProps> = ({ profile }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-3xl font-bold mb-2">{profile.name}</h3>
      <div className="space-y-2">
        <p className="text-lg">
          {profile.age} years • {profile.breed}
        </p>
        {profile.bio && (
          <p className="text-sm text-white/90 line-clamp-2">{profile.bio}</p>
        )}
        <div className="flex items-center gap-4 text-sm text-white/80">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>2 miles away</span>
          </div>
          <div className="flex items-center gap-1">
            <Activity className="w-4 h-4" />
            <span>Activity Level {profile.activityLevel}/5</span>
          </div>
        </div>
      </div>
    </div>
  );
};