import { Schema, model, connect } from "mongoose";
import { IStudent } from "./student.Interface";
import validator from "validator";
const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    unique: true,
    trim: true,
  },
  name: {
    firstName: {
      type: String,
      trim: true,
      validate: {
        validator: (value: string) => validator.isAlpha(value),
        message: "{VALUE} is not vaild",
      },
    },
    lastName: {
      type: String,
      trim: true,
    },
  },
  gender: {
    type: String,
    trim: true,
    enum: {
      values: ["male", "female", "others"],
      message:
        "the gender field can only be follwing : 'male', 'female' or 'Others'",
    },
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
  number: {
    type: Number,
    required: true,
    trim: true,
  },
  bloodGroup: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} is not email type",
    },
  },
  avatar: {
    type: String,
    trim: true,
  },
});

// 3. Create a Model.
export const Student = model<IStudent>("Student", studentSchema);
