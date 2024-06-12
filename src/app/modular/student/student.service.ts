import { IStudent } from "./student.Interface";
import { Student } from "./student.model";

const createStudent = async (student: IStudent) => {
  const result = await Student.create(student);
  return result;
};
const getAllStudent = async () => {
  const result = await Student.find();
  return result;
};

export const StudentService = {
  createStudent,
  getAllStudent,
};
