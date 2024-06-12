import { NextFunction, Request, Response } from "express";
import { StudentService } from "./student.service";
// import { studentSchema } from "./student.validation";
import { z } from "zod";
import { studentSchema } from "./student.validation";
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const student = req.body;
    const studentValidationZod = studentSchema.parse(student);
    console.log(studentValidationZod);

    // if (studentValidationZod.e) {
    //   res.status(500).json({
    //     success: false,
    //     message: "Error khaise",
    //     error: error.details,
    //   });
    // }
    const result = await StudentService.createStudent(studentValidationZod);
    res.status(200).json({
      success: true,
      message: "student create successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error khaise",
      data: err,
    });
  }
};
const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentService.getAllStudent();
    res.status(200).json({
      success: true,
      message: "Get All student  successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error khaise",
      data: err,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
};
