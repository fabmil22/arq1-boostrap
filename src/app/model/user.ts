
enum Genders {
  male = 'male',
  // tslint:disable-next-line:quotemark
  female = 'female'
}

export class User {
  id: string | number;
  index: number;
  guid: string;
  isActive = false;
  picture: string;
  age: number;
  name: string;
  gender: Genders;
  company: string;
  email: string;
  phone: string;
}