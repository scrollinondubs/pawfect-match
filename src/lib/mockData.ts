import { DogProfile } from '../types';

export const mockProfiles: DogProfile[] = [
  {
    id: '1',
    name: 'Max',
    age: 3,
    breed: 'Golden Retriever',
    bio: 'Friendly and energetic pup looking for playmates! Love swimming and playing fetch.',
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&q=80',
        isPrimary: true,
        orderIndex: 0
      }
    ],
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    activityLevel: 4,
    verified: true
  },
  {
    id: '2',
    name: 'Luna',
    age: 2,
    breed: 'Husky',
    bio: 'Adventure seeker with lots of energy! Looking for an active companion.',
    photos: [
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?auto=format&fit=crop&q=80',
        isPrimary: true,
        orderIndex: 0
      }
    ],
    location: {
      lat: 40.7282,
      lng: -73.9942
    },
    activityLevel: 5,
    verified: true
  },
  {
    id: '3',
    name: 'Charlie',
    age: 4,
    breed: 'French Bulldog',
    bio: 'Laid-back cuddle expert seeking a cozy companion for Netflix marathons.',
    photos: [
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80',
        isPrimary: true,
        orderIndex: 0
      }
    ],
    location: {
      lat: 40.7589,
      lng: -73.9851
    },
    activityLevel: 2,
    verified: false
  }
];