// types/student.ts
export interface Student {
  "Full Name": string;
  department: string;
  ugr_id: string;
  [key: string]: any; // if other dynamic fields exist
}
