const Form =require("../model/taskFormModel.js")

//create new task
const createTask=async(req,res)=>{
    try {
        const {title,description,status }=req.body;

        if(!title || !description){
            res.status(400).json({error:"Title and description are required"})
        }

        const newTask=await Form.create({title,description,status:status || "To Do"});
        res.status(200).json(newTask);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    
}

//Get All task
const getTasks=async(req,res)=>{
    try {
        const tasks=await Form.find();
        res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json({error:error.message});
    }

}
 

//update task
const updateTask=async(req,res)=>{
   
    try {
        const {id}=req.params;
        const {title,description,status}=req.body;

        const updatedTask=await Form.findByIdAndUpdate(
            id,
            {title,description,status},
            {new:true,runValidators:true}
        );
        if(!updatedTask){
            res.status(404).json({error:"Task not found"});
        }
        res.status(200).json(updatedTask)

    } catch (error) {
        res.status(500).json({error:error.message})
    }

}


//delete task

const deleteTask=async(req,res)=>{
    try {
        const {id}=req.params;
        console.log('Deleting task with ID:', id); 

        const deletedTask=await Form.findByIdAndDelete(id);

        if(!deletedTask){
            res.status(404).json({error:"Task not found"})
        }
        
        res.status(200).json({message:"Task deleted successfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={
    createTask,getTasks,updateTask,deleteTask
}