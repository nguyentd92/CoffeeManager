export class UserEntity {
  _id: string;
  lastName?: string;
  firstName: string;
  gender: 'Mr' | 'Mrs' | 'Ms';
  cellPhone: string;
  email?: string;
  joinDate?: Date; // Customer joint date
  lastMeet?: Date; // Customer last meet
  point: number = 0; // Customer Point
  age?: number;
}
