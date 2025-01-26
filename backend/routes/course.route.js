import express from "express";
import {buyCourses, courseDetails, createCourse, deleteCourse, getCourses, updateCourse } from "../controllers/course.controller.js";
import userMidddleware from "../middleware/user.mid.js";
import adminMidddleware from "../middleware/admin.mid.js";

const router = express.Router();


router.post("/create",adminMidddleware,createCourse);
router.put("/update/:courseId",adminMidddleware,updateCourse);
router.delete("/delete/:courseId",adminMidddleware,deleteCourse);

router.get("/courses",getCourses);
router.get("/:courseId",courseDetails);

router.post("/buy/:courseId",userMidddleware,buyCourses);

export default router;