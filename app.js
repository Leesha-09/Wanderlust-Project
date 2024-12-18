const express=require("express");
const app= express();
const mongoose= require("mongoose");
const Listing= require("./models/listing.js");

// for database
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("connected to DB");
}).catch((error)=>{
    console.log(error );
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});
app.get("/",(req,res)=>{
    res.send("working");
});
app.get("/testListing",async (req,res)=>{
    let sampleListing =new Listing ({
        title:"hjbds",
        description:"hjdf",
        price: 56798,
        location: "String",
        country: "String",
    });
    await sampleListing.save();
    console.log("sample was saved ");
    res.send("successfull testing ");
});