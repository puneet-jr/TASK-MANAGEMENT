const asynchandler = require("express-async-handler");
const tasks = require("../model/task_models");

const get_task = asynchandler(async (req, res) => {
    let users;
    try {
        users = await tasks.find({ username: req.query.username });
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json(users);
});

const post_task = asynchandler(async (req, res) => {
    const { username, usertask } = req.body;

    let existuser;
    try {
        existuser = await tasks.findOne({ username, usertask });
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
    if (existuser) {
        return res.status(400).send({ message: "User already exists" });
    }

    const output = new tasks({
        username,
        usertask, // Corrected this line to use usertask directly
    });

    try {
        await output.save();
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }

    return res.status(200).json({ output });
});

const push_task=asynchandler(async(req,res)=>{

    const {username,usertask}=req.body;
    let existuser;
    try {
        existuser = await tasks.findOne
        ({ username: username });
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
    if (!existuser) {
        return res.status(400).send({ message: "User does not exists" });
    }
    try {
        await tasks.updateOne({ username: username }, { $push: { usertask: usertask } });
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
    return res.status(200).json({ message: "Task added successfully" });
    

});



module.exports = { get_task, post_task,push_task };