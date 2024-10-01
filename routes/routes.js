const express= require("express");

const {get_task,post_task,push_task}= require("../controller/controller");
const router= express.Router();

router.get("/get-task",get_task);

router.post("/post-task",post_task);

router.put("/push-task",push_task);


module.exports= router;