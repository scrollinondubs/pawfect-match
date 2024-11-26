export interface DogProfile {
  id: string;
  name: string;
  age: number;
  breed: string;
  bio?: string;
  photos: Photo[];
  location: {
    lat: number;
    lng: number;
  };
  activityLevel: number;
  verified: boolean;
}

export interface Photo {
  id: string;
  url: string;
  isPrimary: boolean;
  orderIndex: number;
}

export interface Match {
  id: string;
  profile: DogProfile;
  matchedAt: string;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  mediaUrl?: string;
  sentAt: string;
  readAt?: string;
}