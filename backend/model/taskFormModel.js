const  mongoose = require("mongoose");

const formSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["To Do","In Progress","Done"],
        default:"To Do"
    }
});

const Form=mongoose.model("Form",formSchema);

module.exports=Form;