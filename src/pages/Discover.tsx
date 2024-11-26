import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { CardStack } from '../components/cards/CardStack';
import { LikedDogsList } from '../components/LikedDogsList';
import { profilesApi, matchesApi } from '../lib/api';
import { DogProfile } from '../types';
import { Dog } from 'lucide-react';
import { useLikedDogsStore } from '../store/useLikedDogsStore';

export const DiscoverPage: React.FC = () => {
  const { data: profiles, refetch, isLoading } = useQuery<DogProfile[]>({
    queryKey: ['discover'],
    queryFn: () => profilesApi.discover().then((res) => res.data),
  });

  const addLikedDog = useLikedDogsStore((state) => state.addLikedDog);

  const swipeMutation = useMutation({
    mutationFn: ({ profileId, direction }: { profileId: string; direction: 'left' | 'right' }) =>
      matchesApi.createSwipe(profileId, direction),
    onSuccess: () => refetch(),
  });

  const handleSwipe = (profileId: string, direction: 'left' | 'right') => {
    if (direction === 'right' && profiles) {
      const likedProfile = profiles.find(p => p.id === profileId);
      if (likedProfile) {
        addLikedDog(likedProfile);
      }
    }
    swipeMutation.mutate({ profileId, direction });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4">
      <div className="max-w-md mx-auto pt-4">
        <div className="flex items-center justify-center mb-8">
          <Dog className="w-8 h-8 text-purple-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Pawfect Match</h1>
        </div>
        
        <CardStack
          profiles={profiles || []}
          onSwipe={handleSwipe}
        />
        
        <LikedDogsList />
      </div>
    </div>
  );
};