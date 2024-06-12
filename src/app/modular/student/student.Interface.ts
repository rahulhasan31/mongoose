export interface IStudent {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female" | "others";
  address: string;
  number: number;
  bloodGroup?: string;
  email: string;
  avatar?: string;
}
