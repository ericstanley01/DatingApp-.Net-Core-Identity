import { Photo } from './photo';

export interface User {
  result: User;
  kn: string;
  id: number;
  username: string;
  knownAs: string;
  age: string;
  gender: string;
  createdOn: string;
  lastActive: string;
  photoUrl: string;
  city: string;
  country: string;
  isLikedByMe: boolean;
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}
