import express from "express";
import { publicRouter } from "../routes/public-api";
import { errorMiddlware } from "../middleware/error-middleware";

export const web = express()

web.use(express.json())

web.use(publicRouter);
web.use(errorMiddlware);