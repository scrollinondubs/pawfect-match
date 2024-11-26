import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DogProfile } from '../types';

interface LikedDogsState {
  likedDogs: DogProfile[];
  addLikedDog: (dog: DogProfile) => void;
  removeLikedDog: (dogId: string) => void;
}

export const useLikedDogsStore = create<LikedDogsState>()(
  persist(
    (set) => ({
      likedDogs: [],
      addLikedDog: (dog) =>
        set((state) => ({
          likedDogs: [...state.likedDogs, dog],
        })),
      removeLikedDog: (dogId) =>
        set((state) => ({
          likedDogs: state.likedDogs.filter((dog) => dog.id !== dogId),
        })),
    }),
    {
      name: 'liked-dogs-storage',
    }
  )
);