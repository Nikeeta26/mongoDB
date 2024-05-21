const mongoose = require('mongoose');
main().then((result)=>{
    console.log("connection successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema =  new mongoose.Schema({
title:{
   type: String,
   required:true,
   maxLength:50
},
author:{
   type :  String
},
price:{
   type: Number,
   min:[10,"Please enter the valid value"],
},
discount:{
    type:Number,
    default:0,
},
category:{
    type:String,
    enum:["fiction","non-fiction"]
},
genre:[String],
});

const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate('664c97285d9fcfee25aee15e',{price:-878},{runValidators:true}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error.errors.price.properties.message);
})

// const book1 = new Book({
//     title:"Gone girl",
//     author:"RD sharma",
//     price:667,
//     category:"fiction",
//     genre:["comics","Superheros","fiction"]
// });
// book1.save().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
