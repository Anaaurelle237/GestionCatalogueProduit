const express= require("express");
const mongoose= require("mongoose");
const app= express('.\insertion');

const url='mongodb+srv://aurelle237:Unchangeable1,@moncatalogue.ylztqf6.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
    try{
        await mongoose. connect(url);
        console.log("Connected to Mongoose");
    }catch(error){
        console.error(error);
    }
}
connect(); 

app.listen(8000,()=>{
console.log("Server started on port 8000")
});