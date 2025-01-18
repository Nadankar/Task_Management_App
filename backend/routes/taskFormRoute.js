const express =require("express")
const router =express.Router();

const {createTask,getTasks,updateTask,deleteTask}=require("../controller/taskFormController.js");

router.post("/task",createTask);
router.get("/task",getTasks);
router.put("/task/:id",updateTask);
router.delete("/task/:id",deleteTask);

module.exports=router;