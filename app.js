const express= require('express');

const app= express();

const connectdb= require("./dbconnection");

const router= require("./routes/routes");
app.use(express.json());

connectdb();
app.use("/response",(req,res)=>{
    "Running good";
});

app.use("/myrouter",router);

const port =5000;

app.listen(port, () => {
    console.log(`Successfully running on port ${port}`);
});
