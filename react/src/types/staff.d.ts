export interface Staff {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateStaff {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

// types/staff.ts

export interface IUpdateStaff {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}
