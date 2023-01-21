import express from "express";
import user from "./user.js";
import waterhabit from "./waterhabit.js";
import sleephabit from "./sleephabit.js";
import breakhabit from "./breakhabit.js";

const router = express.Router();

router.use("/user", user);
router.use("/waterhabit", waterhabit);
router.use("/sleephabit", sleephabit);
router.use("/breakhabit", breakhabit);

export default router;