const mongoose= require("mongoose");

const schema= mongoose.Schema({
    username:
    {
        type:String,
        unique:true
    },

    usertask:{
        type:String,

    },
});

module.exports= mongoose.model("tasks",schema);