const express = require("express")
const app = express()
const mongoose = require("mongoose")
const schema = require('./schema')
const url = "mongodb+srv://Yashwant17:Basnett17@cluster0.fieph.mongodb.net/Database1?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>
    console.log("Connected to DB"))
    app.use(express.json())

    app.post('/add-new-post', async (req,res)=>{
        const myName = req.body.Name;
        const myRegNo = req.body.RegNo;
        const myMarks = req.body.Marks;
        try{
            const newData = new schema(
                {
                    Name: myName,
                    RegNo: myRegNo,
                    Marks: myMarks
                }
            )
            
            const saveData = await newData.save()
        }catch(err){
            console.log(err);
            res.json(err);
        }
    })
    
    app.use("/",(req,res)=>{
        res.send("Server is Working")
    })
    
    app.listen(3000,()=>{
        console.log("Express is Working");
    })