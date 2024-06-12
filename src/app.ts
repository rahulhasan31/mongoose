import express, { Request, Response } from "express";
import cors from "cors";
import { StudentRouter } from "./app/modular/student/student.route";
const app = express();

//persar
app.use(express.json());
app.use(cors());
app.use("/api/v1/students", StudentRouter);

export default app;
