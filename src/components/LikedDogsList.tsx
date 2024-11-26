import React from 'react';
import { useLikedDogsStore } from '../store/useLikedDogsStore';
import { X } from 'lucide-react';

export const LikedDogsList: React.FC = () => {
  const { likedDogs, removeLikedDog } = useLikedDogsStore();

  if (likedDogs.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-8 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 mx-auto max-w-md translate-y-[calc(100%+2rem)] hover:translate-y-0 transition-transform duration-300 z-50">
      <div className="absolute -top-7 left-0 right-0 flex justify-center">
        <div className="bg-white/95 backdrop-blur-sm px-4 py-1 rounded-t-lg shadow-lg">
          <h3 className="text-sm font-medium text-gray-700">
            {likedDogs.length} Liked {likedDogs.length === 1 ? 'Dog' : 'Dogs'}
          </h3>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {likedDogs.map((dog, index) => (
          <div 
            key={`liked-${dog.id}-${index}`} 
            className="relative flex-shrink-0 mt-8"
          >
            <img
              src={dog.photos[0]?.url}
              alt={dog.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
            />
            <button
              onClick={() => removeLikedDog(dog.id)}
              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
              {dog.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};